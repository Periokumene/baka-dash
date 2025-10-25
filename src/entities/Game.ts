import type {Publisher} from "@/entities/Publisher.ts";
import type {Platform} from "@/entities/Platform.ts";
import type {Genre} from "@/entities/Genre.ts";

export interface Game{
  id: number;
  name: string,
  metacritic : number,
  background_image: string,
  images: string[],
  slug: string,
  description_raw: string,
  parent_platforms: { platform: Platform} []

  genres: Genre[];
  publishers: Publisher[];
}

