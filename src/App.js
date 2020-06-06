import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Article from './component/article/article'
import Header from './component/header'
import Footer from './component/footer'
import Testimonials from './component/website/testimonial'

function App() {
    return (
        <div style={{ outLine: "none" }} tabIndex="-1" id="gatsby-focus-wrapper">
            <div tabIndex="0" className="base__SiteRoot-sc-7xy8jg-0 frKmLh content-hub-page">
                <div className="Navigation__Overlay-sc-1od9rzi-2 dwZCVC hidden" id="navigation-overlay"> </div>

                <Header />
                <Router>
                    <Route exact path='/' component={Article} />
                    <Route exact path='/test' component={Testimonials} />
                    
                </Router>
                <Footer />
            </div>
        </div>
    );
}

export default App;