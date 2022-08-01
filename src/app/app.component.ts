import { Component, OnInit, ViewChild } from "@angular/core";
import { UserService } from "./user.service";
import { OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { NgForm } from "@angular/forms";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, OnDestroy {
	userActivated = false;
	private activatedSub: Subscription;
	@ViewChild('f') signupForm: NgForm;
	defaultQuestion = 'pet';


	constructor(private userService: UserService) {}

	ngOnInit() {
		this.activatedSub = this.userService.activatedEmitter.subscribe((didActivate) => {
			this.userActivated = didActivate;
		});
	}
	ngOnDestroy(): void {
		this.activatedSub.unsubscribe();
	}

	suggestUserName() {
		const suggestedName = "Superuser";
	}
	// onSubmit(form: NgForm) {
	// 	console.log(form);
	// }
	onSubmit() {
		console.log(this.signupForm);
	}

}
