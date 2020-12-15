//
// generated code: source - ../pybx/Utils.pybx
import * as libpybx from 'libpybx-js';
    
export class DataFrame extends libpybx.dataclass {
  constructor(columns, dataframeJSON) {
  super();
    this.columns = columns;
    this.dataframeJSON = dataframeJSON;
  }
};
export class SDFDict extends libpybx.dataclass {
  constructor(keys, values) {
  super();
    this.keys = keys;
    this.values = values;
  }
};
