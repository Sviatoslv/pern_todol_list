import { ApiFetching } from './ApiFetching';
import { config } from '../config';

export class TodosApis extends ApiFetching {
  static async addTodo(descriptionObj) {
    const response = await this._fetching(config.TODOS_URL, 'POST', descriptionObj);
    return response;
  }

  static async getTodos() {
    const response = await this._fetching(config.TODOS_URL, 'GET');
    return response;
  }

  static async deletTodo(id) {
    const response = await this._fetching(`${config.TODOS_URL}/${id}`, 'DELETE');
    return response;
  }

  static async saveEditedTodo(id, descriptionObj) {
    console.log(id);
    
    const response = await this._fetching(`${config.TODOS_URL}/${id}`, 'PUT', descriptionObj);
    return response;
  }
};
