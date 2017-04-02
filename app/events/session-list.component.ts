import {Component, Input} from "@angular/core";
import {ISession} from "./shared/event.model";
/**
 * Created by atp3rxk on 3/15/2017.
 */

@Component({
    templateUrl:'app/events/session-list.component.html',
    selector:'session-list'
})
export class SessionListComponent{

    @Input() sessions:ISession[];
}