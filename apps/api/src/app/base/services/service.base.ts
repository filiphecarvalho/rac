import { Injectable, Type as ClassType } from '@nestjs/common';
import { FindManyOptions, Repository } from 'typeorm';
import { CreateDto } from '../dtos/create-base.dto';
import { UpdateDto } from '../dtos/update-base.dto';
import { ObjetoBase } from '../entities/base.entity';
import { BadRequestException } from '../exceptions/base.exceptions';

@Injectable()
export abstract class ServicoBase<Entity extends ObjetoBase> {
  constructor(
    private repo: Repository<Entity>
  ) {}

  public name: string;

  protected get entityType(): ClassType<Entity> {
    return this.repo.target as ClassType<Entity>;
  }

  async findByCodigo(codigo: any): Promise<Entity> {
    try {
      let query = this.repo
      .createQueryBuilder('findByCodigo')
      .andWhere('findByCodigo.codigo = :codigo', { codigo: codigo });
      
      return await query.getOne();
    } catch (error) {
      throw new BadRequestException(`${this.name} não encontrados!`);
    }
  }

  async findAll(options?: FindManyOptions<Entity>): Promise<Entity[]> {
    try {
        return await this.repo.find(options);
    } catch (error) {
      throw new BadRequestException(`${this.name} não encontrados!`);
    }
  }

  async findOne(id: any): Promise<Entity> {
    try {
      return await this.repo.findOneOrFail({where: {id: id}});
    } catch (error) {
      throw new BadRequestException(`${this.name} não encontrado!`);
    }
  }


  async create(body: CreateDto): Promise<Entity> {
    try {
      const entity = Object.assign(new this.entityType(), {
        ...body
      });

      const result: any = await this.repo.save(entity);      
      
      return await this.repo.findOneOrFail({where: {id: result.id}});
    } catch (error) {
      throw new BadRequestException(`Erro ao cadastrar ${this.name}! Error: ${error}`);
    }
  }

  async update(
    id: any,
    body: UpdateDto
  ): Promise<{ result: Entity; message: string }> {
    try {
      const entity = await this.repo.findOneOrFail({where: {id: id}});
      Object.assign(entity, body);
      const result = await this.repo.save(entity);
      return { result, message: `${this.name} atualizado com sucesso!` };
    } catch (error) {
      throw new BadRequestException(`Erro ao atualizar ${this.name.toLowerCase()}!`);
    }
  }

  async delete(id: any): Promise<{ message: string }> {
    try {
      const deleteResult = await this.repo.delete({id: id});

      if (!deleteResult.affected) {
        await this.repo.softDelete({id: id});
      }
      return { message: `${this.name} removido com sucesso!` };
    } catch (error) {
      throw new BadRequestException(`Erro ao remover ${this.name.toLowerCase()}!`);
    }
  }
}
