import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './componentes/banner/banner.component';
import { EducationComponent } from './componentes/education/education.component';
import { ExperienceComponent } from './componentes/experience/experience.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ModalsComponent } from './componentes/modals/modals.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PresentationComponent } from './componentes/presentation/presentation.component';
import { ProjectsComponent } from './componentes/projects/projects.component';
import { SkillsComponent } from './componentes/skills/skills.component';

const routes: Routes = [
  { path: '', component:NavbarComponent},
  { path: 'banner', component:BannerComponent},  
  { path: 'presentation', component:PresentationComponent},
  { path: 'experience', component:ExperienceComponent},
  { path: 'education', component:EducationComponent},
  { path: 'skills', component:SkillsComponent},
  { path: 'projects', component:ProjectsComponent},
  { path: 'footer', component:FooterComponent},
  { path: 'modals', component:ModalsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
