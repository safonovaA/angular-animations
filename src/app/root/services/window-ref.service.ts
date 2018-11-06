import { Injectable } from '@angular/core';

@Injectable()
export class WindowRefService {
  public nativeWindow(): any | Window {
    return window;
  }

  public siteCode(): string {
    return this.nativeWindow().location.host;
  }
}
