
/* eslint quotes: 0 */
// Validation definitions for validateSchema hook for service `users`. (Can be re-generated.)
const { validateSchema } = require('feathers-hooks-common');
const merge = require('lodash.merge');
const ajv = require('ajv');
// !code: imports // !end
// !code: init // !end

// !<DEFAULT> code: set_id_type
// eslint-disable-next-line no-unused-vars
const ID = 'string';
// !end

let base = merge({},
  // !<DEFAULT> code: base
  {
    title: "Users",
    description: "Users database.",
    required: [
      "email",
      "firstName",
      "lastName",
      "roleId"
    ],
    uniqueItemProperties: [],
    properties: {
      id: {
        type: ID
      },
      email: {
        minLength: 8,
        maxLength: 40,
        faker: "internet.email",
        type: "string"
      },
      firstName: {
        minLength: 2,
        maxLength: 15,
        faker: "name.firstName",
        type: "string"
      },
      lastName: {
        minLength: 2,
        maxLength: 30,
        faker: "name.lastName",
        type: "string"
      },
      password: {
        chance: {
          hash: {
            length: 60
          }
        },
        type: "string"
      },
      roleId: {
        type: ID,
        faker: {
          fk: "roles:random"
        }
      }
    }
  },
  // !end
  // !code: base_more // !end
);
// !code: base_change // !end

let create = merge({},
  base,
  // !code: create_more // !end
);

let update = merge({},
  base,
  // !code: update_more // !end
);

let patch = merge({},
  base,
  { required: undefined },
  // !code: patch_more // !end
);
// !code: all_change // !end

let validateCreate = options => {
  // !<DEFAULT> code: func_create
  return validateSchema(create, ajv, options);
  // !end
};

let validateUpdate = options => {
  // !<DEFAULT> code: func_update
  return validateSchema(update, ajv, options);
  // !end
};

let validatePatch = options => {
  // !<DEFAULT> code: func_patch
  return validateSchema(patch, ajv, options);
  // !end
};

let quickValidate = (method, data, options) => {
  try {
    if (method === 'create') { validateCreate(options)({ type: 'before', method: 'create', data }); }
    if (method === 'update') { validateUpdate(options)({ type: 'before', method: 'update', data }); }
    if (method === 'patch') { validatePatch(options)({ type: 'before', method: 'patch', data }); }
  } catch (err) {
    return err;
  }
};
// !code: validate_change // !end

let moduleExports = {
  create,
  update,
  patch,
  validateCreate,
  validateUpdate,
  validatePatch,
  quickValidate,
  // !code: moduleExports // !end
};

// !code: exports // !end
module.exports = moduleExports;

// !code: funcs // !end
// !code: end // !end
