import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardService } from 'src/services/authguard/authguard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private Authguardservice: AuthguardService, private router: Router) { }

  canActivate(): boolean {
    if (this.Authguardservice.gettoken()) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }

}
