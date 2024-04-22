import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Modulos
import { AuthRoutingModule } from './auth/auth.routing';
import { PagesRoutingModule } from './pages/pages.routing';

import { NoPageFoundComponent } from './no-page-found/no-page-found.component';



const routes: Routes = [

  // path: '/dashboard' PagesRouting
  
  // path: '/auth' AuthRouting
  // path: '/medicos' MedicosRouting
  // path: '/compras' ComprasRouting

  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: '**', component: NoPageFoundComponent },

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
