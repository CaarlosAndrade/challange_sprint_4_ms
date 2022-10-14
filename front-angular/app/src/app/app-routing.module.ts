import { EmailsComponent } from './emails/emails/emails.component';
import { CadastroComponent } from './produto/cadastro/cadastro.component';
import { ProdutoComponent } from './produto/produto/produto.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: CadastroComponent},
  {path: 'consulta-produtos', component: ProdutoComponent},
  {path: 'consulta-emails', component: EmailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
