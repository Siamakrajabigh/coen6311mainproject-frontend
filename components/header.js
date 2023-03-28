
const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <style>
  .container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  @media (min-width: 768px) {
    .container {
      width: 750px;
    }
  }
  @media (min-width: 992px) {
    .container {
      width: 970px;
    }
  }
  @media (min-width: 1200px) {
    .container {
      width: 1170px;
    }
  }
  .d-flex {
    display: flex !important;
    flex-wrap: wrap !important;
  }
  .align-items-center {
    align-items: center !important;
  }
  .justify-content-center {
    justify-content: center !important;
  }
  .nav {
    --bs-nav-link-padding-x: 1rem;
    --bs-nav-link-padding-y: 0.5rem;
    --bs-nav-link-font-weight: ;
    --bs-nav-link-color: var(--bs-link-color);
    --bs-nav-link-hover-color: var(--bs-link-hover-color);
    --bs-nav-link-disabled-color: var(--bs-secondary-color);
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }
  .col-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .col-lg-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .me-lg-auto {
    margin-right: auto !important;
  }
  .nav-link {
    display: block;
    padding: var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);
    font-size: var(--bs-nav-link-font-size);
    font-weight: var(--bs-nav-link-font-weight);
    color: white;
    text-decoration: none;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
  }
  @media (prefers-reduced-motion: reduce) {
    .nav-link {
      transition: none;
    }
  }
  .nav-link:hover, .nav-link:focus {
    color: #0d6efd;
  }
  .nav-link.disabled {
    color: var(--bs-nav-link-disabled-color);
    pointer-events: none;
    cursor: default;
  }
  .px-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }
  .form-control-dark {
    color: #fff;
    background-color: var(--bs-dark);
    border-color: var(--bs-gray);
  }
  .form-control {
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: var(--bs-body-color);
    background-color: var(--bs-form-control-bg);
    background-clip: padding-box;
    border: var(--bs-border-width) solid var(--bs-border-color);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0.375rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  @media (prefers-reduced-motion: reduce) {
    .form-control {
      transition: none;
    }
  }
  .form-control[type=file] {
    overflow: hidden;
  }
  .form-control[type=file]:not(:disabled):not([readonly]) {
    cursor: pointer;
  }
  .form-control:focus {
    color: var(--bs-body-color);
    background-color: var(--bs-form-control-bg);
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  }
  .form-control::-webkit-date-and-time-value {
    height: 1.5em;
  }
  .form-control::-webkit-datetime-edit {
    display: block;
    padding: 0;
  }
  .form-control::-moz-placeholder {
    color: var(--bs-secondary-color);
    opacity: 1;
  }
  .form-control::placeholder {
    color: var(--bs-secondary-color);
    opacity: 1;
  }
  .form-control:disabled {
    background-color: var(--bs-form-control-disabled-bg);
    opacity: 1;
  }
  .form-control::-webkit-file-upload-button {
    padding: 0.375rem 0.75rem;
    margin: -0.375rem -0.75rem;
    -webkit-margin-end: 0.75rem;
    margin-inline-end: 0.75rem;
    color: var(--bs-body-color);
    background-color: var(--bs-tertiary-bg);
    pointer-events: none;
    border-color: inherit;
    border-style: solid;
    border-width: 0;
    border-inline-end-width: var(--bs-border-width);
    border-radius: 0;
    -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  .form-control::file-selector-button {
    padding: 0.375rem 0.75rem;
    margin: -0.375rem -0.75rem;
    -webkit-margin-end: 0.75rem;
    margin-inline-end: 0.75rem;
    color: var(--bs-body-color);
    background-color: var(--bs-tertiary-bg);
    pointer-events: none;
    border-color: inherit;
    border-style: solid;
    border-width: 0;
    border-inline-end-width: var(--bs-border-width);
    border-radius: 0;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  @media (prefers-reduced-motion: reduce) {
    .form-control::-webkit-file-upload-button {
      -webkit-transition: none;
      transition: none;
    }
    .form-control::file-selector-button {
      transition: none;
    }
  }
  .form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button {
    background-color: var(--bs-secondary-bg);
  }
  .form-control:hover:not(:disabled):not([readonly])::file-selector-button {
    background-color: var(--bs-secondary-bg);
  }
  
  textarea.form-control {
    min-height: calc(1.5em + 0.75rem + calc(var(--bs-border-width) *4 ));
  }
  textarea.form-control-sm {
    min-height: calc(1.5em + 0.5rem + calc(var(--bs-border-width) * 2));
  }
  textarea.form-control-lg {
    min-height: calc(1.5em + 1rem + calc(var(--bs-border-width) * 2));
  }
  .me-lg-3 {
    margin-right: 1rem !important;
  }
  .btn {
    --bs-btn-font-family: ;
    --bs-btn-bg: transparent;
    --bs-btn-border-width: var(--bs-border-width);
    --bs-btn-border-color: transparent;
    --bs-btn-hover-border-color: transparent;
    --bs-btn-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);
    --bs-btn-disabled-opacity: 0.65;
    --bs-btn-focus-box-shadow: 0 0 0 0.25rem rgba(var(--bs-btn-focus-shadow-rgb), .5);
    display: inline-block;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    border: var(--bs-btn-border-width) solid var(--bs-btn-border-color);
    border-radius: 0.375rem;
    background-color: var(--bs-btn-bg);
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  @media (prefers-reduced-motion: reduce) {
    .btn {
      transition: none;
    }
  }
  .btn:hover {
    color: var(--bs-btn-hover-color);
    background-color: var(--bs-btn-hover-bg);
    border-color: var(--bs-btn-hover-border-color);
  }
  .btn-check + .btn:hover {
    color: var(--bs-btn-color);
    background-color: var(--bs-btn-bg);
    border-color: var(--bs-btn-border-color);
  }
  .btn:focus-visible {
    color: var(--bs-btn-hover-color);
    background-color: var(--bs-btn-hover-bg);
    border-color: var(--bs-btn-hover-border-color);
    outline: 0;
    box-shadow: var(--bs-btn-focus-box-shadow);
  }
  .btn-check:focus-visible + .btn {
    border-color: var(--bs-btn-hover-border-color);
    outline: 0;
    box-shadow: var(--bs-btn-focus-box-shadow);
  }
  .btn-check:checked + .btn, :not(.btn-check) + .btn:active, .btn:first-child:active, .btn.active, .btn.show {
    color: var(--bs-btn-active-color);
    background-color: var(--bs-btn-active-bg);
    border-color: var(--bs-btn-active-border-color);
  }
  .btn-check:checked + .btn:focus-visible, :not(.btn-check) + .btn:active:focus-visible, .btn:first-child:active:focus-visible, .btn.active:focus-visible, .btn.show:focus-visible {
    box-shadow: var(--bs-btn-focus-box-shadow);
  }
  .btn:disabled, .btn.disabled, fieldset:disabled .btn {
    color: var(--bs-btn-disabled-color);
    pointer-events: none;
    background-color: var(--bs-btn-disabled-bg);
    border-color: var(--bs-btn-disabled-border-color);
    opacity: var(--bs-btn-disabled-opacity);
  }
  
  .btn-outline-primary {
    --bs-btn-color: #0d6efd;
    --bs-btn-border-color: #0d6efd;
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-bg: #0d6efd;
    --bs-btn-hover-border-color: #0d6efd;
    --bs-btn-focus-shadow-rgb: 13, 110, 253;
    --bs-btn-active-color: #fff;
    --bs-btn-active-bg: #0d6efd;
    --bs-btn-active-border-color: #0d6efd;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: #0d6efd;
    --bs-btn-disabled-bg: transparent;
    --bs-btn-disabled-border-color: #0d6efd;
    --bs-gradient: none;
  }
  .btn-warning {
    --bs-btn-color: #000;
    --bs-btn-bg: #ffc107;
    --bs-btn-border-color: #ffc107;
    --bs-btn-hover-color: #000;
    --bs-btn-hover-bg: #ffca2c;
    --bs-btn-hover-border-color: #ffc720;
    --bs-btn-focus-shadow-rgb: 217, 164, 6;
    --bs-btn-active-color: #000;
    --bs-btn-active-bg: #ffcd39;
    --bs-btn-active-border-color: #ffc720;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: #000;
    --bs-btn-disabled-bg: #ffc107;
    --bs-btn-disabled-border-color: #ffc107;
  }
  .text-end {
    text-align: right !important;
  }
  
  .form-control-dark:focus {
    color: #fff;
    background-color: var(--bs-dark);
    border-color: #fff;
    box-shadow: 0 0 0 .25rem rgba(255, 255, 255, .25);
  }
  /*Sticky Header*/
  /* Style the header */
  .header {
    padding: 10px 16px;
    background: #555;
    color: #4f4f4f;
    font-family: "Poppins", sans-serif;


  }
  
  </style>
  <header class="header">
        <div class="container">
          <div class="d-flex align-items-center justify-content-center">
    
            <ul class="nav col-12 col-lg-auto me-lg-auto justify-content-center ">

                <li><a href="index.html"><img src="../images/greengrass-removebg-preview.png" alt="" height="50px" width="50px"></a></li>
                <li><a href="index.html" class="nav-link px-2 text-secondary">Home</a></li>
                <li><a href="../search/search.html" class="nav-link px-2 text-white">Explore</a></li>
                <li><a href="#" class="nav-link px-2 text-white">Career Advices</a></li>
                <li><a href="../faq_page/index.html" class="nav-link px-2 text-white">FAQs</a></li>
                <li><a href="../about_page/index.html" class="nav-link px-2 text-white">About</a></li>
            </ul>
    
            <div class="text-end">
              <button id="sign-in-or-out-button" onclick="getOauthorized()" class="btn btn-outline-primary me-2 text-white">Login</button>
              <a href="../sign_in_page/sign_in.html" class="btn btn-warning" target="_blank">Sign-up</a>
            </div>
          </div>
        </div>
    </header>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);

var YOUR_CLIENT_ID = '449761760826-pfa1o2a0cquanh1erpeejmvv8nr1r5s2.apps.googleusercontent.com';
      var YOUR_REDIRECT_URI = 'https://www.greengrassfreelancer.com/faq_page/index.html';
      var fragmentString = location.hash.substring(1);
    
      // Parse query string to see if page request is coming from OAuth 2.0 server.
      var params = {};
      var regex = /([^&=]+)=([^&]*)/g, m;
      while (m = regex.exec(fragmentString)) {
        params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
      }
      if (Object.keys(params).length > 0) {
        localStorage.setItem('oauth2-test-params', JSON.stringify(params) );
        if (params['state'] && params['state'] == 'test_login') {
          getOauthorized();
        }
      }

      // If there's an access token, try an API request.
      // Otherwise, start OAuth 2.0 flow.
      function getOauthorized() {
        var params = JSON.parse(localStorage.getItem('oauth2-test-params'));
        if (params && params['access_token']) {
          var xhr = new XMLHttpRequest();
          xhr.open('GET',
              'https://www.googleapis.com/drive/v3/about?fields=user&' +
              'access_token=' + params['access_token']);
          xhr.onreadystatechange = function (e) {
            if (xhr.readyState === 4 && xhr.status === 200) {
              console.log(xhr.response);
            } else if (xhr.readyState === 4 && xhr.status === 401) {
              // Token invalid, so prompt for user permission.
              oauth2SignIn();
            }
          };
          xhr.send(null);
        } else {
          oauth2SignIn();
        }
      }
    

       /*
       * Create form to request access token from Google's OAuth 2.0 server.
       */
       function oauth2SignIn() {
        // Google's OAuth 2.0 endpoint for requesting an access token
        var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
    
        // Create element to open OAuth 2.0 endpoint in new window.
        var form = document.createElement('form');
        form.setAttribute('method', 'GET'); // Send as a GET request.
        form.setAttribute('action', oauth2Endpoint);
    
        // Parameters to pass to OAuth 2.0 endpoint.
        var params = {'client_id': "449761760826-pfa1o2a0cquanh1erpeejmvv8nr1r5s2.apps.googleusercontent.com",
                      'redirect_uri': 'https://www.greengrassfreelancer.com/faq_page/index.html', // "https://oauth2.googleapis.com/token",
                      'scope': 'https://www.googleapis.com/auth/drive.metadata.readonly',
                      'state': 'test_login',
                      'include_granted_scopes': 'true',
                      'response_type': 'token'};
    
        // Add form parameters as hidden input values.
        for (var p in params) {
          var input = document.createElement('input');
          input.setAttribute('type', 'hidden');
          input.setAttribute('name', p);
          input.setAttribute('value', params[p]);
          form.appendChild(input);
        }
    
        // Add form to page and submit it to open the OAuth 2.0 endpoint.
        document.body.appendChild(form);
        form.submit();
     }