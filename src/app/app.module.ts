//Prepara a aplicação para ser executada no browser
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './first-component/first.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { CursosComponent } from './cursos/cursos.component';
import { DoMathModule } from './do-math/do-math.module';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponentComponent,
    CursosComponent
  ],
  imports: [
    BrowserModule,
    DoMathModule
  ],
  //Aqui dentro ficam os serviços
  providers: [],
  //Somente no módulo raiz. É o componente que será instanciado
  bootstrap: [AppComponent]
})
export class AppModule { }