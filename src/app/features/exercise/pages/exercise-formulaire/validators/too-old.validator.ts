import {ValidatorFn} from "@angular/forms";
import dayjs from "dayjs";

export function tooOldValidator(): ValidatorFn {
	return control => {
		const value: string = control.value;

		// transfomer en date
		const date = dayjs(value);

		// vérifier si pas supérieur à 115ans
		if (date > dayjs().subtract(115, "year")) {
			return null;
		}
		return {tooold: true};
	};
}
