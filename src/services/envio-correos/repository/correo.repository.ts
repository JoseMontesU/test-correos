import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Correos } from '../entity/correo.entity';

@Injectable()
export class CorreoRepository {
    constructor(
        @InjectRepository(Correos)
        private readonly correosRepository: Repository<Correos>,
    ) {}
    
    async create(correo: Correos): Promise<Correos> {
        return this.correosRepository.save(correo);
    }
   
}