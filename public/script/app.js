
$('.commentAdd').on('click', function(){

	var cM = $(this).parent();
	$(cM).empty();

	$(cM).html(`<form action="/update/`+$(cM).data('id')+`" method="post">
			<fieldset class="form-group">
			 <label for="commentBox">Comment:</label>
			 <textarea class="form-control" name="comment" id="commentBox" rows="3"></textarea>
		</fieldset>
		<input type="submit" class="btn btn-danger" value="Add Comment"/>
		</form>
		`);
});

$('.list-group-item').on('click', function(){
	var comment = $(this).text().trim();
	var commID  = $(this).parent().data('id');
	var commDel = {
		comment: comment,
		commID: commID
	}
	console.log(commDel);

	var currentURL = window.location.origin;

    $.post(currentURL + "/delete", commDel);
  
});