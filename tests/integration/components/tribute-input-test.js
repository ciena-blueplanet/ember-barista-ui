/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'tribute-input',
  'Integration: TributeInputComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#tribute-input}}
      //     template content
      //   {{/tribute-input}}
      // `);

      this.render(hbs`{{tribute-input}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
