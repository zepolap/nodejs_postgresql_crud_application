'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('customers', [
       {
     	   firstname: 'Jack', 
           lastname: 'Smith',
	   address: 'Framingham MA 1701. 677 Timpany Blvd',
	   age: 23,
           createdAt: new Date(),
           updatedAt: new Date()
       },
       {
     	   firstname: 'Mary', 
           lastname: 'Bay',
	   address: 'Framingham MA 1701. 677 Timpany Blvd',
	   age: 50,
           createdAt: new Date(),
           updatedAt: new Date()
       }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('customers', null, {});
  }
};
