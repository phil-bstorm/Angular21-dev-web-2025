import {Component, input} from "@angular/core";
import {Pokemon} from "../interfaces/pokemon.model";

@Component({
	selector: "pokemon-list-listing",
	imports: [],
	templateUrl: "./pokemon-list-listing.component.html",
	styleUrl: "./pokemon-list-listing.component.scss",
})
export class PokemonListListingComponent {
	pokemonsList = input<Array<Pokemon>>([]);
}
