import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { CanActivate, CanDeactivate } from "@angular/router";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate() : Observable<boolean> {
    // if(!localStorage.getItem('bzgBooksAppToken')){
    //   this.router.navigate(['/login']);
    //   return of(false);
    // }
    return of(true);
  }
  
}
