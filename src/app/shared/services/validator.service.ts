import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)'; //Expresion regular
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  isFieldOneEqualFieldTwo( field1: string, field2: string){

    return ( formGroup: FormGroup): ValidationErrors | null =>{

      const fieldValue1 = formGroup.get(field1)?.value;
      const fieldValue2 = formGroup.get(field2)?.value;

      if( fieldValue1 !== fieldValue2){
        formGroup.get(field2)?.setErrors({ notEqual: true});
        return { notEqual: false};
      }

      formGroup.get(field2)?.setErrors(null);
      return null;
    }
  }


  isValidField(form:FormGroup, field: string){
        return form.controls[field].errors && form.controls[field].touched;
      }

}
