var Links = {
    setColor:function(color){
    var alist = document.querySelectorAll('a');
        var i = 0;
        while(i < alist.length){
            alist[i].style.color = color;
            i = i + 1;
        }
    }
}
var Body = {
    setColor:function(color){
    var target = document.querySelector('body').style.color = color;
    },
    setBackgroundcolor:function(color){
    var target = document.querySelector('body').style.backgroundColor = color;
    }
}
function nightDayhandler(self){
    var target = document.querySelector('body');
    if(self.value === 'night'){
        Body.setBackgroundcolor('black')
        Body.setColor('white');
        self.value = 'day';
        
        Links.setColor('powderblue');
    } else {
        Body.setBackgroundcolor('white')
        Body.setColor('black');
        self.value = 'night'
        ;

        Links.setColor('black');
    }
}