const guideURL = 'https://valthun.github.io/termproject/js/guides.json';

fetch(guideURL)
.then((response) => response.json())
    .then((jsObject) => {
        console.table(jsObject);

        const guides = jsObject['guides'];

        for (let i = 0; i < guides.length; i++) {

            let pros = document.createElement('section')
            let name = document.createElement('h3');
            let bio = document.createElement('p');
            let cert = document.createElement('p');
            let head = document.createElement('img')

            name.textContent = guides[i].firstName + " " + guides[i].nickName + " " + guides[i].lastName;
            bio.textContent = "Bio: " + guides[i].bio;
            cert.textContent = "Certifications: " + guides[i].certs;
           
            image.setAttribute('src', guides[i].profilePic);
            image.setAttribute('alt', h2.textContent + " - " + guides[i].order);

            pros.appendChild(name);
            pros.appendChild(bio);
            pros.appendChild(cert);
            pros.appendChild(head);

            document.querySelector('div.guides').appendChild(pros);
        }
    });