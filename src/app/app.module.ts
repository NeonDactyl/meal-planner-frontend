import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { IndexContentComponent } from './index-content/index-content.component';
import { HttpClientModule } from '@angular/common/http';
import { MarkedPipe } from './marked.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    SidebarComponent,
    IndexContentComponent,
    MarkedPipe
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
