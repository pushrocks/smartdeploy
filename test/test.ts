/// <reference path ="../ts/typings/main.d.ts" />
let smartDeploy = require("../dist/index.js");


describe("smartdeploy",function(){
    describe(".check",function(){
        describe(".docker()",function(){
            it("should display docker information",function(){
                smartDeploy.check.docker();
            });
        });
    });

});