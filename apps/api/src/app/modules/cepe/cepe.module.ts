import { Module } from '@nestjs/common';
import { CepeService } from './cepe.service';
import { CepeController } from './cepe.controller';
import { Cepe } from './entities/cepe.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Cepe])],
  controllers: [CepeController],
  providers: [CepeService],
  exports: [CepeService],
})
export class CepeModule {}
