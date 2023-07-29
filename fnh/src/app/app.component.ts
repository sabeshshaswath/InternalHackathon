import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count = 0;
  title = 'fnh';
  stu:any[]= [];

  
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.getData();
  }

  HandleSubmit(postdata: { name: String, cgpa: Number, doj: String }) {
    this.http.post(`http://localhost:3002/data`, postdata).subscribe(
      (response) => {
        console.log('Response from server:', response);
        alert("Submitted");
        // this.getData();
      },
      (error) => {
        console.error('Error occurred:', error);
      }
    );
    this.getData();

  }
  getData() {
    this.http.get<any[]>("http://localhost:3002/studetail")
      .subscribe((data) => {
        this.stu=data
      });
  }
  
}
