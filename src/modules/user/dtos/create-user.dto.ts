import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'First name cannot be empty' })
  @IsString({ message: 'First name must be a string' })
    firstName: string;

  @IsString({ message: 'Last name must be a string' })
  @IsOptional()
    lastName?: string;
}
