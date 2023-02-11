import { Component, OnInit, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  constructor(private el: ElementRef) {}
  ngOnInit(): void {
  }
  positionX: number = 0;
  positionY: number = 0;
  @Input() index: any;
  ngAfterViewInit() {
    this.positionX = this.el.nativeElement.offsetLeft;
    this.positionX = this.el.nativeElement.offsetTop;
    console.log(`Top position for item at index ${this.index}: `, this.el.nativeElement.offsetTop);
    console.log(`Left position for item at index ${this.index}: `, this.el.nativeElement.offsetLeft);
  }

}
