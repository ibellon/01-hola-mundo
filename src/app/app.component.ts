import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { BodyComponent } from './components/body/body.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild(BodyComponent, null) bodyComponent: BodyComponent;

  mensajePadre = 'Mensaje para el componente hijo';

  mensajeHijo: string;

  nombre = 'Isidro';
  apellidos = 'Bellón Cano';

  procesaPropagar(mensaje: string) {
    console.log(mensaje);
    this.mensajeHijo = mensaje;
  }

    ngAfterViewInit() {
      this.bodyComponent.frase.notas = 'Inyectando componentes';
    }
}
