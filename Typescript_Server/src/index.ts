/**
 * Created by Shan on 4/10/2018.
 */

import * as http from "http";
import ExpressServer from './app';



const port = process.env.PORT || 3000;
const server = http.createServer(ExpressServer);


server.listen(port);

server.on('listening', () => {
    console.log("Listening on port: ", port)
})

server.on('error', (err) => {
    console.log("Server error: ", err)
})



