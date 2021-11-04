import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myControl = new FormControl('');

  filteredOptions = options.slice(0);

  ngOnInit() {
    this.myControl.valueChanges.subscribe((newValue) => {
      this.filteredOptions = options.filter(
        (option) => option.toLocaleUpperCase().indexOf(newValue.toLocaleUpperCase()) > -1
      );
    });
  }
}

const options: string[] = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
];