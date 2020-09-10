import { Component, ViewContainerRef, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { Router, NavigationEnd } from "@angular/router";
import { filter } from "rxjs/operators";
import { Title } from "@angular/platform-browser";
import { SettingsAppService } from "./services/settings-app.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor(
    private settingServ: SettingsAppService,
    private router: Router,
    private titleServ: Title
  ) {}

  ngOnInit() {
    this.onSettings();

    this.subscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => window.scrollTo(0, 0));
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  onSettings() {
    this.settingServ.getById().subscribe(
      (resp) => {
        this.titleServ.setTitle(resp["data"]["titleApp"]);
      },
      (err) => {
        console.log(err);
        this.titleServ.setTitle("Error!");
      }
    );
  }
}
