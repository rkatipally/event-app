import {EventsListComponent} from "./events/events-list.component";
import {EventDetailsComponent} from "./events/event-details.component";
import {Routes} from "@angular/router";
import {CreateEventComponent} from "./events/create-event.component";
import {Error404Component} from "./errors/404.componenent";
import {
    EventRouteActivatorService
} from "./events/event-details/event-route-activator.service";
import {EventListResolver} from "./events/EventListResolver";
import {CreateSessionComponent} from "./events/create-session.component";
/**
 * Created by atp3rxk on 2/10/2017.
 */


export const appRoutes: Routes = [
    {path: 'events/new', component: CreateEventComponent, canDeactivate:['canDeactivateServiceEvent']},
    {path: 'events', component: EventsListComponent, resolve: {events:EventListResolver}},
    //{path: 'events/:id', component: EventDetailsComponent, canActivate:[EventRouteActivatorService]},
    {path: 'events/:id', component: EventDetailsComponent},
    {path:'events/session/new' , component:CreateSessionComponent},
    {path: '', redirectTo: 'events', pathMatch: 'full'},
    {path: '404', component: Error404Component},
    {path: 'user', loadChildren: 'app/user/user.module#UserModule'}
]

