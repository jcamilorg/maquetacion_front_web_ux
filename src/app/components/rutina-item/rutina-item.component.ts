import { Component } from '@angular/core';

@Component({
  selector: 'app-rutina-item',
  templateUrl: './rutina-item.component.html',
  styleUrls: ['./rutina-item.component.scss'],
})
export class RutinaItemComponent {
  lunes: boolean = false;
  martes: boolean = false;
  miercoles: boolean = false;
  jueves: boolean = false;
  viernes: boolean = false;
  sabado: boolean = false;
  domingo: boolean = false;

  togglelunes() {
    this.lunes = !this.lunes;
  }
  togglemartes() {
    this.martes = !this.martes;
  }
  togglemiercoles() {
    this.miercoles = !this.miercoles;
  }
  togglejueves() {
    this.jueves = !this.jueves;
  }
  toggleviernes() {
    this.viernes = !this.viernes;
  }
  togglesabado() {
    this.sabado = !this.sabado;
  }
  toggledomingo() {
    this.domingo = !this.domingo;
  }
}
