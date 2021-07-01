/* eslint-disable linebreak-style */
import {ServiceAddons} from '@feathersjs/feathers';
import { Application } from '../../declarations';
import createModel from '../../models/developer.model';
import hooks from './developer.hooks';
import appHooks from '../../app.hooks';
import { Developer } from './developer.class';


declare module '../../declarations' {
    interface ServiceTypes {
        'developers': Developer & ServiceAddons<any>;
    }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  app.use('/developers', new Developer(options, app));

  const service = app.service('developers');

  service.hooks(hooks);
}