import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'liste-users',
    loadChildren: () => import('./liste-users/liste-users.module').then( m => m.ListeUsersPageModule)
   /// , canActivate: [AuthGuard]
  },
  {
    path: 'user-detail/:id',
    loadChildren: () => import('./user-detail/user-detail.module').then( m => m.UserDetailPageModule)
   /// ,canActivate: [AuthGuard]
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
