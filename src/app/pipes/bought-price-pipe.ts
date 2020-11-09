import {Pipe, PipeTransform} from '@angular/core';

@Pipe ({name: 'boughtFor'})
export class BoughtForPipe implements PipeTransform {
    transform(value: any, ...args: any[]) {
        if (value === '-') {
            return 'Free';
        }else{
            return '$' + value;
        }
    }
}