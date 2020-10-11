import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { rejects } from 'assert';
import { resolve } from 'dns';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Store } from '../Models/store.model';


@Injectable()
export class StoresService{
    constructor(private firestore : AngularFirestore){
        this.getStores();
    }
    Stores : Store[] = [];
    private StoresSubscription : Subscription;
    public StoresSubject : BehaviorSubject<Store[]> = new BehaviorSubject(undefined);
    storesEmit(){
        this.StoresSubject.next(this.Stores);
    }

    getStores(){
        this.StoresSubscription = this.firestore.collection('Stores').valueChanges({idField : 'idField'})
            .subscribe((Stores : Store[])=>{
                let StoresLoadPromise = new Promise ((resolve,reject)=>{
                    resolve(this.Stores=Stores)
                    reject("error loading stores")
                }).then(()=>this.storesEmit()).catch((msg)=>console.log(msg))
            })
    }
    getStore(id : string) : Observable<Store>{
        return this.firestore.doc<Store>('Stores/'+id).valueChanges()
    }
}