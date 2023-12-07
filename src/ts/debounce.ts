export function debounce(callback: () => void|any, delay:number){
    var timer:number;
    return function(){
        var args: IArguments = arguments;
        var context = this;
        clearTimeout(timer);
        timer = setTimeout(function(){
            callback.apply(context, args.callee());
        }, delay)
    }
}