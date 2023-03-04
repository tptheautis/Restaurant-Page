import createHomePage from './restaurant';
import createContactPage from './contact';
import createMenuPage from './menu';

function pageLoad() {
  createHomePage();
  createContactPage();
  createMenuPage();
}

export default pageLoad;
