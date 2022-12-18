import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TwButtonRoundedDirective} from "../tw-button-rounded.directive";
import {TwButtonDirective} from "../tw-button.directive";

@Component({
  selector: 'app-components-list',
  standalone: true,
  imports: [CommonModule, TwButtonDirective, TwButtonRoundedDirective],
  templateUrl: './components-list.component.html',
  styleUrls: ['./components-list.component.scss']
})
export class ComponentsListComponent {

}
