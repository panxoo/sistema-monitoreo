import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthentificationService } from 'src/app/shared/services/authentification.service';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    AuthentificationService
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
