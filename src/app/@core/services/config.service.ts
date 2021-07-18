import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

/**
 * Servicio configurador, se encarga de configurar el background de la app
 */
@Injectable({
  providedIn: "root",
})
export class ConfigService {
  /**
   * variable Subject
   */
  public bgVar = new Subject<string>();

  /**
   * su copia como observable para poder suscribirse
   */
  public bgVar$ = this.bgVar.asObservable();

  /**
   * Actualiza el background al nuevo pasado como parámetro
   * @param newUrl
   */
  public updatebgUrlSubject(newUrl: string) {
    this.bgVar.next(newUrl);
  }
}
