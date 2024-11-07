import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styleUrl: './imagen.component.css'
})

export class ImagenComponent {
  @Input() imageUrl: string = ''; // Recibe la URL de la imagen desde el componente padre
}
