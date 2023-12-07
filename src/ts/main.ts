import { debounce } from "./debounce";
import { throttle } from "./throttle";

const BIG = 123
var something: any
something = "😜";

console.log('Hello from typescript !' + something);

function fetchApi(){
    console.log("API fetched");
}
function onClick(){
    console.log("API fetched");
}


let input = document.querySelector('#q');
input?.addEventListener("change", debounce(fetchApi, 500));

let btn = document.querySelector("#b");
btn?.addEventListener("click", throttle(onClick, 500));