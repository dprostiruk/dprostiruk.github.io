import type { LoadEvent } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { ComicType } from '$lib/types';

export const prerender = false;
export const ssr = true;
export const csr = true;

//
export const load = (async (loadEvent: LoadEvent) => {
    const { fetch } = loadEvent;

    const email = 'd.prostiruk@innopolis.university';

    async function getID(email: string) {
        const url = `https://fwd.innopolis.app/api/hw2?${new URLSearchParams({
            email
        })}`;

        const response = await fetch(url);

        return await response.json();
    }

    async function fetchInfo(id: string) {
        const url = `https://fwd.innopolis.university/api/comic?${new URLSearchParams(
            { id }
        )}`;

        const response = await fetch(url);
        // console.log(response);
        return await response.json();
    }

    const id = await getID(email);
    const comic = (await fetchInfo(id)) as ComicType;

    return { comic };
}) satisfies PageLoad;
