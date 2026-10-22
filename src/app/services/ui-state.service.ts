import { signal, Signal } from '@angular/core';

export class UiStateService {
  private static _instance: UiStateService;
  mobileMenuOpen = signal(false);
  headerCollapsed = signal(false);

  static get instance(): UiStateService {
    if (!UiStateService._instance) {
      UiStateService._instance = new UiStateService();
    }
    return UiStateService._instance;
  }
}
