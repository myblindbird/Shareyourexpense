const { kill } = require("nodemon/lib/monitor/run");
const splitbill = require("../models/splitbillModel");

//if method = equal or percent, push paid by id in sharedBy array

// email fname lname mobileno collectFrom giveTo amount
//                             vijay       0       300
