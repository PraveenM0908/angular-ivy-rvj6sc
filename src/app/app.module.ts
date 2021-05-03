import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { StateDistrictComponent } from "./statedistrict/statedistrict.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, StateDistrictComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
