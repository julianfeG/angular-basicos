import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  public heroeBorrado: string = '';
  public heroes: string[] = ['Spiderman','Iron Man', 'Hulk', 'Thor', 'Capitan America'];

  borrarHeroe(): void {
    console.log('borrando...');
    this.heroeBorrado = this.heroes.pop() || '';
  }

}
