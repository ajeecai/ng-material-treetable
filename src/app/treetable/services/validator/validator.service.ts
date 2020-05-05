import { Injectable } from '@angular/core';
import { Node } from '../../models';
import { isEmpty, xor } from 'lodash-es';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  validateCustomOrder<T, K extends Node<T>>(node: K, customColumnOrder: Array<keyof T> & string[]): { valid: boolean, xor: string[] } {
    const xorN = xor(Object.keys(node.value), customColumnOrder);
    return {
      valid: isEmpty(xorN),
      xor: xorN
    };
  }

  validateCustomIcon<T, K extends Node<T>>(node: K, customColumnIcon: Array<keyof T> & string[]): { valid: boolean, xor: string[] } {
    // check it as you like
    return {
      valid: true,
      xor:[]
    }
  }

  validateCustomCheckBox<T, K extends Node<T>>(node: K, customColumnCheckBox: Array<keyof T> & string[]): { valid: boolean, xor: string[] } {
    // check it as you like
    return {
      valid: true,
      xor:[]
    }
  }
}
