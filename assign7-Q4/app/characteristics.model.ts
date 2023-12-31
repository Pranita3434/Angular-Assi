// src/app/characteristics.model.ts

export class Characteristics {
    text: string = 'marvellous infosystems';
  
    convertToUpperCase() {
      this.text = this.text.toUpperCase();
    }
  
    convertToLowerCase() {
      this.text = this.text.toLowerCase();
    }
  }
  