import { NgClass } from '@angular/common';
import {
  Component,
  computed,
  effect,
  input,
  model,
  output,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-auth-modal-page',
  imports: [NgClass, ReactiveFormsModule],
  templateUrl: './authModalPage.component.html',
})
export class AuthModalPageComponent {
  modalState = model<boolean>();
  isRegisterModal = input(false);
  registerStatus = computed(() => this.isRegisterModal());
  changeModal = output<boolean>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  changeForm = effect(() => {
    if (this.isRegisterModal()) {
      const confirmPassword = new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]);
      this.form.addControl('confirmPassword', confirmPassword);
    }

    if (!this.isRegisterModal() && this.form.get('confirmPassword') !== null) {
      this.form.removeControl('confirmPassword');
    }
  });

  //TODO: Implement Service
  onSubmit() {
    if (!this.registerStatus()) {
      console.log('Login submitted succesfukky!');
      console.log(this.form?.value);
    } else {
      console.log('Registration submitted succefully!');
      console.log(this.form?.value);
    }
  }

  onClose(isChangeFromModal: boolean) {
    this.changeModal.emit(isChangeFromModal);
    setTimeout(() => {
      if (this.form) {
        this.form.reset();
      }
    }, 200);
  }
}
