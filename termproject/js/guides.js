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

            name.textContent = "Name: " + guides[i].firstName + " " + guides[i].nickName + " " + guides[i].lastName;
            bio.textContent = "Bio: " + guides[i].bio;
            cert.textContent = "Certifications: " + guides[i].certs;

            pros.appendChild(name);
            pros.appendChild(bio);
            pros.appendChild(cert);

            document.querySelector('div.guides').appendChild(pros);
        }
    });