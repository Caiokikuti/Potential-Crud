/* eslint-disable linebreak-style */
import {Service, SequelizeServiceOptions} from 'feathers-sequelize';
import {Application} from '../../declarations';

export class Developer extends Service {
  
  constructor(options: Partial<SequelizeServiceOptions>, app:Application) {
    super(options);
  }
}
