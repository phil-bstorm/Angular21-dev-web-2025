import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
	name: "customSeparator",
})
export class CustomSeparatorPipe implements PipeTransform {
	transform(value: Array<unknown>, arg: string = ", "): string {
		return value.join(arg);
	}
}
