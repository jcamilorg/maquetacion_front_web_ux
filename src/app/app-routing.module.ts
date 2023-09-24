import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlarmDetailComponent } from './pages/alarm-detail/alarm-detail.component';
import { HomeComponent } from './pages/home/home.component';
import { RutinaDetailComponent } from './pages/rutina-detail/rutina-detail.component';
import { StudySessionComponent } from './pages/study-session/study-session.component';
const routes: Routes = [
  {
    path: '', // ruta por defecto
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'alarm-detail/:id',
    component: AlarmDetailComponent,
  },
  {
    path: 'rutina-detail/:id',
    component: RutinaDetailComponent,
  },
  {
    path: 'study',
    component: StudySessionComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
