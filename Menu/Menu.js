/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

//menuItems.forEach(e => console.log(e));

// let aaa = menuItems.map( (item) => {
//     let li1 = document.createElement('li')
//     return li1
//   })
//   console.log(aaa)

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
function componentCreator(arr) {
  let div2 = document.createElement('div');
  div2.classList.add('menu');
  let ul = document.createElement('ul');
  div2.appendChild(ul);

  for (let i = 0; i < arr.length; i++) {
    let li = document.createElement('li');
    li.textContent = arr[i];
    ul.appendChild(li);
  }

  let mb = document.querySelector('.menu-button');
  
  mb.addEventListener('click', function() {
    div2.classList.toggle('menu--open');
  });

  return div2;
}

let menu3 = document.querySelector('.header')


menu3.appendChild(componentCreator(menuItems))