import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[PacienteConcluido]'
})
export class PacienteConcluidoDirective implements OnInit{

  @Input() PacienteConcluido: boolean;

  constructor(private el:ElementRef) { }

  ngOnInit(){
    if(this.PacienteConcluido){
      this.el.nativeElement.style.textDecoration = "line-through";
    }
  }

}
