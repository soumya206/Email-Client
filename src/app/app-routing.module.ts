import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ComposeEmailComponent} from './compose-email/compose-email.component';
import {ListEmailComponent} from './list-email/list-email.component';

const routes: Routes = [
  {path: 'create', component:ComposeEmailComponent},
  {path: 'list', component:ListEmailComponent},
  {path: '',redirectTo:'/list',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
