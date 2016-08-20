/* jshint expr:true */
import { expect } from 'chai'
import {
  describeComponent,
  it
} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'

describeComponent(
  'sidebar-nav',
  'Integration: SidebarNavComponent',
  {
    integration: true
  },
  function () {
    it('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#sidebar-nav}}
      //     template content
      //   {{/sidebar-nav}}
      // `);

      this.render(hbs`{{sidebar-nav}}`)
      expect(this.$()).to.have.length(1)
    })
  }
)
