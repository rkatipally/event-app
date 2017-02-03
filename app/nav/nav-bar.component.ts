import {Component} from "@angular/core";
/**
 * Created by atp3rxk on 2/3/2017.
 */

@Component({
    selector: 'nav-bar',
    templateUrl: 'app/nav/nav-bar.component.html',
    styles: [`.nav.navbar-nav {font-size: 15px;}
              #searchForm {margin-right: 100px}
              @media (max-width: 1200px) { #searchForm {display: none}}
            `]
})
export class NavBarComponent {

}