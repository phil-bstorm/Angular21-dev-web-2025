export interface Product {
	id: number;
	name: string;
	quantity: number;
}

export interface NewProduct extends Omit<Product, "id"> {}
