import { Produto } from 'src/app/model/produto';
import { ProdutoService } from 'src/app/service/produto.service';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {
  produto: Produto = {title: '', description: '', price: 10, active: true};

  constructor(
    private produtoService: ProdutoService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}

  addForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    active: new FormControl('', Validators.required),
  });

  onSubmit(){
    console.log('submit', this.addForm.value)
    this.produto = {
      title: this.addForm.value.title?.toString(),
      description: this.addForm.value.description?.toString(),
      price: Number(this.addForm.value.price),
      active: this.addForm.value.active == 'ativo' ? true : false
    };
    console.log('produto', this.produto)

    this.produtoService.postProduto(this.produto);
    this.addForm.reset();
  }
}
