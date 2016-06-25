'use strict';
const remote = require('electron').remote;
const Menu = remote.Menu;

var template = [
	{
		label: 'Image Transform',
	}
];

let menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);