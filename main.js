const { BrowserWindow, app } = require("electron");
app.whenReady().then(() => {
  createWindow();
});

let win;

function createWindow() {
  //   var win = new BrowserWindow({ fullscreen: true });
  //   win.loadFile("dist/hello-word-angular-electron/index.html");

  win = new BrowserWindow({
    width: 600,
    height: 670,
  });
  win.loadFile("dist/hello-word-angular-electron/index.html");
  //   win.loadURL(`dist/hello-word-angular-electron/index.html`);

  // uncomment below to open the DevTools.
  // win.webContents.openDevTools()

  // Event when the window is closed.
  win.on("closed", function () {
    win = null;
  });
}
