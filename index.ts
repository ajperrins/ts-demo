/// <reference path="typings/modules/lodash/index.d.ts" />

import * as _ from 'lodash';
import {demos} from "./demos";

enum DemoCategory {
  People,
  Males,
  Females,
  WorkingWomen
}

/**
 * Represents a Nielsen demographic
 */
class Demo {
  constructor(public name: string) {
    this.category = Demo.firstCharToCategoryMap[name[0]];
  }

  category: DemoCategory;

  toString() {
    return `I am ${DemoCategory[this.category]}`;
  }

  static firstCharToCategoryMap: { [key: string]: DemoCategory; } = {
    'M': DemoCategory.Males,
    'F': DemoCategory.Females,
    'P': DemoCategory.People,
    'W': DemoCategory.WorkingWomen
  };
}

const validDemos: Demo[] = _.map(_.filter(demos, (demo) =>
  new Demo(demo).category !== undefined
), (validDemoName) => new Demo(validDemoName));

_.each(validDemos, (d) => console.log(d.toString()));