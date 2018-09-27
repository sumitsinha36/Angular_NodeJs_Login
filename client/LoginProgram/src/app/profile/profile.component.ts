import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ThrowStmt } from '@angular/compiler';
import { Router } from '@angular/router';
import { MenuService } from '../services/menu.service';
import { RestApi } from '../services/rest.api';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private email = '';
  private password = '';
  private btnEnabled = false;
  constructor(private restApi: RestApi, private dataSeervice: DataService, private router: Router, private menuService: MenuService) { }


  ngOnInit() {

//     var data = await this.restApi.post("http://localhost:3001/api/auth/login", {
//       email: this.email,
//       password: this.password
//     });

  }



}
