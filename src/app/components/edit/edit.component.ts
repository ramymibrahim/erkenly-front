import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Input() field: string;
  @Input() branch_id: number;
  error: boolean = false;
  data: any={};
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  edit() {
    this.error = false;
    this.data['token'] = localStorage.getItem('token');
    this.data['branch_id'] = this.branch_id;    
    console.log(this.data);
    
    this.http.put(environment.apiURL + "change-" + this.field, this.data).subscribe(
      data => {
        console.log(data);
      },
      error => {
        this.error = true;
        console.log(error);

      }
    );
  }
}
