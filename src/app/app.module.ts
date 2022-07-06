import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { CockpitComponent } from "./cockpit/cockpit.component";
import { ServerElementComponent } from "./server-element/server-element.component";

import { BasicHighlightDirective } from "./basic-highlight/basic-highlight.directive";
import { BetterHighlightDirective } from "./better-highlight/better-highlight.directive";
import { UnlessDirective } from "./unless.directive";

import { NewAccountComponent } from "./new-account/new-account.component";
import { AccountComponent } from "./account/account.component";
import { AccountsService } from "./accounts.service";
import { LoggingService } from "./logging.service";

import { AsignmentComponent } from "./asignment/asignment.component";
import { ActiveUsersComponent } from './asignment/active-users/active-users.component';
import { InactiveUsersComponent } from "./asignment/inactive-users/inactive-users.component";
import { ActivityService } from "./asignment/activity.service";

@NgModule({
	declarations: [
		AppComponent,
		CockpitComponent,
		ServerElementComponent,
		BasicHighlightDirective,
		BetterHighlightDirective,
		UnlessDirective,
		NewAccountComponent,
		AccountComponent,
		AsignmentComponent,
		ActiveUsersComponent,
		InactiveUsersComponent
	],
	imports: [BrowserModule, FormsModule],
providers: [AccountsService, LoggingService, ActivityService],
	bootstrap: [AppComponent],
})
export class AppModule {}
