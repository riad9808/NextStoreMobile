import { Component, Input, OnInit } from '@angular/core';
import { Annonce } from 'src/app/Models/annonce.model';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.scss'],
})
export class AnnonceComponent implements OnInit {
  @Input() Annonce : Annonce;
  
  constructor() { }

  ngOnInit() {
    
  }

}
