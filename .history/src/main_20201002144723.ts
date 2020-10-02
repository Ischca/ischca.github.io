import Aurelia from 'aurelia';
import { MyApp } from './my-app';
import { Nights } from './nights';
import { NumSelector } from './num-selector';

Aurelia
  .register(
    Nights,
    NumSelector
  )
  .app(MyApp)
  .start();
