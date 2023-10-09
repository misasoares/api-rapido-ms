export interface CreateUserDto {
  name: string;
  phone: string;
  email: string;
  address: string;
  cpf: string;
  password: string;
}

export interface UpdateUserDto {
  id: string;
  email?: string;
  password?: string;
  token?: string | null;
}
