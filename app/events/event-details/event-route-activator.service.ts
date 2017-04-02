import {CanActivate, Router, ActivatedRouteSnapshot} from "@angular/router";
import {EventService} from "../shared/event.service";
import {Injectable} from "@angular/core";
/**
 * Created by atp3rxk on 2/11/2017.
 */

@Injectable()
export class EventRouteActivatorService implements CanActivate{

    constructor(private eventService:EventService,private router:Router){

    }

    canActivate(route:ActivatedRouteSnapshot){
        const eventExists = !!this.eventService.getEvent(+route.params['id']);

        if(!eventExists)
            this.router.navigate(['/404'])

        return eventExists;
    }

}