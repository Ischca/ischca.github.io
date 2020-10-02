import Aurelia from 'aurelia';
import { MyApp } from './my-app';
import { Nights } from './nights';
import * as globalComponents from './components/registry';

Aurelia
  .register(
    globalComponents 
  )
  .app(MyApp)
  .start();
