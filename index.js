"use strict";
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
    Demo.firstCharToCategoryMap = {
        'M': DemoCategory.Males,
        'F': DemoCategory.Females,
        'P': DemoCategory.People,
        'W': DemoCategory.WorkingWomen
    };
    return Demo;
}());
var validDemos = [];
demos_1.demos.forEach(function (demoName) {
    var demo = new Demo(demoName);
    if (demo.category)
        validDemos.push(demo);
});
validDemos.forEach(function (validDemo) {
    return console.log("demo " + validDemo.name + " is categorized under " + DemoCategory[validDemo.category]);
});
//# sourceMappingURL=index.js.map