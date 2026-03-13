import {Component, input, output} from "@angular/core";

@Component({
	selector: "todo-list-listing",
	imports: [],
	templateUrl: "./todo-list-listing.component.html",
	styleUrl: "./todo-list-listing.component.scss",
})
export class TodoListListingComponent {
	listTaskInput = input.required<Array<string>>();
	deleteTaskOutput = output<number>();

	onDeleteItem(taskIndex: number) {
		this.deleteTaskOutput.emit(taskIndex);
	}
}
