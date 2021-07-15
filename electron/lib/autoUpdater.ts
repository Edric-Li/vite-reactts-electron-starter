import { autoUpdater } from 'electron-updater'
import {app} from "electron";
import isDev from "electron-is-dev";

autoUpdater.on('update-downloaded',()=>{
    console.log('update-downloaded')
});

app.on('ready',()=>{
    if(!isDev){
        autoUpdater.checkForUpdates()
    }
})
