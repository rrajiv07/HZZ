import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkSpaceModule } from './work-space/work-space.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WorkSpaceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
