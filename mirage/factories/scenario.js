import { Factory, hasMany, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name (i) {
    return i
  },
  content (i) {
    return i
  },
  elements: hasMany()
});
