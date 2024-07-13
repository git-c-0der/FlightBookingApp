const express = require('express');
const bodyParser = require('body-parser');

const {PORT} = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');
const db = require('./models/index')
const {City, Airport} = require('./models/index')

const setupAndStartServer = async () => {
    // create the express object
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use('/api', ApiRoutes);
    app.listen(PORT, async () => {
        console.log(`Server started at port ${PORT}`);
        // Should be used only once as it is a heavy operation to sync the db.
        // if(process.env.SYNC_DB) {
        //     db.sequelize.sync({alter:true});
        // }
        // console.log(process.env);

        // const city = await City.findOne({
        //     where: {
        //         id: 6
        //     }
        // });
        // const airports = await city.getAirports();
        // console.log(airports);


    })
}

setupAndStartServer();