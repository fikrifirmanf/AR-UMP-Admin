import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BuildingService } from 'app/services/building.service';
import { FormToastrService } from 'app/services/toastr.service';
import { environment } from 'environments/environment';
import * as htmlToImage from 'html-to-image';
import * as mapboxgl from 'mapbox-gl';


@Component({
  selector: 'app-building-edit',
  templateUrl: './building-edit.component.html',
  styleUrls: ['./building-edit.component.css'],
  providers:[FormToastrService]
})
export class BuildingEditComponent implements OnInit {

  title = "Edit Gedung";
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  // latt = 45.899977;
  // lngg = 6.172652;
  zoom = 15
  debounceTime = 500;
  namaGedunge = ""
  desc = ""
  wakeUpArea = 0
  dateBuild = ""
  id;
  lat: number = 0;
  lng: number = 0;
  accuracy: number = 0
  imgStatus = false;
  constructor(private toast:FormToastrService,private buildingServ: BuildingService, private route:ActivatedRoute) {
    mapboxgl.accessToken = environment.mapbox.accessToken;
   }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id")
    localStorage.removeItem('img')
    this.getById()
    this.buildMap();
    this.getPosition()
    console.log(localStorage.getItem('img'))
  }
  options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  dataList = {
    uniqueName: "",
    name: "",
    desc: "",
    lat: 0,
    long: 0,
    wakeUpArea: 0,
    dateBuild: "",
    imgurl: "",
    typeBuilding: ""
  }
  getPosition(){
    navigator.geolocation.getCurrentPosition((pos)=>{
    this.dataList.lat = pos.coords.latitude
    this.dataList.long = pos.coords.longitude
    this.accuracy = pos.coords.accuracy
    console.log('Your current position is:');
    console.log(`Latitude : ${pos.coords.latitude}`);
    console.log(`Longitude: ${pos.coords.longitude}`);
    console.log(`More or less ${pos.coords.accuracy} meters.`);
    },(err)=>console.log(`Error ${err.code} : ${err.message}`),(this.options));
  }
  buildMap() {
    
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [this.dataList.long, this.dataList.lat]
    })
   this.map.addControl(new mapboxgl.NavigationControl());
   const marker1 = new mapboxgl.Marker()
  .setLngLat([this.dataList.long, this.dataList.lat])
  .addTo(this.map);
  }
  
  
  namaGedung(event){
    this.namaGedunge = event.target.value == "" ? this.dataList.name : event.target.value
    
  }
  descGedung(event){
    this.desc = event.target.value == "" ? this.dataList.desc : event.target.value
    
    
  }
  luasGedung(event){
    this.wakeUpArea = event.target.value
    
  }
  tglGedung(event){
    this.dateBuild = event.target.value
    
  }


  genImg(){
    var node = document.getElementById('my-node');
    localStorage.removeItem('img')

    htmlToImage.toPng(node)
      .then(function (dataUrl) {
        localStorage.setItem('getImg','true')
        localStorage.setItem('img',dataUrl)
        // var img =  document.getElementById('imgurl');
        // img.innerText = dataUrl;
       
        // var txt = dataUrl == "" ? document.createTextNode("loading...") : document.createTextNode(dataUrl)
        var loaded = dataUrl == "" ? document.createTextNode("loading...") : window.alert('Konversi sukses')
        
        // document.getElementById('loadeng').appendChild(loaded)
        
        // document.getElementById('imge').appendChild(txt)
       
        
        console.log(dataUrl)
        
        
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
   
    // console.log("WOYYY "+document.getElementById('imge').textContent)
    // console.log("eawsease "+document.getElementById('imge').textContent)
    if(localStorage.getItem('img') != null){
      this.toast.typeSuccess()
    }
  }

  getById(){
    this.buildingServ.getById(this.id).subscribe((resp)=>{
      this.dataList = resp["data"]
      console.log(this.id)
      console.log(resp)
    },(err)=>console.log(err))
  }

  onSubmit(form: NgForm) {
    
    this.dataList.imgurl = localStorage.getItem('img')
    this.dataList.name = form.controls["name"].value
    this.dataList.desc = form.controls["desc"].value
    // this.dataList.lat = form.controls['lat'].value != "" ?form.controls['lat'].value:this.lat
    // this.dataList.long = form.controls['long'].value != "" ?form.controls['long'].value:this.lng
    this.dataList.typeBuilding = form.controls["typeBuilding"].value
    this.dataList.uniqueName = form.controls["uniqueName"].value
    this.dataList.dateBuild = form.controls["dateBuild"].value
    this.dataList.wakeUpArea = form.controls["wakeUpArea"].value

    if(localStorage.getItem('img') != null && localStorage.getItem('getImg') == 'true'){

    this.buildingServ.update(this.id, this.dataList).subscribe(
      (resp) => {
        if (resp["message"] == "Updated successfully") {
          localStorage.setItem('getImg','false')
          this.toast.typeSuccess();
          // this.router.navigateByUrl(
          //   "users/" + (form.controls["userType"].value == "coachbus")
          //     ? "bus"
          //     : form.controls["userType"].value
          // );
        } else {
          this.toast.typeError();
        }
      },
      (err) => {
        console.log(err);
        this.toast.typeError();
      }
    );
    
  }else if(localStorage.getItem('getImg') == 'false') {
    this.toast.typeWarning();
  }else {
    this.toast.typeWarning();
  }
  }
}
