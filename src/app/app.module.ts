import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { LayoutComponent } from './root/components/layout/layout.component';
import { RootModule } from './root/root.module';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './root/components/not-found/not-found.component';
import { EffectsModule } from '@ngrx/effects';
import { HomeComponent } from './root/components/home/home.component';
import { LoaderComponent } from './components/loader/loader.component';

export const routes: Routes = [
  { path: '', component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent, data: {animation: 'HomePage'} },
      { path: 'heroes', loadChildren: './heroes/heroes.module#HeroesModule' },
      { path: 'hero', loadChildren: './hero/hero.module#HeroModule'},
    ]
  },
  { path: '**', component: NotFoundComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RootModule,
    RouterModule.forRoot(routes, { useHash: false, onSameUrlNavigation: 'reload' }),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
