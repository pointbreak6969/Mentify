import {app} from "../app.js"
import {server} from "../index.js"
import Server from "socket.io"

const io = new Server(server)

io.on("connetion", (socket) => {
    console.log("New connection")
})