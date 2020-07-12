let callback = [];
let clickDocument = (e) => {
    const {target} = e;
    callback.forEach((item) => {
        if (item.el === target || item.el.contains(target)) {

        } else {
            item.callback();
        }
    });
};
document.addEventListener("click", clickDocument);
let removeListener = () => {
    document.removeEventListener("click", clickDocument);
};

export default {
    // 指令的定义
    bind: function (el, binding) {
        callback.push({el, callback: binding.value});
    },
};
export {removeListener};
