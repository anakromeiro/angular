import { Injectable } from '@angular/core';

@Injectable() //decorator
export class CursosService {

  constructor() { }

  getCursos(){
    return ['Java', 'Angular', 'React', 'MongoDB'];
  }

}
