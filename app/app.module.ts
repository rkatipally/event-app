/**
 * Created by atp3rxk on 2/3/2017.
 */

import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {EventsAppComponent} from "./events.app.component";
import {EventsListComponent} from "./events/events-list.component";
import {EventThumbnailComponent} from "./events/event-thumbnail.component";
import {NavBarComponent} from "./nav/nav-bar.component";
import {EventService} from "./events/event.service";
import {ToastrService} from "./common/toastr.service";

@NgModule({
    imports: [BrowserModule],
    declarations: [EventsAppComponent, EventsListComponent, EventThumbnailComponent, NavBarComponent],
    bootstrap: [EventsAppComponent],
    providers: [EventService, ToastrService]
})
export class AppModule {

}
