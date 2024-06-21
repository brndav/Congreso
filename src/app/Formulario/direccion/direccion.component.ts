import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators, FormBuilder, FormArray } from '@angular/forms';


@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.component.html',
  styleUrls: ['./direccion.component.scss'],
})
export class DireccionComponent  implements OnInit {
  loginForm: FormGroup; 

  isAccordionOpen: { [key: number]: boolean } = {};
  checkboxesSelected: boolean[] = [false, false];
  disableAllCheckboxes: boolean = false;
  showSecondForm: boolean = false;
  selectedOption: string | null = null;

  constructor() { 
    this.loginForm = new FormGroup({

    field1: new FormControl()

  });}

  ngOnInit(): void {}
  
  
  
  toggleAccordion(index: number) {
    this.isAccordionOpen[index] = !this.isAccordionOpen[index];
  }
 
  
}
