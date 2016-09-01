import {DefaultPlugin} from './defaultPlugin';

export default class Registry {
  constructor() {
    this.plugins = {};
  }

  // TODO(dcramer): it'd be good to possibly call this ``load`` and have it
  // take the API response. Then it can have all the mechanisms for things like
  // "get title of plugin" etc
  get(id) {
    // TODO(dcramer): we should probably registry all valid plugins
    let cls = (this.plugins[id] || DefaultPlugin);
    console.log('[plugins] Loading ' + id + ' as {' + cls.name + '}');
    return new cls();
  }

  add(id, cls) {
    this.plugins[id] = cls;
  }
}
