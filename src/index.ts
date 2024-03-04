import { CustomWindow } from "./types";

declare let window: CustomWindow;

export const addGlobals = () => {
    window.freshsalesCommonJS = {
        mylib: () => {console.log('lib inistalled')}
    }
}