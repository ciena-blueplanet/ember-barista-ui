/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'scenario-modal',
  'Integration: ScenarioModalComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#scenario-modal}}
      //     template content
      //   {{/scenario-modal}}
      // `);

      this.render(hbs`{{scenario-modal}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
