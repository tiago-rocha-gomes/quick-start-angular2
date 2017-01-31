import './util/rxjs-extensions';

import { NgModule } from '@angular/core'; 
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ContatosModule } from './contatos/contatos.module';
import { DialogService } from './dialog.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';

@NgModule({
    imports: [
        BrowserModule, 
        ContatosModule, 
        AppRoutingModule, 
        HttpModule, 
        FormsModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService)
    ],
    declarations: [AppComponent],
    providers: [DialogService],
    bootstrap: [AppComponent]
})
export class AppModule {

}