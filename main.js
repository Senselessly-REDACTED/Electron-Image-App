const {app, BrowserWindow} = require('electron');
const path = require("path");

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 1000,
    })

    win.loadFile(path.join(__dirname, "react-app", "dist", "index.html"))
}

app.whenReady().then(() => {
    createWindow();
})