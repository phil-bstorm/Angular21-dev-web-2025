import {Component, inject} from "@angular/core";
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {ExerciseHeaderComponent} from "@app/features/exercise/components/layout/exercise-header/exercise-header.component";
import {strongPasswordValidator, tooOldValidator} from "./validators";
import {NgClass} from "@angular/common";
import {FormsErrorDisplay} from "./components/forms-error-display/forms-error-display";
import dayjs from "dayjs";

@Component({
	selector: "exercise-formulaire",
	imports: [ExerciseHeaderComponent, ReactiveFormsModule, NgClass, FormsErrorDisplay],
	templateUrl: "./exercise-formulaire.component.html",
	styleUrl: "./exercise-formulaire.component.scss",
})
export class ExerciseFormulaireComponent {
	private readonly _fb = inject(FormBuilder);

	email = new FormControl("", [Validators.required, Validators.email]);
	password = new FormControl("", [Validators.required, strongPasswordValidator()]);
	birthdate = new FormControl(dayjs().format("YYYY-MM-DD"), [
		Validators.required,
		tooOldValidator(),
	]);

	form = this._fb.group({
		email: this.email,
		password: this.password,
		birthdate: this.birthdate,
	});

	onSubmit() {
		this.form.markAllAsTouched();

		if (this.form.valid) {
			console.log(this.form.value);
			// Appel du service
		}
	}
}
