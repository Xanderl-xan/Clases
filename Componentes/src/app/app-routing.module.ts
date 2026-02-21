import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'pantalla1',
    loadChildren: () => import('./pages/pantalla1/pantalla1.module').then( m => m.Pantalla1PageModule)
  },
  {
    path: 'pantalla2',
    loadChildren: () => import('./pages/pantalla2/pantalla2.module').then( m => m.Pantalla2PageModule)
  },
  {
    path: 'pantalla3',
    loadChildren: () => import('./pages/pantalla3/pantalla3.module').then( m => m.Pantalla3PageModule)
  },
  {
    path: 'pantalla4',
    loadChildren: () => import('./pages/pantalla4/pantalla4.module').then( m => m.Pantalla4PageModule)
  },
  {
    path: 'pantalla5',
    loadChildren: () => import('./pages/pantalla5/pantalla5.module').then( m => m.Pantalla5PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
