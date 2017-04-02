import {Component, OnInit, Output, EventEmitter} from "@angular/core";
import {FormControl, Validators, Form, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {ISession} from "./shared/event.model";
/**
 * Created by atp3rxk on 3/14/2017.
 */

@Component({
    selector: 'create-session',
    templateUrl: 'app/events/create-session.component.html'
})
export class CreateSessionComponent implements OnInit {

    @Output() saveNewSession = new EventEmitter();
    @Output() cancelNewSession = new EventEmitter();


    name: FormControl;
    presenter: FormControl;
    duration: FormControl;
    level: FormControl;
    abstract: FormControl;
    newSessionForm: FormGroup;


    constructor(private router: Router) {

    }

    ngOnInit() {
        this.name = new FormControl('', Validators.required)
        this.presenter = new FormControl('', Validators.required)
        this.duration = new FormControl('', Validators.required)
        this.level = new FormControl('', Validators.required)
        this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400)])
        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        })

    }

    saveSession(formValues) {
        let session: ISession = {
            id: undefined,
            name: formValues.name,
            presenter: formValues.presenter,
            duration: +formValues.duration,
            level: formValues.level,
            abstract: formValues.abstract,
            voters: []
        }
        this.saveNewSession.emit(session);
    }


    cancel() {
        this.cancelNewSession.emit();
        //this.router.navigate(['events'])
    }

}