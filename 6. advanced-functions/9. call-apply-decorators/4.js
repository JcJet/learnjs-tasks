function f(a) {
    console.log(a)
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)

// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано

function throttle(func, ms) {
    let lastCallTime = new Date(0);
    let timeoutID;
    function wrapper(...args) {
        let curTime = new Date();
        let timeDiff = curTime - lastCallTime;
        clearTimeout(timeoutID);
        timeoutID = setTimeout(() => {
            lastCallTime = new Date();
            func.call(this, ...args);
        }, timeDiff > 0 ? ms-timeDiff : 0)

    }
    return wrapper;
}