/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'scenario-item',
  'Integration: ScenarioItemComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#scenario-item}}
      //     template content
      //   {{/scenario-item}}
      // `);

      this.render(hbs`{{scenario-item}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
