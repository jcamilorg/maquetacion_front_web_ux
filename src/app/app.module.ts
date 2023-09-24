import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlarmItemComponent } from './components/alarm-item/alarm-item.component';
import { AlarmDetailComponent } from './pages/alarm-detail/alarm-detail.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { RutinaItemComponent } from './components/rutina-item/rutina-item.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TimepickerComponent } from './components/timepicker/timepicker.component';

import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { RutinaDetailComponent } from './pages/rutina-detail/rutina-detail.component';
import { StudySessionComponent } from './pages/study-session/study-session.component';

@NgModule({
  declarations: [
    AppComponent,
    AlarmItemComponent,
    AlarmDetailComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    RutinaItemComponent,
    TimepickerComponent,
    RutinaDetailComponent,
    StudySessionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    NgxMaterialTimepickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
