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

export default navbar;