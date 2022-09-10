import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'diy-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.scss']
})
export class HomescreenComponent implements OnInit {

  templates = [
    {
      name: 'Application form',
      image: 'https://images.ctfassets.net/co0pvta7hzrh/11tlrzj0ipxDgQbci9ZZiB/e11b9edf610058298bf95a443177eb8d/Thumbnail__4_.png?q=80&fl=progressive',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia.'
    },
    {
      name: 'Feedback form',
      image: 'https://images.ctfassets.net/co0pvta7hzrh/2DQpfLK6DS2OY8oYAu6uqY/99b5b88f0fe9611750d266a5ad16d5e6/thumbs44_employee_engagement.jpg?q=80&fl=progressive',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia.'
    },
    {
      name: 'Employment form',
      image: 'https://images.ctfassets.net/co0pvta7hzrh/7EMJNud2hyYmWAO20C6OO2/80cb293af14f851254e3a9ba549c1a64/thumbs27_customer-sastifaction.jpg?q=80&fl=progressive',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia.'
    },
    {
      name: 'Healthcare form',
      image: 'https://images.ctfassets.net/co0pvta7hzrh/2eyiyoC0i9ZS3liQrWiRTv/7014f20ac24f21d88493e71b81a64758/skinthumbnail.png?q=80&fl=progressive',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia.'
    },
    {
      name: 'Membership form',
      image: 'https://images.ctfassets.net/co0pvta7hzrh/1Rbc1fVBEwmMkSa8SGwUqg/0d933228f0035e2d111c9cab9acdded4/thumbs06_rental_application.jpg?q=80&fl=progressive',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia.'
    },
    {
      name: 'Quote form',
      image: 'https://images.ctfassets.net/co0pvta7hzrh/11tlrzj0ipxDgQbci9ZZiB/e11b9edf610058298bf95a443177eb8d/Thumbnail__4_.png?q=80&fl=progressive',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia.'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
