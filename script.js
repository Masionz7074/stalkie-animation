document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keyup', filterAnimations);
    }
});

function filterAnimations() {
    let input = document.getElementById('searchInput');
    let filter = input.value.toUpperCase();

    let allListItems = document.querySelectorAll('.animation-list li');

    allListItems.forEach(function(li) {
        let animNameSpan = li.querySelector('.anim-name');
        if (animNameSpan) {
            let txtValue = animNameSpan.textContent || animNameSpan.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li.classList.remove('hidden');
                let section = li.closest('section');
                if (section) {
                    section.classList.remove('hidden');
                }
            } else {
                li.classList.add('hidden');
            }
        }
    });

    let allSections = document.querySelectorAll('section');
    allSections.forEach(function(section) {
        let visibleItemsInSection = section.querySelectorAll('ul.animation-list li:not(.hidden)');
        if (filter.length > 0 && visibleItemsInSection.length === 0) {
            section.classList.add('hidden');
        } else {
            section.classList.remove('hidden');
        }
    });

    if (filter.length === 0) {
         allSections.forEach(function(section) {
            section.classList.remove('hidden');
         });
    }
}