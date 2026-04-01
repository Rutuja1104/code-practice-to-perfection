function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
};


function sayHello(name) {
    console.log("Hello " + name);
}

const debouncedHello = debounce(sayHello, 1000);

// Calling it
debouncedHello("Aman");
debouncedHello("Rahul");
debouncedHello("Priya");
