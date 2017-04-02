import {Injectable} from "@angular/core";
import {IUser} from "./user.model";
/**
 * Created by atp3rxk on 2/20/2017.
 */

@Injectable()
export class AuthService{


    currentUser:IUser;
    loginUser(userName:String, password:String){
        this.currentUser = {
            id:1,
            firstName:'Raj',
            lastName:'Katipally',
            userName:'rkatipally'
        }
    }

    isAuthenticated(){
        return !!this.currentUser;
    }

    updateUser(user){
        this.currentUser.firstName = user.firstName;
        this.currentUser.lastName = user.lastName;
    }

}