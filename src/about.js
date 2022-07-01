function aboutLoader (main) {

    const container = document.createElement('div');
    container.setAttribute('id' , 'aboutContainer');

    const frame = document.createElement('div');
    frame.setAttribute('id' , 'aboutFrame');

    const frameTitle = document.createElement('div');
    frameTitle.setAttribute('id' , 'aboutTitle');
    frameTitle.textContent = 'About us';

    frame.appendChild(frameTitle);

    const frameContent = document.createElement('div');
    frameContent.setAttribute('id' , 'aboutContent')
    frameContent.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sit laboriosam officiis praesentium, quis velit laudantium reprehenderit aspernatur distinctio, voluptates ex quisquam omnis beatae, quae rem ipsam necessitatibus? Dolorem, odit?'

    frame.appendChild(frameContent);

    container.appendChild(frame);

    main.appendChild(container);

}

export {aboutLoader}