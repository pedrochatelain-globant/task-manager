import { Test, TestingModule } from '@nestjs/testing';
import { InMemoryDatasource } from './in-memory.datasource';

describe('InMemoryDatasource', () => {
  let provider: InMemoryDatasource;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InMemoryDatasource],
    }).compile();

    provider = module.get<InMemoryDatasource>(InMemoryDatasource);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
