import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


// export interface User {
//   name: string;
//   pass: string;
// }

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) {
      console.log('Initiated Login Service');
    }

  validateUser(name: string, pass: string): Observable<Object> {
    console.log('[NOTE] LoginService::validateUser(name, pass) recieved name: ' + name + ' pass: ' + pass);
    // /api/validateUser?name=mubeen&pass=fast123
    const url = 'http://localhost:8000/api/validateUser?name=' + name + '&pass=' + pass;
    //var url = 'http://localhost:8000/';
    console.log('requesting', url);
    // if (this.http.get(url)) {
    //   console.log('[NOTE] Request Success' );
    // } else {
    //   console.log('[ERROR] Request Failes' );
    // }
    // console.log('response = ' + response);
    return this.http.get<string>(url);

  }

//   getAllCats(): Observable<Cat[]> {
//     return this.http.get<Cat[]>('http://localhost:8000/api/cats')
//   }

//   getCat(name: string): Observable<Cat> {
//     return this.http.get<Cat>('http://localhost:8000/api/cats/' + name)
//   }

//   insertCat(cat: Cat): Observable<Cat> {
//     return this.http.post<Cat>('http://localhost:8000/api/cats/', cat)
//   }

//   updateCat(cat: Cat): Observable<void> {
//     return this.http.put<void>(
//       'http://localhost:8000/api/cats/' + cat.name,
//       cat
//     )
//   }

//   deleteCat(name: string) {
//     return this.http.delete('http://localhost:8000/api/cats/' + name)
//   }
}