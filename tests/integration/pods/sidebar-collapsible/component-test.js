/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'sidebar-collapsible',
  'Integration: SidebarCollapsibleComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#sidebar-collapsible}}
      //     template content
      //   {{/sidebar-collapsible}}
      // `);

      this.render(hbs`{{sidebar-collapsible}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
