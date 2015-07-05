var Renderer = {
    canvas:         null,
    context:        null,
    imgObject:      null,
    
    Initialize: function(){
      
        this.canvas       = document.getElementById('mCanvas');
        this.context      = this.canvas.getContext('2d');
        this.imgObject    = new Image();
        
    },
    
    Update: function(){
        this.context.fillStyle = '#351330';
        this.context.fillRect( 10, 10, 24, 24);
    }
};


var Utils = {
    Randomize: function(min, max){
        return( Math.random() * (max - min) + min); 
    }
};





Renderer.Initialize();
Renderer.Update();