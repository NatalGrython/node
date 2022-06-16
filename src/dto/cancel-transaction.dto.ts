import { PickType } from '@nestjs/mapped-types';
import { IsArray, IsString } from 'class-validator';
import { Address } from 'src/interfaces/address';

export class CancelTransactionDto {
  @IsString({ message: 'Должно быть строкой' })
  hash: string;

  @IsArray({ message: 'Должен быть массив' })
  readonly addresses: Address[];
}

export class CancelTransactionClientDto extends PickType(CancelTransactionDto, [
  'hash',
]) {}
