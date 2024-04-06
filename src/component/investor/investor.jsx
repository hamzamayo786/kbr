import React from 'react';
import './investor.css';


function Investor() {
  return (
    <>
    sdfsd
        <div class="investor-day-section">
                <div class="investor-content">
                    <h1>KBR's 2024 Investor Day</h1>
                    <p class="date">May 8, 2024</p>
                    <a href="#" class="webcast-link">Webcast</a><br/>
                    <a href="#" class="read-more">Read More <i class="fa-solid fa-arrow-right"></i></a>
                    
                   
                </div>
                    
                    <div class="investor-stock-info">
                          <div className='investor-stock-inner'>

                          <div class="module-stock-header_stockQuote">
                            <h6>Stock Information</h6>
                            <div class="module_container--inner">
                            <span class="module-stock-header_description1">NYSE: KBR</span>
                            <span class="module-stock-header_stock-price">64.93</span>
                            <span class="module-stock-header_change module-stock-header_up">
                            <span class="module-stock-header_indicator">+</span>0.61 ( 0.95% )</span>
                            <span class="module-stock-header_date-wrap">
                            <span class="module-stock-header_date">Date of April 05, 2024</span>
                            <span class="module-stock-header_description3">Pricing delayed by 20 minutes</span>
                            </span></div>
                            <a href="/stock-info/stock-quote-and-chart/default.aspx" title="View More About Stock Quote" class="button--cta">View More <i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                            </div>

                        
                        <div className='investor-stock-image'>
                            <img className="kbr-site-logo img-fluid w-100 " src="../../../../assets/images/chart.jpg" alt="KBR team" />

                        </div>

                    
                    </div>
                
            </div>
    </>
);
}

export default Investor; 