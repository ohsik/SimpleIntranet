$( document ).ready(function() {
    
     // *Packery
    //----------------------------------------------------------------------------------------------------
    var $container = $('.packery').packery();
    
    // *Enable draggable divs
    //----------------------------------------------------------------------------------------------------
    $(function() {
        var i = 0;
        var totalnum = 5;
        
        for( i; i < totalnum; i++){
            // get item elements, jQuery-ify them
            var $itemElems = $container.find('#draggable' + i);
            // make item elements draggable
            $itemElems.draggable();
            // bind Draggable events to Packery
            $container.packery( 'bindUIDraggableEvents', $itemElems );
        }
    });


    // *Edit button on each divs (When edit icon clicked, show all edit buttons)
    //----------------------------------------------------------------------------------------------------
    var selecteddiv = '[id^="draggable"] .add-btn > i';
    //console.log(selecteddiv);
    
    $(selecteddiv).click(function (){ 
        var parentofthis = $(this).closest('[id^="draggable"]').attr('id');
        //console.log(parentofthis);
        $('#' + parentofthis + " .list-div i").fadeToggle();
        $('#' + parentofthis + " .edit-btn").fadeToggle();
        
        $("#debug").html(parentofthis);
    });
    
    $('.remove-div').click(function (){
        var cltxt = $(this).parent().text();
        $(".clickedtext").html(cltxt);
    });
    

    // *Remodal enable by adding data attribute
    //----------------------------------------------------------------------------------------------------
    $('.add-list').attr( "data-remodal-target", "modal");
    $('.remove-div').attr( "data-remodal-target", "rmmodal");


    // *Form Select
    //----------------------------------------------------------------------------------------------------
    $("#type").change(function(){
        var selectedform = $('#type').val();
        //console.log(selectedform);
        if ( selectedform == "link" ){
            $(".con-form").hide(); 
            $("#link").fadeIn();   
        } else if ( selectedform == "download" ){
            $(".con-form").hide(); 
            $("#file").fadeIn(); 
        } else {
            $(".con-form").hide(); 
            $("#content").fadeIn();
        }
    });
    
    
    
    
    
});