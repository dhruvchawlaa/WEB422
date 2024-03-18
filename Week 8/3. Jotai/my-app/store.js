import { atom } from 'jotai';

export const countAtom = atom(0);
export const countryAtom = atom('Japan');
export const citiesAtom = atom(['Tokyo', 'Kyoto', 'Osaka']);
export const mangaAtom = atom({ 'Dragon Ball': 1984, 'One Piece': 1997, 'Naruto': 1999 });

// Atom with Async Default Values​
export const postAtom = atom((async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await res.json();
  
    return data;
  })());