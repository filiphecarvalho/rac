import { Module } from '@nestjs/common';
import { ReligiaoService } from './religiao.service';
import { ReligiaoController } from './religiao.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Religiao } from './entities/religiao.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Religiao])],
  controllers: [ReligiaoController],
  providers: [ReligiaoService],
  exports: [ReligiaoService]
})
export class ReligiaoModule {}
