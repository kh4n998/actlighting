import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  actOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    autoplayTimeout: 1500,
    autoplaySpeed: 700,
    autoplayHoverPause: true,
    navText: ['', ''],
    responsive: {
      400: {
        items: 1
      },
      940: {
        items: 2
      }
    },
    nav: false
  }

  listOfImages: {id: string, name: string}[] = [
    {
      id: "1",
      name: "https://actlighting.vn/wp-content/uploads/2021/08/ANH-TUONG-BEN-GIA-LAM.jpg"
    },
    {
      id: "2",
      name: "https://actlighting.vn/wp-content/uploads/2021/08/ANH-GHE-SOPHA.jpg"
    },
    {
      id: "3",
      name: "https://actlighting.vn/wp-content/uploads/2021/08/ANH-PHONG-KHACH-ANH-DU.jpg"
    },
    {
      id: "4",
      name: "https://actlighting.vn/wp-content/uploads/2021/08/ANH-DEN-ROI-VAO-TUONG.jpg"
    },
    {
      id: "5",
      name: "https://actlighting.vn/wp-content/uploads/2022/03/20210202_113339-scaled.jpg"
    },
    {
      id: "6",
      name: "https://actlighting.vn/wp-content/uploads/2022/03/20210202_171032-2048x996.jpg"
    },
    {
      id: "7",
      name: "https://actlighting.vn/wp-content/uploads/2022/03/20210310_120033-scaled.jpg"
    },
    {
      id: "8",
      name: "https://actlighting.vn/wp-content/uploads/2022/03/20210414_094122-scaled.jpg"
    },
    {
      id: "9",
      name: "https://actlighting.vn/wp-content/uploads/2022/03/20211101_162659-2048x1536.jpg"
    },
    {
      id: "10",
      name: "https://actlighting.vn/wp-content/uploads/2022/03/20211202_092729-2048x1536.jpg"
    },
    {
      id: "8",
      name: "https://actlighting.vn/wp-content/uploads/2022/03/IMG_1635826117654_1635826511307-2048x1536.jpg"
    },
    {
      id: "8",
      name: "https://actlighting.vn/wp-content/uploads/2022/03/IMG_1635826236871_1635826484404-2048x1536.jpg"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

  getImgSrc(name:string): string {
    return `https://actlighting.vn/wp-content/uploads/${name}`
  }

}
