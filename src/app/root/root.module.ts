import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { LayoutComponent } from './components/layout/layout.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoaderComponent } from '../components/loader/loader.component';
import { WindowRefService } from './services/window-ref.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    HeaderComponent,
    MainComponent,
    LayoutComponent,
    NotFoundComponent,
    LoaderComponent,
  ],
  providers: [WindowRefService],
  exports: [LoaderComponent],
})
export class RootModule { }
