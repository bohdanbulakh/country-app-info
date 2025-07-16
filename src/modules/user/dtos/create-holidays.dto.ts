import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateHolidaysDto {
  @IsNotEmpty({ message: 'Country code cannot be empty' })
  @IsString({ message: 'Country code must be a string' })
    countryCode: string;

  @IsNotEmpty({ message: 'Year cannot be empty' })
  @IsNumber(undefined, { message: 'Year must be a number' })
    year: number;

  @IsNotEmpty({ message: 'Holidays cannot be empty' })
  @IsString({ message: 'Holidays must be an array of string', each: true })
    holidays: string[];
}
