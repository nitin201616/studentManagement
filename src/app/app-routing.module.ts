import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponentComponent } from './components/add-component/add-component.component';
import { ListComponentComponent } from './components/list-component/list-component.component';
import { EditComponentComponent } from './components/edit-component/edit-component.component';
import { DeleteComponentComponent } from './components/delete-component/delete-component.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';

const routes: Routes = [
  {path:'add', component:AddComponentComponent},
  {path:'list', component:ListComponentComponent},
  {path:'delete', component:DeleteComponentComponent},
  {path:'edit/:id', component:EditComponentComponent},
  {path:'login', component:LoginComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
