import { Component } from '@angular/core';

@Component({
  selector: 'app-alarm-detail',
  templateUrl: './alarm-detail.component.html',
  styleUrls: ['./alarm-detail.component.scss'],
})
export class AlarmDetailComponent {
  lunes: boolean = false;
  martes: boolean = false;
  miercoles: boolean = false;
  jueves: boolean = false;
  viernes: boolean = false;
  sabado: boolean = false;
  domingo: boolean = false;

  crear() {
    alert('¡Se ha creado la alarma correctamente!');
  }
  subirAudio() {
    alert('¡Sube o arrasta tu audio!');
  }
  graba() {
    alert('graba tu nota de voz!');
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
