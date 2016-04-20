/// <reference path ="./typings/main.d.ts" />
import plugins = require("./smartdeploy.plugins");


let parseDockerVersion = function(){
    plugins.shelljs.exec("docker version").stdout;
};

let dockerInfoObject = undefined;
export let dockerInfo = function(){
    if (typeof dockerInfo === "undefined") {
        dockerInfoObject = parseDockerVersion();
    };
    return dockerInfoObject
};
