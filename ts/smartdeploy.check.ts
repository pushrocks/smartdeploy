/// <reference path ="./typings/main.d.ts" />
import plugins = require("./smartdeploy.plugins");

let dockerVersion = undefined;
let parseDockerVersion = function(){
    if (typeof dockerVersion === "undefined") {
        dockerVersion = plugins.shelljs.exec("docker version").stdout;
    } else {
        
    };
};

export let docker = function(){
    
};

