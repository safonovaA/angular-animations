import { trigger, transition, style, query, animateChild, group, animate } from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* => HomePage', [
      style({ position: 'relative', opacity: 1 }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          opacity: 1,
        })
      ], {optional: true}),
      query(':enter', [
        style({ opacity: 0 })
      ]),
      query(':leave', animateChild(), {optional : true}),
      group([
        query(':leave', [
          animate('500ms ease-out', style({ opacity: 0 }))
        ], {optional: true}),
        query(':enter', [
          animate('1s ease-out', style({opacity: 1}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
  ]);
