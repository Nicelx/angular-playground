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
	answer = '';
	genders = ['male', 'female'];
	user = {
		username: '',
		email: '',
		secretQuestion: '',
		answer: '',
		gender: '',
	}
	submitted = false;


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
		// this.signupForm.setValue({
		// 	userData : {
		// 		username : suggestedName,
		// 		email: '',
		// 	},
		// 	secret: 'pet',
		// 	questionAnswer : '',
		// 	gender: 'male',
		// })
		this.signupForm.form.patchValue({
			userData : {
				username: suggestedName
			}
		})
	}
	// onSubmit(form: NgForm) {
	// 	console.log(form);
	// }
	onSubmit() {
		this.submitted = true;
		this.user.username = this.signupForm.value.userData.username;
		this.user.email = this.signupForm.value.userData.email;
		this.user.secretQuestion = this.signupForm.value.secret;
		this.user.answer = this.signupForm.value.questionAnswer;
		this.user.gender = this.signupForm.value.gender;
		this.signupForm.reset();
	}

}
