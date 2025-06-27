import { Injectable } from '@nestjs/common';
import { CorreoRepository } from '../repository/correo.repository';

@Injectable()
export class EnvioCorreosService {

   constructor(
        private readonly tokenRepository: CorreoRepository,
    ) {}

    async enviarCorreo( asunto: string, mensaje: string, estado: string): Promise<any> {
        const correo = await this.tokenRepository.create({
            asunto,
            mensaje,
            estado,
 });
        if (!correo) return { success: false, message: 'Error al enviar el correo', data: null };
        return { success: true, message: 'Correo enviado correctamente', data: correo };
    }
    

}