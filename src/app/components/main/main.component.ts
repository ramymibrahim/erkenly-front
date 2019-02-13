import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
declare var $
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }
  branches: Array<any>=[];
  companyName: string = 'Company1';
  branch:any;
  ngOnInit() {
    this.http.get(environment.apiURL + "companies?token=" + localStorage.getItem('token')).subscribe(
      (data: any) => {
        console.log(data);
        this.companyName=data.image;
        this.branches=data.branches;
      },
      error => {
        console.log(error);

      }
    );
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/admin']);
  }

  editPrice() {
    $('#editPriceModal').modal('show');
  }


  editHours() {
    $('#editHoursModal').modal('show');
  }


  editCapacity() {
    $('#editCapacityModal').modal('show');
  }


  addBranch() {
    $('#addBranchModal').modal('show');
  }

  added(){
    this.http.get(environment.apiURL + "companies?token=" + localStorage.getItem('token')).subscribe(
      (data: any) => {
        console.log(data);
        this.companyName=data.image;
        this.branches=data.branches;
      },
      error => {
        console.log(error);

      }
    );
    $('#addBranchModal').modal('show');
  }
}
