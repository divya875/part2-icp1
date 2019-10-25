import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstapp';
  operation: string = '';
  result: string = '';

  append(element: string){
    this.operation += element;
  }

  evaluate(){
    try {
      this.result = eval(this.operation);
    }
    catch(e) {
      alert('cannot evaluate expression');
    }
  }

  undo() {
    if (this.operation != ''){
      this.operation = this.operation.slice(0, -1)
    }
  }

  clear(){
    this.operation = '';
  }

}
