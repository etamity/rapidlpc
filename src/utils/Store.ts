import { Node } from 'godot';
import _set from 'lodash.set';
import _get from 'lodash.get';

type callbackFunc = (...args: any[]) => any;
export default class Store extends Node {
  private state: Record<string, any> = {};
  private listenerList: Record<string, callbackFunc[]> = {};
  setState(path: string, value: any) {
    if (value === undefined) {
      delete this.state[path];
    }
    _set(this.state, path, value);

    this.listenerList[path]?.forEach((callback) =>
      callback(value)
    );
  }
  getState(path: string): any {
    return _get(this.state, path);
  }
  on(name: string, func: (...args: any[]) => any) {
    const eventList: callbackFunc[] = this.listenerList[name] || [];
    eventList.push(func);
    this.listenerList[name] = eventList;
  }
  off(name: string) {
    delete this.listenerList[name];
  }
  _ready(): void {}

  // Called every frame. 'delta' is the elapsed time since the previous frame.
  _process(delta: number): void {}
}
