import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { catchError } from "rxjs/operators";
import { MessagesService } from "../../../alerts/services/messages.service";


@Injectable({
  providedIn: 'root'
})
export class BookShelvesListService {

  baseURL = 'https://www.googleapis.com/books/v1/';

  constructor(private http: HttpClient, private alertService: MessagesService) { }

  getBookShelvesList(id?:string):Observable<any> {
    let url = this.baseURL + 'users/109173561887505985909/bookshelves';
    if(id){
      url = url + `/${id}`;
    }
    return this.http.get(url)
    .pipe(
      catchError(this.handleError('Obtener lista de libros', []))
    );
  }

  private handleError<T>(operation = 'operation', results?:T) {
    return (error:any):Observable<T> => {
      console.error(error);
      this.messages(`${operation} ha fallado: ${error.message}`);
      return of(results as T);

    }
  }

  private messages (msg: string) {
    let type = "error";
    this.alertService.message({msg: msg, type: type});
  }
}
