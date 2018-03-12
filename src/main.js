const { app, BrowserWindow } = require('electron')
const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer')
const path = require('path')
const url = require('url')
const { title } = require('./store/reducers/app').initialState

let win

app.on('ready', () => {
	installExtension(REACT_DEVELOPER_TOOLS)

	win = new BrowserWindow({
		title: title,
		height: 650,
		width: 1000,
		backgroundColor: '#000',
		titleBarStyle: 'hidden-inset',
		fullscreenWindowTitle: true,
	})

	win.loadURL(url.format({
		pathname: path.join(__dirname, './index.html'),
		protocol: 'file:',
		slashes: true,
	}))
})
