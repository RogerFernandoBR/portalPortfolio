import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutePages } from './enums/_enums';

import { AboutComponent } from './components/about/about.component';
import { WeatherComponent } from './components/weather/weather.component';
import { TictactoeComponent } from './components/tictactoe/tictactoe.component';
import { ClockComponent } from './components/clock/clock.component';
import { ModelingComponent } from './components/modeling/modeling.component';
import { CronometerComponent } from './components/cronometer/cronometer.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { TodoComponent } from './components/todo/todo.component';
import { SoftSkillsComponent } from './components/soft-skills/soft-skills.component';
import { HardSkillsComponent } from './components/hard-skills/hard-skills.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: RoutePages.Root, redirectTo: RoutePages.Home, pathMatch: 'full'},
  { path: RoutePages.Home, children: [
      { path: RoutePages.Root, redirectTo: RoutePages.Home, pathMatch: 'full'},
      { path: RoutePages.Home, component: HomeComponent},
      { path: RoutePages.About, component: AboutComponent },
      { path: RoutePages.SoftSkills, component: SoftSkillsComponent},
      { path: RoutePages.HardSkills, component: HardSkillsComponent},
		]
	},
  { path: RoutePages.Weather, component: WeatherComponent },
  { path: RoutePages.TicTacToe, component: TictactoeComponent },
  { path: RoutePages.Clock, component: ClockComponent },
  { path: RoutePages.Modeling, component: ModelingComponent },
  { path: RoutePages.Cronometer, component: CronometerComponent },
  { path: RoutePages.Calculator, component: CalculatorComponent },
  { path: RoutePages.ToDo, component: TodoComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
