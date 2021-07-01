import { Sequelize, DataTypes, Model } from 'sequelize';
import { Application } from '../declarations';
import { HookReturn } from 'sequelize/types/lib/hooks';

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const Developer = sequelizeClient.define('developers', {
      
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sexo: {
      type: DataTypes.CHAR,
      allowNull: false},
    idade: {
      type: DataTypes.INTEGER,
      allowNull: false},
    dataNascimento: {
      type: DataTypes.DATE,
      field: 'data_nascimento',
      allowNull: false},
    hobby: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
      allowNull: false,
      defaultValue: DataTypes.NOW,
      type: DataTypes.DATE,
      field: 'created_at',
    },
    updatedAt:{
      allowNull: false,
      defaultValue: DataTypes.NOW,
      type: DataTypes.DATE,
      field: 'updated_at',
    },
    deletedAt: {
      allowNull: true,
      defaultValue: DataTypes.NOW,
      type: DataTypes.DATE,
      field: 'deleted_at',
    }
    
    
    
  }, {
    hooks: {
      beforeCount(options: any): HookReturn {
        options.raw = true;
      }
    }
  });
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (Developer as any).associate = function (models: any): void {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };
  
  return Developer;
}
  