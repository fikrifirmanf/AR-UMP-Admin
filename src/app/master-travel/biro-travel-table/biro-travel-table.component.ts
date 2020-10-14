import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { BiroTravelService } from 'app/services/biro-travel.service';
import { FormToastrService } from 'app/services/toastr.service';

@Component({
  selector: 'app-biro-travel-table',
  templateUrl: './biro-travel-table.component.html',
  styleUrls: ['./biro-travel-table.component.css'],
  providers:[FormToastrService]
})
export class BiroTravelTableComponent implements OnInit {
  rows = [];
  title = "Biro Travel";
  temp = [];

  // Table Column Titles
  columns = [
    { prop: "namaBiro", name: "Nama" },
    { prop: "noTelpBiro", name: "No Hp" },
    { prop: "alamatBiro", name: "Alamat" },
    {prop: "travelAgentData.agentName",name: "Agen"},
    { prop: "_id", name: "Aksi" },
  ];
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;
  constructor(private toast:FormToastrService,private biroServ:BiroTravelService) { }

  ngOnInit(): void {
    this.onShow()
  }
  onShow(){
    this.biroServ.getAll().subscribe((resp)=>{
      this.rows = resp["data"];
      this.temp = resp["data"];
    },(err)=>{
      console.log(err)
    })
  }
  onDelete(id){
    this.biroServ.delete(id).subscribe((resp)=>{
      if(resp['message']=="Deleted successfully!"){
        this.toast.typeDelete()
        this.onShow()
      }else{
        this.toast.typeError()
      }
    },(err)=>{
      console.log(err)
      this.toast.typeError()
    })
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function (d) {
      return d.namaBiro.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

}
