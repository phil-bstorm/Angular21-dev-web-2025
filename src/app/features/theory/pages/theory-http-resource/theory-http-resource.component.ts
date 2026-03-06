import {Component} from "@angular/core";
import {TheoryHeaderComponent} from "@app/features/theory/components/layout/theory-header/theory-header.component";
import {HighlightJsDirective} from "ngx-highlight-js";

@Component({
	selector: "theory-http-resource",
	imports: [TheoryHeaderComponent, HighlightJsDirective],
	templateUrl: "./theory-http-resource.component.html",
	styleUrl: "./theory-http-resource.component.scss",
})
export class TheoryHttpResourceComponent {}
