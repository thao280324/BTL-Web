document.addEventListener('DOMContentLoaded', function() {
    const accordionButtons = document.querySelectorAll('.accordion-header button');

    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const expanded = this.getAttribute('aria-expanded') === 'true';
            accordionButtons.forEach(btn => {
                btn.setAttribute('aria-expanded', 'false');
                btn.classList.add('collapsed');
                const target = btn.getAttribute('data-target');
                document.querySelector(target).classList.remove('show');
            });

            if (!expanded) {
                this.setAttribute('aria-expanded', 'true');
                this.classList.remove('collapsed');
                const target = this.getAttribute('data-target');
                document.querySelector(target).classList.add('show');
            }
        });
    });
});

