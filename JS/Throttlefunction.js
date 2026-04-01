function throttle(fn, limit) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {// If not in throttle, execute the function
            fn.apply(this, args);// Set the throttle flag and reset it after the limit time
            inThrottle = true;// Reset the throttle flag after the specified limit
            setTimeout(() => inThrottle = false, limit);// If in throttle, ignore the function call
        }
    };
}
function sayHello(name) {
    console.log("Hello " + name);
}

const throttledHello = throttle(sayHello, 1000);

throttledHello("Aman");
throttledHello("Rahul");
throttledHello("Priya");