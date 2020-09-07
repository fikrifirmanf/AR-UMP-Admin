import { Component, OnInit, ViewChild } from "@angular/core";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { UsersService } from "app/services/users.service";

@Component({
  selector: "app-users-travel",
  templateUrl: "./users-travel.component.html",
  styleUrls: ["./users-travel.component.css"],
})
export class UsersTravelComponent implements OnInit {
  rows = [];
  title = "Agen Travel";
  temp = [];

  // Table Column Titles
  columns = [
    { prop: "name", name: "Nama" },
    { prop: "username", name: "Username" },
    { prop: "email", name: "Email" },
    { prop: "mobileNum", name: "No HP" },
    { prop: "address", name: "Alamat" },
    { prop: "action", name: "Aksi" },
  ];
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;

  constructor(private userService: UsersService) {}
  ngOnInit() {
    this.onShow();
  }
  onShow() {
    this.userService.getUserType("travel").subscribe(
      (resp) => {
        this.rows = resp["data"];
        this.temp = resp["data"];
        console.log(resp["data"]);
      },
      (err) => console.log(err)
    );
  }

  // testUsers() {
  //   this.userService.getAllUsers().subscribe(
  //     (resp) => {
  //       this.rows = resp["data"];
  //       this.temp = resp["data"];
  //     },
  //     (err) => console.log(err)
  //   );
  // }

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
