import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { LayoutComponent } from './layout/layout.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
      { path : '', component: LayoutComponent,  children: [
        { path: 'home', component: HomeComponent },
        { path: 'not-found', component: NotFoundComponent },
        { path: '', redirectTo: '/home', pathMatch: 'full'},
        { path: '**', redirectTo: '/not-found', pathMatch: 'full'}
      ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
