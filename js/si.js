$( document ).ready(function() {
    
    // Draggable for divs
    $(function() {
        var i = 0;
        var totalnum = 5;
        
        for( i; i < totalnum; i++){
            $( '#draggable' + i ).draggable({
                containment: "window"
            });
            
            //Edit button
            var selecteddiv = "#draggable" + i + " .add-btn > i";
            var showbtns = "#draggable" + i + " .list-div i";
            var editbtns = "#draggable" + i + " .edit-btn";
            alert(selecteddiv);
            
            // **Solve this issue
            $(selecteddiv).click(function (){  
                $(showbtns).fadeToggle();
                $(editbtns).fadeToggle();
            }); 
        }
        
            
            
            
    
    });
    
         
    
    
    //Lightbox Initialize
    $('.add-list').magnificPopup({
      items: {
          src: '<div class="white-popup">Dynamically created popup</div>',
          type: 'inline'
      }
    });
    
    //Dialog for removing div
    $('.remove-div').click(function() {
        $( "#remove-msg" ).dialog();
    });
    
});