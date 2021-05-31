import { Component, OnInit, AfterViewInit } from "@angular/core";
import * as Chartist from "chartist";
import { ChartType, ChartEvent } from "ng-chartist";
import { DatePipe } from "@angular/common";
import { Title } from "@angular/platform-browser";
import { AuthService } from "app/services/auth.service";
import { UsersService } from "app/services/users.service";
import { FormToastrService } from "app/services/toastr.service";

declare var require: any;

const data: any = require("../../shared/data/chartist.json");

export interface Chart {
  type: ChartType;
  data: Chartist.IChartistData;
  options?: any;
  responsiveOptions?: any;
  events?: ChartEvent;
}

@Component({
  selector: "app-dashboard1",
  templateUrl: "./dashboard1.component.html",
  styleUrls: ["./dashboard1.component.scss"],
  providers: [DatePipe, FormToastrService],
})
export class Dashboard1Component implements OnInit, AfterViewInit {
  constructor(
    private titleServ: Title,
    public toast:FormToastrService,
    private authServ: AuthService,
    private userServ: UsersService
  ) {}
  tgl;
  lat: number = -7.412207679837826;
  lng: number = 109.27170037031276;
  // Line area chart configuration Starts
  ngOnInit() {
    this.checkUser();
  }
  ngAfterViewInit() {

    // this.showStatistik();
  
  }
  clickedMarker(lat: number, lng: number) {
    this.toast.typeSuccess()
    }

  checkUser() {
    this.userServ.getById(localStorage.getItem("user_id")).subscribe((resp) => {
      if (resp["data"]["userType"] != "admin") {
        window.alert("Access not allowed!");
        this.authServ.doLogout();
      }
    });
  }

  statistikList = {
    totalUser: 0,
    rental: 0,
    travel: 0,
    coachbus: 0,
  };
  transRentalList = [];
  chartDataRental = {
    labels: [],
    series: [[], []],
  };

  // showStatistik() {
  //   this.statistikServ.getAll().subscribe(
  //     (resp) => {
  //       this.statistikList.totalUser = resp["data"]["totalUser"];
  //       this.statistikList.rental =
  //         resp["data"].totalTransaksiRental[0].totalTransaksi;
  //       this.statistikList.travel =
  //         resp["data"].totalTransaksiTravel[0].totalTransaksi;
  //       this.statistikList.coachbus =
  //         resp["data"].totalTransaksiCoachBus[0].totalTransaksi;
  //       // console.log(resp["data"]);
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   );
  // }

  
  // Line area chart configuration Ends

  // Stacked Bar chart configuration Starts
  Stackbarchart: Chart = {
    type: "Bar",
    data: data["Stackbarchart"],
    options: {
      stackBars: true,
      fullWidth: true,
      axisX: {
        showGrid: false,
      },
      axisY: {
        showGrid: false,
        showLabel: false,
        offset: 0,
      },
      chartPadding: 30,
    },
    events: {
      created(data: any): void {
        var defs = data.svg.elem("defs");
        defs
          .elem("linearGradient", {
            id: "linear",
            x1: 0,
            y1: 1,
            x2: 0,
            y2: 0,
          })
          .elem("stop", {
            offset: 0,
            "stop-color": "rgba(0, 201, 255,1)",
          })
          .parent()
          .elem("stop", {
            offset: 1,
            "stop-color": "rgba(17,228,183, 1)",
          });
      },
      draw(data: any): void {
        if (data.type === "bar") {
          data.element.attr({
            style: "stroke-width: 5px",
            x1: data.x1 + 0.001,
          });
        } else if (data.type === "label") {
          data.element.attr({
            y: 270,
          });
        }
      },
    },
  };
  // Stacked Bar chart configuration Ends

  // Line area chart 2 configuration Starts
  lineArea2: Chart = {
    type: "Line",
    data: this.chartDataRental,
    options: {
      showArea: true,
      fullWidth: true,
      lineSmooth: Chartist.Interpolation.none(),
      axisX: {
        showGrid: false,
      },
      axisY: {
        low: 0,
        scaleMinSpace: 50,
      },
    },
    responsiveOptions: [
      [
        "screen and (max-width: 640px) and (min-width: 381px)",
        {
          axisX: {
            labelInterpolationFnc: function (value, index) {
              return index % 2 === 0 ? value : null;
            },
          },
        },
      ],
      [
        "screen and (max-width: 380px)",
        {
          axisX: {
            labelInterpolationFnc: function (value, index) {
              return index % 3 === 0 ? value : null;
            },
          },
        },
      ],
    ],
    events: {
      created(data: any): void {
        var defs = data.svg.elem("defs");
        defs
          .elem("linearGradient", {
            id: "gradient2",
            x1: 0,
            y1: 1,
            x2: 0,
            y2: 0,
          })
          .elem("stop", {
            offset: 0,
            "stop-opacity": "0.2",
            "stop-color": "rgba(255, 255, 255, 1)",
          })
          .parent()
          .elem("stop", {
            offset: 1,
            "stop-opacity": "0.2",
            "stop-color": "rgba(0, 201, 255, 1)",
          });

        defs
          .elem("linearGradient", {
            id: "gradient3",
            x1: 0,
            y1: 1,
            x2: 0,
            y2: 0,
          })
          .elem("stop", {
            offset: 0.3,
            "stop-opacity": "0.2",
            "stop-color": "rgba(255, 255, 255, 1)",
          })
          .parent()
          .elem("stop", {
            offset: 1,
            "stop-opacity": "0.2",
            "stop-color": "rgba(132, 60, 247, 1)",
          });
      },
      draw(data: any): void {
        var circleRadius = 4;
        if (data.type === "point") {
          var circle = new Chartist.Svg("circle", {
            cx: data.x,
            cy: data.y,
            r: circleRadius,
            class: "ct-point-circle",
          });
          data.element.replace(circle);
        } else if (data.type === "label") {
          // adjust label position for rotation
          const dX = data.width / 2 + (30 - data.width);
          data.element.attr({ x: data.element.attr("x") - dX });
        }
      },
    },
  };
  // Line area chart 2 configuration Ends

  // Line chart configuration Starts
  lineChart: Chart = {
    type: "Line",
    data: this.chartDataRental,
    options: {
      axisX: {
        showGrid: false,
      },
      axisY: {
        showGrid: false,
        showLabel: false,
        low: 0,
        high: 100,
        offset: 0,
      },
      fullWidth: true,
      offset: 0,
    },
    events: {
      draw(data: any): void {
        var circleRadius = 4;
        if (data.type === "point") {
          var circle = new Chartist.Svg("circle", {
            cx: data.x,
            cy: data.y,
            r: circleRadius,
            class: "ct-point-circle",
          });

          data.element.replace(circle);
        } else if (data.type === "label") {
          // adjust label position for rotation
          const dX = data.width / 2 + (30 - data.width);
          data.element.attr({ x: data.element.attr("x") - dX });
        }
      },
    },
  };
  // Line chart configuration Ends

  // Donut chart configuration Starts
  DonutChart: Chart = {
    type: "Pie",
    data: data["donutDashboard"],
    options: {
      donut: true,
      startAngle: 0,
      labelInterpolationFnc: function (value) {
        var total = data["donutDashboard"].series.reduce(function (
          prev,
          series
        ) {
          return prev + series.value;
        },
        0);
        return total + "%";
      },
    },
    events: {
      draw(data: any): void {
        if (data.type === "label") {
          if (data.index === 0) {
            data.element.attr({
              dx: data.element.root().width() / 2,
              dy: data.element.root().height() / 2,
            });
          } else {
            data.element.remove();
          }
        }
      },
    },
  };
  // Donut chart configuration Ends

  //  Bar chart configuration Starts
  BarChart: Chart = {
    type: "Bar",
    data: data["DashboardBar"],
    options: {
      axisX: {
        showGrid: false,
      },
      axisY: {
        showGrid: false,
        showLabel: false,
        offset: 0,
      },
      low: 0,
      high: 60, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
    },
    responsiveOptions: [
      [
        "screen and (max-width: 640px)",
        {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            },
          },
        },
      ],
    ],
    events: {
      created(data: any): void {
        var defs = data.svg.elem("defs");
        defs
          .elem("linearGradient", {
            id: "gradient4",
            x1: 0,
            y1: 1,
            x2: 0,
            y2: 0,
          })
          .elem("stop", {
            offset: 0,
            "stop-color": "rgba(238, 9, 121,1)",
          })
          .parent()
          .elem("stop", {
            offset: 1,
            "stop-color": "rgba(255, 106, 0, 1)",
          });
        defs
          .elem("linearGradient", {
            id: "gradient5",
            x1: 0,
            y1: 1,
            x2: 0,
            y2: 0,
          })
          .elem("stop", {
            offset: 0,
            "stop-color": "rgba(0, 75, 145,1)",
          })
          .parent()
          .elem("stop", {
            offset: 1,
            "stop-color": "rgba(120, 204, 55, 1)",
          });

        defs
          .elem("linearGradient", {
            id: "gradient6",
            x1: 0,
            y1: 1,
            x2: 0,
            y2: 0,
          })
          .elem("stop", {
            offset: 0,
            "stop-color": "rgba(132, 60, 247,1)",
          })
          .parent()
          .elem("stop", {
            offset: 1,
            "stop-color": "rgba(56, 184, 242, 1)",
          });
        defs
          .elem("linearGradient", {
            id: "gradient7",
            x1: 0,
            y1: 1,
            x2: 0,
            y2: 0,
          })
          .elem("stop", {
            offset: 0,
            "stop-color": "rgba(155, 60, 183,1)",
          })
          .parent()
          .elem("stop", {
            offset: 1,
            "stop-color": "rgba(255, 57, 111, 1)",
          });
      },
      draw(data: any): void {
        var barHorizontalCenter, barVerticalCenter, label, value;
        if (data.type === "bar") {
          data.element.attr({
            y1: 195,
            x1: data.x1 + 0.001,
          });
        }
      },
    },
  };
  // Bar chart configuration Ends

  // line chart configuration Starts
  WidgetlineChart: Chart = {
    type: "Line",
    data: data["WidgetlineChart"],
    options: {
      axisX: {
        showGrid: true,
        showLabel: false,
        offset: 0,
      },
      axisY: {
        showGrid: false,
        low: 40,
        showLabel: false,
        offset: 0,
      },
      lineSmooth: Chartist.Interpolation.cardinal({
        tension: 0,
      }),
      fullWidth: true,
    },
  };
  // Line chart configuration Ends
}
