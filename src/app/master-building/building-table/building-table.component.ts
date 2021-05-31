import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { BuildingService } from 'app/services/building.service';
import { FormToastrService } from 'app/services/toastr.service';

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
  // Table Column Titles
  columns = [ 
    { prop: "uniqueName", name: "Gedung ID" },
    { prop: "name", name: "Nama Gedung" },
    { prop: "lat", name: "Latitude" },
    { prop: "long", name: "Longitude" },
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
            this.totalBuilding = resp["data"].length
          },(err)=>console.log(err))
          break;
        case "lain":
          this.title = "Gedung Lain"
          this.buildingServ.getByType('lain').subscribe(resp =>{
            this.rows = resp["data"];
            this.temp = resp["data"];
            this.totalBuilding = resp["data"].length
          },(err)=>console.log(err))
          break
        default:
          break;
      }
    })
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
