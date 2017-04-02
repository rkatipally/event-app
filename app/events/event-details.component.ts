import {Component} from "@angular/core";
import {IEventService, EventService} from "./shared/event.service";
import {ActivatedRoute, Params} from "@angular/router";
import {IEvent, ISession} from "./shared/event.model";
/**
 * Created by atp3rxk on 2/7/2017.
 */

@Component({
    selector: 'event-details',
    templateUrl : 'app/events/event-details.component.html',
    styles : [`.container { padding-left:20px; padding-right:20px}
                .event-image {height:100px}
                a{cursor: pointer}`
                ]
})
export class EventDetailsComponent{
    event:IEvent;
    addMode:boolean;

    constructor(private eventService:EventService, private route:ActivatedRoute){

    }
    ngOnInit(){

        this.route.params.forEach((params: Params) =>{
            this.event = this.eventService.getEvent(+params['id']);
            this.addMode = false;
        })

        //this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);

    }

    addSession(){
        this.addMode = true;
    }

    saveNewSession(session:ISession){
        const  nextId = Math.max.apply(null, this.event.sessions.map(s=>s.id));
        session.id  = nextId+1;
        this.event.sessions.push(session)
        this.eventService.updateEvent(this.event);
        this.addMode = false
    }

    cancelNewSession(){
        this.addMode = false    }

}
