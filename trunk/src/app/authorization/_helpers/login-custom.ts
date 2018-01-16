export class LoginCustom {

    static handleSignInFormSubmit() {
        // $('#m_login_signin_submit').click(function(e) {
        //     let form = $(this).closest('form');
        //     form.validate({
        //         rules: {
        //             username: {
        //                 required: true
        //             },
        //             password: {
        //                 required: true
        //             }
        //         }
        //     });
        //     if (!form.valid()) {
        //         e.preventDefault();
        //         return;
        //     }
        // });
    }

    static displaySignInForm() {
        // let login = $('#m_login');
        // try {
        //     $('form').data('validator').resetForm();
        // } catch (e) {
        // }

        // login.addClass('m-login--signin');
        // (<any>login.find('.m-login__signin')).animateClass('flipInX animated');
    }


    static init() {
        LoginCustom.handleSignInFormSubmit();
    }
}
