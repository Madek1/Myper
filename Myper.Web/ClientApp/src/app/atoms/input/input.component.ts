import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'a-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class AInputComponent implements OnInit {
  @Input() type: String = 'text';
  @Input() value: String = '';
  @Input() className: string | string[] | Set<string> | { [klass: string]: any; }
  @Input() placeholder: String = '';
  @Input() id: String;

  constructor() { }

  ngOnInit() {
  }
}
