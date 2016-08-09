/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'sidebar-avatar',
  'Integration: SidebarAvatarComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#sidebar-avatar}}
      //     template content
      //   {{/sidebar-avatar}}
      // `);

      this.render(hbs`{{sidebar-avatar}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
