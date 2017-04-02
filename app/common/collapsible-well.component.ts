import {Component, Input} from "@angular/core";
/**
 * Created by atp3rxk on 3/19/2017.
 */


@Component({
    selector:"collapsible-well",
    template:`
                <div class="well pointable" (click)="toggleContent()">
                    <h4>
                        <ng-content select="[well-title]"></ng-content>
                    </h4>
                    <ng-content select="[well-body]" *ngIf="visible"></ng-content>
                </div>
            `
})
export class CollapsibleWellComponent {
    @Input() title: string;
    visible: boolean = true;

    toggleContent(){
        this.visible = !this.visible;
    }
}