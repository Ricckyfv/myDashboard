import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/services/validator.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorService,
  ){}

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    surname: ['', [Validators.required, Validators.minLength(3), Validators.pattern(this.validatorsService.firstNameAndLastnamePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorsService.emailPattern)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]],
  },{
    validators: [
      this.validatorsService.isFieldOneEqualFieldTwo('password', 'password2')
    ]
  })

  public formSubmitted:boolean = false;

  isValidField( field: string){
    return this.validatorsService.isValidField(this.myForm, field);
  }

  public getFieldError(field: string): string {
    const control = this.myForm.get(field);
    if (control?.hasError('required')) {
      return 'Este campo es requerido';
    } else if (control?.hasError('minlength')) {
      return `Debe tener al menos ${control.errors?.['minlength'].requiredLength} caracteres`;
    }
    return '';
  }

  onSubmit() {
      if (this.myForm.valid) {
        this.formSubmitted = true;
        console.log('Formulario enviado correctamente:', this.myForm.value);

        setTimeout(() => {
          this.myForm.reset();
          this.formSubmitted = false;
        }, 4000);
      } else {
        this.myForm.markAllAsTouched();
      }
    }
  }

