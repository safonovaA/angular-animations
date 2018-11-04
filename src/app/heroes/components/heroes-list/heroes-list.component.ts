import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, getHeroes, getIsLoading, getPageState } from '../../reducers/heroes.reducer';
import { LoadHeroes } from '../../actions/heroes.actions';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit, OnDestroy {
  public heroes: any[];
  public loading: boolean;
  public currentPage: number;
  public pageSize: number;
  public totalResults: number;
  public totalPages: number;
  public subscriptions = new Subscription();
  constructor(
    private store: Store<State>,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  public ngOnInit() {
    this.subscriptions.add(this.route.queryParams.subscribe((params) => {
      this.store.dispatch(new LoadHeroes({currentPage: +params.pageNum || 1, pageSize: +params.pageSize || 10}));
    }));
    this.subscriptions.add(this.store.select(getHeroes).subscribe((heroes) => {
      this.heroes = heroes;
    }));
    this.subscriptions.add(this.store.select(getIsLoading).subscribe((state) => {
      this.loading = state;
    }));
    this.subscriptions.add(this.store.select(getPageState).subscribe((state) => {
      this.currentPage = state.currentPage;
      this.totalPages = state.totalPages;
      this.pageSize = state.pageSize;
      this.totalResults =  state.totalResults;
    }));
  }

  public ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  public onGoTo(page) {
    this.router.navigate(['/heroes'], {
      queryParams: {
        pageSize: this.pageSize,
        pageNum: page,
      }
    });
  }

  public changePageSize(size) {
    this.router.navigate(['/heroes'], {
      queryParams: {
        pageSize: size,
        pageNum: 1,
      }
    });
  }
}
