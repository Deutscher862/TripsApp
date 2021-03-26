import {ListaWycieczekComponent} from './wycieczki/lista-wycieczek/lista-wycieczek.component';
import {KoszykComponent} from './wycieczki/koszyk/koszyk.component';
import {AddTourFormComponent} from './wycieczki/add-tour-form/add-tour-form.component';
import {SzczegolyWycieczkiComponent} from './wycieczki/wycieczka/szczegoly-wycieczki/szczegoly-wycieczki.component';
import {LoginComponent} from './login/login.component';
import {AdminComponent} from './wycieczki/admin/admin.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'wycieczki', component: ListaWycieczekComponent },
  { path: 'koszyk', component: KoszykComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'dodaj-wycieczke', component: AddTourFormComponent },
  { path: 'wycieczka/:id', component: SzczegolyWycieczkiComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
