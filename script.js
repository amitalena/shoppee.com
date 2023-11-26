//filter usinghtml css
$(document).ready(function() {
    // Initial state, show all items
    $('.item').show();

    // Filter button click event
    $('.filter-btn').click(function() {
        var category = $(this).data('filter');

        // Show only items with the selected category or show all if 'all' is selected
        if (category === 'all') {
            $('.item').show('.active');
        } else {
            $('.item').hide();
            $('.item[data-category="' + category + '"]').show();
        }
    });
});