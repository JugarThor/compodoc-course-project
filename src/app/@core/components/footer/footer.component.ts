import { SharedElement } from "./../../interfaces/shared-element.interface";
import { Component } from "@angular/core";

/**
 * Usamos este componente para pintar el footer de todas las páginas
 */
@Component({
  selector: "blog-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
})
export class FooterComponent {
  /**
   * Comentario inicial
   */
  currentYear: number = new Date().getFullYear();
  /**
   * Comentario inicial 1
   *
   * Comentario inicial 2
   */
  author = "Anartz Mugika Ledo";

  /**
   * Elementos compartidos
   */
  sharedElements: SharedElement[] = [
    {
      url: "https://twitter.com/",
      path: "mugan86",
      icon: "fab fa-twitter",
    },
    {
      url: "https://github.com/",
      path: "mugan86",
      icon: "fab fa-github",
    },
    {
      url: "https://www.linkedin.com/in/",
      path: "anartz-mugika-0007a062",
      icon: "fab fa-linkedin",
    },
    {
      url: "https://bintray.com/",
      path: "amugika/maven",
      icon: "fas fa-frog",
    },
    {
      url: "https://npmjs.com/",
      path: "~mugan86",
      icon: "fab fa-npm",
    },
  ];

  /**
   * Hola saludo
   *
   * [Referencia a HeaderComponent]{@link HeaderComponent}
   *
   * {@link HeaderComponent|Referencia a HeaderComponent}
   *
   * [Referencia a la propiedad bgUrl de HeaderComponent]{@link HeaderComponent#bgUrl}
   *
   * [Google]{@link http://www.google.com}
   *
   * {@link http://www.apple.com|Apple}
   *
   * ```
   *  Mostrarnos un saludo con contenido "hola"
   * ```
   *
   * @returns {string} Devuelve el saludo con contenido hola
   */
  holaMundo(): string {
    return "Hola mundo!";
  }

  /**
   * Hola saludo
   *
   * ```
   * Si nombre Julian
   * Si apellido Garcia
   * Mostrará: Hola Julian Garcia
   * ```
   *
   * @param nombre Nombre al que vamos a saludar
   * @param apellido Apellido del nombre al que vamos a saludar
   * @returns {string} Devuelve el saludo con contenido hola
   *
   */
  holaMundoPersonalizdo(nombre: string, apellido: string): string {
    return "Hola " + nombre + " " + apellido;
  }
}
