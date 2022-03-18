import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
  /* miFormulario: FormGroup = new FormGroup ({
    'nombre'     : new FormControl('Memoria RAM') ,
    'precio'     : new FormControl(0) ,
    'existencias': new FormControl(5)  
  }); */

  /* Forma de no hacer tantos FormControl */
  miFormulario: FormGroup = this.formBuilder.group({
    nombre: ['Memoria RAM'],
    precio: [ 1000 ],
    existencias: [ 5 ]
  });

  /* Inyectando el servicio de FormBuilder */
  constructor(private formBuilder: FormBuilder) { }
}
