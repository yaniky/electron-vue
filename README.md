# 说明

## 结构

### src/layout

- 基础页面结构

### src/main

- electron 主线程

### src/page

- vue页面

### src/public

- index.html: html模板文件

### src/route

- 路由文件

### src/store

- vuex全局变量

## 渲染线程页面

### 新增位置

- package.json - config - forge - plugins - renderer
- 若页面基础结构不变，建议使用已有页面，通过路由区分

### 打开渲染线程页面

```js
const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
        preload: DEFAULT_WINDOW_PRELOAD_WEBPACK_ENTRY
    }
});

Menu.setApplicationMenu(null);

win.loadURL(`${DEFAULT_WINDOW_WEBPACK_ENTRY}#home`);

if (process.env.BUILD_ENV === "dev") {
    win.webContents.openDevTools();
}
```
