import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HarryListaComponent } from './harry/harry-lista/harry-lista.component';
import { HarryDetalheComponent } from './harry/harry-detalhe/harry-detalhe.component';

const routes: Routes = [
  {path:  'detalhe', component : HarryDetalheComponent },
  {path:  '', component : HarryListaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
