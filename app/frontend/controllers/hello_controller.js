import { Controller } from 'stimulus';

export default class extends Controller {
  greet() {
    console.log('Hello, Stimulus!', this.name);
  }

  get name() {
    return this.targets.find('name').value;
  }
}
