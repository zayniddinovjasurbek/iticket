module.exports = (sequelize, DataTypes) => {
    const Sector = sequelize.define("Sector", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        sector_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    // Uncomment and modify associations if necessary
    // Sector.associate = (models) => {
    //     Sector.belongsTo(models.User, {
    //         foreignKey: "user_id",
    //         as: "user",
    //     });
    // };

    return Sector;
};
