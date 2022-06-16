import { Injectable } from '@nestjs/common';
import { CancelTransactionDto } from 'src/dto/cancel-transaction.dto';
import { PushBlockDto } from 'src/dto/push-block.dto';
import { CreateTransactionDto } from '../dto/transaction.dto';
import { BlockchainService } from './blockchain/blockchaim.service';

@Injectable()
export class ServerService {
  constructor(private blockChainService: BlockchainService) {}

  async getBalance(address: string) {
    return this.blockChainService.getBalance(address);
  }

  getFullChain() {
    return this.blockChainService.getFullChain();
  }

  getBlock(index: number) {
    return this.blockChainService.getBlock(index);
  }

  createUser() {
    return this.blockChainService.createUser();
  }

  getOwner() {
    return this.blockChainService.getOwner();
  }

  createTransaction(createTransaction: CreateTransactionDto) {
    return this.blockChainService.createTransaction(createTransaction);
  }

  cancelTransaction(cancelTransactionDto: CancelTransactionDto) {
    return this.blockChainService.cancelTransaction(cancelTransactionDto);
  }

  pushBlocks(pushBlockDto: PushBlockDto) {
    return this.blockChainService.pushBlocks(
      pushBlockDto.block,
      pushBlockDto.size,
      pushBlockDto.addressNode,
    );
  }
}
