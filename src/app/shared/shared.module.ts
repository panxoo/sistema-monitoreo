import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ParametrosService } from 'src/app/shared/services/parametros.service';
import { AgrupacionResolve } from 'src/app/shared/resolvers/agrupacion.resolve';
import { FiltreObjetoPipe } from 'src/app/shared/pipes/filtre-objeto.pipe';
import { filtreMetodoPipe } from 'src/app/shared/pipes/filtre-metodo.pipe';
import { CombienObjetoPipe } from 'src/app/shared/pipes/combien-objeto.pipe';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    FiltreObjetoPipe,
    filtreMetodoPipe,
    CombienObjetoPipe],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  exports: [
    MaterialModule,
    ReactiveFormsModule,
    FiltreObjetoPipe,
    filtreMetodoPipe,
    CombienObjetoPipe,
    FlexLayoutModule
  ],
  providers: [
    ParametrosService,
    AgrupacionResolve
  ]
})
export class SharedModule { }
