import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {EventService} from "./shared/event.service";
/**
 * Created by atp3rxk on 2/11/2017.
 */

@Component({
    templateUrl:'app/events/create-event.component.html'
})
export class CreateEventComponent{
    isDirty:boolean;
    constructor(private router:Router, private eventService: EventService){

    }
    cancel(){
        this.router.navigate(["/events"]);
    }
    saveEvent(formValues){
        this.eventService.saveEvent(formValues);
        console.log(formValues )
        this.router.navigate(['events'])
    }



}