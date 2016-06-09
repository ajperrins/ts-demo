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
    return this.name;
  }

  startAge(): number {
    var matchArray = this.name.match(/(\d{1,2})[+\-]/);
    return parseInt(matchArray[1], 10);
  }

  endAge(): number {
    var matchArray = this.name.match(/-(\d{1,2})/);
    if (matchArray) return parseInt(matchArray[1], 10);
    else return Infinity;
  }

  /**
   * A demo is a subset if 
   * 
   * @param other The comparison target
   */
  isSubsetOf(other: Demo): boolean {
    
    // Subset on age range
    let result = !(other.startAge() > this.startAge()) && !(other.endAge() < this.endAge());
    
    // Subset on 'category'
    result = result && (
       (other.category === DemoCategory.People && (this.category === DemoCategory.Females || this.category == DemoCategory.Males)) ||
       (this.category === DemoCategory.Males && other.category === DemoCategory.Males) ||
       (this.category === DemoCategory.Females && other.category === DemoCategory.Females)
    )
    
    return result;
  }

  static allDemos(): Demo[] {
    return _.map(_.filter(demos, (demo) =>
      new Demo(demo).category !== undefined
    ), (validDemoName) => new Demo(validDemoName));
  }
  
  static byName(name:string):Demo{
    return _.find(Demo.allDemos(), (d) => d.name.trim() === name);
  }

  private static firstCharToCategoryMap: { [key: string]: DemoCategory; } = {
    'M': DemoCategory.Males,
    'F': DemoCategory.Females,
    'P': DemoCategory.People,
    'W': DemoCategory.WorkingWomen
  };
}




_.each(Demo.allDemos(), (demo) =>{
  console.log(`===== ${demo.toString()}`);
  var subsets = _.filter(Demo.allDemos(), (d) => {
    return d.isSubsetOf(demo);
  })
  _.each(subsets, d=> console.log(`....... ${d.toString()}`));
})