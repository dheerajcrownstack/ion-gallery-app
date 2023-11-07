import { Component } from '@angular/core';
import { IAppState } from '../store';
import { Store } from '@ngrx/store';
import { getVersion } from '../store/version/verison.selector';
import { Observable } from 'rxjs';
import { IVersionPayload } from '../types';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  version: string = '';

  constructor(
    private store: Store<IAppState>
  ) {
    this.store.select(getVersion).subscribe((version) => this.version = version);
  }

}
