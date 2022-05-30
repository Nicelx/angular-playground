import { Component } from "@angular/core";

@Component({
	selector: 'asignment-component',
	templateUrl: './asignment.component.html',
	styleUrls: ['./asignment.component.css'],
})

export class AsignmentComponent {
	userName = '';
	isVisible = false;

	onUpdateUserName() {
		if (this.userName.length > 0) {
			this.isVisible = true;
		};
	}
}