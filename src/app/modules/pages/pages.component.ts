import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/common/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  public registerStatus = false;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  public logout() {
    this.auth.logout();
    this.router.navigate(['login']);
  }


  enable_register(event) {
    this.registerStatus = event;
  }
}
