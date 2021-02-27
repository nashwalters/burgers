// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
	$("#submit-btn").on("click", function(event) {
    	event.preventDefault();
    		var burger = {
        	name: $("#burger").val().trim()
    	}
    	console.log(burger)
    	$.post("/api/burgers", burger, function(data) {
        console.log(data);
        location.reload();
    	})
	});

	$(".devour").on("click", function(event) {
    	event.preventDefault();
    	var id = $(this).data("id")

		// Send the PUT request.
    	$.ajax(
			{url: "api/burgers/" + id,
			method: "PUT"
		}).then(function(data) {
        console.log(data);
        location.reload();
    	})
	})
})