import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AfService } from '../providers/af.service';
import { map, tap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SubscriberGuard implements CanActivate {
  constructor(private af: AfService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.af.user$.pipe(
      take(1),
      map(user => user && user.roles.subscriber ? true : false),
      tap(isAdmin => {
        if (!isAdmin) {
          console.error("Access denied - Subscribers only allowed")
        }
      })
    )
  }
};
