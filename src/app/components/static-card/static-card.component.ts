import { Component } from '@angular/core';


@Component({
  selector: 'app-static-card',
  templateUrl: './static-card.component.html',
  styleUrls: ['./static-card.component.scss']
})
export class StaticCardComponent {
  images: string[] = [
    '../../../assets/template-img/pen.png ',
    '../../../assets/template-img/sql.png',
    '../../../assets/template-img/pen.png',
    '../../../assets/template-img/sql.png',
    '../../../assets/logo.jpg',
    '../../../assets/logo.jpg',
    '../../../assets/logo.jpg',
    '../../../assets/logo.jpg'
  ];
  images1 = [
   '../../../assets/template-img/pen.png ',
    '../../../assets/template-img/sql.png',
    '../../../assets/template-img/pen.png',
    '../../../assets/template-img/sql.png',
  ];

  images2 = [
     '../../../assets/logo.jpg',
    '../../../assets/logo.jpg',
    '../../../assets/logo.jpg',
    '../../../assets/logo.jpg'
  ];
}





