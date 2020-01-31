
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('projects', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false, 
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false, 
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false, 
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },

    });
    
  },

  down: queryInterface => {
 
    return queryInterface.dropTable('projects');
    
  }
};
