export function throttle(callback: () => void|any, delay:number) {
    var last:number;
    var timer:number;
    return function () {
        var context = this;
        var now = +new Date();
        var args:IArguments = arguments;
        if (last && now < last + delay) {
            // le délai n'est pas écoulé on reset le timer
            clearTimeout(timer);
            timer = setTimeout(function () {
                last = now;
                callback.apply(context, args.callee());
            }, delay);
        } else {
            // Sinon on lance le callback
            last = now;
            callback.apply(context, args.callee());
        }
    };
}