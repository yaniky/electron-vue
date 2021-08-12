/* eslint-disable no-undef */
// eslint-disable-next-line import/no-extraneous-dependencies
const { app, BrowserWindow, Menu } = require("electron");
// const path = require("path");

function createHomeWin () {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: DEFAULT_WINDOW_PRELOAD_WEBPACK_ENTRY
        }
    });

    Menu.setApplicationMenu(null);

    // win.loadFile(path.join(__dirname, "../page/home/index.html"));
    win.loadURL(`${DEFAULT_WINDOW_WEBPACK_ENTRY}#home`);

    if (process.env.BUILD_ENV === "dev") {
        win.webContents.openDevTools();
    }
}

app.whenReady().then(() => {
    createHomeWin();

    app.on("activate", function () {
        if (BrowserWindow.getAllWindows().length === 0) {
            createHomeWin();
        }
    });
});

app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
        app.quit();
    }
});