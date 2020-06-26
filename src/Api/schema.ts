import { SchemaObject } from '@paljs/types'

export const schema: SchemaObject = {
  models: [
    {
      name: 'User',
      fields: [
        {
          name: 'id',
          type: 'Int',
          isId: true,
          unique: false,
          list: false,
          required: true,
          kind: 'scalar',
          documentation: '',
          relationField: false,
        },
        {
          name: 'createdAt',
          type: 'DateTime',
          isId: false,
          unique: false,
          list: false,
          required: true,
          kind: 'scalar',
          documentation: '',
          relationField: false,
        },
        {
          name: 'email',
          type: 'String',
          isId: false,
          unique: true,
          list: false,
          required: true,
          kind: 'scalar',
          documentation: '',
          relationField: false,
        },
        {
          name: 'name',
          type: 'String',
          isId: false,
          unique: false,
          list: false,
          required: false,
          kind: 'scalar',
          documentation: '',
          relationField: false,
        },
        {
          name: 'password',
          type: 'String',
          isId: false,
          unique: false,
          list: false,
          required: true,
          kind: 'scalar',
          documentation: '',
          relationField: false,
        },
        {
          name: 'posts',
          type: 'Post',
          isId: false,
          unique: false,
          list: true,
          required: false,
          kind: 'object',
          documentation: '// @onDelete(CASCADE)',
        },
        {
          name: 'group',
          type: 'Group',
          isId: false,
          unique: false,
          list: false,
          required: false,
          kind: 'object',
          documentation: '',
          relation: { fields: ['groupId'], references: ['id'] },
        },
        {
          name: 'groupId',
          type: 'Int',
          isId: false,
          unique: false,
          list: false,
          required: false,
          kind: 'scalar',
          documentation: '',
          relationField: true,
        },
        {
          name: 'comments',
          type: 'Comment',
          isId: false,
          unique: false,
          list: true,
          required: false,
          kind: 'object',
          documentation: '// @onDelete(SET_NULL)',
        },
      ],
      documentation: '',
    },
    {
      name: 'Post',
      fields: [
        {
          name: 'id',
          type: 'Int',
          isId: true,
          unique: false,
          list: false,
          required: true,
          kind: 'scalar',
          documentation: '',
          relationField: false,
        },
        {
          name: 'published',
          type: 'Boolean',
          isId: false,
          unique: false,
          list: false,
          required: true,
          kind: 'scalar',
          documentation: '',
          relationField: false,
        },
        {
          name: 'title',
          type: 'String',
          isId: false,
          unique: false,
          list: false,
          required: true,
          kind: 'scalar',
          documentation: '',
          relationField: false,
        },
        {
          name: 'author',
          type: 'User',
          isId: false,
          unique: false,
          list: false,
          required: false,
          kind: 'object',
          documentation: '',
          relation: { fields: ['authorId'], references: ['id'] },
        },
        {
          name: 'authorId',
          type: 'Int',
          isId: false,
          unique: false,
          list: false,
          required: false,
          kind: 'scalar',
          documentation: '',
          relationField: true,
        },
        {
          name: 'comments',
          type: 'Comment',
          isId: false,
          unique: false,
          list: true,
          required: false,
          kind: 'object',
          documentation: '// @onDelete(CASCADE)',
        },
        {
          name: 'createdAt',
          type: 'DateTime',
          isId: false,
          unique: false,
          list: false,
          required: true,
          kind: 'scalar',
          documentation: '',
          relationField: false,
        },
        {
          name: 'updatedAt',
          type: 'DateTime',
          isId: false,
          unique: false,
          list: false,
          required: true,
          kind: 'scalar',
          documentation: '',
          relationField: false,
        },
      ],
      documentation: '',
    },
    {
      name: 'Comment',
      fields: [
        {
          name: 'id',
          type: 'Int',
          isId: true,
          unique: false,
          list: false,
          required: true,
          kind: 'scalar',
          documentation: '',
          relationField: false,
        },
        {
          name: 'contain',
          type: 'String',
          isId: false,
          unique: false,
          list: false,
          required: true,
          kind: 'scalar',
          documentation: '',
          relationField: false,
        },
        {
          name: 'post',
          type: 'Post',
          isId: false,
          unique: false,
          list: false,
          required: true,
          kind: 'object',
          documentation: '',
          relation: { fields: ['postId'], references: ['id'] },
        },
        {
          name: 'postId',
          type: 'Int',
          isId: false,
          unique: false,
          list: false,
          required: true,
          kind: 'scalar',
          documentation: '',
          relationField: true,
        },
        {
          name: 'author',
          type: 'User',
          isId: false,
          unique: false,
          list: false,
          required: false,
          kind: 'object',
          documentation: '',
          relation: { fields: ['authorId'], references: ['id'] },
        },
        {
          name: 'authorId',
          type: 'Int',
          isId: false,
          unique: false,
          list: false,
          required: false,
          kind: 'scalar',
          documentation: '',
          relationField: true,
        },
        {
          name: 'createdAt',
          type: 'DateTime',
          isId: false,
          unique: false,
          list: false,
          required: true,
          kind: 'scalar',
          documentation: '',
          relationField: false,
        },
        {
          name: 'updatedAt',
          type: 'DateTime',
          isId: false,
          unique: false,
          list: false,
          required: true,
          kind: 'scalar',
          documentation: '',
          relationField: false,
        },
      ],
      documentation: '',
    },
    {
      name: 'Group',
      fields: [
        {
          name: 'id',
          type: 'Int',
          isId: true,
          unique: false,
          list: false,
          required: true,
          kind: 'scalar',
          documentation: '',
          relationField: false,
        },
        {
          name: 'name',
          type: 'String',
          isId: false,
          unique: false,
          list: false,
          required: true,
          kind: 'scalar',
          documentation: '',
          relationField: false,
        },
        {
          name: 'createdAt',
          type: 'DateTime',
          isId: false,
          unique: false,
          list: false,
          required: true,
          kind: 'scalar',
          documentation: '',
          relationField: false,
        },
        {
          name: 'updatedAt',
          type: 'DateTime',
          isId: false,
          unique: false,
          list: false,
          required: true,
          kind: 'scalar',
          documentation: '',
          relationField: false,
        },
        {
          name: 'users',
          type: 'User',
          isId: false,
          unique: false,
          list: true,
          required: false,
          kind: 'object',
          documentation: '// @onDelete(SET_NULL)',
        },
      ],
      documentation: '',
    },
  ],
  enums: [],
}
