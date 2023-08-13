/**
 * @author lulongwen
 * Date: 2023-08-06 22:39
 * Description:
 */

export const CardNodeSchema = {
  'type': 'object',
  'properties': {
    'title': {
      'type': 'string',
      'title': '卡片标题',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-validator': [],
      'x-component-props': {},
      'x-decorator-props': {},
      'name': 'title',
      'x-designable-id': 'z2uapikb7ip',
      'x-index': 0,
    },
    'content': {
      'type': 'array',
      'x-component': 'ArrayItems',
      'x-decorator': 'FormItem',
      'title': '卡片内容',
      'name': 'array',
      'x-designable-id': '0oswh8spyq3',
      'items': {
        'type': 'object',
        'x-designable-id': 'jcu75ryks6t',
        'properties': {
          'space': {
            'type': 'void',
            'x-component': 'Space',
            'name': 'space',
            'x-designable-id': 'chu1stso4da',
            'properties': {
              'sort': {
                'type': 'void',
                'x-decorator': 'FormItem',
                'x-component': 'ArrayItems.SortHandle',
                'name': 'sort',
                'x-designable-id': '2fqgbk5q45v',
                'x-index': 0,
              },
              'label': {
                'type': 'string',
                'title': '标题',
                'x-decorator': 'FormItem',
                'x-component': 'Input',
                'name': 'label',
                'x-designable-id': 'tweglvkknp7',
                'x-index': 2,
              },
              'value': {
                'type': 'string',
                'title': '值',
                'x-decorator': 'FormItem',
                'x-component': 'Input',
                'x-component-props': {
                  'style': {
                    'width': 160,
                  },
                },
                'name': 'value',
                'x-designable-id': '6z8540jyoh7',
                'x-index': 3,
              },
              'remove': {
                'type': 'void',
                'x-decorator': 'FormItem',
                'x-component': 'ArrayItems.Remove',
                'name': 'remove',
                'x-designable-id': '9e6j3tmx7ja',
                'x-index': 4,
              },
            },
            'x-index': 0,
          },
        },
      },
      'x-index': 1,
      'properties': {
        'add': {
          'type': 'void',
          'title': '添加条目',
          'x-component': 'ArrayItems.Addition',
          'name': 'add',
          'x-designable-id': 'kmkyylihhtk',
          'x-index': 0,
        },
      },
    },
  },
  'x-designable-id': 'fghu67tzgsw',
};
