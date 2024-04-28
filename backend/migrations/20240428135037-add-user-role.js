'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'role', {
      type: Sequelize.ENUM,
      values: [
        'reviewer',
        'admin'
      ],
      defaultValue: 'reviewer'
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('users', 'role')
  }
};
