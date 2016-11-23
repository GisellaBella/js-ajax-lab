
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


});



$("form").submit(function(event) {
    	var cat = {"name":"cat-name","note":"cat-note"};
   		$.ajax({
	        type: "POST",
	        data :JSON.stringify(cat),
	        url: "https://ga-cat-rescue.herokuapp.com/api/cats",
	        contentType: "application/json"
    	});
    }
    
    );
	
 