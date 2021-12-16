import sayHello from "./modules/hello";
import indexOf from "lodash/indexOf";

const val = indexOf([1, 2, 3], 2);

sayHello("Hello : " + val);
