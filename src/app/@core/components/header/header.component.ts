import { ConfigService } from "../../services/config.service";
import { Component } from "@angular/core";

/**
 * Header component
 */
@Component({
  selector: "blog-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
  /**
   * url del background
   */
  bgUrl: string;

  /**
   * constructor
   *
   * @param config El servicio del configurador
   */
  constructor(private config: ConfigService) {
    this.config.bgVar$.subscribe((data) => {
      console.log("header", data);
      this.bgUrl = data;
    });
  }
}
