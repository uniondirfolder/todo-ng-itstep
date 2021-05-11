import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './components/todo-item/item/item.component';
import { ListComponent } from './components/todos/list/list.component';
import { HeaderComponent } from './components/pages/header/header.component';
import { AboutComponent } from './components/pages/about/about.component';
import { AddComponent } from './components/add-todo/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ListComponent,
    HeaderComponent,
    AboutComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
