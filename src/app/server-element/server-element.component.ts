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
  ViewChild,
  ElementRef,
  ContentChild,
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
	@ViewChild('heading',{static: true}) header: ElementRef;
	@ContentChild('contentParagraph', {static: true}) paragraph: ElementRef

	constructor() {
		console.log("constructor called");
	}

	ngOnChanges(changes: SimpleChanges) {
		console.log("Ng onChanges");
		console.log(changes);
	}

	ngOnInit(): void {
		console.log("ngOnInit called");
		console.log(this.header.nativeElement.textContent);
		console.log('text content of paragraph' + this.paragraph.nativeElement.textContent);
	}
	
	ngDoCheck(): void {
		console.log("ngDoCheck");
	}
	ngAfterContentInit(): void {
		console.log("ngAfterContentInit");
		console.log('text content of paragraph' + this.paragraph.nativeElement.textContent);
	}
	ngAfterContentChecked(): void {
		console.log("ngAfterContentChecked");
	}


	ngAfterViewInit(): void {
		console.log("ngAfterViewInit");
		
		console.log('textContent is ' + this.header.nativeElement.textContent);
	}
	ngAfterViewChecked(): void {
		console.log("ngAfterViewChecked");
	}
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    
  }
}
