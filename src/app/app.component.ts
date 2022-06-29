import { Component } from "@angular/core";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"],
})
export class AppComponent {
	serverElements = [
		{
			type: "server",
			name: "testserver",
			content: "just a test",
		},
	];
	oddNumbers: number[] = [1,3,5];
	evenNumbers: number[] = [2,4];
	// numbers = [1,2,3,4,5];
	value = 10;

	onlyOdd = false;

	onServerAdded(serverData: { serverName: string; serverContent: string }) {
		this.serverElements.push({
			type: "server",
			name: serverData.serverName,
			content: serverData.serverContent,
		});
	}

	onBlueprintAdded(blueprintData: { serverName: string; serverContent: string }) {
		this.serverElements.push({
			type: "blueprint",
			name: blueprintData.serverName,
			content: blueprintData.serverContent,
		});
	}
	onChangeFirst() {
		this.serverElements[0].name = "Changed";
	}
	onDestroyFirst() {
		this.serverElements.splice(0, 1);
	}

	onGameStarted(event) {
		if (event.increment % 2 === 0 ) {
			this.evenNumbers.push(event.increment);
		} else {
			this.oddNumbers.push(event.increment)
		}
	}
}
