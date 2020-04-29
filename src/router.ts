import OmoBooksTable from './quanta/2-molecules/OmoBooksTable.svelte';
import OmoAuthorsTable from './quanta/2-molecules/OmoAuthorsTable.svelte';
import OmoLibrariesTable from './quanta/2-molecules/OmoLibrariesTable.svelte';
import {
    writable
} from 'svelte/store';

const router = [
    { route: '/', quant: OmoBooksTable, name: null },
    { route: '/books', quant: OmoBooksTable, name: "books", icon: "fa-book" },
    { route: '/authors', quant: OmoAuthorsTable, name: "authors", icon: "fa-user-graduate" },
    { route: '/libraries', quant: OmoLibrariesTable, name: "libraries", icon: "fa-book-reader" },
]

export default router;
export const curRoute = writable('/books');
export const curId = writable(0);