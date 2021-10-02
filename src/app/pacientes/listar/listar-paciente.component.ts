import { Component, OnInit } from '@angular/core';
import { PacienteService, Paciente } from '../shared';

@Component({
  selector: 'app-listar-paciente',
  templateUrl: './listar-paciente.component.html',
  styleUrls: ['./listar-paciente.component.css']
})
export class ListarPacienteComponent implements OnInit {
  
  pacientes: Paciente[];

  constructor(private pacienteService: PacienteService) { }

  ngOnInit() {
    this.pacientes = this.ListarTodos();

  }
  ListarTodos(): Paciente[]{
    return this.pacienteService.ListarTodos();
  }

  alterarStatus(paciente:Paciente):void {
    if(confirm('Deseja alterar o status desse paciente "'+paciente.nome+'"?')){
      this.pacienteService.alterarStatus(paciente.id);
      this.pacientes = this.ListarTodos();
    } else {
      this.pacientes = this.ListarTodos();
    }
  }

  remover(paciente:Paciente):void {
    if(confirm('Deseja remover a paciente "'+paciente.nome+'"?')){
      this.pacienteService.remover(paciente.id);
      this.pacientes = this.ListarTodos();
    } else {
      this.pacientes = this.ListarTodos();
    }
  }

}
