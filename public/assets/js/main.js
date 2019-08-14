$(document).ready(() => {
	//Change burger state
	$('.js-btn-state').click(function() {
		let id = $(this).data('id');
		let nextState = $(this).data('next-state');
		let updatedBurger = {
			nextState : nextState,
			id        : id
		};
		$.ajax(`/api/burger/${id}`, {
			type : 'PUT',
			data : updatedBurger
		}).then(() => {
			location.reload();
		});
	});

	//Add new burger
	$('#js-btn-submit').click(function() {
		let newBurger = {
			burger_name : $('#js-input-name').val().trim()
		};
		$.ajax('/api/burger', {
			type : 'POST',
			data : newBurger
		}).then(() => {
			location.reload();
		});
	});
});
