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

  static firstCharToCategoryMap: { [key: string]: DemoCategory; } = {
    'M': DemoCategory.Males,
    'F': DemoCategory.Females,
    'P': DemoCategory.People,
    'W': DemoCategory.WorkingWomen
  };
}

const validDemos = [];

demos.forEach(demoName => {
  var demo = new Demo(demoName);
  if(demo.category)
    validDemos.push(demo);
  
});

validDemos.forEach(validDemo => 
  console.log(`demo ${validDemo.name} is categorized under ${DemoCategory[validDemo.category]}`)
)