import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SettingsPageRoutingModule } from "./settings-page-routing.module";
import { SettingsPageComponent } from "./settings-page/settings-page.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [SettingsPageComponent],
  imports: [CommonModule, SettingsPageRoutingModule, FormsModule],
})
export class SettingsPageModule {}
