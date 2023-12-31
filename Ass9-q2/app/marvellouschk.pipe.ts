import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellouschk',
  standalone: true
})
export class MarvellouschkPipe implements PipeTransform {

  transform(value: number, checkType: string): string {
    let result = '';

    switch (checkType) {
      case 'prime':
        result = this.isPrime(value) ? 'Prime' : 'Not Prime';
        break;
      case 'perfect':
        result = this.isPerfect(value) ? 'Perfect' : 'Not Perfect';
        break;
      case 'even':
        result = this.isEven(value) ? 'Even' : 'Odd';
        break;
      case 'odd':
        result = this.isOdd(value) ? 'Odd' : 'Even';
        break;
      default:
        result = 'Invalid Check Type';
    }

    return result;
  }

  private isPrime(num: number): boolean {
    if (num <= 1) {
      return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }

    return true;
  }

  private isPerfect(num: number): boolean {
    let sum = 0;

    for (let i = 1; i < num; i++) {
      if (num % i === 0) {
        sum += i;
      }
    }

    return sum === num;
  }

  private isEven(num: number): boolean {
    return num % 2 === 0;
  }

  private isOdd(num: number): boolean {
    return num % 2 !== 0;
  }
}
