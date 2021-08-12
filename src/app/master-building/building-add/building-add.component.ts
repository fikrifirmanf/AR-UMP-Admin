import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BuildingService } from 'app/services/building.service';
import { FormToastrService } from 'app/services/toastr.service';
import { ToastrService } from "ngx-toastr";
import * as htmlToImage from 'html-to-image';
import { environment } from 'environments/environment';
import * as mapboxgl from 'mapbox-gl';
import { WindowService } from '@ng-select/ng-select/ng-select/window.service';


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
  wakeUpArea
  dateBuild
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  // latt = 45.899977;
  // lngg = 6.172652;
  zoom = 15

  statistics:any
  tgl;
  lat: number = -7.412207679837826;
  lng: number = 109.27170037031276;
  accuracy: number = 0
  constructor(
   
    private buildingServ: BuildingService,
    private toast: FormToastrService,
    public toastr: ToastrService
  ) {
    mapboxgl.accessToken = environment.mapbox.accessToken;
  }

  ngOnInit(): void {
    localStorage.removeItem('img')
    this.getPosition()
    this.buildMap()
  }
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

  options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
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
    this.namaGedunge = event.target.value
    
  }
  descGedung(event){
    this.desc = event.target.value
    
  }
  
  luasGedung(event){
    this.wakeUpArea = event.target.value
    
  }
  tglGedung(event){
    this.dateBuild = event.target.value
    
  }
  

  genImg(){
    localStorage.removeItem('img')
    var node = document.getElementById('my-node');

    htmlToImage.toPng(node)
      .then(function (dataUrl) {
        localStorage.setItem('getImg','true')
        localStorage.setItem('img',dataUrl)
        
        // var img =  document.getElementById('imgurl');
        // img.innerText = dataUrl;
       
        // var txt = dataUrl == "" ? document.createTextNode("loading...") : document.createTextNode(dataUrl)
        var loaded = dataUrl == "" ? document.createTextNode("loading...") : window.alert('Konversi sukses!')
        
        // document.getElementById('loadeng').appendChild(loaded)
        // document.getElementById('imge').appendChild(txt)
        // console.log(dataUrl)
        
        
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
   
    // console.log("WOYYY "+document.getElementById('imge').textContent)
    // console.log("eawsease "+document.getElementById('imge').textContent)
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
    
    console.log("rrq "+ this.dataList.imgurl)
    console.log(this.lat)
    console.log(form.controls["name"].value)
    if(localStorage.getItem('img') != null && localStorage.getItem('getImg') == 'true'){
      
    
    this.buildingServ.create(this.dataList).subscribe(

      (res) => {
        console.log(this.dataList)
       
        if (res["message"] === "Created successfully") {
          localStorage.setItem('getImg','false')
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
  }else if(localStorage.getItem('getImg') == 'false'){
    this.toast.typeWarning()
  }else {
    this.toast.typeWarning()
  }}
}
