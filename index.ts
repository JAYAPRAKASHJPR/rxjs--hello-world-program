import { of, from } from 'rxjs';
import { map } from 'rxjs/operators';

of(1,2).pipe(map((x) => x * 8))
.subscribe((v) => console.log (v)); 
 
const arr = [10,20,30];
const res = from(arr);
res.subscribe((x) => console.log(x));

of("hello").subscribe((x) => {console.log(x + "world")});
of("hello").pipe(map((a) => a))
.subscribe((b) => console.log(b)); 