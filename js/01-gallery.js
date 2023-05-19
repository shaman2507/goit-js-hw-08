// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
const markup = galleryItems.map(({preview, original, description}) => {
    return `<li class="gallery_item">
        <a class="gallery_link" href= "${original}">
            <img
            class="gallery_image"
            src="${preview}"
            alt="${description}"
            />
        </a>
    </li>`
}).join("");

galleryEl.insertAdjacentHTML("beforeend", markup);

const lightbox = new SimpleLightbox('.gallery_link', { captionsData: "alt", captionDelay: 250 });