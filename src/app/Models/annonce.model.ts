//import { Timestamp } from '@google-cloud/firestore';
import { Product } from './product.models';
import { Store } from './store.model';

export class Annonce {
    constructor(
        public idField : string,
        public date : Date,
        
        public productid : string,
        public storeid : string,
        public product ? : Product,
        public store ? : Store,
        public normaldate ? : Date
    ){}
}