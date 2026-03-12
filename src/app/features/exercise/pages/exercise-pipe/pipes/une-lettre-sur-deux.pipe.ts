import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
	name: "unelettresurdeux",
})
export class UneLettreSurDeuxPipe implements PipeTransform {
	transform(value: string): string {
		const tmp = value.toLowerCase().split("");
		for (let i = 0; i < tmp.length; i += 2) {
			tmp[i] = tmp[i].toUpperCase();
		}

		return tmp.join("");
	}
}
