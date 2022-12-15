import { Contato } from './contato';
import { Endereco } from './cndereco';

export interface Colaborador {
  id?: any,
  nome: String,
  cpf: String,
  rg: String,
  sexo: any,
  dataNascimento: String,
  contato: Contato,
  endereco: Endereco,
}