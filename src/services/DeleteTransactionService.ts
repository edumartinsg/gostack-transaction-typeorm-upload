import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import TransactionRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    // TODO

    const transactionsRepository = getCustomRepository(TransactionRepository);

    const transactionToDelete = await transactionsRepository.findOne(id);
    if (!transactionToDelete) {
      throw new AppError('This transaction does not exist');
    }
    await transactionsRepository.remove(transactionToDelete);
  }
}

export default DeleteTransactionService;
