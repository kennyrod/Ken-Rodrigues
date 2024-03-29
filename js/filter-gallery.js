/*
    Author: Akshay Nagpal (github.com/akshaynagpal)
    License: MIT
*/

$(document).ready(function(){
    // clicking button with class "category-button"
    $(".gallery-category").click(function(){
        // get the data-filter value of the button
        var filterValue = $(this).attr('data-filter');
        
        // show all items
        if(filterValue == "all")
        {
            $(".all").show("slow");
        }
        else
        {   
            // hide all items
            $(".all").not('.'+filterValue).hide("slow");
            // and then, show only items with selected data-filter value
            $(".all").filter('.'+filterValue).show("slow");
        }
    });

});