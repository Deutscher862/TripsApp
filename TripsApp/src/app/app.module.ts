import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppComponent } from './app.component';
import { ListaWycieczekComponent } from './wycieczki/lista-wycieczek/lista-wycieczek.component';
import { AddTourFormComponent } from './wycieczki/add-tour-form/add-tour-form.component';
import { StarRatingComponent } from './wycieczki/star-rating/star-rating.component';
import { FilterPipe } from './wycieczki/filter/FilterPipe';
import { KoszykComponent } from './wycieczki/koszyk/koszyk.component';
import { WycieczkaComponent } from './wycieczki/wycieczka/wycieczka.component';
import { SzczegolyWycieczkiComponent } from './wycieczki/wycieczka/szczegoly-wycieczki/szczegoly-wycieczki.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { AdminComponent } from './wycieczki/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaWycieczekComponent,
    AddTourFormComponent,
    StarRatingComponent,
    FilterPipe,
    KoszykComponent,
    WycieczkaComponent,
    SzczegolyWycieczkiComponent,
    LoginComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
