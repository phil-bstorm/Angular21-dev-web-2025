import {Injectable, signal} from "@angular/core";
import {NewProduct, Product} from "../models/product.interface";

@Injectable({
	providedIn: "root",
})
export class CoursesService {
	courses = signal<Array<Product>>([]);
	private _coursesSequence = 0;

	addProduct(newProduct: NewProduct) {
		const copy = this.courses();
		this._coursesSequence++;
		const product: Product = {
			name: newProduct.name,
			quantity: newProduct.quantity,
			id: this._coursesSequence,
		};

		copy.push(product);
		this.courses.set([...copy]);
	}

	incrementQuantity(productId: number) {
		const copy = this.courses();
		const element = copy.find(p => p.id === productId);

		if (element) {
			element.quantity++;
		}

		this.courses.set([...copy]);
	}

	decrementQuantity(productId: number) {
		const copy = this.courses();
		const elementIndex = copy.findIndex(p => p.id === productId);

		if (elementIndex >= 0) {
			const element = copy[elementIndex];
			element.quantity--;

			if (element.quantity <= 0) {
				copy.splice(elementIndex, 1);
			}
		}

		this.courses.set([...copy]);
	}
}
