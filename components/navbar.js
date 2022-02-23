function navbar(){
    return `<div class="container">
    <div id="nav_container">
        <div id="left_nav">
            <div id="logo">
                <div>
                    <img src="https://smallcases.upstox.com/assets/favicon/ms-icon-310x310.png" alt="logo">
                </div>
                <p class="">smallcase</p>
            </div>
            <div>
                <p class="nav_opt">Discover</p>
            </div>
            <div>
                <p class="nav_opt">Watchlist</p>
            </div>
        </div>
        
        <div id="right_nav">
            <div>
                <p class="nav_opt">For Business</p>
            </div>
            <div id="more_opt">
                <p class="nav_opt">More ↓</p>
            </div>
            <div>
                <button type="button" class="btn btn-outline-primary">Login</button>
            </div>
        </div>
    </div>
</div>
<hr>`
}

function footer (){
    return `<div id="footer" style="background-color: rgb(247,248,247);">
    <div class="container">
        <div class="row mt-3">
            <div class="col-12">
                <i class="fa-solid fa-house"></i>
                <i class="fa-solid fa-greater-than"></i>
                <span>Watchlist</span>
            </div>
        </div>
        <div class="row mt-5 mb-5">
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
                        <p class="m-0">About</p>
                        <p class="m-0">For Businesses</p>
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

export {navbar,footer};