(function (window){
    var root = function (){
        this.root = null;
    };

    root.prototype={
        data: [],
        getData: function (){
            return this.data;
        },
        setData:function (values){
           
            if(Array.isArray(values)){
                for(i = 0; i< values.length; i++){
                    this.data.push(values[i]);
                }
            }   else {
                this.data.push(values);
            }
            
        },
        printData: function (){
            console.log(this.data);
        }
    };

    window.root = root;
    return root;
})(window);