function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorElement = field ? field.nextElementSibling : null;

    if (errorElement && errorElement.classList.contains('error-message')) {
        errorElement.textContent = message;
        errorElement.classList.remove('hidden');
        field.classList.add('border-red-500');

        field.addEventListener('input', () => {
            errorElement.classList.add('hidden');
            field.classList.remove('border-red-500');
        }, { once: true });
    }
}

export function initContactFormValidation() {
    const contactForm = document.getElementById('contact-form');
    const formSuccess = document.getElementById('form-success');

    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        let isValid = true;

        document.querySelectorAll('.error-message').forEach(error => {
            error.textContent = '';
            error.classList.add('hidden');
        });

        if (name === '') {
            showError('name', 'Name is required');
            isValid = false;
        } else if (name.length < 2) {
            showError('name', 'Name must be at least 2 characters');
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '') {
            showError('email', 'Email is required');
            isValid = false;
        } else if (!emailRegex.test(email)) {
            showError('email', 'Please enter a valid email address');
            isValid = false;
        }

        if (message === '') {
            showError('message', 'Message is required');
            isValid = false;
        } else if (message.length < 10) {
            showError('message', 'Message must be at least 10 characters');
            isValid = false;
        }

        if (isValid) {
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Sending...';
            submitButton.disabled = true;
            submitButton.classList.add('loading');

            setTimeout(() => {
                contactForm.reset();

                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
                submitButton.classList.remove('loading');

                if (formSuccess) formSuccess.classList.remove('hidden');

                setTimeout(() => {
                    if (formSuccess) formSuccess.classList.add('hidden');
                }, 5000);

                console.log('Form submitted:', { name, email, message });
            }, 2000);
        }
    });
}
