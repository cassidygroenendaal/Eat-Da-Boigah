$(document).ready(() => {
	//Change burger state
	$('.btn-state').click(function() {
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
			console.log(`changes state of burger ${id} to ${nextState}.`);
			location.reload();
		});
	});

	//Add new burger
});
