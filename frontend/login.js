var win = navigator.platform.indexOf('Win') > -1;
    if (win && document.querySelector('#sidenav-scrollbar')) {
      var options = {
        damping: '0.5'
      }
      Scrollbar.init(document.querySelector('#sidenav-scrollbar'), options);
    }

    function submit() {
      const isValid = validateEmail();

      if (isValid) {
          // submit form to server
          
      }


  }

  function validateEmail() {
      const email = document.getElementById('email');
      if (!email.checkValidity()) {
          email.classList.remove('is-valid');
          email.classList.add('is-invalid');

          return false;

      } else {
          email.classList.remove('is-invalid');
          email.classList.add('is-valid');
          
          return true;

      }

  }

