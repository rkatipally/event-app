import {Component, Input, Output, EventEmitter} from "@angular/core";
import {IEvent} from "./shared/event.model";
/**
 * Created by atp3rxk on 2/3/2017.
 */

@Component({
    selector: 'event-thumbnail',
    templateUrl: 'app/events/event-thumbnail.component.html',
    styles: [`.thumbnail {min-height: 210px}
              .pad-left {margin-left: 2px;}
              .green { color:#003300 !important;}
              .bold { font-weight: bold}  `
    ]
})
export class EventThumbnailComponent {
    @Input() event: IEvent;
    @Output() eventClick = new EventEmitter();
    handleClickMe() {
        console.log("clicked")
        this.eventClick.emit("Foo");
    }

    logFoo() {
        console.log("Log Foo")
    }

    getStartTimeClass() {
        if (this.event.time === '8:00 am') {
            return "green bold"; //['green', 'bold']
        }
        return '';
    }
}