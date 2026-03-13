import {Component} from "@angular/core";
import {ExerciseHeaderComponent} from "@app/features/exercise/components/layout/exercise-header/exercise-header.component";
import {Product} from "./models/product.interface";
import {NgClass} from "@angular/common";

@Component({
	selector: "exercise-directive",
	imports: [ExerciseHeaderComponent, NgClass],
	templateUrl: "./exercise-directive.component.html",
	styleUrl: "./exercise-directive.component.scss",
})
export class ExerciseDirectiveComponent {
	produits: Array<Product> = [
		{
			nom: "iPhone 15 Pro",
			photo: "https://images.unsplash.com/photo-1696446701796-da61225697cc?w=400",
			prix: 1199.99,
			qttRestante: 12,
		},
		{
			nom: "Samsung Galaxy S24",
			photo: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400",
			prix: 899.99,
			qttRestante: 25,
		},
		{
			nom: "MacBook Air M3",
			photo: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
			prix: 1299.99,
			prixPromo: 1149.99,
			qttRestante: 0,
		},
		{
			nom: "Sony WH-1000XM5",
			photo: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400",
			prix: 379.99,
			prixPromo: 279.99,
			qttRestante: 34,
		},
	];
}
