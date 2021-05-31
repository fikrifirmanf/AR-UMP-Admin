import { NgModule } from "@angular/core";
import { RouterModule, Routes, PreloadAllModules } from "@angular/router";

import { FullLayoutComponent } from "./layouts/full/full-layout.component";
import { ContentLayoutComponent } from "./layouts/content/content-layout.component";

import { Full_ROUTES } from "./shared/routes/full-layout.routes";
import { CONTENT_ROUTES } from "./shared/routes/content-layout.routes";

import { AuthGuard } from "./shared/auth/auth-guard.service";
import { LoginPageComponent } from "./login-page/login-page.component";

const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full",
  },
  {
    path: "login",
    component: LoginPageComponent,
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
  { path: 'master-building', loadChildren: () => import('./master-building/master-building.module').then(m => m.MasterBuildingModule) },
  // {
  //   path: "transaksi-travel",
  //   loadChildren: () =>
  //     import("./transaksi-travel/transaksi-travel.module").then(
  //       (m) => m.TransaksiTravelModule
  //     ),
  // },
 
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
