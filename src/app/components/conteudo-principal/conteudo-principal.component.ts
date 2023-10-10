import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'atividade-frontend-conteudo-principal',
  templateUrl: './conteudo-principal.component.html',
  styleUrls: ['./conteudo-principal.component.css']
})
export class ConteudoPrincipalComponent implements OnInit {

  conteudos = [
    {
      conteudoTitulo: "5 dicas para carreira profissional",
      conteudoTexto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non ipsum aliquam, mollis dolor iaculis, tincidunt neque. Aenean sit amet nisl et nibh blandit venenatis quis id metus"
    },
    {
      conteudoTitulo: "3 dicas para carreira profissional",
      conteudoTexto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non ipsum aliquam, mollis dolor iaculis, tincidunt neque. Aenean sit amet nisl et nibh blandit venenatis quis id metus"
    },
    {
      conteudoTitulo: "2 dicas para carreira profissional",
      conteudoTexto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non ipsum aliquam, mollis dolor iaculis, tincidunt neque. Aenean sit amet nisl et nibh blandit venenatis quis id metus"
    },
  ];

  constructor() { }

  ngOnInit(): void { }

}
