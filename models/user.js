
module.exports=function(Sequelize,sequelize,DataTypes){
   return sequelize.define('user',{
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING
      
      }
   });
}
   
