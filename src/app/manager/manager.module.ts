import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerHomeComponent } from './manager-home/manager-home.component';
import {Routes} from "@angular/router";
import {PageNotFoundComponent} from "../page-not-found/page-not-found.component";
import {ManagerRoutingModule} from "./manager-routing.module";

const routes: Routes = [

  { path: '**', component: PageNotFoundComponent },
]

@NgModule({
  declarations: [
    ManagerHomeComponent
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule
  ]
})
export class ManagerModule { }
