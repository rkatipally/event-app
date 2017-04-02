import {Component} from "@angular/core";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";
/**
 * Created by atp3rxk on 2/20/2017.
 */

@Component({
    templateUrl: "app/user/login.component.html",
    styles: [`
        em { float: right; color:#E05C65; padding-left:10px;}`]
})
export class LoginComponent {

    constructor(private authService: AuthService, private router: Router) {

    }

    login(loginForm) {
        this.authService.loginUser(loginForm.userName, loginForm.password)
        console.log(loginForm);
        this.router.navigate(['events'])
    }

    cancel() {
        this.router.navigate(['events'])
    }
}
