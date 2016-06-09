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
        return this.name;
    };
    Demo.prototype.startAge = function () {
        var matchArray = this.name.match(/(\d{1,2})[+\-]/);
        return parseInt(matchArray[1], 10);
    };
    Demo.prototype.endAge = function () {
        var matchArray = this.name.match(/-(\d{1,2})/);
        if (matchArray)
            return parseInt(matchArray[1], 10);
        else
            return Infinity;
    };
    /**
     * A demo is a subset if
     *
     * @param other The comparison target
     */
    Demo.prototype.isSubsetOf = function (other) {
        // Subset on age range
        var result = !(other.startAge() > this.startAge()) && !(other.endAge() < this.endAge());
        // Subset on 'category'
        result = result && ((other.category === DemoCategory.People && (this.category === DemoCategory.Females || this.category == DemoCategory.Males)) ||
            (this.category === DemoCategory.Males && other.category === DemoCategory.Males) ||
            (this.category === DemoCategory.Females && other.category === DemoCategory.Females));
        return result;
    };
    Demo.allDemos = function () {
        return _.map(_.filter(demos_1.demos, function (demo) {
            return new Demo(demo).category !== undefined;
        }), function (validDemoName) { return new Demo(validDemoName); });
    };
    Demo.byName = function (name) {
        return _.find(Demo.allDemos(), function (d) { return d.name.trim() === name; });
    };
    Demo.firstCharToCategoryMap = {
        'M': DemoCategory.Males,
        'F': DemoCategory.Females,
        'P': DemoCategory.People,
        'W': DemoCategory.WorkingWomen
    };
    return Demo;
}());
_.each(Demo.allDemos(), function (demo) {
    console.log("===== " + demo.toString());
    var subsets = _.filter(Demo.allDemos(), function (d) {
        return d.isSubsetOf(demo);
    });
    _.each(subsets, function (d) { return console.log("....... " + d.toString()); });
});
//# sourceMappingURL=index.js.map