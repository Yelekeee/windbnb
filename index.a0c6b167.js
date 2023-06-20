document.addEventListener("DOMContentLoaded",function(){var t,e,n,c,s,o,l=document.querySelector(".btn1"),a=document.querySelector(".btn2"),r=document.createElement("div");r.className="half-white";var i=`
    <script src="header.js"></script>
  <script src="tusindim.js"></script>
  
      <nav>
        <ul class="nav-new">
          <li class="nav-item-new">
            <button class="btn1-new">
            <p class="locat">LOCATION</p> 
            <p class="cit">Helsinki, Finland </p>
            </button>
            <ul class="select-options hidden">
              <button class="select-option">
                <img class="img_location" src="http://localhost:1234/location_icon.0384d6b3.png">
                <span class="option-text">Helsinki, Finland</span>
              </button>
              <button class="select-option">
                <img class="img_location" src="http://localhost:1234/location_icon.0384d6b3.png">
                <span class="option-text">Turku, Finland</span>
              </button>
              <button class="select-option">
                <img class="img_location" src="http://localhost:1234/location_icon.0384d6b3.png">
                <span class="option-text">Oulu, Finland</span>
              </button>
              <button class="select-option">
                <img class="img_location" src="http://localhost:1234/location_icon.0384d6b3.png">
                <span class="option-text">Vaasa, Finland</span>
              </button>
            </ul>
          </li>
          <p class="line-new"></p>
          <li class="nav-item-new">
            <p class="guests">GUESTS</p> 
            <button class="btn2-new">Add guests</button>
            <div class="guest-counters hidden">
              <div class="counter">
                <span class="counter-label1">Adults</span>
                <br>
                <span class="counter-label2">Ages 13 or above</span>
                <div class="counter-controls">
                  <button class="counter-decrement1">-</button>
                  <span class="counter-value1">0</span>
                  <button class="counter-increment1">+</button>
                </div>
              </div>
              <div class="counter">
                <span class="counter-label1">Children</span>
                <br>
                <span class="counter-label2">Ages 2-12</span>
                <div class="counter-controls">
                  <button class="counter-decrement2">-</button>
                  <span class="counter-value2">0</span>
                  <button class="counter-increment2">+</button>
                </div>
              </div>
            </div>
          </li>
          <p class="line-new"></p>
          <li class="nav-item3-new">
            <input class="search-new" type="search" name="" placeholder="Search">
            <img class="img_search-new" src="http://localhost:1234/search_icon.220cbe13.png" alt="">
          </li>
        </ul>
      </nav>
      <button class="close">CLOSE</button> 
      `;let u=function(){document.body.classList.add("half-white-active"),r.innerHTML=i,document.body.appendChild(r),e=document.querySelector(".btn1-new"),t=document.querySelector(".btn2-new"),s=document.querySelector(".counter-increment1"),o=document.querySelector(".counter-increment2"),n=document.querySelector(".counter-decrement1"),c=document.querySelector(".counter-decrement2"),document.querySelectorAll(".counter-value1"),document.querySelectorAll(".counter-value2"),t&&t.addEventListener("click",d),e&&e.addEventListener("click",p),s&&(s.addEventListener("click",v),s.addEventListener("click",y)),o&&(o.addEventListener("click",m),o.addEventListener("click",y)),n&&(n.addEventListener("click",b),n.addEventListener("click",y)),c&&(c.addEventListener("click",h),c.addEventListener("click",y)),document.querySelectorAll(".select-option").forEach(function(t){t.addEventListener("click",function(){var e=t.textContent;document.querySelector(".btn1-new").textContent=e})});var l=document.querySelector(".guest-counters");l.classList.add("hidden");var l=document.querySelector(".select-options");l.classList.remove("hidden")},d=function(){document.body.classList.add("half-white-active");var t=document.querySelector(".guest-counters");t.classList.remove("hidden");var t=document.querySelector(".select-options");t.classList.add("hidden")},p=function(){var t=document.querySelector(".guest-counters");t.classList.add("hidden");var t=document.querySelector(".select-options");t.classList.remove("hidden")},v=function(){var t=this.parentNode.querySelector(".counter-value1"),e=parseInt(t.textContent);t.textContent=e+1},m=function(){var t=this.parentNode.querySelector(".counter-value2"),e=parseInt(t.textContent);t.textContent=e+1},b=function(){var t=this.parentNode.querySelector(".counter-value1"),e=parseInt(t.textContent);e>0&&(t.textContent=e-1)},h=function(){var t=this.parentNode.querySelector(".counter-value2"),e=parseInt(t.textContent);e>0&&(t.textContent=e-1)},y=function(){var t=parseInt(document.querySelector(".counter-value1").textContent)+parseInt(document.querySelector(".counter-value2").textContent),e=document.querySelector(".btn2-new");e.textContent=`${t} guests`,0==t?(e.textContent="Add guests",e.style.fontWeight="400",e.style.fontSize="14px",e.style.color="BDBDBD"):(e.style.fontWeight="bold",e.style.fontSize="16px",e.style.color="black")};l.addEventListener("click",u),a.addEventListener("click",u)});