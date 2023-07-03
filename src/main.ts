import { formatDistanceToNow } from 'date-fns'

interface Comic {
    "month": number,
    "num": number,
    "link": string,
    "year": number,
    "news": string,
    "safe_title": string,
    "transcript": string,
    "alt": string,
    "img": string,
    "title": string,
    "day": number
}

const email: string = 'd.prostiruk@innopolis.university';

const fetchId = (email: string): Promise<string> => {
    return fetch(`https://fwd.innopolis.app/api/hw2?email=${email}`)
        .then((response: Response) => response.text())
        .then((data: string) => {
            return data;
        })
        .catch((error: Error) => {
            throw error;
        });
};

const fetchInfo = (comicId: string): Promise<Comic> => {
    return fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`)
        .then((response: Response) => response.json())
        .then((comicInfo: Comic) => {
            return comicInfo;
        })
        .catch((error: Error) => {
            throw error;
        });
};

const handleError = (error: Error): void => {
    console.error(error);
};

const displayComic = (comicInfo: Comic): void => {
    const comicImage: HTMLImageElement | null = document.querySelector('.comic-image');
    const comicTitle: HTMLElement | null = document.querySelector('.comic-title');
    const comicDate: HTMLElement | null = document.querySelector('.comic-date');
    const comicAgo: HTMLElement | null = document.querySelector('.comic-ago');

    if (comicImage && comicTitle && comicDate) {
        comicImage.src = comicInfo.img;
        comicImage.alt = comicInfo.alt;
        comicTitle.textContent = comicInfo.safe_title;
        comicDate.textContent = new Date(comicInfo.year, comicInfo.month - 1, comicInfo.day).toLocaleDateString();
        const date = new Date(comicInfo.year, comicInfo.month - 1, comicInfo.day);

        if (comicAgo) {
            comicAgo.textContent = formatDistanceToNow(date) + ' ago';
        }
    }
}

fetchId(email)
    .then((comicId: string) => fetchInfo(comicId))
    .then((comicInfo: Comic) => displayComic(comicInfo))
    .catch((error: Error) => handleError(error));
