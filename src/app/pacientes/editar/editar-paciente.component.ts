import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente, PacienteService } from '../shared';

@Component({
  selector: 'app-editar-paciente',
  templateUrl: './editar-paciente.component.html',
  styleUrls: ['./editar-paciente.component.css']
})
export class EditarPacienteComponent implements OnInit {

  @ViewChild('formPaciente', {static:true})formPaciente: NgForm;
  paciente: Paciente;

  constructor(private pacienteService: PacienteService, private route: ActivatedRoute, private router: Router ) {

  }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.paciente = this.pacienteService.buscarPorId(id);

  }

  atualizar(): void{
    if(this.formPaciente.form.valid){
      this.pacienteService.atualizar(this.paciente)
      this.router.navigate(['/pacientes'])
    }
  }

}


