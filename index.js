/// <reference path="typings/modules/lodash/index.d.ts" />
"use strict";
var _ = require('lodash');
var demos_1 = require("./demos");
var DemoCategory;
(function (DemoCategory) {
    DemoCategory[DemoCategory["People"] = 0] = "People";
    DemoCategory[DemoCategory["Males"] = 1] = "Males";
    DemoCategory[DemoCategory["Females"] = 2] = "Females";
    DemoCategory[DemoCategory["WorkingWomen"] = 3] = "WorkingWomen";
})(DemoCategory || (DemoCategory = {}));
/**
 * Represents a Nielsen demographic
 */
var Demo = (function () {
    function Demo(name) {
        this.name = name;
        this.category = Demo.firstCharToCategoryMap[name[0]];
    }
    Demo.prototype.toString = function () {
        return "I am " + DemoCategory[this.category];
    };
    Demo.firstCharToCategoryMap = {
        'M': DemoCategory.Males,
        'F': DemoCategory.Females,
        'P': DemoCategory.People,
        'W': DemoCategory.WorkingWomen
    };
    return Demo;
}());
var validDemos = _.map(_.filter(demos_1.demos, function (demo) {
    return new Demo(demo).category !== undefined;
}), function (validDemoName) { return new Demo(validDemoName); });
_.each(validDemos, function (d) { return console.log(d.toString()); });
//# sourceMappingURL=index.js.map