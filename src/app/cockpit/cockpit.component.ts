import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContent', {static:true}) serverContent!: ElementRef;
  constructor() {

   }

  ngOnInit(): void {
  }
  onAddServer(serverNameInput: HTMLInputElement) {
    console.log(this.serverContent)
    this.serverCreated.emit({
      serverName: serverNameInput.value,
       serverContent: this.serverContent.nativeElement.value
      })
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.serverContent.nativeElement.value
    })
  }
}
