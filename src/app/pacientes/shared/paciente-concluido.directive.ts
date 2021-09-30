import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[PacienteConcluido]'
})
export class PacienteConcluidoDirective implements OnInit{

  @Input() pacienteConlcuido: boolean;

  constructor(private el:ElementRef) { }

  ngOnInit(){
    if(this.pacienteConlcuido){
      this.el.nativeElement.style.textDecoration = "bg-green";
    }
  }

}
