const l = () => {
  window.freshsalesCommonJS = {
    mylib: () => {
      console.log("lib inistalled");
    }
  };
};
export {
  l as addGlobals
};
