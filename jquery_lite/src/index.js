DOMNodeCollection = require('./dom_node_collection.js')


// document.addEventListener("DOMContentLoaded", () => {
$l = function (selector) {
    const functions = [] //[fn]
    if (selector instanceof HTMLElement) {
        const arr = [selector];
        return new DOMNodeCollection(arr);
    } else if (selector instanceof Function) {
        if (document.readyState === "complete") {
            selector();
        } else {
            functions.push(selector)
        }



    } else {

        const elements = document.querySelectorAll(selector);
        const arr = [];
        elements.forEach((el) => {
            arr.push(el)
        })

        return new DOMNodeCollection(arr);
    }

    document.addEventListener('DOMContentLoaded', () => {
        functions.forEach((el) => {
            el();
            functions.shift();
        })
    }, false);
}

li = $l('li')
p = document.createElement('p')
p.innerHTML = 'Taco'
$p = $l(p)

li.append($p)
$l(() => alert('the document is ready'));
$l(() => alert('the document is SUPER ready'));
// console.log('alert');


// window.$l = $l;
// })