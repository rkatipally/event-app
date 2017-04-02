import {Component, Input, ViewChild, ElementRef, Inject} from "@angular/core";
import {JQ_TOKEN} from "./jQuery.service";
/**
 * Created by atp3rxk on 4/2/2017.
 */

@Component({
    selector: 'simple-modal',
    templateUrl: 'app/common/simple-modal.component.html',
    styles: [`
                .modal-body {height: 250px; overflow-y:scroll }
            `]
})
export class SimpleModalComponent{
    @Input() title :string;
    @Input() elementId: string;
    @ViewChild('modalContainer') containerEl: ElementRef

    constructor(@Inject(JQ_TOKEN) private $ : any){

    }
    closeModal(){
        this.$(this.containerEl.nativeElement).modal('hide');
    }
}