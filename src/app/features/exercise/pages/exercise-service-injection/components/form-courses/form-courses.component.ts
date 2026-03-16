import {Component, inject} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {CoursesService} from "../../services/courses.service";
import {NewProduct, Product} from "../../models/product.interface";

@Component({
	selector: "form-courses",
	imports: [FormsModule],
	templateUrl: "./form-courses.component.html",
	styleUrl: "./form-courses.component.scss",
})
export class FormCoursesComponent {
	// private readonly _coursesService = inject(CoursesService);

	name: string = "";
	quantity: number = 1;

	constructor(private readonly _courseService: CoursesService) {}

	onSaveProduct() {
		console.log({name: this.name, quantity: this.quantity});
		const newProduct: NewProduct = {
			name: this.name,
			quantity: this.quantity,
		};
		this._courseService.addProduct(newProduct);
	}
}
