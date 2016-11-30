import { NgModule } from '@angular/core'; 
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ContatosModule } from './contatos/contatos.module';

@NgModule({
    imports: [BrowserModule, ContatosModule, AppRoutingModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {

}