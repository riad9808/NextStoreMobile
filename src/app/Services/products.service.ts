import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { element } from 'protractor';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { Product } from '../Models/product.models';

@Injectable()
export class ProductsService{

    constructor(private firestore : AngularFirestore){
        this.getProducts();
    }

    // decalration 
    // Products -> array of product
    // ProductsSubject and publishProductSubject for observable pattern
    // product emit to change subject value
    Products : Product[]=[];
    private ProductsSubscription : Subscription;
    public ProductsSubject : BehaviorSubject<Product[]> = new BehaviorSubject(undefined);
    //publishProductsSubject = this.ProductsSubject.asObservable();
    ProductsEmit(){
        this.ProductsSubject.next(this.Products);
    }

    getProducts(){
        
        this.ProductsSubscription = this.firestore.collection<Product>('Products').valueChanges({idField : 'idField'})
            .subscribe((Prods : Product[])=>{
                let ProductsLoadPromise = new Promise((resolve,reject)=>{
                    resolve (this.Products=Prods)
                    reject ("error")
                }).then(()=>
                    this.ProductsEmit()    
                ).catch((msg)=>console.log(msg))       
       })         
    }
    getProduct(id : string) : Observable<Product>{
        return this.firestore.doc<Product>('Products/'+id).valueChanges()
    }

}