import {Injectable} from "@angular/core";
/**
 * Created by atp3rxk on 2/3/2017.
 */
declare let toastr:any;
@Injectable()
export class ToastrService{

    success(message:String, title?:String){
        toastr.success(message, title);
    }


}