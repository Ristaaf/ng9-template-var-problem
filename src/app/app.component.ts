import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-test #appTest [idContext]="appTest.componentId + '|' + idContext"></app-test>`
})
export class AppComponent {
  public idContext: string = "root";
}

@Component({
  selector: 'app-test',
  template: ``
})
export class TestComponent {
  @Input()
  public idContext: string | null;

  public componentId: string = 'appTestId';
}
