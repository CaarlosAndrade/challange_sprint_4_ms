import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/produto';
import { ProdutoService } from 'src/app/service/produto.service';



@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  produtos: Produto[] = [];

  constructor(
    private produtoService: ProdutoService,

  ) { }

  ngOnInit(): void {
    this.getProdutos();
  }



  getProdutos(): void {
    this.produtoService.getProdutos()
      .subscribe((data) => { this.produtos = data;});
  }

}
