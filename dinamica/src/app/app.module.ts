import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PresentationComponent } from './componentes/presentation/presentation.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { ExperienceComponent } from './componentes/experience/experience.component';
import { EducationComponent } from './componentes/education/education.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProjectsComponent } from './componentes/projects/projects.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ModalsComponent } from './componentes/modals/modals.component';
import { IndexComponent } from './componentes/index/index.component';
import { EdicionComponent } from './componentes/edicion/edicion.component';
import { LogosComponent } from './componentes/navbar/logos/logos.component';
import { RedesComponent } from './componentes/navbar/redes/redes.component';
import { LoginComponent } from './componentes/navbar/login/login.component';
import { LogoutComponent } from './componentes/navbar/logout/logout.component';
import { ModalLoginComponent } from './componentes/navbar/login/modal-login/modal-login.component';
import { PencilBannerComponent } from './componentes/banner/pencil-banner/pencil-banner.component';
import { ModalPencilBannerComponent } from './componentes/banner/pencil-banner/modal-pencil-banner/modal-pencil-banner.component';
import { TextBannerComponent } from './componentes/banner/text-banner/text-banner.component';
import { PencilProfilePhotoComponent } from './componentes/banner/pencil-profile-photo/pencil-profile-photo.component';
import { ModalPencilProfilePhotoComponent } from './componentes/banner/pencil-profile-photo/modal-pencil-profile-photo/modal-pencil-profile-photo.component';
import { ProfilePhotoComponent } from './componentes/banner/profile-photo/profile-photo.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PresentationComponent,
    BannerComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    FooterComponent,
    ModalsComponent,
    IndexComponent,
    EdicionComponent,
    LogosComponent,
    RedesComponent,
    LoginComponent,
    LogoutComponent,
    ModalLoginComponent,
    PencilBannerComponent,
    ModalPencilBannerComponent,
    TextBannerComponent,
    PencilProfilePhotoComponent,
    ModalPencilProfilePhotoComponent,
    ProfilePhotoComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
