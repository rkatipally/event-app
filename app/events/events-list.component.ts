import {Component} from "@angular/core";
import {EventService} from "./shared/event.service";
import {ToastrService} from "../common/toastr.service";
import {Route, ActivatedRoute} from "@angular/router";
import {IEvent} from "./shared/event.model";
/**
 * Created by atp3rxk on 2/3/2017.
 */

@Component({
    templateUrl: 'app/events/events-list.component.html'
})
export class EventsListComponent {

    constructor (private eventService: EventService, private toastr:ToastrService, private route: ActivatedRoute){

    }
    events:IEvent[];

    ngOnInit(){
        this.eventService.getEvents().subscribe(events => {this.events = events});
     //   console.log(this.route.snapshot.data['events']);
       // this.events = this.route.snapshot.data['events'];
    }
    eventParent = {
        id: 1,
        name: 'Angualr Connect',
        date: '9/26/2036',
        time: '10:00am',
        price: 599.99,
        imageUrl: '/app/assets/images/angualrconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        }
    };


    handleEventCliecked(data) {
       this.toastr.success("Received" + data);
    }

}
