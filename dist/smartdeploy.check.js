"use strict";
/// <reference path ="./typings/main.d.ts" />
var plugins = require("./smartdeploy.plugins");
exports.dockerVersion = function () {
    var versionInfo = plugins.shelljs.exec("docker version").stdout;
    return versionInfo;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtYXJ0ZGVwbG95LmNoZWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw2Q0FBNkM7QUFDN0MsSUFBTyxPQUFPLFdBQVcsdUJBQXVCLENBQUMsQ0FBQztBQUd2QyxxQkFBYSxHQUFHO0lBQ3ZCLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsTUFBTSxDQUFDO0lBQ2hFLE1BQU0sQ0FBQyxXQUFXLENBQUM7QUFDdkIsQ0FBQyxDQUFDIiwiZmlsZSI6InNtYXJ0ZGVwbG95LmNoZWNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aCA9XCIuL3R5cGluZ3MvbWFpbi5kLnRzXCIgLz5cbmltcG9ydCBwbHVnaW5zID0gcmVxdWlyZShcIi4vc21hcnRkZXBsb3kucGx1Z2luc1wiKTtcblxuXG5leHBvcnQgbGV0IGRvY2tlclZlcnNpb24gPSBmdW5jdGlvbigpe1xuICAgIGxldCB2ZXJzaW9uSW5mbyA9IHBsdWdpbnMuc2hlbGxqcy5leGVjKFwiZG9ja2VyIHZlcnNpb25cIikuc3Rkb3V0O1xuICAgIHJldHVybiB2ZXJzaW9uSW5mbztcbn07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
