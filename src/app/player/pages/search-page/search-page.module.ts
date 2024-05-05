import { CommonModule, NgOptimizedImage } from "@angular/common";
import { PlayerTeamCardComponent } from "../../components/player-team-card/player-team-card.component";
import { TrophieComponent } from "../../components/trophie-component/trophie-component.component";
import { PlayerPageComponent } from "../player-page/player-page.component";
import { SearchPageComponent } from "./search-page.component";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { SearchRoutingModule } from "./search-page-routing.module";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [
    SearchPageComponent,
    PlayerPageComponent,
    TrophieComponent,
    PlayerTeamCardComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    NgOptimizedImage,
    FormsModule,
    HttpClientModule,
    SearchRoutingModule,
    SharedModule,
    ],
})
export class SearchPageModule { }
