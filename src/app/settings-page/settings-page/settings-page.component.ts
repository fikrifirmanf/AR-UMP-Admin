import { Component, OnInit } from "@angular/core";
import { SettingsAppService } from "app/services/settings-app.service";
import { Title } from "@angular/platform-browser";
import { NgForm } from "@angular/forms";
import { FormToastrService } from "app/services/toastr.service";

@Component({
  selector: "app-settings-page",
  templateUrl: "./settings-page.component.html",
  styleUrls: ["./settings-page.component.css"],
  providers: [FormToastrService],
})
export class SettingsPageComponent implements OnInit {
  title = "Pengaturan";
  serviceBody = {
    titleApp: "",
    logoUrl: "",
    whatsappNum: "",
    whatsappNumRental: "",
    whatsappNumTravel: "",
    whatsappNumCoachBus: "",
    diskonRental: 0,
  diskonTravel: 0,
  diskonCoachBus: 0,
  };
  constructor(
    private toast: FormToastrService,
    private settingServ: SettingsAppService,
    private titleServ: Title
  ) {}

  ngOnInit(): void {
    this.onShow();
  }

  onShow() {
    this.settingServ.getById().subscribe(
      (resp) => {
        // console.log(resp);
        this.serviceBody = resp["data"];
        this.titleServ.setTitle(resp["data"].titleApp + " - Pengaturan");
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.settingServ.update(form.value).subscribe(
      (resp) => {
        if (resp["message"] == "Updated succesfully!") {
          this.toast.typeSuccess();
        } else {
          this.toast.typeError();
        }
      },
      (err) => {
        this.toast.typeError();
        console.log(err);
      }
    );
  }
}
