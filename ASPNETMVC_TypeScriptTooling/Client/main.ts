import * as _ from 'lodash';
import { sayHelloExp } from "./controllers/hello_controller";
import { renderTextJQuery } from "./controllers/jquery_example_controller";

function SayHello() {
    console.log("Hello World from the Client directory!");
}

SayHello();                             // From this file
sayHelloExp();
renderTextJQuery();