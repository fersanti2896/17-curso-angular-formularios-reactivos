import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: [ , [ Validators.required, Validators.minLength(3) ] ]
  });

  constructor(private formBuilder: FormBuilder) { }

  campoValido(campo: string) {
    return this.miFormulario.controls[campo].errors
           && this.miFormulario.controls[campo].touched;
  }

  guardar() {
    if(this.miFormulario.invalid) {
      /* Mostrando mensajes de error si se aprieta el boton sin tocar los input */
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);
    
    /* Resetea todos los input después de dar submit */
    this.miFormulario.reset();
  }
}
