import { Component } from '@angular/core';

@Component({
  selector: 'app-study-session',
  templateUrl: './study-session.component.html',
  styleUrls: ['./study-session.component.scss'],
})
export class StudySessionComponent {
  lunes: boolean = false;
  martes: boolean = false;
  miercoles: boolean = false;
  jueves: boolean = false;
  viernes: boolean = false;
  sabado: boolean = false;
  domingo: boolean = false;

  sesion() {
    alert('¡Se ha iniciado la sesión de estudio!');
  }

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
