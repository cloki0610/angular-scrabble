import { Component, OnInit, Input, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @ContentChild(TemplateRef, {static:false}) content!:TemplateRef<any>;
  @Input() icon!:boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
