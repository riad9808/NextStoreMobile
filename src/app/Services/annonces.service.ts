import { Injectable } from "@angular/core";
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { Annonce } from '../Models/annonce.model';
import { Product } from '../Models/product.models';
import { Store } from '../Models/store.model';
import { ProductsService } from './products.service';
import { StoresService } from './stores.service';


@Injectable()
export class AnnoncesService{
    constructor(private firestore : AngularFirestore,
                private ProductService : ProductsService,
                private StoreService : StoresService)  
                {
                    this.getAnnonces();
                }

    Annonces : Annonce[]= [];
    public AnnoncesSubject : BehaviorSubject<Annonce[]> = new BehaviorSubject(undefined);
    AnnonceEmit(){
        this.AnnoncesSubject.next(this.Annonces);
    }            
    getAnnonces(){
        this.firestore.collection<Annonce>('posts').valueChanges({idField:'idField'})
            .subscribe((Annonces : Annonce[])=>{
                Annonces.forEach(element => {
                   // element.normaldate= element.date.toDate();
                   this.ProductService.getProduct(element.productid).subscribe((Prod : Product)=>{
                        element.product = Prod;
                   })
                   this.StoreService.getStore(element.storeid).subscribe((store : Store)=>{
                        element.store = store;
                })
                });

                let ProductsLoadPromise = new Promise((resolve,reject)=>{
                    resolve (this.Annonces=Annonces)
                    reject ("error")
                }).then(()=>
                    this.AnnonceEmit()    
                ).catch((msg)=>console.log(msg))  
                console.log(Annonces);
            })
    }
}