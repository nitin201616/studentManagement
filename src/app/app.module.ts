import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponentComponent } from './components/add-component/add-component.component';
import { ListComponentComponent } from './components/list-component/list-component.component';
import { DeleteComponentComponent } from './components/delete-component/delete-component.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { EditComponentComponent } from './components/edit-component/edit-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    AddComponentComponent,
    ListComponentComponent,
    DeleteComponentComponent,
    LoginComponentComponent,
    EditComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule, 
    ReactiveFormsModule,
    FormsModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
