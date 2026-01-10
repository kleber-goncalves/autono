import { mediaImgs } from "../data/mediaImgs";


/**
 * Retorna um objeto com informa es de uma imagem de acordo com o id passado.
 * Se n o encontrar imagem com o id especificado, retorna null.
 * @param {string} id - O id da imagem a ser buscada.
 * @returns {object|null} - O objeto com informa es da imagem ou null se n o encontrar.
 */

export default function useMediaImage(id) {
    return mediaImgs.find((img) => img.id === id) ?? null;
}
