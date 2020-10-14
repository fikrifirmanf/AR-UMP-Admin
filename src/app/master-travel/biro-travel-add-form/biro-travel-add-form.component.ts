import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BiroTravelService } from 'app/services/biro-travel.service';
import { FormToastrService } from 'app/services/toastr.service';
import { UsersService } from 'app/services/users.service';
import { Select2OptionData } from 'ng-select2';
import { Options } from "select2";
@Component({
  selector: 'app-biro-travel-add-form',
  templateUrl: './biro-travel-add-form.component.html',
  styleUrls: ['./biro-travel-add-form.component.css'],
  providers:[FormToastrService]
})
export class BiroTravelAddFormComponent implements OnInit {
  constructor(
    private biroServ: BiroTravelService,
    private toast: FormToastrService,
    private userServ: UsersService
  ) {}

  ngOnInit(): void {
    this.getAgentList()
  }
  public options: Options;
  dataAgentName = ""
  public travelAgentList : Array<Select2OptionData>;
  title = "Tambah Biro Travel";
  onSubmit(form: NgForm) {
    this.biroServ.create(form.value).subscribe(
      (resp) => {
        console.log(resp);
        if (resp["message"] == "Created successfully") {
          this.toast.typeSuccess();
        } else  {
          this.toast.typeError();
        }
      },
      (err) => {
        console.log(err);
      
          this.toast.typeError();
        }
      
    );
  }
  getAgentName(form:NgForm){
    this.userServ.getById(form.controls['idTravelAgent'].value).subscribe((resp)=>{
      this.dataAgentName = resp["data"]["name"]
    })
  }
  getAgentList(){
    this.options = {
      width: "340",
      height: "100",
    };
    this.userServ.getUserType("travel").subscribe((resp)=>{
      var arr = [];
      var agent = []

        for (let i = 0; i < resp["data"].length; i++) {
          var x = resp["data"][i]["_id"];
          var t = resp["data"][i]["name"];

          arr.push({ id: x, text: t });
          agent.push(t)
        }
        console.log(arr);
        this.travelAgentList = arr;
      
    },(err)=>console.log(err))
  }
}
