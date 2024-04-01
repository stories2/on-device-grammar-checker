const { app, BrowserWindow } = require("electron");
const path = require("node:path");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 300,
    height: 500,
    icon: path.join(__dirname, "images/icon@1x.png"),
  });

  win.loadFile("index.html");
  win.webContents.openDevTools();
  win.setAlwaysOnTop(true, "screen-saver");
  win.setResizable(false);
  win.setVisibleOnAllWorkspaces(true, {
    visibleOnFullScreen: true
  });
};

app.whenReady().then(() => {
  createWindow();
});
