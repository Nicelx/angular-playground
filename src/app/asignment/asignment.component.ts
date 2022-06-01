import { Component } from "@angular/core";

@Component({
	selector: 'asignment-component',
	templateUrl: './asignment.component.html',
	styleUrls: ['./asignment.component.css'],
})

export class AsignmentComponent {
	userName = '';
	isVisible = false;
	count = 0;
	logs = [];

	onUpdateUserName() {
		if (this.userName.length > 0) {
			this.isVisible = true;
		};
	}

	onClickToggle() {
		this.isVisible = !this.isVisible;
		this.count++;
		this.logs.push(this.count);
	}
}