import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'resgiter-from',
    loadChildren: () => import('./resgiter-from/resgiter-from.module').then( m => m.ResgiterFromPageModule)
  },
  {
    path: 'dashboard/:email',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'student-view/:email',
    loadChildren: () => import('./studentview/student-view.module').then( m => m.StudentViewPageModule)
  },
  {
    path: 'studentedit/:email',
    loadChildren: () => import('./studentedit/studentedit.module').then( m => m.StudenteditPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
