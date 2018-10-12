/**
 * @author Liu Chaofan
 * @license MIT
 *
 * @flow
 */
import A from '../components/A';
import B from '../components/B';

type Vue = Object;

let _Vue;
const routerMap = {
  index: A,
  yourPage: B
};

class ToyRouter {
  history: Array<Vue>;
  static install: (Vue: Vue) => void;
  constructor() {
    this.history = [];
  }
  get current() {
    return this.history[this.history.length - 1];
  }
  push(name: string) {
    const component = routerMap[name];
    if (!component instanceof _Vue) return;
    this.history.push(component);
  }
  pop(): Vue {
    return this.history.pop();
  }
}

ToyRouter.install = function install(Vue) {
  if (_Vue && _Vue === Vue) {
    return;
  }
  _Vue = Vue;

  Vue.mixin({
    beforeCreate() {
      const options = this.$options;
      if (options.toyRouter) {
        this.toyRouter = options.toyRouter;
      } else if (options.parent && options.parent.toyRouter) {
        this.toyRouter = options.parent.toyRouter;
      }
      Vue.util.defineReactive(this, '__routes__', this.toyRouter.history);
    }
  });

  Vue.component('Router', {
    name: 'Router',
    created() {
      const component = this.toyRouter.push(this.name);
    },
    props: {
      name: {
        type: String,
        default: 'index'
      }
    },
    render(h) {
      const component = this.__routes__[this.__routes__.length - 1];
      if (component) {
        return h(component);
      } else {
        return h('div', '404 not found');
      }
    }
  });
};

export default ToyRouter;
