import { Component, OnInit, ViewChild } from "@angular/core";
import { UserService } from "./user.service";
import { OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { FormControl, FormGroup, NgForm, Validators } from "@angular/forms";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, OnDestroy {
	// userActivated = false;
	// private activatedSub: Subscription;
	// @ViewChild('f') signupForm: NgForm;
	// defaultQuestion = 'pet';
	// answer = '';
	// user = {
		// 	username: '',
		// 	email: '',
		// 	secretQuestion: '',
		// 	answer: '',
		// 	gender: '',
		// }
		// submitted = false;
		genders = ['male', 'female'];
	signupForm : FormGroup;


	constructor(private userService: UserService) {}

	// ngOnInit() {
	// 	this.activatedSub = this.userService.activatedEmitter.subscribe((didActivate) => {
	// 		this.userActivated = didActivate;
	// 	});
	// }
	// ngOnDestroy(): void {
	// 	this.activatedSub.unsubscribe();
	// }

	// suggestUserName() {
	// 	const suggestedName = "Superuser";
	// 	this.signupForm.form.patchValue({
	// 		userData : {
	// 			username: suggestedName
	// 		}
	// 	})
	// }
	// onSubmit() {
	// 	this.submitted = true;
	// 	this.user.username = this.signupForm.value.userData.username;
	// 	this.user.email = this.signupForm.value.userData.email;
	// 	this.user.secretQuestion = this.signupForm.value.secret;
	// 	this.user.answer = this.signupForm.value.questionAnswer;
	// 	this.user.gender = this.signupForm.value.gender;
	// 	this.signupForm.reset();
	// }

	ngOnInit(): void {
		this.signupForm = new FormGroup({
			'username' : new FormControl(null, Validators.required),
			'email' : new FormControl(null, [Validators.required, Validators.email]),
			'gender' : new FormControl('male'), 
		})
	}
	ngOnDestroy(): void {
		
	}

	onSubmit() {
		console.log(this.signupForm);
	}
}
