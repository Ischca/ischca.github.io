import Aurelia from 'aurelia';
import { MyApp } from './my-app';
import { Nights } from './night';

Aurelia
  .register(
    Nights
  )
  .app(MyApp)
  .start();
