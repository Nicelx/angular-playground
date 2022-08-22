import { Component, OnInit, ViewChild } from "@angular/core";
import { UserService } from "./user.service";
import { OnDestroy } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { FormArray, FormControl, FormGroup, NgForm, Validators } from "@angular/forms";

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
	genders = ["male", "female"];
	signupForm: FormGroup;
	forbiddenUsernames = ["Chris", "Anna"];

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
			userData: new FormGroup({
				username: new FormControl(null, [
					Validators.required,
					this.forbiddenNames.bind(this),
				]),
				email: new FormControl(
					null,
					[Validators.required, Validators.email],
					this.forbiddenEmails
				),
			}),
			gender: new FormControl("male"),
			hobbies: new FormArray([]),
		});
		// this.signupForm.valueChanges.subscribe((value) => {
		// 	console.log(value);
		// });
		this.signupForm.statusChanges.subscribe((status) => {
			console.log(status);
		});
		this.signupForm.setValue({
			'userData' : {
				'username' : 'max',
				'email' : 'max@test.com',
			},
			'gender': 'male',
			'hobbies' : []
		})
		this.signupForm.patchValue({
			'userData' : {
				'username' : 'Nick'
			}
		})
	}
	ngOnDestroy(): void {}

	onSubmit() {
		console.log(this.signupForm);
		this.signupForm.reset();
	}
	onAddHobby() {
		const control = new FormControl(null, Validators.required);
		(<FormArray>this.signupForm.get("hobbies")).push(control);
	}

	getControls() {
		return (<FormArray>this.signupForm.get("hobbies")).controls;
	}
	forbiddenNames(control: FormControl): { [s: string]: boolean } {
		if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
			return { nameIsForbidden: true };
		}
		return null;
	}
	forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
		const promise = new Promise<any>((res, rej) => {
			setTimeout(() => {
				if (control.value === "test@test.com") {
					res({ emailIsForbidden: true });
				} else {
					res(null);
				}
			}, 1500);
		});

		return promise;
	}

	get username() {
		console.log("get username ", this.signupForm.get("userData.username"));
		return this.signupForm.get("userData.username");
	}


	// pipes

	servers = [
		{
		  instanceType: 'medium',
		  name: 'Production Server',
		  status: 'stable',
		  started: new Date(15, 1, 2017)
		},
		{
		  instanceType: 'large',
		  name: 'User Database',
		  status: 'stable',
		  started: new Date(15, 1, 2017)
		},
		{
		  instanceType: 'small',
		  name: 'Development Server',
		  status: 'offline',
		  started: new Date(15, 1, 2017)
		},
		{
		  instanceType: 'small',
		  name: 'Testing Environment Server',
		  status: 'stable',
		  started: new Date(15, 1, 2017)
		}
	  ];
	  filteredStatus = '';
	  getStatusClasses(server: {instanceType: string, name: string, status: string, started: Date}) {
		return {
		  'list-group-item-success': server.status === 'stable',
		  'list-group-item-warning': server.status === 'offline',
		  'list-group-item-danger': server.status === 'critical'
		};
	  }
}
