import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CorreosEntity } from '../entity/correo.entity';

@Injectable()
export class CorreoRepository {
    constructor(
        @InjectRepository(CorreosEntity)
        private readonly correosRepository: Repository<CorreosEntity>,
    ) {}
    
    async create(correo: CorreosEntity): Promise<CorreosEntity> {
        return this.correosRepository.save(correo);
    }
   
}