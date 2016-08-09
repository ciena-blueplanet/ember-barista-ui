import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  label (i) {
    return i
  },
  type (i) {
    return i
  }
});
