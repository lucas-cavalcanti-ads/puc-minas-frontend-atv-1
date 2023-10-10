import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'atividade-frontend-conteudo-item',
  templateUrl: './conteudo-item.component.html',
  styleUrls: ['./conteudo-item.component.css']
})
export class ConteudoItemComponent implements OnInit {

  @Input() titulo: string = "";
  @Input() conteudo: string = "";
  
  constructor() { }


  ngOnInit(): void {
  }

}
