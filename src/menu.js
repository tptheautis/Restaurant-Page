const createMenuPage = () => {
  const content = document.getElementById('content');
  const pageContent = document.createElement('div');
  content.append(pageContent);
  pageContent.classList.add('page-content');

  const menuHeader = document.createElement('h1');
  pageContent.append(menuHeader);
  menuHeader.textContent = 'Menu';
};

export default createMenuPage;
