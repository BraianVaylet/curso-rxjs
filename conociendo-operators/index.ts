import {Observable, Observer} from 'rxjs';
import { map, filter } from 'rxjs/operators';



const myObservable = new Observable(
  subscriber => {
    subscriber.next('holis');
    subscriber.next(10);
    subscriber.next(20);
    subscriber.error('Holis soy un error jiji');
  }
);
const myObservable2 = new Observable(
  subscriber => {
    subscriber.complete();
  }
)

// myObservable.subscribe(myObserver);
const mpipe = myObservable.pipe(
  filter((r:any) => !isNaN(r)),
  map((r: any)=> {
    return r + 10;
  })
);


const myObserver: Observer<any> = {
  next : x => {
    console.log(x);
  },
  error: err => console.error(`AHHH TE EQUIVOCASTE`, err),
  complete: () => console.log('mi trabajo aqui esta realizado')
};

mpipe.subscribe(myObserver);