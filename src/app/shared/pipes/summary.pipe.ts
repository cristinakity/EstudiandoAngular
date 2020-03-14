import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "summary"
})
export class SummaryPipe implements PipeTransform {
  transform(value: string, limit?: number): unknown {
    if (!value) {
      return null;
    }
    let actualLimit = limit ? limit : 50;
    actualLimit = actualLimit > value.length ? value.length : actualLimit;
    return value.substr(0, actualLimit) + "...";
  }
}
