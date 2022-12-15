import { ResultadoAvaliacao } from './resultadoAvalicao';
import { InformacoesFisicas } from './InformacoesFisicas';

export interface AvaliacaoDTO {
  id?: any,
  paciente: '',
  profissional: '',
  informacoesFisicas: InformacoesFisicas,
  resultadoAvaliacao: ResultadoAvaliacao,
}