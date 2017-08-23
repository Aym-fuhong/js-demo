function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done')
    })
}
timeout(100).then(value => {
    console.log(value)
});

//promise新建就会执行，然后执行同步任务，then方法指定的回调函数会最后执行
let promise = new Promise((resolve, reject) => {
    console.log('resolve');
    resolve();
});
promise.then(() => {
    console.log('resolved');
});
console.log('start');

//promise执行到resolve和reject后，promise使命就完成了
new Promise((resolve, reject) => {
    return resolve(1);
    // 后面的语句不会执行
    console.log(2);
}).then((value) => {
    console.log(value)
});

//resolve后面的console会执行，因为resolve会在本轮循环结束执行，先去执行同步任务
new Promise((resolve, reject) => {
    resolve(0);
    console.log(9);
}).then((value) => {
    console.log(value)
});

new Promise((resolve, reject) => {
    // resolve(7);
    reject(new Error('test-then'));
    console.log(5);
}).then(r => {
    console.log(r);
}).then({}, (error) => {
    console.log(error, 'then replace catch')
});

//使用catch捕获异常
new Promise(function (resolve, reject) {
    reject(new Error('test-catch'));
}).catch(function (error) {
    console.log(error, 'catch error');
});
//Promise.all()
//Promise.race()

//回调链最后一个方法抛出异常，用done,finally, ES6不能用
// new Promise((resolve, reject) => {
//     return 77 / 0;
// }).then((value) => {
//     console.log(value)
// }).catch((error) => {
//     console.log(error, '/ zero')
// }).then(() => {
//     return 66 / 0;
// }).done(value => {
//     console.log(value, 'done exce')
// });