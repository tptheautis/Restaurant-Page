import createHomePage from './restaurant';
import createContactPage from './contact';
import createMenuPage from './menu';

function clear() {
  const content = document.getElementById('content');
  const pageContent = document.querySelector('.page-content');
  if (pageContent) {
    content.removeChild(pageContent);
  }
}

const createNavigation = () => {
  const content = document.getElementById('content');

  const button1 = document.createElement('div');
  const button2 = document.createElement('div');
  const button3 = document.createElement('div');

  content.append(button1);
  content.append(button2);
  content.append(button3);

  button1.textContent = 'Home';
  button2.textContent = 'Menu';
  button3.textContent = 'Contact';

  button1.classList.add('button');
  button2.classList.add('button');
  button3.classList.add('button');

  button1.addEventListener('click', () => {
    clear();
    createHomePage();
  });
  button2.addEventListener('click', () => {
    clear();
    createMenuPage();
  });
  button3.addEventListener('click', () => {
    clear();
    createContactPage();
  });
};

export default createNavigation;
