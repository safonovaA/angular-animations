import { Component, OnInit, Input, ElementRef, AfterViewInit } from '@angular/core';
import {
  AnimationBuilder,
  query,
  style,
  AnimationFactory,
  animate,
  AnimationPlayer
} from '@angular/animations';
import { WindowRefService } from 'src/app/root/services/window-ref.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, AfterViewInit {
  @Input() public hero;
  @Input() public index: number;

  private iconUrl = 'http://s3.hotsapi.net/img/heroes/92x93/';
  private player: AnimationPlayer;
  constructor(
    private animationBuilder: AnimationBuilder,
    private element: ElementRef,
    private window: WindowRefService,
    ) { }

  public ngOnInit() {
    console.log(this.element);
  }
  public ngAfterViewInit() {
    this.appear(this.element.nativeElement);
  }

  public appear(element) {
    const animation: AnimationFactory = this.animationBuilder.build([
      query(`#card-${this.index}`, [
        style({opacity: 0, transform: 'translateX(100%)'}, ),
        animate(`600ms ${this.index + 600 * this.index}ms`,
          style({ transform: 'translateX(0%)', opacity: 1 }),
        )
      ], { optional: true })
    ]);
    this.player = animation.create(element);
    this.player.play();
    // this.player.onDone(() => {
    //   this.window.nativeWindow().scrollTo(0, this.element.nativeElement.offsetTop - this.element.nativeElement.clientHeight);
    // });
  }
}
