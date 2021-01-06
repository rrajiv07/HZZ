import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsoleRoutingModule } from './console-routing.module';
import { HeaderPanelComponent } from './header-panel/header-panel.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [HeaderPanelComponent, LoginComponent],
  imports: [
    CommonModule,
    ConsoleRoutingModule
  ],
  exports:[HeaderPanelComponent]
})
export class ConsoleModule { }
