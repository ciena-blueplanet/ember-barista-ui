module.exports = {
  'Text Field': {
    type: 'fillable',
    properties: [

    ]
  },
  'Button': {
    type: 'clickable',
    properties: [

    ]
  },
  'Page': {
      type: 'visitable',
      properties: [

      ]
  },
  'Link': {
    type: 'fillable',
    properties: [

    ]
  },
  'List Record': {
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
