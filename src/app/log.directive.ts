import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLog]',
  standalone: true,
  host: {
    '(click)': 'onLog()'
  }
})
export class LogDirective {

  constructor(private hostElement: ElementRef) { }

  onLog() {
    console.log('CLICKED!');
    console.log(this.hostElement);
  }
}
