
module.exports = function(sequelize, DataTypes) {
    let Todo = sequelize.define("todo", {
        test: DataTypes.STRING,
     complete: DataTypes.BOOLEAN
    })
    return Todo
}












