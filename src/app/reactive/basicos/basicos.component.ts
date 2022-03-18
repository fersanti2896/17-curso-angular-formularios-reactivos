import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
    nombre     : [ '', [ Validators.required, Validators.minLength(3) ] ],
    precio     : [ 0, [ Validators.required, Validators.min(0) ] ],
    existencias: [ 0, [ Validators.required, Validators.min(0) ] ]
  });

  /* Inyectando el servicio de FormBuilder */
  constructor(private formBuilder: FormBuilder) { }

  campoValido(campo: string) {
    return this.miFormulario.controls[campo].errors 
           && this.miFormulario.controls[campo].touched
  }

  valor() {
    return this.miFormulario.controls.precio.errors?.min?.actual
  }
}
