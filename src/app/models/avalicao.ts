import { Profissional } from './profissional';
import { ResultadoAvaliacao } from './resultadoAvalicao';
import { InformacoesFisicas } from './InformacoesFisicas';
import { Paciente } from './paciente';

export interface Avaliacao {
  id?: any,
  paciente: Paciente,
  profissional: Profissional,
  informacoesFisicas: InformacoesFisicas,
  resultadoAvaliacao: ResultadoAvaliacao,
}