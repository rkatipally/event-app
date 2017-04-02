import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {userRoutes} from "./user.routes";
import {ProfileComponent} from "./profile.component";
import {LoginComponent} from "./login.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
/**
 * Created by atp3rxk on 2/11/2017.
 */

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(userRoutes),
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    declarations: [
        ProfileComponent,
        LoginComponent
    ]
})
export class UserModule {

}