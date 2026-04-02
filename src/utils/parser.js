Here's the refactored and improved code:

```javascript
import { Parser } from 'json-schema';

const schema = {
  type: 'object',
  required: ['id', 'name'],
  additionalProperties: false,
  properties: {
    id: {
      type: 'integer',
      minimum: 1
    },
    name: {
      type: 'string',
      minLength: 1,
      maxLength: 100
    },
    description: {
      type: 'string',
      maxLength: 500
    },
    type: {
      type: 'string',
      enum: ['standard', 'premium', 'custom']
    },
    features: {
      type: 'array',
      uniqueItems: true,
      items: {
        type: 'string',
        pattern: '^[a-z0-9-]+$'
      }
    }
  }
};

const validate = (data) => {
  try {
    const parser = new Parser(schema);
    const result = parser.validate(data);
    return { valid: true, data: result };
  } catch (error) {
    return { valid: false, error: error.message };
  }
};

export { validate, schema };
```