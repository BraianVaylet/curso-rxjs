import {Observable, Observer} from 'rxjs';


const myObserver: Observer<any> = {
  next : x => {
    if(!isNaN(x)) {
      console.log(x + 10);
    } else {
      console.log(`'${x}': no es un numero, ponele voluntadddddddd`);
    }
  },
  error: err => console.error(`AHHH TE EQUIVOCASTE`, err),
  complete: () => console.log('mi trabajo aqui esta realizado')
};

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