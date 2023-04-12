import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsideComponent } from './components/aside/aside.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContentComponent } from './components/content/content.component';
import { ButtonModeComponent } from './components/button-mode/button-mode.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ModelingComponent } from './components/modeling/modeling.component';
import { WeatherComponent } from './components/weather/weather.component';
import { TictactoeComponent } from './components/tictactoe/tictactoe.component';
import { ClockComponent } from './components/clock/clock.component';
import { CronometerComponent } from './components/cronometer/cronometer.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { TodoComponent } from './components/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    NavbarComponent,
    ContentComponent,
    ButtonModeComponent,
    HomeComponent,
    AboutComponent,
    ModelingComponent,
    WeatherComponent,
    TictactoeComponent,
    ClockComponent,
    CronometerComponent,
    CalculatorComponent,
    TodoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
