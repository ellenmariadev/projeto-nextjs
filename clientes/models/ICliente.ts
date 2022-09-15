export interface ICliente {
    id: number;
    nome: string;
    sobrenome: string;
    date: string;
    cpf: string;
    email: string;
    telefone: string;
    value: number;
  }

  export interface SaveClienteDto extends Omit<ICliente, 'id'> {
      id: any;
  }