
  console.log("loaded");

	var catList = $.get("https://ga-cat-rescue.herokuapp.com/api/cats").done(function(catList){
	    var catListParsed = jQuery.parseJSON(catList);
	    var fullCatList = [];
	   	for (var  i = 0; i < catListParsed.length; i++) {
	        fullCatList.push(catListParsed[i].name);
	    }
		var catNode = document.getElementById("cats");
			
		function write_catList(){
			    for (i = 0; i < fullCatList.length; i++ ) {
			    var li = document.createElement("li");
			    var t = document.createTextNode(fullCatList[i]);
			    li.appendChild(t); 
			    catNode.appendChild(li);
			    	//console.log(catNode);
				}
			}
		
		write_catList();

	$( "#new-cat" ).submit(function( event ) {
  		//alert( "Handler for .submit() called." );
  		event.preventDefault();
		 var $catName = $('#cat-name').val();//storing inputs
		 var $catNote = $('#cat-note').val();
		 $.ajax ({
				    type: "POST",
				    url: "https://ga-cat-rescue.herokuapp.com/api/cats",
				    data: JSON.stringify({ 'name' : $catName, 'note' : $catNote}),//pasing the values into a string
				    dataType: "json"
				    }).done(function(newKitty) {
				       console.log(newKitty);
				       });

			    });
  });

