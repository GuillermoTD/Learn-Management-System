import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserDTO } from '../../dto/UserDTO';


@Injectable({
  providedIn: 'root',
})
export class UserStateService {
  //Esta es una instancia del estado que se usara para el usuario, la misma inicia en null
  private userObject = new BehaviorSubject<UserDTO | null>(null);
  //Esta propiedad es a la que los demas componentes podran acceder para llevar a cabo su logica
  public user$ = this.userObject.asObservable();

  constructor() {}

  setUSer(user: UserDTO) {
    //Este metodo permite la actualizacion del estado y por tanto de la propiedad a la que accederan los demas componentes
    this.userObject.next(user);
  }

  clearUser() {
    this.userObject.next(null);
  }

  //Este metodo se utiliza para extraer el estado de usuario, en caso de que no tenga valor devolvera nulo
  getUser(): UserDTO | null {
    return this.userObject.value;
  }
}
