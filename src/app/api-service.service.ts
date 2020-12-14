import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

   // The getAll method is used to retrieve information from the given server using a given URI
   public getAll<Object>(apiUrl): Observable<Object> {
    return this.http.get<Object>(apiUrl).catch(this.handleError);
  }

  public handleError(err){    
    return Observable.throw(err)
  } 
}
