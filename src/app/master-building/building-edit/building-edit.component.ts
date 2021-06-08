import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BuildingService } from 'app/services/building.service';

@Component({
  selector: 'app-building-edit',
  templateUrl: './building-edit.component.html',
  styleUrls: ['./building-edit.component.css']
})
export class BuildingEditComponent implements OnInit {

  id;
  constructor(private buildingServ: BuildingService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id")
    this.getById()
  }

  getById(){
    this.buildingServ.getById(this.id).subscribe((resp)=>{
      console.log(this.id)
      console.log(resp)
    },(err)=>console.log(err))
  }

}
