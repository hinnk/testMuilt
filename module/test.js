function HelloNode() {
    console.log('hello world');
}
exports.fn = function () {
    console.log('fn');
}
exports.HelloNode = HelloNode;


