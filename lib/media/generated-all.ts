// 聚合四个频道的已解析条目，供跨源工具（TasteTwin 等）一次性导入。
import { MUSIC_ITEMS } from './generated-music';
import { GAME_ITEMS } from './generated-games';
import { FILM_ITEMS } from './generated-film';
import { TV_ITEMS } from './generated-tv';

export { MUSIC_ITEMS, GAME_ITEMS, FILM_ITEMS, TV_ITEMS };

export const ALL_ITEMS = [...MUSIC_ITEMS, ...GAME_ITEMS, ...FILM_ITEMS, ...TV_ITEMS];
