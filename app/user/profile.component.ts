import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {AuthService} from "./auth.service";
import {audit} from "rxjs/operator/audit";
import {Router} from "@angular/router";
/**
 * Created by atp3rxk on 2/11/2017.
 */

@Component({
    templateUrl: 'app/user/profile.component.html'
})
export class ProfileComponent implements OnInit {

    profileForm: FormGroup;

    constructor(private authSerice: AuthService, private router: Router) {

    }

    ngOnInit() {
        let firstName = new FormControl(this.authSerice.currentUser.firstName, Validators.required);
        let lastName = new FormControl(this.authSerice.currentUser.lastName, Validators.required);
        this.profileForm = new FormGroup({
            firstName: firstName,
            lastName: lastName
        })

    }

    saveUser(formValues) {
        if (this.profileForm.valid) {
            this.authSerice.updateUser(formValues);
            this.router.navigate(['events']);
        }

    }

    cancel() {
        this.router.navigate(['events']);
    }
}