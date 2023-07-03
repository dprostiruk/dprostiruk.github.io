

const email = 'd.prostiruk@innopolis.university';
const fetchId = (email) => {
    return fetch(`https://fwd.innopolis.app/api/hw2?email=${email}`)
        .then(response => response.text())
        .then(data => {
            return data;
        });

    console.log(data);
};

const fetchInfo = (comicId) =>  {
    return fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`)
        .then(response => response.json())
        .then(comicInfo => {
            return comicInfo;
        });
    console.log(comicInfo);
};

const handleError = (error) => {
    console.error(error);
};

const displayComic = (comicInfo) => {
    const comicImage = document.querySelector('.comic-image');
    const comicTitle = document.querySelector('.comic-title');
    const comicDate = document.querySelector('.comic-date');

    comicImage.src = comicInfo.img;
    comicImage.alt = comicInfo.alt;
    comicTitle.textContent = comicInfo.safe_title;
    comicDate.textContent = new Date(comicInfo.year, comicInfo.month - 1, comicInfo.day).toLocaleDateString();
    //moment(`${comicInfo.year}${comicInfo.month - 1}${comicInfo.day}`, "YYYYMMDD").fromNow();
}

fetchId(email)
    .then(comicId => fetchInfo(comicId))
    .then(comicInfo => displayComic(comicInfo))
    .catch(error => handleError(error));