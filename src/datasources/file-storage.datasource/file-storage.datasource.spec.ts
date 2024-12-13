import { Test, TestingModule } from '@nestjs/testing';
import { FileStorageDatasource } from './file-storage.datasource';

describe('FileStorageDatasource', () => {
  let provider: FileStorageDatasource;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FileStorageDatasource],
    }).compile();

    provider = module.get<FileStorageDatasource>(FileStorageDatasource);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
