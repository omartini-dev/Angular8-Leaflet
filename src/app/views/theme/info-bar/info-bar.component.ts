import { Component, OnInit, ApplicationRef } from "@angular/core";
import { ToastrService, ToastNoAnimation, ToastPackage } from "ngx-toastr";

@Component({
  selector: "kt-info-bar",
  templateUrl: "./info-bar.component.html",
  styleUrls: ["./info-bar.component.scss"]
})
export class InfoBarComponent extends ToastNoAnimation implements OnInit {
  public currentTime: number = Math.round(this.originalTimeout / 1000);
  constructor(
    protected toastrService: ToastrService,
    protected appRef: ApplicationRef,
    public toastPackage: ToastPackage
  ) {
    super(toastrService, toastPackage, appRef);
  }

  ngOnInit() {
    if (Number.isFinite(this.currentTime)) {
      const currentTimeHandle = window.setInterval(() => {
        this.currentTime--;
        if (!this.currentTime) {
          clearInterval(currentTimeHandle);
          this.remove();
        }
      }, 1000);
    }
  }
}
