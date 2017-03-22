import {Component} from '@angular/core';


@Component({
  selector: 'radio-ng-model-example',
  templateUrl: './radio-ng-model-example.html',
  styleUrls: ['./radio-ng-model-example.css'],
})
export class RadioNgModelExample {
  favoriteSeason: string;

  seasons = [
    'Winter',
    'Spring',
    'Summer',
    'Autumn',
  ];
}


/**  Copyright 2016 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
