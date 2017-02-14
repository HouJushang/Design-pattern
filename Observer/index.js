/**
 * Created by hou on 2017/2/14.
 */
var saleOffices = {};
saleOffices.clientList = {};
saleOffices.listen = function(key,fn){
    if (this.clientList[key]){
        this.clientList[key] = []
    }
    this.clientList[key].push(fn)
}
saleOffices.trigger = function(){
    for (var i = 0, fn; fn = this.clientList[key][i++];){
        fn.apply(this,arguments)
    }
}
saleOffices.listen('66',function(price,squareMeter){
    console.log('价格' + price + '面积' + squareMeter);
})
saleOffices.listen('88',function(price,squareMeter){
    console.log('价格' + price + '面积' + squareMeter);
})

saleOffices.trigger(66,100);