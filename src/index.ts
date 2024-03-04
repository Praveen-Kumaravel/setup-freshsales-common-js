export interface CustomWindow extends Window {
    freshsalesCommonJS: any;
}

declare let window: CustomWindow;

export const addGlobals = () => {
    window.freshsalesCommonJS = {
        mylib: () => {console.log('lib inistalled')}
    }
}