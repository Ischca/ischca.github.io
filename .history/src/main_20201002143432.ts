import Aurelia from 'aurelia';
import { MyApp } from './my-app';
import { Nights } from './nights';

Aurelia
  .register(
    Nights
  )
  .app(MyApp)
  .start();
