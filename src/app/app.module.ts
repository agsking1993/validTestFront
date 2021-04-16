import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

 import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { ListClientComponent } from './listClients/listClients.component';



import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule,FormsModule} from "@angular/forms";
import {routing} from "./app.routing";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ModalModule, TooltipModule, PopoverModule, ButtonsModule } from 'angular-bootstrap-md';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table'; 
import { MatProgressBarModule } from '@angular/material/progress-bar'; 
import { ApiService } from './core/api.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    HeaderComponent,
    FooterComponent,
    ListClientComponent
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,FormsModule, 
    BrowserModule,
    TooltipModule,
    PopoverModule,ButtonsModule,
    MatButtonModule,
    MatIconModule,
    MatSliderModule,
    MatCardModule,
    MatTableModule,
    MatProgressBarModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    routing

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
