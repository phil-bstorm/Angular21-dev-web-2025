import {Component} from "@angular/core";
import {ExerciseHeaderComponent} from "@app/features/exercise/components/layout/exercise-header/exercise-header.component";
import {UneLettreSurDeuxPipe} from "./pipes/une-lettre-sur-deux.pipe";
import {CustomSeparatorPipe} from "./pipes/custom-separator.pipe";

@Component({
	selector: "exercise-pipe",
	imports: [ExerciseHeaderComponent, UneLettreSurDeuxPipe, CustomSeparatorPipe],
	templateUrl: "./exercise-pipe.component.html",
	styleUrl: "./exercise-pipe.component.scss",
})
export class ExercisePipeComponent {}
