import {Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {

    // tslint:disable-next-line:no-input-rename
    @Input('mensajePadre') mensajePadre: string;

    @Output() propagar = new EventEmitter<string>();

    mostrar = true;

    frase: any = {
        mensaje: 'Una gran poder requiere una gran responsabilidad',
        autor: 'Ben Parker',
        notas: ''
    };

    personajes: string[] = ['Spiderman', 'Superman', 'Dr. Octpus', 'Lex Luthor'];

    onPropagar() {
        this.propagar.emit('Respuesta del hijo al padre');
    }
}