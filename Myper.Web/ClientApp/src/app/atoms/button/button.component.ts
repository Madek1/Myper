import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'a-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class AButtonComponent implements OnInit {
  @Input('disabled') isDisabled: Boolean;

  @Output() titleChanged = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

}
