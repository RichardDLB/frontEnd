import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/navbar/login/login.component';
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
import { LogoutComponent } from './componentes/navbar/logout/logout.component';
import { ModalLoginComponent } from './componentes/navbar/login/modal-login/modal-login.component';
import { PencilBannerComponent } from './componentes/banner/pencil-banner/pencil-banner.component';
import { ModalPencilBannerComponent } from './componentes/banner/pencil-banner/modal-pencil-banner/modal-pencil-banner.component';
import { TextBannerComponent } from './componentes/banner/text-banner/text-banner.component';
import { PencilProfilePhotoComponent } from './componentes/banner/pencil-profile-photo/pencil-profile-photo.component';
import { ModalPencilProfilePhotoComponent } from './componentes/banner/pencil-profile-photo/modal-pencil-profile-photo/modal-pencil-profile-photo.component';
import { ProfilePhotoComponent } from './componentes/banner/profile-photo/profile-photo.component';
import { TextPresentationComponent } from './componentes/presentation/text-presentation/text-presentation.component';
import { PencilTextPresentationComponent } from './componentes/presentation/pencil-text-presentation/pencil-text-presentation.component';
import { ModalPencilTextPresentationComponent } from './componentes/presentation/pencil-text-presentation/modal-pencil-text-presentation/modal-pencil-text-presentation.component';
import { PencilExperienceSectionComponent } from './componentes/experience/pencil-experience-section/pencil-experience-section.component';
import { ModalPencilExperienceSectionComponent } from './componentes/experience/pencil-experience-section/modal-pencil-experience-section/modal-pencil-experience-section.component';
import { TituloExperienciaComponent } from './componentes/experience/titulo-experiencia/titulo-experiencia.component';
import { BotonLogoNtn24Component } from './componentes/experience/boton-logo-ntn24/boton-logo-ntn24.component';
import { InformacionExperienciaComponent } from './componentes/experience/informacion-experiencia/informacion-experiencia.component';
import { PencilAndXmarkInfoExperienceComponent } from './componentes/experience/pencil-and-xmark-info-experience/pencil-and-xmark-info-experience.component';
import { PencilInfoExperienceComponent } from './componentes/experience/pencil-and-xmark-info-experience/pencil-info-experience/pencil-info-experience.component';
import { XmarkInfoExperienceComponent } from './componentes/experience/pencil-and-xmark-info-experience/xmark-info-experience/xmark-info-experience.component';
import { ModalPencilInfoExperienceComponent } from './componentes/experience/pencil-and-xmark-info-experience/pencil-info-experience/modal-pencil-info-experience/modal-pencil-info-experience.component';
import { ModalXmarkInfoExperienceComponent } from './componentes/experience/pencil-and-xmark-info-experience/xmark-info-experience/modal-xmark-info-experience/modal-xmark-info-experience.component';
import { ModalBotonLogoNtn24Component } from './componentes/experience/boton-logo-ntn24/modal-boton-logo-ntn24/modal-boton-logo-ntn24.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
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
    LogoutComponent,
    ModalLoginComponent,
    PencilBannerComponent,
    ModalPencilBannerComponent,
    TextBannerComponent,
    PencilProfilePhotoComponent,
    ModalPencilProfilePhotoComponent,
    ProfilePhotoComponent,
    TextPresentationComponent,
    PencilTextPresentationComponent,
    ModalPencilTextPresentationComponent,
    PencilExperienceSectionComponent,
    ModalPencilExperienceSectionComponent,
    TituloExperienciaComponent,
    BotonLogoNtn24Component,
    InformacionExperienciaComponent,
    PencilAndXmarkInfoExperienceComponent,
    PencilInfoExperienceComponent,
    XmarkInfoExperienceComponent,
    ModalPencilInfoExperienceComponent,
    ModalXmarkInfoExperienceComponent,
    ModalBotonLogoNtn24Component,
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
