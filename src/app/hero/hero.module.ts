import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FullCardComponent } from './components/full-card/full-card.component';
import { StoreModule } from '@ngrx/store';
import * as fromHero from './reducers/hero.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HeroEffects } from './effects/hero.effects';
import { HeroService } from './services/hero.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', children: [
      { path: ':name', component: FullCardComponent},
    ]}]),
    StoreModule.forFeature('hero', fromHero.reducer),
    EffectsModule.forFeature([HeroEffects]),
  ],
  providers: [HeroService],
  declarations: [FullCardComponent]
})
export class HeroModule { }
