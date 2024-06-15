require("dotenv").config()
const servermanager = require('./Server/Server.js')
const { libutil } = require('./Util/Utils.js')

servermanager.prepare();

servermanager.start();

libutil.getdbconnection(function (dbconnection) {


    if (dbconnection == false) {
        libutil.logger("Connection Failed", 3)
    }
    else {
        libutil.logger("Successfully Conected", 1)
    }

})