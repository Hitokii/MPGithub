  const electron = require('electron');
const { CONSTANTE } = require('./constantes');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
let mainWindow;



const content = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
</head>
<body>
  <p>${CONSTANTE.HELLO_WORLD_TEXT}</p>
</body>
<style>
  body {
  background-color: lime;  
}
  p {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(-0%, -50%);
    color: blue;
  }
</style>
</html>
`;


function createWindow() {
  mainWindow = new BrowserWindow({ width: 1500, height: 800});
  mainWindow.setTitle(CONSTANTE.HELLO_WORLD_TITLE);
  mainWindow.loadURL(`data:text/html;charset=utf-8,${encodeURI(content)}`);
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', function() { 
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function() {
  if (mainWindow === null) {
    createWindow();
  }
});