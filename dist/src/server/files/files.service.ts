import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import * as path from 'path'
import * as fs from 'fs'
import * as uuid from 'uuid'


@Injectable()
export class FilesService {
    async createFile(fileName): Promise<string>{
        try {
            const fileName = uuid.v4() + '.jpg';
            return fileName;
        }
        catch (e) {
            throw new HttpException('Произошла ошибка при записи файла', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    };
}
