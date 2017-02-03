import {Component} from "@angular/core";
import {EventService} from "./event.service";
import {ToastrService} from "../common/toastr.service";
/**
 * Created by atp3rxk on 2/3/2017.
 */

@Component({
    selector: 'events-list',
    templateUrl: 'app/events/events-list.component.html'
})
export class EventsListComponent {

    constructor (private eventService: EventService, private toastr:ToastrService){

    }
    events:any[];

    ngOnInit(){
        this.events = this.eventService.getEvents();
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
