let helpObj = require("./command/help");
let treeObj = require("./command/tree");
let organizeObj = require("./command/organize");
let inputArr = process.argv.slice(2);
let command = inputArr[0];
switch (command) {
    case "tree":
        // node main.js tree "C:\Users\Ritik Singh\Desktop\Batches\PP_12_21\JS\Module_1_FS\randomFolder"   
        treeObj.treefxn(inputArr[1]);
        break;
        //  input -> node main.js organize "C:\Users\Ritik Singh\Desktop\Batches\PP_12_21\JS\Module_1_FS\randomFolder"
    case "organize":
        organizeObj.organizefxn(inputArr[1])
        break;
    case "help":
        helpObj.helpfxn();
        break;
    default:
        console.log("🙏 kindly enter the correct cmd");
        break;
}