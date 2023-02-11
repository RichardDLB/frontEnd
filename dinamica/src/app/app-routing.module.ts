import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './componentes/banner/banner.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PresentationComponent } from './componentes/presentation/presentation.component';

const routes: Routes = [
  { path: '', component:NavbarComponent},
  { path: '', component:BannerComponent},  
  { path: '', component:PresentationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
