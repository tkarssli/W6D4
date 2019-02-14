DOMNodeCollection = require('./dom_node_collection.js')



document.addEventListener("DOMContentLoaded", () => {
    $l = function (selector) {
        if (selector instanceof HTMLElement) {
            const arr = [selector];
            return new DOMNodeCollection(arr);

        } else {

            const elements = document.querySelectorAll(selector);
            const arr = [];
            elements.forEach((el) => {
                arr.push(el)
            })

            return new DOMNodeCollection(arr);
        }
    }

    li = $l('li')
    p = document.createElement('p')
    p.innerHTML = 'Taco'
    $p = $l(p)

    li.append($p)
    // console.log('alert');


    // window.$l = $l;
})