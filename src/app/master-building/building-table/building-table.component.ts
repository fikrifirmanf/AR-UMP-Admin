import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { BuildingService } from 'app/services/building.service';
import { FormToastrService } from 'app/services/toastr.service';
import * as alertFunctions from '../../shared/data/sweet-alerts';
import swal from 'sweetalert2';

@Component({
  selector: 'app-building-table',
  templateUrl: './building-table.component.html',
  styleUrls: ['./building-table.component.css'],
  providers: [FormToastrService]
})
export class BuildingTableComponent implements OnInit {

  constructor(private toast: FormToastrService,private buildingServ: BuildingService, private activeRoute: ActivatedRoute) { }

  tData: boolean = false;
  rows = [];
  title:string;
  temp = [];
  totalBuilding:any
  datalist:any
  // Table Column Titles
  columns = [ 
    { prop: "uniqueName", name: "Gedung ID" },
    { prop: "name", name: "Nama Gedung" },
    { prop: "lat", name: "Latitude" },
    { prop: "long", name: "Longitude" },
    { prop: "wakeUpArea", name: "Luas" },
    { prop: "_id", name: "Aksi" },
  ];
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;

  ngOnInit(): void {
    this.activeRoute.data.subscribe(data => {
      switch (data.cat) {
        case "fakultas":
          this.tData = true
          this.title = "Gedung Fakultas"
          this.buildingServ.getByType('fakultas').subscribe(resp =>{
            this.rows = resp["data"];
            this.temp = resp["data"];
            this.datalist = resp["data"]
            this.totalBuilding = resp["data"].length
          },(err)=>console.log(err))
          break;
        case "lain":
          this.title = "Gedung Lain"
          this.buildingServ.getByType('lain').subscribe(resp =>{
            this.rows = resp["data"];
            this.temp = resp["data"];
            this.datalist = resp["data"]
            this.totalBuilding = resp["data"].length
          },(err)=>console.log(err))
          break
        default:
          break;
      }
    })
  }
  
  //  HTML Alert
  
  htmlAlert(val) {
    console.log(val)
   
    this.buildingServ.getById(val).subscribe(
      (res) => {
        swal.fire({
          width: "50%",
          title: 'Detail <small>Gedung</small>',
          html: "<table style='padding: 5px;text-align:left;table-layout: fixed;'><tr><td style='word-wrap:break-word'>Nama Gedung </td><td> : </td><td style='text-align:left'>"+res["data"]["name"]+"</td></tr><tr><td style='word-wrap:break-word;text-align:left'>Deskripsi</td><td> : </td><td style='word-wrap:break-word;text-align:left'>"+res["data"]["desc"]+"</td></tr><tr><td style='word-wrap:break-word;text-align:left'>Latitude</td><td> : </td><td style='word-wrap:break-word;text-align:left'>"+res["data"]["lat"]+"</td></tr><tr><td style='word-wrap:break-word;text-align:left'>Longitude</td><td> : </td><td style='word-wrap:break-word;text-align:left'>"+res["data"]["long"]+"</td></tr><tr><td style='word-wrap:break-word;text-align:left'>Luas</td><td> : </td><td style='word-wrap:break-word;text-align:left'>"+res["data"]["wakeUpArea"]+" m2</td></tr><tr><td style='word-wrap:break-word;text-align:left'>Dibangun pada</td><td> : </td><td style='word-wrap:break-word;text-align:left'>"+res["data"]["dateBuild"]+"</td></tr><tr><td style='word-wrap:break-word;text-align:left'>AR Object</td><td> : </td><td style='word-wrap:break-word;text-align:left'><img src='"+res["data"]["imgurl"]+"' width= '50%'></td></tr></table>"
        
        })
       console.log( res["data"]["_id"])
      },
      (err) => {
        console.log(err);
      }
    );
      
      
}
  onDelete(id) {
    this.tData = false;

    this.buildingServ.delete(id).subscribe(
      (res) => {
        if (res["message"] === "Deleted successfully") {
          this.toast.typeDelete();
        } else {
          this.toast.typeError();
        }
        this.ngOnInit();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    // filter our data
    const temp = this.temp.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }


}
