import { Component, OnInit } from '@angular/core';
 import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { HttpClient,HttpEventType } from '@angular/common/http';
import { UserService } from  '../../user.service';



@Component({
  selector: 'app-createpdf',
  templateUrl: './createpdf.component.html',
  styleUrls: ['./createpdf.component.css']
})
export class CreatepdfComponent implements OnInit {

  
  //folderId = '5d70b1cfdaa6fb5d96ee6217';
 
  constructor(private formBuilder: FormBuilder, private uploadService: UserService) { }
 
  ngOnInit() {
    
  }





  

}
