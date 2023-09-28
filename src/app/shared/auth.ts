import { FormControl } from '@angular/forms';

export interface IRegisterFormGroup {
  name: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
}
export interface IRegisterFormValues {
  name: string;
  email: string;
  password: string;
}

export interface ILoginFormGroup {
  email: FormControl<string>;
  password: FormControl<string>;
}

export interface ILoginFormValues{
    email:string,
    password:string
}
