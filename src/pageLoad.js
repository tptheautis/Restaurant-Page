import createHomePage from './restaurant';
import createContactPage from './contact';
import createMenuPage from './menu';
import createNavigation from './navigation';

function pageLoad() {
  createHomePage();
  createContactPage();
  createMenuPage();
  createNavigation();
}

export default pageLoad;
