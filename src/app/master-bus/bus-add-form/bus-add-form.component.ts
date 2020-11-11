import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BusService } from 'app/services/bus.service';
import { FormToastrService } from 'app/services/toastr.service';

@Component({
  selector: 'app-bus-add-form',
  templateUrl: './bus-add-form.component.html',
  styleUrls: ['./bus-add-form.component.css'],
  providers:[FormToastrService]
})
export class BusAddFormComponent implements OnInit {
  title= "Coach Bus"
  constructor(private router:Router,private busService:BusService, private toast:FormToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    this.busService.create(form.value).subscribe((resp)=>{
      if(resp.message == 'Data created successfully'){
        this.toast.typeSuccess()
        this.router.navigateByUrl('bus')
      }else {
        this.toast.typeError()
      }
    },(err)=>{
      console.log(err)
      this.toast.typeError()
    })
  }


}
