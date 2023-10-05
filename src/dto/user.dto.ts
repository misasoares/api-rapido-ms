export interface CreateUserDto {
  name: string;
  phone: string;
  address: string;
  cpf: string;
  password: string | null;
}
