document.addEventListener('DOMContentLoaded', function () {
  var btn1 = document.querySelector('.btn1');
  var btn2 = document.querySelector('.btn2');
  var btn2New;
  var btn1New;
  var decrementing1;
  var decrementing2;
  var incrementing1;
  var incrementing2;
  var counterValue1;
  var counterValue2;
  var halfWhitePage = document.createElement('div');
  halfWhitePage.className = 'half-white';
  var whitePageContent = `
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
      `;

  const showModal = function () {

    document.body.classList.add('half-white-active');
    halfWhitePage.innerHTML = whitePageContent;
    document.body.appendChild(halfWhitePage);
    
    btn1New = document.querySelector('.btn1-new');
    btn2New = document.querySelector('.btn2-new');
    incrementing1 = document.querySelector('.counter-increment1');
    incrementing2 = document.querySelector('.counter-increment2');
    decrementing1 = document.querySelector('.counter-decrement1');
    decrementing2 = document.querySelector('.counter-decrement2');

    counterValue1 = document.querySelectorAll('.counter-value1');
    counterValue2 = document.querySelectorAll('.counter-value2');

    if (btn2New) {
      btn2New.addEventListener('click', btn2OnClick);
    }

    if(btn1New){
      btn1New.addEventListener('click', btn1OnClick);
    }

    if(incrementing1){
      incrementing1.addEventListener('click', inc1);
      incrementing1.addEventListener('click', updateTotal);
    }

    if(incrementing2){
      incrementing2.addEventListener('click', inc2);
      incrementing2.addEventListener('click', updateTotal);
    //   inc2();
    // updateTotal();
    }
    
    if(decrementing1){
      decrementing1.addEventListener('click', dec1);
      decrementing1.addEventListener('click', updateTotal);
      // dec1();
      // updateTotal();
    }

    if(decrementing2){
      decrementing2.addEventListener('click', dec2);
      decrementing2.addEventListener('click', updateTotal);
      // dec2();
      // updateTotal();
    }
    var selectOptions = document.querySelectorAll('.select-option');
    selectOptions.forEach(function (option) {
      option.addEventListener('click', function () {
        var selectedOption = option.textContent;
        var btn1New = document.querySelector('.btn1-new');
        btn1New.textContent = selectedOption;
      });
    });

    var btn2Operations = document.querySelector('.guest-counters');
    btn2Operations.classList.add('hidden');
    var btn2Operations = document.querySelector('.select-options');
    btn2Operations.classList.remove('hidden');

  }

  const btn2OnClick = function () {
  
    document.body.classList.add('half-white-active');
    var btn2Operations = document.querySelector('.guest-counters');
    btn2Operations.classList.remove('hidden');

    var btn2Operations = document.querySelector('.select-options');
    btn2Operations.classList.add('hidden');
  }

  const btn1OnClick = function () {
    var btn2Operations = document.querySelector('.guest-counters');
    btn2Operations.classList.add('hidden');

    var btn2Operations = document.querySelector('.select-options');
    btn2Operations.classList.remove('hidden');
  
  }

  const inc1 = function () {
    var counterValue1 = this.parentNode.querySelector('.counter-value1');
  
  var value = parseInt(counterValue1.textContent);
  counterValue1.textContent = value + 1;
  }

  const inc2 = function () {
    var counterValue2 = this.parentNode.querySelector('.counter-value2');
  
  var value = parseInt(counterValue2.textContent);
  counterValue2.textContent = value + 1;
  }

  const dec1= function () {
    var counterValue1 = this.parentNode.querySelector('.counter-value1');
    var value = parseInt(counterValue1.textContent);
    if (value > 0) {
      counterValue1.textContent = value - 1;
    }
  };

  const dec2= function () {
    var counterValue2 = this.parentNode.querySelector('.counter-value2');
    var value = parseInt(counterValue2.textContent);
    if (value > 0) {
      counterValue2.textContent = value - 1;
    }
  };

  const updateTotal = function () {
    var counterValue1 = parseInt(document.querySelector('.counter-value1').textContent);
    var counterValue2 = parseInt(document.querySelector('.counter-value2').textContent);
    var totalValue = counterValue1 + counterValue2;
    var btn2New = document.querySelector('.btn2-new');
    btn2New.textContent = `${totalValue} guests`;
    if(totalValue == 0){
      btn2New.textContent = `Add guests`;
      btn2New.style.fontWeight = '400';
      btn2New.style.fontSize = '14px';
      btn2New.style.color = 'BDBDBD';
    }else{
      btn2New.style.fontWeight = 'bold';
      btn2New.style.fontSize = '16px';
      btn2New.style.color = 'black';
    }
  };
  btn1.addEventListener('click', showModal);
  btn2.addEventListener('click', showModal);

});