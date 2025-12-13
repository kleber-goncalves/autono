import { mediaImgs } from "../data/mediaImgs";

export default function useMediaImage(id) {
    return mediaImgs.find((img) => img.id === id) ?? null;
}
