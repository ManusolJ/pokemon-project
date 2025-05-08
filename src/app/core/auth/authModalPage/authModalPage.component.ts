import { NgClass } from '@angular/common';
import { Component, effect, inject, linkedSignal, signal } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthModalState } from '@interfaces/auth-modal-state.interface';
import { ModalService } from '@services/modal.service';
@Component({
  selector: 'app-auth-modal-page',
  imports: [NgClass, ReactiveFormsModule],
  templateUrl: './authModalPage.component.html',
})
export default class AuthModalPageComponent {
  modalService = inject(ModalService);
  fb = inject(FormBuilder);

  modalState = linkedSignal<AuthModalState>(() =>
    this.modalService.authModalState()
  );

  isPasswordVisible = signal(false);
  isConfirmPasswordVisible = signal(false);
  renderField = signal(false);

  form: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor() {
    effect(() => this.setupForm(this.modalState()));
  }

  //TODO: Implement Service
  onSubmit() {
    if (this.modalState() == 'login') {
      console.log('Login submitted succesfukky!');
      console.log(this.form?.value);
    } else {
      console.log('Registration submitted succefully!');
      console.log(this.form?.value);
    }
  }

  // Reset form fields on close
  closeAuthModal(modalState: AuthModalState) {
    this.modalService.modifyAuthModal(modalState);
    setTimeout(() => {
      if (this.form) {
        this.form.reset();
      }
      this.isPasswordVisible.set(false);
      this.isConfirmPasswordVisible.set(false);
    }, 250);
  }

  // Make password characters visible
  showPassword(isPasswordField: boolean) {
    isPasswordField
      ? this.isPasswordVisible.update((v) => !v)
      : this.isConfirmPasswordVisible.update((v) => !v);
  }

  setupForm(state: AuthModalState) {
    if (state === 'register' && !this.form.contains('confirmPassword')) {
      const confirmPassword = new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]);
      this.form.addControl('confirmPassword', confirmPassword);
      this.renderField.set(true);
    } else if (state == 'login' && this.form.contains('confirmPassword')) {
      this.form.removeControl('confirmPassword');

      this.renderField.set(false);
    }
  }

  changeModal() {
    if (this.modalState() == 'login') {
      this.modalService.modifyAuthModal('closed');
      setTimeout(() => {
        this.form.reset();
        this.modalService.modifyAuthModal('register');
      }, 500);
    } else if (this.modalState() == 'register') {
      this.modalService.modifyAuthModal('closed');
      setTimeout(() => {
        this.form.reset();
        this.modalService.modifyAuthModal('login');
      }, 500);
    }
  }
}
