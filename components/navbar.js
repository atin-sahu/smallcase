function navbar(){
    return `<nav class="navbar navbar-expand-lg navbar-light mb-0 pb-0 fixed-top bg-white border-bottom">
    <div class="container">
        <a class="navbar-brand text-primary" href="smallcase.html">
            <div class="d-flex mt-2">
                <img style="width: 100%; height: 40px;" src="https://smallcases.upstox.com/assets/favicon/ms-icon-310x310.png" alt="logo">
                <p>smallcase</p>
            </div>
        </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
          <div>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="discover-collection.html">Discover</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="watch_list.html">Watchlist</a>
                </li>
              </ul>
          </div>

          <div>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link" href="Aman.html">For Business</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    More
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><p class="dropdown-item mb-0"><small>Account</small></p></li>
                    <li><a class="dropdown-item" href="#">Open Broker Account</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><p class="dropdown-item mb-0"><small>Support</small></p></li>
                    <li><a class="dropdown-item" href="#">FAQs</a></li>
                    <li><a class="dropdown-item" href="#">Chat With Us</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><p class="dropdown-item mb-0"><small>Company</small></p></li>
                    <li><a class="dropdown-item" href="#">Blog</a></li>
                    <li><a class="dropdown-item" href="#">Career</a></li>
                  </ul>
                </li> 
                <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Login</button>
              </ul>
          </div>
      </div>
    </div>
  </nav>`
}

function footer (){
    return `<div id="footer" class="pb-4" style="background-color: rgb(247,248,247);">
    <div class="container">
        <div class="row pt-4">
            <div class="col-12">
                <i class="fa-solid fa-house"></i>
                <i class="fa-solid fa-greater-than"></i>
                <span>Watchlist</span>
            </div>
        </div>
        <div class="row mt-4 mb-5">
            <div class="col-5">
                <img class="mb-3" src="https://www.smallcase.com/static/svgs/smallcase-logo-with-text.svg" alt="2">
                <p>smallcase Technologies builds platforms & investment products to invest better in Indian equities. A smallcase is a basket of stocks/ETFs weighted intelligently to reflect an idea</p>
                <p class="fw-bolder">Get weekly market insights and facts right in your inbox</p>
                
                <div class="row mt-4">
                    <div class="col-auto">
                        <input type="text" class="form-control"  placeholder=" Email Address">
                    </div>
                    <div class="col-auto">
                        <button class="btn btn-primary">Subscribe</button>
                    </div>
                </div>
            </div>

            <div class="col-7">
                <div class="row">
                    <div class="col-4">
                        <p class="fw-bolder">Company</p>
                        <a href="about.html" class="text-dark text-decoration-none"><p class="m-0">About</p></a>
                        <a href="Aman.html" class="text-dark text-decoration-none"><p class="m-0">For Businesses</p></a>
                        <p class="m-0">Blog</p>
                        <p class="m-0">Press</p>
                        <p class="m-0">Careers</p>
                    </div>
                    <div class="col-4">
                        <p class="fw-bolder">Products</p>
                        <p class="m-0">Publisher</p>
                        <p class="m-0">Share</p>
                        <p class="m-0">Gateway</p>
                        <p class="m-0">Brokers</p>
                        <p class="m-0">Tickertape</p>
                    </div>
                    <div class="col-4">
                        <p class="fw-bolder">Fine Print</p>
                        <p class="m-0">Privacy</p>
                        <p class="m-0">Disclosures</p>
                        <p class="m-0">Definitions</p>
                        <p class="m-0">Investment Tools</p>
                        <p class="m-0">Return Calculation Methodology</p>
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <div class="row d-flex justify-content-between">
            <div class="col-3">
                <p>smallcase Technologies Private Limited
                    #51, 3rd Floor, Le Parc Richmonde,
                    Richmond Road, Shanthala Nagar,
                    Richmond Town, Bangalore - 560025</p>
            </div>
            <div class="col-3">
                <p>Contact us on help@smallcase.com</p>
                <p>Find us on:</p>
                <div class="row">
                    <div class="col-2 fs-2">
                        <i class="fa-brands fa-facebook-square"></i>
                    </div>
                    <div class="col-2 fs-2">
                        <i class="fa-brands fa-twitter"></i>
                    </div>
                    <div class="col-2 fs-2">
                        <i class="fa-brands fa-instagram"></i>
                    </div>
                    <div class="col-2 fs-2">
                        <i class="fa-brands fa-youtube"></i>
                    </div>
                    <div class="col-2 fs-2">
                        <i class="fa-brands fa-linkedin"></i>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <p>Help & Support</p>
                <img src="https://www.smallcase.com/static/images/25-social-trust.png" alt="3">
            </div>
        </div>
    </div>
</div>`
}

function popup(){
    return`<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-12">
                        <div class="container">
                            <div class="d-flex">
                                <div>
                                    <img src="https://assets.smallcase.com/images/gateway/partners/smallcase-website.png" style="width: 100%; height: 40px; padding-right: 10px;" alt="">
                                </div>
                                <div>
                                    <p class="text-muted mb-0 pop_text">Trade, track and manage investments on</p>
                                    <p class="fw-bolder mt-0 pop_text">smallcase</p>
                                </div>                              
                            </div>    
                            <hr style="margin-top: 0px;">                      
                        </div> 

                        <div class="container mb-3">
                            <div class="row">
                                <div class="col-12 border border-dark rounded d-flex justify-content-between">
                                    <div class="pt-2">
                                        <p class="text-center">
                                            How does this work?
                                        </p>
                                    </div>
                                    <div class="pt-2">
                                        <p class="text-center">
                                            <a id="hello" tabindex="0" class="btn btn-sm text-primary" role="button" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-content="hello">Know-more</a>
                                        </p>
                                    </div>
                                    
                                </div>
                            </div> 
                        </div>

                        <div class="container">
                            <h6 class="fw-bolder">Login with your broker</h6>
                            <div class="row mt-3 d-flex justify-content-center">
                                <div class="col-8">
                                    <div class="row">
                                        
                                        <div class="col-4 pt-3  text-center">
                                            <a class="text-decoration-none" href="hdfc.html">
                                                <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSMUGPxy0hLHD9NR5o-5QCjyjLe6Lbs7b3QcOI_GXnGJFeWiK1a" style="width: 30%; height: 20px;" alt="">
                                                <p class=" mt-3 pop_text">HDFC Sec</p>
                                            </a>
                                        </div>
                        
                                        <div class="col-3 pt-3  text-center">
                                            <a href="paisa.html" class="text-decoration-none">
                                                <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQgWv0uEs8L2hggpvKDKwh1NOd3iuT6XtTuOSh_maRNcp3KRful" style="width: 30%; height: 20px;" alt="">
                                            <p class=" mt-3 pop_text">5paisa</p>
                                            </a>
                                        </div>
                                        <div class="col-5 pt-3  text-center">
                                            <a href="paisa.html" class="text-decoration-none">
                                                <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQUEBcrSrrUfWvbG3ta2LiL3zf4_q3kG6VujDdJrojaVoO0ohgY" style="width: 30%; height: 20px;" alt="">
                                                <p class=" mt-3 pop_text">Angel One</p>
                                            </a>                                          
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 pt-3  text-center">
                                            <a href="paisa.html" class="text-decoration-none">
                                                <img src="https://alphafirms.in/wp-content/uploads/2020/11/Groww_logo.png" style="width: 30%; height: 20px;" alt="">
                                                <p class=" mt-3 pop_text">Groww</p>
                                            </a>                                           
                                        </div>
                                        <div class="col-4 pt-3  text-center">
                                            <a href="hdfc.html" class="text-decoration-none">
                                                <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQgWv0uEs8L2hggpvKDKwh1NOd3iuT6XtTuOSh_maRNcp3KRful" style="width: 30%; height: 20px;" alt="">
                                                <p class=" mt-3 pop_text">ICICIdirect</p>
                                            </a>
                                        </div>
                                        <div class="col-4 pt-3  text-center">
                                            <a href="hdfc.html" class="text-decoration-none">
                                                <img src="https://assets.smallcase.com/smallcase/assets/brokerLogo/small/kotak.svg" style="width: 30%; height: 20px;" alt="">
                                                <p class=" mt-3 pop_text">Kotak Sec</p>
                                            </a>                                          
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 pt-3  text-center">
                                            <a href="paisa.html" class="text-decoration-none">
                                                <img src="https://assets.smallcase.com/smallcase/assets/brokerLogo/small/upstox.svg" style="width: 30%; height: 20px;" alt="">
                                                <p class=" mt-3 pop_text">Upstox</p>
                                            </a>                                          
                                        </div>
                                        <div class="col-4 pt-3  text-center">
                                            <a href="zerodha.html" class="text-decoration-none">
                                                <img src="https://assets.smallcase.com/smallcase/assets/brokerLogo/small/kite.svg" style="width: 30%; height: 20px;" alt="">
                                                <p class=" mt-3 pop_text">Zerodha</p>
                                            </a>                                          
                                        </div>
                                        <div class="col-4 pt-3  text-center">
                                            <a href="zerodha.html" class="text-decoration-none">
                                                <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQgWv0uEs8L2hggpvKDKwh1NOd3iuT6XtTuOSh_maRNcp3KRful" style="width: 30%; height: 20px;" alt="">
                                                <p class=" mt-3 pop_text">Zerodha</p>
                                            </a>                                          
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="container">
                    <div class="row">
                        <div class="col-3"><hr></div>
                        <div class="col-6">
                            <p class="text-center">Don’t have a broker account?</p>
                        </div>
                        <div class="col-3"><hr></div>
                    </div>
                </div>

                <div class="container">
                    <div class="row">
                        <div class="col-12 border border-primary rounded pt-2">
                            <p class="text-center">
                                <button class="btn text-primary" data-bs-toggle="modal" data-bs-target="#number">Open an account online</button>
                            </p>
                        </div>
                    </div> 
                </div>
            </div>
          </div>
        </div>
    </div>

    <div class="modal fade" id="number" tabindex="-2" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-8">
                            <h3>Start investing with India’s largest brokerages</h3>
                        </div>
                        <div class="col-4">
                            <img style="width: 100%; height: 80px;" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTU5IiBoZWlnaHQ9IjExMiIgdmlld0JveD0iMCAwIDE1OSAxMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHg9IjM0LjE0MTYiIHk9Ijg4Ljc1NCIgd2lkdGg9IjcuMTQxNjMiIGhlaWdodD0iMjEuMDA0OCIgZmlsbD0iI0FDQUZCMiIvPgo8cmVjdCB4PSIyNyIgeT0iODguNzU1MSIgd2lkdGg9IjcuMTQxNjMiIGhlaWdodD0iMjEuMDA0OCIgZmlsbD0iI0U2RTZFNiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUzLjU3MTMgNjcuNzE4OEg0My42MDdWODIuMTExNkgzOC4wNzEzVjEwOS43OUw0My42MDcgMTA5Ljc5TDQ4LjAzNTYgMTA5Ljc5TDUzLjU3MTMgMTA5Ljc5VjY3LjcxODhaIiBmaWxsPSIjRTdFN0U3Ii8+CjxyZWN0IHg9IjUzLjU3MTMiIHk9IjY3LjcxODgiIHdpZHRoPSIyLjIxNDI5IiBoZWlnaHQ9IjQyLjA3MTQiIGZpbGw9IiMyRjM2M0YiIGZpbGwtb3BhY2l0eT0iMC40Ii8+CjxyZWN0IHg9IjU1Ljc4NTYiIHk9IjgzLjIxODgiIHdpZHRoPSIyLjIxNDI5IiBoZWlnaHQ9IjI2LjU3MTQiIGZpbGw9IiMyRjM2M0YiIGZpbGwtb3BhY2l0eT0iMC40Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTUwLjUgNjlIMTQwLjUzNlY4My4zOTI5SDEzNVYxMTEuMDcxTDE0MC41MzYgMTExLjA3MUwxNDQuOTY0IDExMS4wNzFMMTUwLjUgMTExLjA3MVY2OVoiIGZpbGw9IiNFN0U3RTciLz4KPHJlY3QgeD0iMTUwLjUiIHk9IjY5IiB3aWR0aD0iMi4yMTQyOSIgaGVpZ2h0PSI0Mi4wNzE0IiBmaWxsPSIjQUNBRkIyIi8+CjxyZWN0IHg9IjE1Mi43MTQiIHk9Ijg0LjUiIHdpZHRoPSIyLjIxNDI5IiBoZWlnaHQ9IjI2LjU3MTQiIGZpbGw9IiNBQ0FGQjIiLz4KPHBhdGggZD0iTTEyOC44NjEgMTEwLjg0OEMxMjcuMjgxIDExMC44NDggMTI2IDExMC40ODMgMTI2IDExMC4wMzNDMTI2IDEwOS41ODIgMTI3LjI4MSAxMDkuMjE3IDEyOC44NjEgMTA5LjIxN0MxMzAuNDQgMTA5LjIxNyAxMzEuNzIxIDEwOS41ODIgMTMxLjcyMSAxMTAuMDMzQzEzMS43MjEgMTEwLjQ4MyAxMzAuNDQgMTEwLjg0OCAxMjguODYxIDExMC44NDhaIiBmaWxsPSJ1cmwoI3BhaW50MF9yYWRpYWwpIi8+CjxwYXRoIGQ9Ik0xMjkuNzUxIDEwNy4xMTFWMTA5LjYwN0MxMjkuNzUxIDEwOS43NDEgMTI5LjY5OCAxMDkuODcgMTI5LjYwMyAxMDkuOTY1QzEyOS41MDggMTEwLjA2IDEyOS4zNzkgMTEwLjExNCAxMjkuMjQ1IDExMC4xMTRDMTI5LjExIDExMC4xMTQgMTI4Ljk4MSAxMTAuMDYgMTI4Ljg4NiAxMDkuOTY1QzEyOC43OTEgMTA5Ljg3IDEyOC43MzggMTA5Ljc0MSAxMjguNzM4IDEwOS42MDdWMTA2LjgxMUgxMjcuNDg5VjEwNC45MjhMMTI3Ljk4NiAxMDQuMDEzTDEyOC4wMzUgMTA2LjM3MUgxMjguNzM4VjEwNC41NzZIMTI5Ljc1MVYxMDYuNjgyIiBmaWxsPSIjOTc5Nzk3Ii8+CjxwYXRoIGQ9Ik0xMjkuMTQ3IDEwNS4yNzdDMTI3LjQxNCAxMDUuMjc3IDEyNi4wMDkgMTAzLjg3MiAxMjYuMDA5IDEwMi4xMzlDMTI2LjAwOSAxMDAuNDA1IDEyNy40MTQgOTkgMTI5LjE0NyA5OUMxMzAuODgxIDk5IDEzMi4yODYgMTAwLjQwNSAxMzIuMjg2IDEwMi4xMzlDMTMyLjI4NiAxMDMuODcyIDEzMC44ODEgMTA1LjI3NyAxMjkuMTQ3IDEwNS4yNzdaIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXIpIi8+CjxwYXRoIGQ9Ik0xMzAuMDA4IDEwMy41MzdDMTMwLjAwOCAxMDMuNTM3IDEyOC43MzcgMTAzLjYwOCAxMjguMTM4IDEwMi43MjZMMTI4LjQyNyAxMDIuNTQ5QzEyOC40MjcgMTAyLjU0OSAxMjkuMjM5IDEwMy40NjYgMTMwLjE5MiAxMDMuMTgzIiBmaWxsPSJ1cmwoI3BhaW50Ml9saW5lYXIpIi8+CjxwYXRoIGQ9Ik0xMjMgNDkuNzU1NkwxMDkuMDM3IDMzTDk0LjY3NSA0OS43NTU2VjExMC4zOTVIMTIzVjQ5Ljc1NTZaIiBmaWxsPSJ1cmwoI3BhaW50M19saW5lYXIpIi8+CjxyZWN0IHdpZHRoPSIyOC4zMjUiIGhlaWdodD0iNjAuNjM5NCIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgOTQuNjc1IDQ5Ljc1NTYpIiBmaWxsPSIjQUY2NjU4Ii8+CjxyZWN0IHdpZHRoPSIzIiBoZWlnaHQ9IjQxIiB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSA4MyA1OSkiIGZpbGw9IiM2MzM4MzEiLz4KPHJlY3Qgd2lkdGg9IjMiIGhlaWdodD0iNDEiIHRyYW5zZm9ybT0ibWF0cml4KC0xIDAgMCAxIDgwIDU5KSIgZmlsbD0iI0RDODE3MCIvPgo8bWFzayBpZD0ibWFzazAiIG1hc2stdHlwZT0iYWxwaGEiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjY2IiB5PSIzMyIgd2lkdGg9IjQ0IiBoZWlnaHQ9IjE3Ij4KPHBhdGggZD0iTTEwOS4wMzcgMzNIODMuOTAzN0w2Ni4zNTAxIDQ5Ljc1NTZIOTQuNjc1MUwxMDkuMDM3IDMzWiIgZmlsbD0iI0ZGQ0U1NSIvPgo8L21hc2s+CjxnIG1hc2s9InVybCgjbWFzazApIj4KPHBhdGggZD0iTTEwOS4wMzcgMzNIODEuOTA4OUw2Ni4zNTAxIDQ5Ljc1NTZIOTQuNjc1MUwxMDkuMDM3IDMzWiIgZmlsbD0iIzk5NTY0OSIvPgo8cGF0aCBkPSJNODIgMzVIMTA5IiBzdHJva2U9IiM2RjQwMzgiIHN0cm9rZS13aWR0aD0iMC4yNSIvPgo8cGF0aCBkPSJNNzkgMzhIMTA2IiBzdHJva2U9IiM2RjQwMzgiIHN0cm9rZS13aWR0aD0iMC4yNSIvPgo8cGF0aCBkPSJNNzYgNDFIMTAzIiBzdHJva2U9IiM2RjQwMzgiIHN0cm9rZS13aWR0aD0iMC4yNSIvPgo8cGF0aCBkPSJNNzMgNDRIMTAwIiBzdHJva2U9IiM2RjQwMzgiIHN0cm9rZS13aWR0aD0iMC4yNSIvPgo8cGF0aCBkPSJNNzAgNDdIOTciIHN0cm9rZT0iIzZGNDAzOCIgc3Ryb2tlLXdpZHRoPSIwLjI1Ii8+CjxwYXRoIGQ9Ik05MSAzM0w4OSAzNSIgc3Ryb2tlPSIjNkY0MDM4IiBzdHJva2Utd2lkdGg9IjAuMjUiLz4KPHBhdGggZD0iTTg0IDM1TDgxIDM4IiBzdHJva2U9IiM2RjQwMzgiIHN0cm9rZS13aWR0aD0iMC4yNSIvPgo8cGF0aCBkPSJNNzkgNDFMNzYgNDQiIHN0cm9rZT0iIzZGNDAzOCIgc3Ryb2tlLXdpZHRoPSIwLjI1Ii8+CjxwYXRoIGQ9Ik03NCA0N0w3MSA1MCIgc3Ryb2tlPSIjNkY0MDM4IiBzdHJva2Utd2lkdGg9IjAuMjUiLz4KPHBhdGggZD0iTTk0IDM1TDkxIDM4IiBzdHJva2U9IiM2RjQwMzgiIHN0cm9rZS13aWR0aD0iMC4yNSIvPgo8cGF0aCBkPSJNODkgNDFMODYgNDQiIHN0cm9rZT0iIzZGNDAzOCIgc3Ryb2tlLXdpZHRoPSIwLjI1Ii8+CjxwYXRoIGQ9Ik04NCA0N0w4MSA1MCIgc3Ryb2tlPSIjNkY0MDM4IiBzdHJva2Utd2lkdGg9IjAuMjUiLz4KPHBhdGggZD0iTTEwNCAzNUwxMDEgMzgiIHN0cm9rZT0iIzZGNDAzOCIgc3Ryb2tlLXdpZHRoPSIwLjI1Ii8+CjxwYXRoIGQ9Ik05OSA0MUw5NiA0NCIgc3Ryb2tlPSIjNkY0MDM4IiBzdHJva2Utd2lkdGg9IjAuMjUiLz4KPHBhdGggZD0iTTk0IDQ3TDkxIDUwIiBzdHJva2U9IiM2RjQwMzgiIHN0cm9rZS13aWR0aD0iMC4yNSIvPgo8cGF0aCBkPSJNODcgMzhMODQgNDEiIHN0cm9rZT0iIzZGNDAzOCIgc3Ryb2tlLXdpZHRoPSIwLjI1Ii8+CjxwYXRoIGQ9Ik04MiA0NEw3OSA0NyIgc3Ryb2tlPSIjNkY0MDM4IiBzdHJva2Utd2lkdGg9IjAuMjUiLz4KPHBhdGggZD0iTTk4IDM4TDk1IDQxIiBzdHJva2U9IiM2RjQwMzgiIHN0cm9rZS13aWR0aD0iMC4yNSIvPgo8cGF0aCBkPSJNOTMgNDRMOTAgNDciIHN0cm9rZT0iIzZGNDAzOCIgc3Ryb2tlLXdpZHRoPSIwLjI1Ii8+CjxwYXRoIGQ9Ik0xMDEgMzNMOTkgMzUiIHN0cm9rZT0iIzZGNDAzOCIgc3Ryb2tlLXdpZHRoPSIwLjI1Ii8+CjwvZz4KPHBhdGggZD0iTTExNSA5N0MxMTUgOTYuNDQ3NyAxMTQuNTUyIDk2IDExNCA5NkgxMDZDMTA1LjQ0OCA5NiAxMDUgOTYuNDQ3NyAxMDUgOTdWMTEwSDExNVY5N1oiIGZpbGw9IiM2MzM4MzEiLz4KPG1hc2sgaWQ9Im1hc2sxIiBtYXNrLXR5cGU9ImFscGhhIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSI0OCIgeT0iNjIiIHdpZHRoPSIzOSIgaGVpZ2h0PSIzOSI+CjxlbGxpcHNlIHJ4PSIxOS4zOTQ1IiByeT0iMTguNjgzIiB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSA2Ny4zOTQ1IDgxLjQwMTgpIiBmaWxsPSIjRkZDRTU1Ii8+CjwvbWFzaz4KPGcgbWFzaz0idXJsKCNtYXNrMSkiPgo8ZWxsaXBzZSByeD0iMTkuNDU3OCIgcnk9IjE4LjY4MyIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgNjcuNzYzMiA4MS40MDE4KSIgZmlsbD0iI0YwQzM1NCIvPgo8ZWxsaXBzZSByeD0iMTkuNDU3OCIgcnk9IjE4LjE3MTIiIHRyYW5zZm9ybT0ibWF0cml4KC0xIDAgMCAxIDcyLjQ1NzggODIuMTcxMikiIGZpbGw9IiNGRkNFNTUiLz4KPHJlY3QgeD0iODAuMDQ4MSIgeT0iNjYuMjc3MyIgd2lkdGg9IjcuOTM1NjgiIGhlaWdodD0iMzAuMjQ4NyIgZmlsbD0iI0YwQzM1NCIvPgo8cmVjdCB4PSI4MyIgeT0iNjgiIHdpZHRoPSI2IiBoZWlnaHQ9IjI3IiBmaWxsPSIjQUY2NjU4Ii8+CjxwYXRoIGQ9Ik02OS42MjggOTBMNjUuNjU5IDgzLjA3VjgyLjE0Nkg2Ni4xMjFDNjcuMjQxIDgyLjE0NiA2OC4wOTUgODEuOTg1IDY4LjY4MyA4MS42NjNDNjkuMjg1IDgxLjM0MSA2OS42MzUgODAuNzYgNjkuNzMzIDc5LjkySDY1LjY1OVY3OC41NzZINjkuNzEyQzY5LjU3MiA3Ny43OTIgNjkuMjAxIDc3LjIyNSA2OC41OTkgNzYuODc1QzY4LjAxMSA3Ni41MjUgNjcuMTg1IDc2LjM1IDY2LjEyMSA3Ni4zNUg2NS42NTlWNzUuMDA2SDc0LjM1M1Y3Ni4zNUg3MC4zODRDNzEuMDU2IDc2Ljg5NiA3MS40NTUgNzcuNjM4IDcxLjU4MSA3OC41NzZINzQuMzUzVjc5LjkySDcxLjYyM0M3MS41MjUgODAuOTQyIDcxLjEzMyA4MS43NCA3MC40NDcgODIuMzE0QzY5Ljc3NSA4Mi44NzQgNjguODc5IDgzLjIzMSA2Ny43NTkgODMuMzg1TDcxLjc3IDkwSDY5LjYyOFoiIGZpbGw9IiNDRUE3NDciLz4KPC9nPgo8cmVjdCB3aWR0aD0iNC43ODczMiIgaGVpZ2h0PSI3LjE4MDk4IiB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSAxMTguMzUyIDU2KSIgZmlsbD0iIzYzMzgzMSIvPgo8cmVjdCB3aWR0aD0iNC43ODczMiIgaGVpZ2h0PSI3LjE4MDk4IiB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSAxMTguMzUyIDY3LjE4MDcpIiBmaWxsPSIjNjMzODMxIi8+CjxyZWN0IHdpZHRoPSI0Ljc4NzMyIiBoZWlnaHQ9IjcuMTgwOTgiIHRyYW5zZm9ybT0ibWF0cml4KC0xIDAgMCAxIDExOC4zNTIgNzguMzYxMykiIGZpbGw9IiM2MzM4MzEiLz4KPHJlY3Qgd2lkdGg9IjQuNzg3MzIiIGhlaWdodD0iNy4xODA5OCIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgMTA0Ljc4NyA1NikiIGZpbGw9IiM2MzM4MzEiLz4KPHJlY3Qgd2lkdGg9IjQuNzg3MzIiIGhlaWdodD0iNy4xODA5OCIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgMTA0Ljc4NyA2Ny4xODA3KSIgZmlsbD0iIzYzMzgzMSIvPgo8cmVjdCB3aWR0aD0iNC43ODczMiIgaGVpZ2h0PSI3LjE4MDk4IiB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSAxMDQuNzg3IDc4LjM2MTMpIiBmaWxsPSIjNjMzODMxIi8+CjxwYXRoIGQ9Ik00LjU1MDYyIDEwOS41NjdDMi4wMzczMyAxMDkuNTY3IC04LjY3ODQ0ZS0wNSAxMDguOTg2IC04LjY3ODQ0ZS0wNSAxMDguMjY5Qy04LjY3ODQ0ZS0wNSAxMDcuNTUzIDIuMDM3MzMgMTA2Ljk3MiA0LjU1MDYyIDEwNi45NzJDNy4wNjM5IDEwNi45NzIgOS4xMDEzMiAxMDcuNTUzIDkuMTAxMzIgMTA4LjI2OUM5LjEwMTMyIDEwOC45ODYgNy4wNjM5IDEwOS41NjcgNC41NTA2MiAxMDkuNTY3WiIgZmlsbD0idXJsKCNwYWludDRfcmFkaWFsKSIvPgo8cGF0aCBkPSJNNS45Njc3NyAxMDMuNjIyVjEwNy41OTJDNS45Njc3NyAxMDcuODA2IDUuODgyOCAxMDguMDExIDUuNzMxNTYgMTA4LjE2MkM1LjU4MDMyIDEwOC4zMTQgNS4zNzUyIDEwOC4zOTkgNS4xNjEzMiAxMDguMzk5QzQuOTQ3NDMgMTA4LjM5OSA0Ljc0MjMxIDEwOC4zMTQgNC41OTEwOCAxMDguMTYyQzQuNDM5ODQgMTA4LjAxMSA0LjM1NDg3IDEwNy44MDYgNC4zNTQ4NyAxMDcuNTkyVjEwMy4xNDVIMi4zNjg2OVYxMDAuMTVMMy4xNTkwMiA5OC42OTM1TDMuMjM3MzYgMTAyLjQ0NUg0LjM1NDg3Vjk5LjU4OThINS45Njc3N1YxMDIuOTQiIGZpbGw9IiM5Nzk3OTciLz4KPHBhdGggZD0iTTUuMDA2ODkgMTAwLjcwNUMyLjI0OTI4IDEwMC43MDUgMC4wMTM4MDczIDk4LjQ2OTUgMC4wMTM4MDczIDk1LjcxMTlDMC4wMTM4MDczIDkyLjk1NDIgMi4yNDkyOCA5MC43MTg4IDUuMDA2ODkgOTAuNzE4OEM3Ljc2NDUgOTAuNzE4OCAxMCA5Mi45NTQyIDEwIDk1LjcxMTlDMTAgOTguNDY5NSA3Ljc2NDUgMTAwLjcwNSA1LjAwNjg5IDEwMC43MDVaIiBmaWxsPSJ1cmwoI3BhaW50NV9saW5lYXIpIi8+CjxwYXRoIGQ9Ik02LjM3NTU4IDk3LjkzNTNDNi4zNzU1OCA5Ny45MzUzIDQuMzU0ODMgOTguMDQ4MiAzLjQwMDkxIDk2LjY0NUwzLjg2MTc0IDk2LjM2MzlDMy44NjE3NCA5Ni4zNjM5IDUuMTUyMDggOTcuODIyNCA2LjY2ODIxIDk3LjM3MzEiIGZpbGw9InVybCgjcGFpbnQ2X2xpbmVhcikiLz4KPHBhdGggZD0iTTEzLjg2MDYgMTEwLjg0OEMxMi4yODA3IDExMC44NDggMTEgMTEwLjQ4MyAxMSAxMTAuMDMzQzExIDEwOS41ODIgMTIuMjgwNyAxMDkuMjE3IDEzLjg2MDYgMTA5LjIxN0MxNS40NDA1IDEwOS4yMTcgMTYuNzIxMiAxMDkuNTgyIDE2LjcyMTIgMTEwLjAzM0MxNi43MjEyIDExMC40ODMgMTUuNDQwNSAxMTAuODQ4IDEzLjg2MDYgMTEwLjg0OFoiIGZpbGw9InVybCgjcGFpbnQ3X3JhZGlhbCkiLz4KPHBhdGggZD0iTTE0Ljc1MTUgMTA3LjExMVYxMDkuNjA3QzE0Ljc1MTUgMTA5Ljc0MSAxNC42OTgxIDEwOS44NyAxNC42MDMgMTA5Ljk2NUMxNC41MDc5IDExMC4wNiAxNC4zNzkgMTEwLjExNCAxNC4yNDQ1IDExMC4xMTRDMTQuMTEwMSAxMTAuMTE0IDEzLjk4MTEgMTEwLjA2IDEzLjg4NjEgMTA5Ljk2NUMxMy43OTEgMTA5Ljg3IDEzLjczNzYgMTA5Ljc0MSAxMy43Mzc2IDEwOS42MDdWMTA2LjgxMUgxMi40ODkxVjEwNC45MjhMMTIuOTg1OSAxMDQuMDEzTDEzLjAzNTEgMTA2LjM3MUgxMy43Mzc2VjEwNC41NzZIMTQuNzUxNVYxMDYuNjgyIiBmaWxsPSIjOTc5Nzk3Ii8+CjxwYXRoIGQ9Ik0xNC4xNDc0IDEwNS4yNzdDMTIuNDE0IDEwNS4yNzcgMTEuMDA4NyAxMDMuODcyIDExLjAwODcgMTAyLjEzOUMxMS4wMDg3IDEwMC40MDUgMTIuNDE0IDk5IDE0LjE0NzQgOTlDMTUuODgwOSA5OSAxNy4yODYxIDEwMC40MDUgMTcuMjg2MSAxMDIuMTM5QzE3LjI4NjEgMTAzLjg3MiAxNS44ODA5IDEwNS4yNzcgMTQuMTQ3NCAxMDUuMjc3WiIgZmlsbD0idXJsKCNwYWludDhfbGluZWFyKSIvPgo8cGF0aCBkPSJNMTUuMDA3NyAxMDMuNTM3QzE1LjAwNzcgMTAzLjUzNyAxMy43Mzc0IDEwMy42MDggMTMuMTM3OCAxMDIuNzI2TDEzLjQyNzUgMTAyLjU0OUMxMy40Mjc1IDEwMi41NDkgMTQuMjM4NiAxMDMuNDY2IDE1LjE5MTcgMTAzLjE4MyIgZmlsbD0idXJsKCNwYWludDlfbGluZWFyKSIvPgo8cGF0aCBkPSJNOSAxNi45OTk1QzkgMTYuOTk5NSAyMi4zODY2IDM5LjE4NjQgNDcuNSAzNS4wMDAzQzc0LjUgMzAuNDk5NyA5Ni4yNjg4IDQuNTc2NDcgMTE2LjUgMy40OTk2M0MxNDIuNDcgMi4xMTczNCAxNjQuNSAzNi40OTk2IDE2NC41IDM2LjQ5OTYiIHN0cm9rZT0iIzJGMzYzRiIgc3Ryb2tlLW9wYWNpdHk9IjAuMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtZGFzaGFycmF5PSIxIDMiLz4KPGcgb3BhY2l0eT0iMC40Ij4KPG1hc2sgaWQ9Im1hc2syIiBtYXNrLXR5cGU9ImFscGhhIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSI0IiB5PSIwIiB3aWR0aD0iNyIgaGVpZ2h0PSI5Ij4KPHBhdGggZD0iTTExIDMuNUMxMSA1LjQzMyA5LjQzMyA4Ljc2NzY4IDcuNSA4Ljc2NzY4QzUuNTY3IDguNzY3NjggNCA1LjQzMyA0IDMuNUM0IDEuNTY3IDUuNTY3IDAgNy41IDBDOS40MzMgMCAxMSAxLjU2NyAxMSAzLjVaIiBmaWxsPSIjMjUzNDU0Ii8+CjwvbWFzaz4KPGcgbWFzaz0idXJsKCNtYXNrMikiPgo8cGF0aCBkPSJNMTEgMy41QzExIDUuNDMzIDkuNDMzIDguNzY3NjggNy41IDguNzY3NjhDNS41NjcgOC43Njc2OCA0IDUuNDMzIDQgMy41QzQgMS41NjcgNS41NjcgMCA3LjUgMEM5LjQzMyAwIDExIDEuNTY3IDExIDMuNVoiIGZpbGw9IiM4QzhDOEMiLz4KPHBhdGggZD0iTTEwLjQzNDMgMy41QzEwLjQzNDMgNS40MzMgOS4zNjIyNyA4Ljg3Mzc0IDcuNDI5MjggOC44NzM3NEM1LjQ5NjI4IDguODczNzQgMy40MzQzMyA1LjQzMyAzLjQzNDMzIDMuNUMzLjQzNDMzIDEuNTY3IDUuMDAxMzMgMCA2LjkzNDMzIDBDOC44NjczMiAwIDEwLjQzNDMgMS41NjcgMTAuNDM0MyAzLjVaIiBmaWxsPSIjQzFDMUMxIi8+CjwvZz4KPHJlY3Qgd2lkdGg9IjAuMDc1NDYyMiIgaGVpZ2h0PSIxLjUzIiB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSA3LjA3NTY4IDkpIiBmaWxsPSIjQzRDNEM0Ii8+CjxyZWN0IHdpZHRoPSIwLjA3NTQ2MjIiIGhlaWdodD0iMS41MyIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgOC4wNzU2OCA5KSIgZmlsbD0iI0M0QzRDNCIvPgo8cGF0aCBkPSJNNiA3LjAwMDM3SDlMOC42MDI5NCA5LjAwMDM3SDYuNDQxMThMNiA3LjAwMDM3WiIgZmlsbD0iI0MxQzFDMSIvPgo8cGF0aCBkPSJNNiAxMEg5TDguNjAyOTQgMTJINi40NDExOEw2IDEwWiIgZmlsbD0iI0FGNjY1OCIvPgo8L2c+CjxkZWZzPgo8cmFkaWFsR3JhZGllbnQgaWQ9InBhaW50MF9yYWRpYWwiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTY2MjUuODggLTEyOTcuMzgpIHJvdGF0ZSgxODApIHNjYWxlKDEzNy4yNTIgMjguNTYxNSkiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMzk0Nzk3Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzM5MzI5NyIgc3RvcC1vcGFjaXR5PSIwLjEiLz4KPC9yYWRpYWxHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyIiB4MT0iLTcxMzMuNzkiIHkxPSIyOTc3LjQ0IiB4Mj0iLTc0MDUuOTIiIHkyPSIyOTc3LjQ0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIG9mZnNldD0iMC4yNCIgc3RvcC1jb2xvcj0iI0Q4RDhEOCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMxMDFFNTEiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDJfbGluZWFyIiB4MT0iLTIyNzYuOTQiIHkxPSI1NjIuMjk5IiB4Mj0iLTIzMDUuOTYiIHkyPSI1NjIuMjk5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM5Nzk3OTciLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMzkzMjk3IiBzdG9wLW9wYWNpdHk9IjAuMSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50M19saW5lYXIiIHgxPSIxMDkiIHkxPSI1Ny41IiB4Mj0iMTA4LjgzOCIgeTI9IjExMC4zOTUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0NGNzk2OCIvPgo8c3RvcCBvZmZzZXQ9IjAuODkxMDYzIiBzdG9wLWNvbG9yPSIjQzQ1ODQ0IiBzdG9wLW9wYWNpdHk9IjAuNTQiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRDM2MjRDIiBzdG9wLW9wYWNpdHk9IjAuMzQiLz4KPC9saW5lYXJHcmFkaWVudD4KPHJhZGlhbEdyYWRpZW50IGlkPSJwYWludDRfcmFkaWFsIiBjeD0iMCIgY3k9IjAiIHI9IjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDc0MSAtMjEzMC42Nykgcm90YXRlKDE4MCkgc2NhbGUoMjE4LjM0MyA0NS40MzYyKSI+CjxzdG9wIHN0b3AtY29sb3I9IiMzOTQ3OTciLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMzkzMjk3IiBzdG9wLW9wYWNpdHk9IjAuMSIvPgo8L3JhZGlhbEdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50NV9saW5lYXIiIHgxPSItMTE1NDkiIHkxPSI0NjY5Ljc5IiB4Mj0iLTExOTgxLjkiIHkyPSI0NjY5Ljc5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIG9mZnNldD0iMC4yNCIgc3RvcC1jb2xvcj0iI0Q4RDhEOCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMxMDFFNTEiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDZfbGluZWFyIiB4MT0iLTM4MjIuNjQiIHkxPSI4MjcuNzQzIiB4Mj0iLTM4NjguODEiIHkyPSI4MjcuNzQzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM5Nzk3OTciLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMzkzMjk3IiBzdG9wLW9wYWNpdHk9IjAuMSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8cmFkaWFsR3JhZGllbnQgaWQ9InBhaW50N19yYWRpYWwiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTY3NDAuODggLTEyOTcuMzgpIHJvdGF0ZSgxODApIHNjYWxlKDEzNy4yNTIgMjguNTYxNSkiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMzk0Nzk3Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzM5MzI5NyIgc3RvcC1vcGFjaXR5PSIwLjEiLz4KPC9yYWRpYWxHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDhfbGluZWFyIiB4MT0iLTcyNDguNzkiIHkxPSIyOTc3LjQ0IiB4Mj0iLTc1MjAuOTIiIHkyPSIyOTc3LjQ0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIG9mZnNldD0iMC4yNCIgc3RvcC1jb2xvcj0iI0Q4RDhEOCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMxMDFFNTEiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDlfbGluZWFyIiB4MT0iLTIzOTEuOTQiIHkxPSI1NjIuMjk5IiB4Mj0iLTI0MjAuOTYiIHkyPSI1NjIuMjk5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM5Nzk3OTciLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMzkzMjk3IiBzdG9wLW9wYWNpdHk9IjAuMSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=" alt="">
                        </div>
                    </div>
                    <p class="fw-bolder mb-5">Open a trading & demat account online</p>
                    <h2 class="mt-5">Sign Up</h2>
                    <p class="text-muted mb-3">Or check your application status</p>
                    <p class="fw-bolder mb-0">Phone Number</p>
                    <div class="form-floating mb-3">
                        <input type="number" class="form-control" id="floatingInput" placeholder="name@example.com">
                        <label for="floatingInput">10 digit number</label>
                    </div>
                    <div class="d-grid gap-2">
                        <button class="btn btn-primary" type="button">Continue</button>
                      </div>
                </div>
            </div>
        </div>
    </div>`;
}

export {navbar,footer,popup};