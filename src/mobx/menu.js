import {makeObservable, action, observable} from 'mobx';

class Menu {
  show = false;

  change() {
    this.show = !this.show;
  }

  constructor() {
    makeObservable(this, {
      show: observable,
      change: action,
    });
  }
}

const menu = new Menu();

export default menu;
