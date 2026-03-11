import {Component} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {ExerciseHeaderComponent} from "@app/features/exercise/components/layout/exercise-header/exercise-header.component";

@Component({
	selector: "exercise-bindings",
	imports: [ExerciseHeaderComponent, FormsModule],
	templateUrl: "./exercise-bindings.component.html",
	styleUrl: "./exercise-bindings.component.scss",
})
export class ExerciseBindingsComponent {
	imageUrlResultat: string = "assets/exercise/binding/resultat.png";

	// Rajoute les variables et méthodes nécessaires ici
	prenom = "";
	nom = "";
	nomComplet = "";
	isSubmitDisabled = true;

	onKeyUp() {
		this.nomComplet = `${this.prenom} ${this.nom}`;

		if (!this.prenom || !this.nom) {
			this.isSubmitDisabled = true;
		} else {
			this.isSubmitDisabled = false;
		}

		// this.isSubmitDisabled = !this.prenom || !this.nom
	}
}
