class DOMNodeCollection {
    constructor(arr) {
        this.arr = arr;
    }

    html(string = '') {
        if (string.length > 0) {
            this.arr.forEach((el) => {
                el.innerHTML = string;
            })
        } else {
            return this.arr[0].innerHTML
        }
    }

    empty() {
        this.arr.forEach((el) => {
            el.innerHTML = '';
        })
    }

    append(input) {
        if (input instanceof DOMNodeCollection) {
            // debugger
            this.arr.forEach((el) => {
                input.arr.forEach((el2) => {
                    el.innerHTML = el.innerHTML + el2.outerHTML;
                })
            })

        } else if (input instanceof HTMLElement) {
            this.arr.forEach((el) => {
                el.innerHTML = el.innerHTML + input.outerHTML;
            })
        } else {
            this.arr.forEach((el) => {
                el.innerHTML += input;
            })
        }
        // if (input instanceof HTMLElement) {

        // }
    }

    addClass(className) {
        this.arr.forEach((el) => {
            el.classList.add(className);
        })
    }

    removeClass(className) {
        this.arr.forEach((el) => {
            el.classList.remove(className);
        })
    }

    attr(attribute, value) {
        this.arr.forEach((el) => {
            el.setAttribute(attribute, value);
        })
    }

    children() {
        const newCollection = [];
        this.arr.forEach((el) => {
            newCollection.push(el.children[0]);
        })

        return new DOMNodeCollection(newCollection);
    }

    parent() {
        const newCollection = [];
        this.arr.forEach((el => {
            newCollection.push(el.parentElement);
        }))

        return new DOMNodeCollection(newCollection);
    }

    find(selector) {
        // const childrenCollection = this.children();
        const matchingCollection = []
        this.arr.forEach((el) => {
            // debugger
            const nodeLists = el.querySelectorAll(selector)
            nodeLists.forEach((el) => {
                matchingCollection.push(el)
            })
        })
        return new DOMNodeCollection(matchingCollection);
    }

    remove() {
        this.arr.forEach((el) => {
            el.outerHTML = '';
        })
    }


    on(string, callback) {
        this.arr.forEach((el) => {
            el[string] = callback
            el.addEventListener(string, callback);
        })
    }

    off(string) {
        this.arr.forEach((el) => {
            el.removeEventListener(string, el[string]);
            el[string] = '';
        })

    }

}





module.exports = DOMNodeCollection