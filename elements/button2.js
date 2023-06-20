// document.addEventListener('DOMContentLoaded', function() {
//     var btn2 = document.querySelector('.btn2');
//     var btn1 = document.querySelector('.btn1');
//     var btn2New = document.querySelector('.btn2-new');
//     var halfWhitePage = document.createElement('div');
//     halfWhitePage.className = 'half-white';
//     var whitePageContent = `
//     <nav>
//       <ul class="nav-new">
//       <li class="nav-item-new">
//       <button class="btn1-new">Helsinki, Finland</button>
//       <ul class="select-options hidden">
//       <button class="select-option">
//         <img class="img_location" src="http://localhost:1234/location_icon.0384d6b3.png">
//         <span class="option-text">Helsinki, Finland</span>
//         </button>
//         <button class="select-option">
//         <img class="img_location" src="http://localhost:1234/location_icon.0384d6b3.png">
//         <span class="option-text">Turku, Finland</span>
//         </button>
//         <button class="select-option">
//         <img class="img_location" src="http://localhost:1234/location_icon.0384d6b3.png">
//         <span class="option-text">Oulu, Finland</span>
//         </button>

//         <button class="select-option">
//         <img class="img_location" src="http://localhost:1234/location_icon.0384d6b3.png">
//         <span class="option-text">Vaasa, Finland</span>
//         </button>
     
//   </ul>

//     </li>
//         <p class="line-new"></p>
//         <li class="nav-item-new">
//           <button class="btn2-new">Add guests</button>
//           <div class="guest-counters">
//             <div class="counter">
//               <span class="counter-label">Adults</span>
//               <div class="counter-controls">
//                 <button class="counter-decrement">-</button>
//                 <span class="counter-value">0</span>
//                 <button class="counter-increment">+</button>
//               </div>
//             </div>
//             <div class="counter">
//               <span class="counter-label">Children</span>
//               <div class="counter-controls">
//                 <button class="counter-decrement">-</button>
//                 <span class="counter-value">0</span>
//                 <button class="counter-increment">+</button>
//               </div>
//             </div>
//         </li>
//         <p class="line-new"></p>
//         <li class="nav-item3-new">
//           <input class="search-new" type="search" name="" placeholder="Search">
//           <img class="img_search-new" src="http://localhost:1234/search_icon.220cbe13.png" alt="">
//         </li>
//       </ul>
//     </nav>`;
  
//     btn2.addEventListener('click', function() {
//         document.body.classList.add('half-white-active');
//         halfWhitePage.innerHTML = whitePageContent;
//         document.body.appendChild(halfWhitePage);
//     });


//     var halfWhitePages = document.createElement('div');
//     halfWhitePages.className = 'half-white';
//     var whitePageContents = `
//     <nav>
//       <ul class="nav-new">
//       <li class="nav-item-new">
//       <button class="btn1-new">Helsinki, Finland</button>
//       <ul class="select-options hidden">
//       <button class="select-option">
//         <img class="img_location" src="http://localhost:1234/location_icon.0384d6b3.png">
//         <span class="option-text">Helsinki, Finland</span>
//         </button>
//         <button class="select-option">
//         <img class="img_location" src="http://localhost:1234/location_icon.0384d6b3.png">
//         <span class="option-text">Turku, Finland</span>
//         </button>
//         <button class="select-option">
//         <img class="img_location" src="http://localhost:1234/location_icon.0384d6b3.png">
//         <span class="option-text">Oulu, Finland</span>
//         </button>

//         <button class="select-option">
//         <img class="img_location" src="http://localhost:1234/location_icon.0384d6b3.png">
//         <span class="option-text">Vaasa, Finland</span>
//         </button>
     
//   </ul>

//     </li>
//         <p class="line-new"></p>
//         <li class="nav-item-new">
//           <button class="btn2-new">Add guests</button>
//           <div class="guest-counters">
//             <div class="counter">
//               <span class="counter-label">Adults</span>
//               <div class="counter-controls">
//                 <button class="counter-decrement">-</button>
//                 <span class="counter-value">0</span>
//                 <button class="counter-increment">+</button>
//               </div>
//             </div>
//             <div class="counter">
//               <span class="counter-label">Children</span>
//               <div class="counter-controls">
//                 <button class="counter-decrement">-</button>
//                 <span class="counter-value">0</span>
//                 <button class="counter-increment">+</button>
//               </div>
//             </div>
//         </li>
//         <p class="line-new"></p>
//         <li class="nav-item3-new">
//           <input class="search-new" type="search" name="" placeholder="Search">
//           <img class="img_search-new" src="http://localhost:1234/search_icon.220cbe13.png" alt="">
//         </li>
//       </ul>
//     </nav>`;
//     btn2New.addEventListener('click', function() {
//         document.body.classList.add('half-white-active');
//         halfWhitePages.innerHTML = whitePageContents;
//         document.body.appendChild(halfWhitePages);
//     });
// });