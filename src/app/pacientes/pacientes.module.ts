import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacienteService, PacienteConcluidoDirective } from './shared';
import { ListarPacienteComponent } from './listar';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CadastrarPacienteComponent } from './cadastrar';
import { EditarPacienteComponent } from './editar';



@NgModule({
  declarations: [
    ListarPacienteComponent,
    CadastrarPacienteComponent,
    EditarPacienteComponent,
    PacienteConcluidoDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    PacienteService
  ]

})
export class PacientesModule { }
