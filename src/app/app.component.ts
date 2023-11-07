
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from './store';
import { SetAppVersion } from './store/version/version.action';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(
    private store: Store<IAppState>
  ) {
    this.store.dispatch(new SetAppVersion({version: '0.0.1'}))
  }
}
