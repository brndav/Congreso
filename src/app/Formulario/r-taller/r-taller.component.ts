import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-r-taller',
  templateUrl: './r-taller.component.html',
  styleUrls: ['./r-taller.component.scss'],
})
export class RTallerComponent  implements OnInit {

  optionsVisible = false;
  options = [
    { label: 'Dispositivos, circuitos y sistemas', description: 'Descripción de Dispositivos, circuitos y sistemas', showPopover: false },
    { label: 'Gestión de recursos eléctricos y medio ambiente', description: 'Descripción de Gestión de recursos eléctricos y medio ambiente', showPopover: false },
    { label: 'Sistemas energéticos y Energías renovables', description: 'Descripción de Sistemas energéticos y Energías renovables', showPopover: false },
    { label: 'Modelos de Negocios', description: 'Descripción de Modelos de Negocios', showPopover: false },
    { label: 'Ingeniería y Tecnología de los materiales', description: 'Descripción de Ingeniería y Tecnología de los materiales', showPopover: false },
    { label: 'Ingeniería e innovación tecnológica', description: 'Descripción de Ingeniería e innovación tecnológica', showPopover: false },
    { label: 'Inteligencia artificial y Ciencia de datos', description: 'Descripción de Inteligencia artificial y Ciencia de datos', showPopover: false }
  ];
  isAccordionOpen: { [key: number]: boolean } = {};
  checkboxesSelected: boolean[] = [false, false, false];
  disableAllCheckboxes: boolean = false;
  showSecondForm: boolean = false;
  selectedOption: string | null = null;

  constructor() { }

  ngOnInit(): void {}

  toggleOptions() {
    this.optionsVisible = !this.optionsVisible;
  }

  selectOption(option: any) {
    this.selectedOption = option.label;
    this.optionsVisible = false;
  }

  showPopover(option: any) {
    option.showPopover = true;
  }

  hidePopover() {
    this.options.forEach(opt => opt.showPopover = false);
  }

  onCheckboxChange(index: number, event: any) {
    this.checkboxesSelected[index] = event.target.checked;

    const selectedCount = this.checkboxesSelected.filter(selected => selected).length;

    if (selectedCount === 2) {
      this.disableAllCheckboxes = true;
    } else {
      this.disableAllCheckboxes = false;
    }
  }

  

  toggleAccordion(index: number) {
    this.isAccordionOpen[index] = !this.isAccordionOpen[index];
  }
}