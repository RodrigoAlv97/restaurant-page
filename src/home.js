
function homeLoader(main){
    
    const container = document.createElement('div');
    container.setAttribute('id' , 'homeContainer');

    const name = document.createElement('div');
    name.setAttribute('id' , 'name');
    name.textContent = 'Example Name';

    container.appendChild(name);

    const subText = document.createElement('div');
    subText.setAttribute('id' , 'subText');
    subText.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, magni.';

    container.appendChild(subText);
    
    main.appendChild(container);
    
}

export {homeLoader}