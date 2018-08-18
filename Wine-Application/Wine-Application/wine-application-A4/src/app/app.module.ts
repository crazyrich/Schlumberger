import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { WineComponent } from './wine/wine.component';
import { WineService } from './service/wine.service';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { WineAdapter } from './service/wine.adapter';
import { WinePipe } from './service/wine.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    WineComponent,
    WinePipe
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [WineService, WineAdapter],
  bootstrap: [AppComponent]
})
export class AppModule { }
