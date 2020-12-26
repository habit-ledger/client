import { constantKey, constantKeyFn, constantKeyResultSet, EventSet, constantKeyResultSetFn } from './constants';
import { loremIpsum } from 'lorem-ipsum';

describe('Constants Key Generator', () => {

  let actions: string[];
  let key: string;

  beforeEach(() => {
    actions = loremIpsum({ count: 255 }).split(' ');
    key = loremIpsum({ count: 1 }).split(' ')[0];
  });

  describe('#constantKey', () => {
    it('generates with the proper key', () => {
      const key = 'TEST';
      for (const act of actions) {
        const result = constantKey(key, act);
        expect(result).toEqual(`[${key}] ${act}`);
      }
    });
  });

  describe('#constantKeyFn', () => {
    let fn: (a: string) => string;

    beforeEach(() => {
      fn = constantKeyFn(key);
    });

    it('returns a valid generator', () => {
      for (const act of actions) {
        const res = `[${key}] ${act}`;
        expect(fn(act)).toEqual(res);
      }
    });
  });

  describe('#constantKeyResultSet', () => {
    it('returns a valid set', () => {
      for (const action of actions) {
        const [ trigger, success, failure ]: EventSet = constantKeyResultSet(key, action);
        expect(trigger).toEqual(`[${key}] ${action}`);
        expect(success).toEqual(`[${key}] ${action} Success`);
        expect(failure).toEqual(`[${key}] ${action} Failure`);
      }
    });
  });

  describe('#constantKeyResultSetFn', () => {
    let fn: (a: string) => EventSet;

    beforeEach(() => {
      fn = constantKeyResultSetFn(key);
    });

    it('returns a valid generator', () => {
      for (const action of actions) {
        const [ trigger, success, failure ]: EventSet = fn(action);
        expect(trigger).toEqual(`[${key}] ${action}`);
        expect(success).toEqual(`[${key}] ${action} Success`);
        expect(failure).toEqual(`[${key}] ${action} Failure`);
      }
    });
  });
});
