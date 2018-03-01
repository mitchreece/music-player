const { app, BrowserWindow } = require('electron')
const { enableLiveReload } = require('electron-compile')
const path = require('path')
const url = require('url')

let win

// enable react hot module reload
enableLiveReload({strategy: 'react-hmr'})

app.on('ready', () => {

	win = new BrowserWindow({
		backgroundColor: '#000',
	})

	win.loadURL(url.format({
		pathname: path.join(__dirname, '../index.html'),
		protocol: 'file:',
		slashes: true,
	}))
})
