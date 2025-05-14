const _ = require('lodash');

const user = {
  name: 'Anna',
  role: 'student'
};

const clonedUser = _.cloneDeep(user);
console.log('Cloned user:', clonedUser);
