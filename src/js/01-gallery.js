// Add imports above this line
import simpleLightbox from "simplelightbox";
import throttle from "lodash.throttle";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
const markup = galleryItems.map(item =>
    `<li class="gallery_item">
    <a class="gallery_link" href="${item.original}">
        <img class="gallery_image" src="${item.preview}" alt="${item.description}" />
    </a>
    </li>`
).join("");

galleryEl.insertAdjacentHTML("beforeend", markup);

const lightbox = new simpleLightbox('.gallery a',
    { captionsData: "alt", captionDelay: 250 });