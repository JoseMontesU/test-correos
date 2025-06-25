import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('correos')
export class CorreosEntity{
    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ type: 'varchar', length: 100 })
    asunto: string;

    @Column({ type: 'varchar', length: 500 })
    mensaje: string;

    @Column({ type: 'varchar', length: 50 })
    estado : string;

    @CreateDateColumn({ name: 'fecha_envio', default: new Date() })
    fecha_envio?: Date;

    
}