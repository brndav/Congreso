import { Component } from '@angular/core';
import { AuthService } from './login/loginusuario.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {


  constructor(private authService: AuthService) {}
  ngOnInit(): void {
   
  }
}
