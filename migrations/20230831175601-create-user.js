'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nome: {
          type: Sequelize.STRING(50),
          allowNull: false
      },
      cpf: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
      },
      telefone: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
      },
      endereco: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW
      },
      updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};