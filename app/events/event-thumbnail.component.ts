import {Component, Input, Output, EventEmitter} from "@angular/core";
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
    @Input() event: any;
    @Output() eventClick = new EventEmitter();
    //someProperty:String = "Some Value";
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