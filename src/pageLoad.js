import createHomePage from './restaurant';
import createNavigation from './navigation';

function pageLoad() {
  createNavigation();
  createHomePage();
}

export default pageLoad;
