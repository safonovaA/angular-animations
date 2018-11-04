import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { RouterModule } from '@angular/router';
import { HeroesService } from './services/heroes.service';
import { StoreModule } from '@ngrx/store';
import * as fromHeroes from './reducers/heroes.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HeroesEffects } from './effects/heroes.effects';
import { CardComponent } from './components/card/card.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { LoaderComponent } from '../components/loader/loader.component';
import { RootModule } from '../root/root.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: HeroesListComponent}]),
    StoreModule.forFeature('heroes', fromHeroes.reducer),
    EffectsModule.forFeature([HeroesEffects]),
    RootModule,
  ],
  providers: [HeroesService],
  declarations: [HeroesListComponent, CardComponent, PaginationComponent]
})
export class HeroesModule { }
