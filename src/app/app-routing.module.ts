import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'movie', pathMatch: 'full' },
  {path: 'movie', loadChildren: () => import('./pages/movies/movies.module').then(m => m.MoviesModule)},
  {path: 'ticket', loadChildren: () => import('./ticket/ticket.module').then(m => m.TicketModule)},
  {path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }