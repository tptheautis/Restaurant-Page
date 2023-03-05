const createHomePage = () => {
  const content = document.getElementById('content');
  const pageContent = document.createElement('div');
  content.append(pageContent);
  pageContent.classList.add('page-content');

  const header = document.createElement('h1');
  header.textContent = 'Welcome to Sushi Palace!';
  pageContent.append(header);

  const image = document.createElement('img');
  image.src = 'https://assets3.thrillist.com/v1/image/3059772/750x500/flatten;crop;webp=auto;jpeg_quality=50.jpg';
  pageContent.append(image);

  const message = document.createElement('p');
  message.textContent = 'We have the best sushi in town. Come see for yourself!';
  pageContent.append(message);
};

export default createHomePage;
