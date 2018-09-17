
/* tslint:disable:quotemark */
// Defines the MongoDB $jsonSchema for service `teams`. (Can be re-generated.)
import merge from 'lodash.merge';
// !code: imports // !end
// !code: init // !end

let moduleExports = merge({},
  // !<DEFAULT> code: model
  {
    bsonType: "object",
    additionalProperties: false,
    properties: {
      _id: {
        bsonType: "objectId"
      },
      name: {
        minLength: 2,
        maxLength: 30,
        faker: "lorem.words",
        bsonType: "string"
      },
      memberIds: {
        maxItems: 10,
        items: {
          "0": {
            type: "string"
          },
          type: "ID",
          faker: {
            fk: "users:next"
          }
        },
        bsonType: "array"
      }
    },
    required: [
      "name",
      "members"
    ]
  },
  // !end
  // !code: moduleExports // !end
);

// !code: exports // !end
export default moduleExports;

// !code: funcs // !end
// !code: end // !end
