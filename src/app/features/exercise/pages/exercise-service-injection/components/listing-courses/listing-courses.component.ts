import {Component, inject} from "@angular/core";
import {CoursesService} from "../../services/courses.service";
import {NgClass} from "@angular/common";

@Component({
	selector: "listing-courses",
	imports: [NgClass],
	templateUrl: "./listing-courses.component.html",
	styleUrl: "./listing-courses.component.scss",
})
export class ListingCoursesComponent {
	private readonly _coursesService = inject(CoursesService);

	list = this._coursesService.courses;

	onPlusBtn(id: number) {
		this._coursesService.incrementQuantity(id);
	}

	onMinusBtn(id: number) {
		this._coursesService.decrementQuantity(id);
	}
}
