const { app, BrowserWindow } = require("electron");
const path = require("node:path");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 400,
    height: 600,
    icon: path.join(__dirname, "images/icon@1x.png"),
  });

  win.loadFile("index.html");
  win.webContents.openDevTools();
  win.setAlwaysOnTop(true);
  win.setResizable(false);
};

app.whenReady().then(() => {
  createWindow();
});
