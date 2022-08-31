import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'deepValue'
})
export class DeepValuePipe implements PipeTransform {



  transform(getProperty: string, searchObject: Record<any, any>): any {
    let x = this.recursiveAccessToProperty(searchObject, getProperty);
    console.log(x)
    return x;
  }

  recursiveAccessToProperty(object: any, property: string): any {
    const properties = property.split(".");
    const firstProperty = properties[0];
    const remainingProperties = properties.slice(1);
    if (remainingProperties.length === 0) {
      return object[firstProperty];
    }
    return this.recursiveAccessToProperty(object[firstProperty], remainingProperties.join("."));
  }
}