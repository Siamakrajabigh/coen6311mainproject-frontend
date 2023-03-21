const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
  <style>
    footer {
      height: auto;
      padding: 0 10px;
      list-style: none;
      display: flex;
      flex-shrink: 0;
      align-items: center;
      font-family: cursive;
    }
    .footer-bs{
        position: relative;
        width: 100%;
        min-height: 320px;
        bottom: 0px;
        left:0;
        margin-left:auto;
        margin-right:auto;
        justify-content:center;
        text-align: left !important;
        --bs-text-opacity: 1;
        color: rgba(var(--bs-white-rgb), var(--bs-text-opacity)) !important;
        --bs-bg-opacity: 1;
        background-color: #4f4f4f !important;
    }

    .container {
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
        margin-top: 3rem !important;
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

    .row {
        --bs-gutter-x: 1.5rem;
        --bs-gutter-y: 0;
        display: flex;
        flex-wrap: wrap;
        margin-top: calc(-1 * var(--bs-gutter-y));
        margin-right: calc(-0.5 * var(--bs-gutter-x));
        margin-left: calc(-0.5 * var(--bs-gutter-x));
        margin-bottom: 1.5rem !important;
    }

    .col-md-3 {
        flex: 0 0 auto;
        width: 25%;
        column-gap:3px;
    }
    .text-uppercase {
        text-transform: uppercase !important;
    }
    .fw-bold {
        font-size: large;
      }

    
    a {
      color: inherit;
      text-decoration: none;
    }
    
    a:hover {
      padding-bottom: 5px;
      box-shadow: inset 0 -2px 0 0 #333;
    }
  </style>
  <footer class=" footer-bs" >
        <section>
            <div class="container">
                <!-- Grid row -->
                <div class="row">
                  <!-- Grid column -->
                  <div class="col-md-3">
                    <!-- Content -->
                    <a href="#"><img src="../images/greengrass-removebg-preview.png" alt="" height="100px" width="100px"></a>

                    <a href="#" class="text-white text-uppercase fw-bold " style="text-decoration: none
                    ;">Greengrass</a>
                    <p>
                        What you seek, we deliver. Smart solutions to modern day problems.
                    </p>
                  </div>
                  <!-- Grid column -->
        
                  <!-- Grid column -->
                  <div class="col-md-3 ">
                    <!-- Links -->
                    <h6 class="text-uppercase fw-bold">Products</h6>
                    <p>
                      <a href="#!" class="text-white">Web Development</a>
                    </p>
                    <p>
                      <a href="#!" class="text-white">Graphic Designing</a>
                    </p>
                    <p>
                      <a href="#!" class="text-white">Video Editiong</a>
                    </p>
                  </div>
                  <!-- Grid column -->
        
                  <!-- Grid column -->
                  <div class="col-md-3">
                    <!-- Links -->
                    <h6 class="text-uppercase fw-bold">Useful links</h6>
        
                    <p>
                      <a href="#!" class="text-white ">Your Account</a>
                    </p>
                    <p>
                      <a href="#!" class="text-white">Become an Affiliate</a>
                    </p>
                    <p>
                      <a href="#!" class="text-white">Shipping Rates</a>
                    </p>
                    <p>
                      <a href="#!" class="text-white">Help</a>
                    </p>
                  </div>
                  <!-- Grid column -->
        
                  <!-- Grid column -->
                  <div class="col-md-3">
                    <!-- Links -->
                    <h6 class="text-uppercase fw-bold">Contact</h6>
                    <p><i class="fas fa-home mr-3"></i> Montreal,Quebec, Canada</p>
                    <p><i class="fas fa-envelope mr-3"></i> info@example.com</p>
                    <p><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                    <p><i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
                  </div>
                  <!-- Grid column -->
                </div>
                <!-- Grid row -->
              </div>


        </section>
    </footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const fontAwesome = document.querySelector('link[href*="font-awesome"]');
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    if (fontAwesome) {
      shadowRoot.appendChild(fontAwesome.cloneNode());
    }

    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define('footer-component', Footer);