import { Pipe, PipeTransform } from "@angular/core";
import { Heroe } from "../interface/heroe.model";

@Pipe({
    name: "Imagen",
    pure: false
})
export class PipeImage implements PipeTransform {

    transform(heroe: Heroe) {
        if (!heroe.id && !heroe.alt_img) {
            return 'assets/no-image.png';
        } else if (heroe.alt_img) {
            return heroe.alt_img;
        } else if (heroe.alt_img.trim().length == 0) {
            return 'assets/no-image.png';
        } else {
            return `assets/heroes/${heroe.id}.jpg`;
        }

    }

}