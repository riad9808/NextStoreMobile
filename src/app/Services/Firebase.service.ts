import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreModule } from '@angular/fire/firestore';
//import { rejects } from 'assert';
//import { resolve } from 'dns';
//import { Observable } from 'rxjs';
import { Product } from '../Models/product.models';


@Injectable()
export class FirebaseService {
    constructor(private firestore : AngularFirestore){

    }
    
    getProducts() : Promise<Product[]>{
        let x : Product[] =[]
        return  new Promise<Product[]>((resolve,reject)=>{
            
                this.firestore.collection<Product>('Products').valueChanges()
                .subscribe((data : Product[])=>{
                    data.forEach(element => {
                        x.push(element)
                    });
                   
                });
                resolve(x);
                reject("Error")
            
        });
        
    }
}