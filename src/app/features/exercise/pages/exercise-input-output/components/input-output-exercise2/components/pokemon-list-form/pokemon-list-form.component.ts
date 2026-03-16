import {Component, output} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {Pokemon} from "../interfaces/pokemon.model";

@Component({
	selector: "pokemon-list-form",
	imports: [FormsModule],
	templateUrl: "./pokemon-list-form.component.html",
	styleUrl: "./pokemon-list-form.component.scss",
})
export class PokemonListFormComponent {
	id: number = 0;
	name: string = "";
	type: string = "";

	newPokemonEvent = output<Pokemon>();

	onSubmit() {
		const newPokemon: Pokemon = {
			id: this.id,
			name: this.name,
			type: this.type,
		};
		this.newPokemonEvent.emit(newPokemon);
	}
}
