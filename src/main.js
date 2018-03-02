const { app, BrowserWindow } = require('electron')
const { enableLiveReload } = require('electron-compile')
const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer')
const path = require('path')
const url = require('url')

let win

// enable react hot module reload
enableLiveReload({strategy: 'react-hmr'})

app.on('ready', () => {
	installExtension(REACT_DEVELOPER_TOOLS)

	win = new BrowserWindow({
		height: 650,
		width: 1000,
		backgroundColor: '#000',
		titleBarStyle: 'hidden-inset',
		fullscreenWindowTitle: true,
	})

	win.loadURL(url.format({
		pathname: path.join(__dirname, '../index.html'),
		protocol: 'file:',
		slashes: true,
	}))
})
