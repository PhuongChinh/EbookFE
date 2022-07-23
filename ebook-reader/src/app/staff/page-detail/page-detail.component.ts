import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router'; '@angular/router'
import { CdkDragEnd } from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.css']
})
export class PageDetailComponent implements OnInit {
  listButton: any = []
  listGeneratedButton: any = [];
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  generateButton() {
    console.log('generateButton')
    this.listButton.push(
      {
        id: this.listButton.length,
        name: 'Button ' + this.listButton.length,
        type: 'button',
        value: 'Button ' + this.listButton.length,
        style: {
          'background-color': 'white',
        }
      }
    )

    this.listGeneratedButton.push(
      {
        isDisplay: false
      }
    )
  }
  redirectTo(path: string) {
    this.router.navigate([path])
  }


  initialPosition = { x: 100, y: 100 };
  position = { ...this.initialPosition };
  offset = { x: 0, y: 0 };
  dragEnd(event: CdkDragEnd, index: number) {
    this.offset = { ...(<any>event.source._dragRef)._passiveTransform };

    this.position.x = this.initialPosition.x + this.offset.x;
    this.position.y = this.initialPosition.y + this.offset.y;

    console.log(this.position, this.initialPosition,index);

    // this.listButton.splice(index, 1);
  }
  deleteAllButton() {
    this.listButton = [];
  }
}