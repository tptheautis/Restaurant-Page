const createContactPage = () => {
  const content = document.getElementById('content');
  const pageContent = document.createElement('div');
  content.append(pageContent);
  pageContent.classList.add('page-content');

  const contactHeader = document.createElement('h1');
  pageContent.append(contactHeader);
  contactHeader.textContent = 'Contact';
};

export default createContactPage;
