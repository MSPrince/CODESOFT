// eslint-disable-next-line no-unused-vars
const projectName = 'tribute-page';
// for hide code
document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
   }, false);
  
   document.addEventListener("keydown", (e) => {
    if (e.ctrlKey || e.keyCode==123) {
     e.stopPropagation();
     e.preventDefault();
    }
   });