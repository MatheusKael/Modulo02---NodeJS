import Sequelize, { Model } from 'sequelize';

class File extends Model {

  static init(sequelize) {

    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,

          get() {
            return 'http://localhost:8081/files/' ; // arrumar
          },
        },
      },
      {
        sequelize,
      }

    );

    return this;
  }

}

export default File;
