import {Component} from "@angular/core";
import {ChatComponent} from "./components/chat/chat.component";
import {ChienComponent} from "./components/chien/chien.component";

@Component({
	selector: "animalerie",
	imports: [ChatComponent, ChienComponent],
	templateUrl: "./animalerie.component.html",
	styleUrl: "./animalerie.component.scss",
})
export class AnimalerieComponent {}
