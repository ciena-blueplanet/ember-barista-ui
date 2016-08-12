module.exports = {
  'text field': {
    type: 'fillable',
    properties: [

    ]
  },
  'button': {
    type: 'clickable',
    properties: [

    ]
  },
  'page': {
      type: 'visitable',
      properties: [

      ]
  },
  'link': {
    type: 'fillable',
    properties: [

    ]
  },
  'list record': {
    type: 'container',
    'user-record-toggle': {
      type: 'clickable',
      properties: [

      ]
    },
    'user-record-select': {
      type: 'clickable',
      properties: [

      ]
    },
    'user-record-primary-id': {
      type: 'text',
      properties: [

      ]
    },
    'user-record-secondary-id': {
      type: 'text',
      properties: [

      ]
    }
  }
}
