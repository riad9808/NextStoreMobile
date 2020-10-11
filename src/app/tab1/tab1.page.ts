import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Annonce } from '../Models/annonce.model';
import { AnnoncesService } from '../Services/annonces.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  Annonces : Annonce[]=[];
  constructor(private AnnonceService : AnnoncesService) {}
  ngOnInit(){
    let AnnoncesSubsc : Subscription = this.AnnonceService.AnnoncesSubject.subscribe((Annonces : Annonce[])=>{
      this.Annonces=Annonces;
    })
  } 
}
