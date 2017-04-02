/**
 * Created by atp3rxk on 2/3/2017.
 */

import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {NavBarComponent} from "./nav/nav-bar.component";
import {ToastrService} from "./common/toastr.service";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./routes";
import {Error404Component} from "./errors/404.componenent";
import {
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventService,
    CreateSessionComponent,
    SessionListComponent

} from './events/index'
import {JQ_TOKEN, CollapsibleWellComponent, SimpleModalComponent, ModalTriggerDirective} from "./common/index"
import {
    EventRouteActivatorService
} from "./events/event-details/event-route-activator.service";
import {EventListResolver} from "./events/EventListResolver";
import {EventsAppComponent} from "./events.app.component";
import {AuthService} from "./user/auth.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

declare let jQuery : Object;

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, ReactiveFormsModule, HttpModule],
    declarations: [EventsAppComponent, EventsListComponent, EventThumbnailComponent, NavBarComponent, EventDetailsComponent, CreateEventComponent, CreateSessionComponent , SessionListComponent, Error404Component, CollapsibleWellComponent, SimpleModalComponent, ModalTriggerDirective],
    bootstrap: [EventsAppComponent],
    providers: [EventService,
        ToastrService,
        EventRouteActivatorService,
        {provide: 'canDeactivateServiceEvent', useValue: checkDirtyState},
        EventListResolver,
        AuthService,
        {provide:JQ_TOKEN, useValue:jQuery}
    ]
})
export class AppModule {

}
function checkDirtyState(component: CreateEventComponent) {
    component.isDirty = false;

    if (component.isDirty)
        return window.confirm("Done with form?");
    return true;

}