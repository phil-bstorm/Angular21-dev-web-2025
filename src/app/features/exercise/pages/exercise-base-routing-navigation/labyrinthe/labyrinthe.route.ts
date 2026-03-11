import {Routes} from "@angular/router";
import {IndexComponent} from "./pages/index/index.component";

export const routes: Routes = [
	{
		path: "",
		component: IndexComponent,
	},
	{
		path: "etage1",
		loadComponent: () => import("./pages/etage1/etage1.component").then(c => c.Etage1Component),
	},
	{
		path: "etage2",
		loadComponent: () => import("./pages/etage2/etage2.component").then(c => c.Etage2Component),
	},
	{
		path: "piege",
		loadComponent: () => import("./pages/piege/piege.component").then(c => c.PiegeComponent),
	},
	{
		path: "victoire",
		loadComponent: () =>
			import("./pages/victoire/victoire.component").then(c => c.VictoireComponent),
	},
];
