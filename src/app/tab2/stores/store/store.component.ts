import { Component, Input, OnInit } from '@angular/core';
import { Store } from 'src/app/Models/store.model';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent implements OnInit {
  @Input() Store : Store;
  constructor() { }

  ngOnInit() {}

}
