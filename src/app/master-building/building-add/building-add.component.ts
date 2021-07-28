import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BuildingService } from 'app/services/building.service';
import { FormToastrService } from 'app/services/toastr.service';
import * as htmlToImage from 'html-to-image';

@Component({
  selector: 'app-building-add',
  templateUrl: './building-add.component.html',
  styleUrls: ['./building-add.component.css'],
  providers: [FormToastrService]
})
export class BuildingAddComponent implements OnInit {
  title = "Tambah Gedung";
  
  debounceTime = 500;
  namaGedunge
  desc
  lat: number = -7.412207679837826;
  lng: number = 109.27170037031276;
  accuracy: number = 0
  constructor(
   
    private buildingServ: BuildingService,
    private toast: FormToastrService
  ) {}

  ngOnInit(): void {
    this.getPosition()
  }
  dataList = {
    uniqueName: "",
    name: "",
    desc: "",
    lat: 0,
    long: 0,
    imgurl: "",
    typeBuilding: ""
  }

  options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  getPosition(){
    navigator.geolocation.getCurrentPosition((pos)=>{
    this.lat = pos.coords.latitude
    this.lng = pos.coords.longitude
    this.accuracy = pos.coords.accuracy
    console.log('Your current position is:');
    console.log(`Latitude : ${pos.coords.latitude}`);
    console.log(`Longitude: ${pos.coords.longitude}`);
    console.log(`More or less ${pos.coords.accuracy} meters.`);
    },(err)=>console.log(`Error ${err.code} : ${err.message}`),(this.options));
  }
  
  namaGedung(event){
    this.namaGedunge = event.target.value
    
  }
  descGedung(event){
    this.desc = event.target.value
    
  }

  

  genImg(){
    var node = document.getElementById('my-node');

    htmlToImage.toPng(node)
      .then(function (dataUrl) {
        
        // var img =  document.getElementById('imgurl');
        // img.innerText = dataUrl;
       
        var txt = dataUrl == "" ? document.createTextNode("loading...") : document.createTextNode(dataUrl)
        var loaded = dataUrl == "" ? document.createTextNode("loading...") : document.createTextNode("Konversi sukses!")
        
        document.getElementById('loadeng').appendChild(loaded)
        document.getElementById('imge').appendChild(txt)
        console.log(dataUrl)
        
        
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
   
    console.log("WOYYY "+document.getElementById('imge').textContent)
    console.log("eawsease "+document.getElementById('imge').textContent)
  }
  
  onSubmit(form: NgForm) {
    this.dataList.imgurl = document.getElementById('imge').textContent
    this.dataList.name = form.controls["name"].value
    this.dataList.desc = form.controls["desc"].value
    this.dataList.lat = form.controls['lat'].value != "" ?form.controls['lat'].value:this.lat
    this.dataList.long = form.controls['long'].value != "" ?form.controls['long'].value:this.lat
    this.dataList.typeBuilding = form.controls["typeBuilding"].value
    this.dataList.uniqueName = form.controls["uniqueName"].value
    
    console.log("rrq "+ this.dataList.imgurl)
    console.log(this.lat)
    console.log(form.controls["name"].value)
    if(this.dataList.imgurl != ""){
      
    
    this.buildingServ.create(this.dataList).subscribe(

      (res) => {
        console.log(this.dataList)
       
        if (res["message"] === "Created successfully") {
          this.toast.typeSuccess();
          
          // this.router.navigateByUrl(`building/${}`);
        } else {
          this.toast.typeError();
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }else {
    this.toast.typeWarning()
  }}
}
