/*
    Pipes имеют два основных предназначения:
    1) преобразовывать входные данные (безопасность, разделение полномочий участков кода)
    2) валидация входных данных (и снова безопасность, пошли нахрен пенетраторы и иньекторы)
 */


import {ArgumentMetadata, Injectable, PipeTransform} from "@nestjs/common";
import {plainToClass} from "class-transformer";
import {validate } from "class-validator";
import {ValidationException} from "src/server/exceptions/validation.exception";

@Injectable()
export class ValidationPipe implements PipeTransform <any>{
    async transform(value: any, metadata: ArgumentMetadata): Promise<any>{
        const obj = plainToClass(metadata.metatype, value);
        const errors = await validate(obj); // достаем ошибки, полученные при валидации входных данных

        if(errors.length){
            console.log(errors);

            let messages = errors.map(err => {
                return `${err.property} - ${Object.values(err.constraints).join(', ')}`
            });
            throw new ValidationException(messages);
        }

        return value;
    }
    
}