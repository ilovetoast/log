(function ( $ ) {

    jqLogData = { data:[] };
    $.fn.log = function( msg ) {
        
        var $self = this;
        var selector = $self['selector'];
                
        //Action
        if ( msg === "show" || msg === "showObj" ){
            show(msg);
        }else if ( typeof msg !== "undefined" && msg !== null ){
            push(msg);
        }else{
            if ( selector ){
                msg = "[object: "+selector+" ] - no message"
                push(msg);
            }else{
              show();
            }
        }
        
        function push(msg){
            msg = {Task: msg, Time: new Date().getTime() };
            jqLogData.data.push(msg);
        };

        function show(type){
            if (type === "showObj"){
                console.log(jqLogData);   
            }else{
                console.log('-= LOG =-');
                $(jqLogData.data).each(function(index,item){
                    var timeStamp = new Date(item.Time);
                    console.log(timeStamp.getMonth() + "/" + timeStamp.getDay() + "/" + timeStamp.getFullYear() + " " + timeStamp.getHours() + ":" + timeStamp.getMinutes() + ":" + timeStamp.getSeconds() + ":" + timeStamp.getMilliseconds() +  " =- \t" + item.Task );
                });
            }
        }
        return this;
    };
    
}( jQuery ));
