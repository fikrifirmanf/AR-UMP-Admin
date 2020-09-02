import { NgModule } from "@angular/core";
import { RouterModule, Routes, PreloadAllModules } from "@angular/router";

import { FullLayoutComponent } from "./layouts/full/full-layout.component";
import { ContentLayoutComponent } from "./layouts/content/content-layout.component";

import { Full_ROUTES } from "./shared/routes/full-layout.routes";
import { CONTENT_ROUTES } from "./shared/routes/content-layout.routes";

import { AuthGuard } from "./shared/auth/auth-guard.service";

const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full",
  },
  {
    path: "",
    component: FullLayoutComponent,
    data: { title: "full Views" },
    children: Full_ROUTES,
    canActivate: [AuthGuard],
  },
  {
    path: "",
    component: ContentLayoutComponent,
    data: { title: "content Views" },
    children: CONTENT_ROUTES,
    canActivate: [AuthGuard],
  },
  {
    path: "transaksi-travel",
    loadChildren: () =>
      import("./transaksi-travel/transaksi-travel.module").then(
        (m) => m.TransaksiTravelModule
      ),
  },
  { path: 'transaksi-coachbus', loadChildren: () => import('./transaksi-coachbus/transaksi-coachbus.module').then(m => m.TransaksiCoachbusModule) },
  {
    path: "**",
    redirectTo: "pages/error",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
