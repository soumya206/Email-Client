import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComposeEmailComponent } from './compose-email/compose-email.component';
import { ViewEmailComponent } from './view-email/view-email.component';
import { ListEmailComponent } from './list-email/list-email.component';

import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ComposeEmailComponent,
    ViewEmailComponent,
    ListEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
