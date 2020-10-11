import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/Models/store.model';
import { StoresService } from 'src/app/Services/stores.service';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss'],
})
export class StoresComponent implements OnInit {
  Stores : Store[]=[];
  constructor(private StoresService :StoresService) { }

  ngOnInit() {
    let StoresSubsc = this.StoresService.StoresSubject.subscribe((Stores : Store[])=>{
      this.Stores=Stores;
    })

  }

}
