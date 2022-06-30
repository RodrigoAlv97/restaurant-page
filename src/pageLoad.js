const content = document.querySelector('#content');

function pageLoader (){

    const header = document.createElement('div')
    header.setAttribute('id' , 'header');

    const headerList = document.createElement('ul');
    headerList.setAttribute('id' , 'headerList');
    header.appendChild(headerList);

    const home = document.createElement('li');
    home.setAttribute('class' , 'listItem');
    home.textContent = 'HOME';
    headerList.appendChild(home);

    const menu = document.createElement('li');
    menu.setAttribute('class' , 'listItem');
    menu.textContent = 'MENU';
    headerList.appendChild(menu);

    const about = document.createElement('li');
    about.setAttribute('class' , 'listItem');
    about.textContent = 'ABOUT';
    headerList.appendChild(about);

    content.appendChild(header);

    const main = document.createElement('div')
    main.setAttribute('id' , 'main');
    content.appendChild(main);

    const footer = document.createElement('div')
    footer.setAttribute('id' , 'footer');
    
    const link = document.createElement('a');
    link.setAttribute('class' , 'link');
    link.href = 'https://github.com/RodrigoAlv97/restaurant-page';
    link.textContent = 'GitHub';
    link.target = '_blank';
    footer.appendChild(link);

    content.appendChild(footer);



}

export {pageLoader}