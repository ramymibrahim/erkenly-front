import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.css']
})
export class AddBranchComponent implements OnInit {

  data:any={};
  @Output() saved = new EventEmitter<boolean>();
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  save(){
    this.data['token']=localStorage.getItem('token');
    this.http.post(environment.apiURL+"add-branch",this.data).subscribe(
      data=>{
        console.log(data);
        this.saved.emit(true);
      },
      error=>{
        console.log(error); 
      }
    );
  }

}
