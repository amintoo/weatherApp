import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthenticationService} from '../service/authentification.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router,
              private authentificationService : AuthenticationService
    ) { }

  ngOnInit() {
    this.authentificationService.logOut();
    this.router.navigate(['login']);
  }

}
