import {Resolve} from "@angular/router";
import {Injectable} from "@angular/core";
import {EventService} from "./shared/event.service";
/**
 * Created by atp3rxk on 2/11/2017.
 */

@Injectable()
export class EventListResolver implements Resolve<any> {

    constructor(private eventService: EventService) {

    }

    resolve() {
        return this.eventService.getEvents().map(events => events);
    }
}