import Aurelia from 'aurelia';
import { MyApp } from './my-app';
import * as globalComponents from './components/registry';
import * as globalValueConverters from './value-converters/registry';
import 'flatpickr/dist/flatpickr.min.css';

Aurelia
  .register(
    globalComponents,
    globalValueConverters
  )
  .app(MyApp)
  .start();
