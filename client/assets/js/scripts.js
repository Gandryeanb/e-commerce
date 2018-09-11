$('#register-btn').click(() => {
    $('.tiny.modal.login')
        .modal('setting', 'transition', 'fly up')
        .modal('show');
})
$('#login-btn').click(() => {
    $('.mini.modal.register')
        .modal('setting', 'transition', 'fly up')
        .modal('show');
})