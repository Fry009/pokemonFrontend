import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Asegúrate de importar RouterModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],  // Importa RouterModule
  template: `<router-outlet></router-outlet>`,  // El enrutador mostrará los componentes aquí
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pokemon-front';
}
