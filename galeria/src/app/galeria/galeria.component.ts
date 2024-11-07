import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})



export class GaleriaComponent {
  imagenes = [
    'https://th.wallhaven.cc/orig/5g/5gxqv8.jpg',
    'https://th.wallhaven.cc/orig/d6/d6rzjo.jpg',
    'https://th.wallhaven.cc/orig/p9/p9ep13.jpg'
  ];
}
