import { ApiProperty } from '@nestjs/swagger';

export class CarsRequestDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  secondName: string;

  @ApiProperty()
  year: string;

  @ApiProperty()
  price: string;
}