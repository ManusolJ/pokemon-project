export default interface Pokemon {
  id: number;
  name: string;
  type_1: string;
  type_2?: string;
  nature: string;
  ability: string;
  height: number;
  weight: number;
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
  image_url: string;
  evolution_stage: number;
}
