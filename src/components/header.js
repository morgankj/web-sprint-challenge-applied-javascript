// TASK 1
// ---------------------
// Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
// The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
// The text inside elements will be set using their `textContent` property (NOT `innerText`).
//
//  <div class="header">
//    <span class="date">{ date }</span>
//    <h1>{ title }</h1>
//    <span class="temp">{ temp }</span>
//  </div>
//

const Header = (title, date, temp) => {
  const header = document.createElement('div');
  header.classList.add('header');

  const sDate = document.createElement('span');
  sDate.classList.add('date');
  sDate.textContent = date;

  const sTitle = document.createElement('h1');
  sTitle.textContent = title;

  const sTemp = document.createElement('span');
  sTemp.classList.add('temp');
  sTemp.textContent = temp;

  header.appendChild(sDate);
  header.appendChild(sTitle);
  header.appendChild(sTemp);

  return header;
}

// TASK 2
// ---------------------
// Implement this function taking a css selector as its only argument.
// It should create a header using the Header component above, passing arguments of your choosing.
// It should append the header to the element in the DOM that matches the given selector.
//

const headerAppender = (selector) => {
  const headerContainer = document.querySelector(selector);
  headerContainer.appendChild(Header('Huskies are Good Dogs', 'Oct 1, 2077', '70°F'));
}

export { Header, headerAppender }
