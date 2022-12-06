const Sequelize=require('sequelize')

const sequelize=new Sequelize("todo","root","5858",{host:"localhost",dialect:'mysql'})

var connectDB = () => {
	sequelize.authenticate()
		.then(() => {
			sequelize.sync();
			console.log("Connection has been established successfully.");
		})
		.catch(err => {
			console.error("Unable to connect to the database:", err);
		});
};

module.exports={
    connectDB:connectDB,
    sequelize:sequelize 
}