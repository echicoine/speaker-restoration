import {Pipe, PipeTransform} from '@angular/core';

@Pipe ({name: 'soldFor'})
export class SoldForPipe implements PipeTransform {
    transform(value: any, ...args: any[]) {
        if (value === '-') {
            return 'Not sold';
        }else{
            return '$' + value;
        }
    }
}