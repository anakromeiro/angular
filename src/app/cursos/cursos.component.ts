import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  nomePortal: string;
  cursos: string[];

  constructor(private cursosService: CursosService) { //é possível adicionar os modificadores de acesso neste ponto. 
    // var service = new CursosService(); - Esse passo será feito através de injeção de dependência (usando o decorator @Injectable)
    this.nomePortal = 'www.google.com.br'    
    this.cursos = this.cursosService.getCursos();
  }

  ngOnInit() {
  }

}
