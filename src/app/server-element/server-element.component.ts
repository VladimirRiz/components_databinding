import { Component,
        Input,
        OnChanges,
        OnInit,
        ViewEncapsulation,
        SimpleChanges,
        DoCheck,
        OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, OnDestroy {
  @Input('srvElement') element!: {type: string, name:string, content:string} ;
  @Input() name!:string

  constructor() {
    console.log('constructor called!')
   }

   ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called!' , changes)
     //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
     //Add '${implements OnChanges}' to the class.

   }

  ngOnInit(): void {
    console.log('ngOnInit called!')

  }

  ngDoCheck(): void {
    console.log('ngDoCheck called!')
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.

  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called!')
  }

}
