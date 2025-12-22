import { Parser } from 'json-schema';

const schema = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
    },
    name: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    type: {
      type: 'string',
    },
    features: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
  },
};

const validate = (data) => {
  const parser = new Parser(schema);
  return parser.validate(data);
};

export { validate };