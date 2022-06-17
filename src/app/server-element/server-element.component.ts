import {
	Component,
	Input,
	OnInit,
	ViewEncapsulation,
	OnChanges,
	SimpleChanges,
	DoCheck,
	AfterContentInit,
	AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
} from "@angular/core";

@Component({
	selector: "app-server-element",
	templateUrl: "./server-element.component.html",
	styleUrls: ["./server-element.component.css"],
	encapsulation: ViewEncapsulation.Emulated, // None, Native
})
export class ServerElementComponent
	implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,AfterViewInit, AfterViewChecked,OnDestroy
{
	@Input("srvElement") element: {
		type: string;
		name: string;
		content: string;
	};
	@Input() name: string;

	constructor() {
		console.log("constructor called");
	}

	ngOnChanges(changes: SimpleChanges) {
		console.log("Ng onChanges");
		console.log(changes);
	}

	ngOnInit(): void {
		console.log("ngOnInit called");
	}

	ngDoCheck(): void {
		console.log("ngDoCheck");
	}
	ngAfterContentInit(): void {
		console.log("ngAfterContentInit");
	}
	ngAfterContentChecked(): void {
		console.log("ngAfterContentChecked");
	}


	ngAfterViewInit(): void {
		console.log("ngAfterViewInit");
	}
	ngAfterViewChecked(): void {
		console.log("ngAfterViewChecked");
	}
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    
  }
}
