import React from "react";

const Footer = () => {
  return (
    <footer className="footer" id='footer'>
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>company</h4>
            <ul>
              <li>
                <a href="#">about us</a>
              </li>
              <li>
                <a href="#">our services</a>
              </li>
              <li>
                <a href="#">privacy policy</a>
              </li>
              <li>
                <a href="#">affiliate program</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>get help</h4>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">shipping</a>
              </li>
              <li>
                <a href="#">returns</a>
              </li>
              <li>
                <a href="#">order status</a>
              </li>
              <li>
                <a href="#">payment options</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>online shop</h4>
            <ul>
              <li>
                <a href="#">watch</a>
              </li>
              <li>
                <a href="#">bag</a>
              </li>
              <li>
                <a href="#">shoes</a>
              </li>
              <li>
                <a href="#">dress</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

{
  /* <footer classNameName="bg-dark text-center text-white footer">
<div classNameName="container p-4">
  <section classNameName="mb-4">
    <a classNameName="btn btn-outline-light btn-floating m-1" href="#!" role="button"
      ><i classNameName="fab fa-facebook-f"></i></a>

    <a classNameName="btn btn-outline-light btn-floating m-1" href="#!" role="button"
      ><i classNameName="fab fa-twitter"></i></a>

    <a classNameName="btn btn-outline-light btn-floating m-1" href="#!" role="button"
      ><i classNameName="fab fa-google"></i></a>

    <a classNameName="btn btn-outline-light btn-floating m-1" href="#!" role="button"
      ><i classNameName="fab fa-instagram"></i></a>

    <a classNameName="btn btn-outline-light btn-floating m-1" href="#!" role="button"
      ><i classNameName="fab fa-linkedin-in"></i></a>

    <a classNameName="btn btn-outline-light btn-floating m-1" href="#!" role="button"
      ><i classNameName="fab fa-github"></i></a>
  </section>

  <section classNameName="">
    <form action="">
      <div classNameName="row d-flex justify-content-center">

        <div classNameName="col-auto">
          <p classNameName="pt-2">
            <strong>Sign up for our newsletter</strong>
          </p>
        </div>

        <div classNameName="col-md-5 col-12">
          <div classNameName="form-outline form-white mb-4">
            <input type="email" id="form5Example21" classNameName="form-control" />
            <label classNameName="form-label" for="form5Example21">Email address</label>
          </div>
        </div>

        <div classNameName="col-auto">

          <button type="submit" classNameName="btn btn-outline-light mb-4">
            Subscribe
          </button>
        </div>

      </div>
    </form>
  </section>

  <section classNameName="mb-4">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
      repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
      eum harum corrupti dicta, aliquam sequi voluptate quas.
    </p>
  </section>

  <section classNameName="">
    <div classNameName="row">

      <div classNameName="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 classNameName="text-uppercase">Links</h5>

        <ul classNameName="list-unstyled mb-0">
          <li>
            <a href="#!" classNameName="text-white">Link 1</a>
          </li>
          <li>
            <a href="#!" classNameName="text-white">Link 2</a>
          </li>
          <li>
            <a href="#!" classNameName="text-white">Link 3</a>
          </li>
          <li>
            <a href="#!" classNameName="text-white">Link 4</a>
          </li>
        </ul>
      </div>

      <div classNameName="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 classNameName="text-uppercase">Links</h5>

        <ul classNameName="list-unstyled mb-0">
          <li>
            <a href="#!" classNameName="text-white">Link 1</a>
          </li>
          <li>
            <a href="#!" classNameName="text-white">Link 2</a>
          </li>
          <li>
            <a href="#!" classNameName="text-white">Link 3</a>
          </li>
          <li>
            <a href="#!" classNameName="text-white">Link 4</a>
          </li>
        </ul>
      </div>

      <div classNameName="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 classNameName="text-uppercase">Links</h5>

        <ul classNameName="list-unstyled mb-0">
          <li>
            <a href="#!" classNameName="text-white">Link 1</a>
          </li>
          <li>
            <a href="#!" classNameName="text-white">Link 2</a>
          </li>
          <li>
            <a href="#!" classNameName="text-white">Link 3</a>
          </li>
          <li>
            <a href="#!" classNameName="text-white">Link 4</a>
          </li>
        </ul>
      </div>

      <div classNameName="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 classNameName="text-uppercase">Links</h5>

        <ul classNameName="list-unstyled mb-0">
          <li>
            <a href="#!" classNameName="text-white">Link 1</a>
          </li>
          <li>
            <a href="#!" classNameName="text-white">Link 2</a>
          </li>
          <li>
            <a href="#!" classNameName="text-white">Link 3</a>
          </li>
          <li>
            <a href="#!" classNameName="text-white">Link 4</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</div>

<div classNameName="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
  © 2020 Copyright:
  <a classNameName="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
</div>

</footer> */
}
