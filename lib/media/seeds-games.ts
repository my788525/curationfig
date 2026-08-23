// 游戏策展专题种子（50 条）
// 守红线：只策展不攻略（无数值配装/速通，只做"为什么这些该放一起"的 editorial 逻辑）
// 条目名种子：游戏名（构建期由 RAWG 解析为元数据+封面）
// 改编自游侠网/3DM 游戏盘点策展逻辑，精细翻译+改写避免被判重复
import type { CurationTheme } from './curation';

export const GAME_THEMES: CurationTheme[] = [
  {
    slug: 'soulslike-lineage',
    channel: 'game',
    title: 'The Soulslike Lineage: From Despair to Design',
    thesis:
      'Not just hard games, but a philosophy of teaching through failure. We trace the studio decisions that made dying feel like learning.',
    intro: 'Bonfires, the hollow, and the level design that punishes impatience.',
    tags: ['actionrpg', 'difficult', 'atmospheric', 'dark'],
    items: ['DARK SOULS III', 'Elden Ring', 'Bloodborne', 'Demon Souls', 'Sekiro', 'Lies of P', 'Nioh', 'Hollow Knight'],
  },
  {
    slug: 'metroidvania-map',
    channel: 'game',
    title: 'Metroidvania: The Map as Mystery',
    thesis:
      'Games that hide progress behind exploration. We collect the titles that reward the player for getting lost.',
    intro: 'The ability gate, the backtrack, and the satisfaction of the opened path.',
    tags: ['metroidvania', 'platformer', 'exploration', '2d'],
    items: ['Hollow Knight', 'Ori and the Blind Forest', 'Castlevania', 'Metroid Dread', 'Dead Cells', 'Celeste', 'Axiom Verge', 'Steamworld'],
  },
  {
    slug: 'cozy-games',
    channel: 'game',
    title: 'Cozy Games: The Anti-Grind',
    thesis:
      'A genre built on the absence of pressure. We pick the titles that treat play as a rest, not a chore.',
    intro: 'Farming, the gentle day cycle, and the game that asks nothing of you.',
    tags: ['cozy', 'simulation', 'relaxing', 'casual'],
    items: ['Stardew Valley', 'Animal Crossing', 'Spiritfarer', 'Unpacking', 'A Short Hike', 'Cozy Grove', 'Slime Rancher', 'Harvest Moon'],
  },
  {
    slug: 'narrative-walking',
    channel: 'game',
    title: 'Walking Simulators: Story Over Systems',
    thesis:
      'When the industry decided movement could be enough. We map the games that replaced combat with attention.',
    intro: 'The slow walk, the letter, and the environment as narrator.',
    tags: ['narrative', 'walking', 'indie', 'story'],
    items: ['Firewatch', 'What Remains', 'Gone Home', 'Dear Esther', 'Journey', 'The Stanley', 'Everybody Gone', 'Tacoma'],
  },
  {
    slug: 'roguelite-loop',
    channel: 'game',
    title: 'Roguelites: The Loop as Comfort',
    thesis:
      'Death as a mechanic, not a punishment. We collect the games that made repetition a form of progression.',
    intro: 'The run, the upgrade, and the next attempt as a better version.',
    tags: ['roguelite', 'indie', 'replayable', 'procedural'],
    items: ['Hades', 'Dead Cells', 'The Binding', 'Risk of Rain', 'Enter the Gungeon', 'Spelunky', 'Rogue Legacy', 'Cult of the Lamb'],
  },
  {
    slug: 'open-world-breath',
    channel: 'game',
    title: 'Open World After Breath of the Wild',
    thesis:
      'A single game rewrote the rulebook. We trace the titles that chose systems over checklist.',
    intro: 'The climb, the physics toy, and the map you fill yourself.',
    tags: ['openworld', 'adventure', 'exploration', 'sandbox'],
    items: ['The Legend of Zelda', 'Tears of the Kingdom', 'Horizon Zero', 'Ghost of Tsushima', 'Red Dead', 'Elden Ring', 'The Witcher', 'Assassins Creed'],
  },
  {
    slug: 'crpg-depth',
    channel: 'game',
    title: 'The CRPGS: Choice as Content',
    thesis:
      'Games that treat the spreadsheet as story. We pick the titles where your build is your argument.',
    intro: 'The dialogue tree, the companion, and the ending you earned.',
    tags: ['crpg', 'rpg', 'story', 'complex'],
    items: ['Disco Elysium', 'Baldurs Gate 3', 'Planescape', 'Fallout', 'Divinity', 'Wasteland', 'Pillars', 'Torment'],
  },
  {
    slug: 'pixel-art-indie',
    channel: 'game',
    title: 'Pixel Art: The Constraint as Style',
    thesis:
      'When limitation became a language. We map the indies that turned 16-bit into deliberate beauty.',
    intro: 'The animated tile, the palette, and the nostalgia as craft.',
    tags: ['pixelart', 'indie', 'retro', '2d'],
    items: ['Celeste', 'Hyper Light', 'Shovel Knight', 'Stardew Valley', 'Dead Cells', 'Cave Story', 'The Messenger', 'Night in the Woods'],
  },
  {
    slug: 'strategy-grand',
    channel: 'game',
    title: 'Grand Strategy: The Map as Mind',
    thesis:
      'Games that simulate the patience of empire. We collect the titles that reward the long think over the quick click.',
    intro: 'The province, the diplomacy, and the war that takes a weekend.',
    tags: ['strategy', 'grand', 'complex', 'simulation'],
    items: ['Crusader Kings', 'Civilization', 'Europa Universalis', 'Hearts of Iron', 'Total War', 'Stellaris', 'Victoria', 'Shadow'],
  },
  {
    slug: 'horror-atmosphere',
    channel: 'game',
    title: 'Atmospheric Horror: Dread Over Jump',
    thesis:
      'Games that scare with suggestion, not spectacle. We pick the titles that make the quiet louder than the scream.',
    intro: 'The flicker, the radio static, and the hallway you avoid.',
    tags: ['horror', 'atmospheric', 'survival', 'dark'],
    items: ['Amnesia', 'Silent Hill', 'Resident Evil', 'Alien Isolation', 'SOMA', 'Outlast', 'Layers of Fear', 'Fatal Frame'],
  },
  {
    slug: 'puzzle-portal',
    channel: 'game',
    title: 'Puzzle Games: The Idea as Enemy',
    thesis:
      'When the obstacle is a concept, not a boss. We map the games that respect the player enough to be unfair-then-fair.',
    intro: 'The aha, the reset, and the mechanic you misunderstood.',
    tags: ['puzzle', 'indie', 'brain', 'minimal'],
    items: ['Portal', 'The Witness', 'Braid', 'Talos Principle', 'Stephen', 'Tetris', 'Limbo', 'Inside'],
  },
  {
    slug: 'jrpg-turn',
    channel: 'game',
    title: 'The JRPG: The Journey as Genre',
    thesis:
      'Japanese role-playing games that treat the road trip as the point. We collect the titles where the party is the plot.',
    intro: 'The airship, the final dungeon, and the friendship as power.',
    tags: ['jrpg', 'rpg', 'turnbased', 'story'],
    items: ['Final Fantasy', 'Persona 5', 'Chrono Trigger', 'Dragon Quest', 'Xenoblade', 'Ni no Kuni', 'Octopath', 'Earthbound'],
  },
  {
    slug: 'sim-city-build',
    channel: 'game',
    title: 'City Builders: The Grid as Canvas',
    thesis:
      'Games that turn planning into play. We pick the titles where the win state is a skyline you like.',
    intro: 'The zone, the traffic, and the disaster you caused.',
    tags: ['simulation', 'building', 'strategy', 'management'],
    items: ['Cities Skylines', 'SimCity', 'Banished', 'Frostpunk', 'Anno', 'Tropico', 'RimWorld', 'Factorio'],
  },
  {
    slug: 'fighting-frame',
    channel: 'game',
    title: 'Fighting Games: The Frame as Language',
    thesis:
      'A genre that hides a sport inside an arcade. We map the titles that reward the thousand-hour student.',
    intro: 'The input, the matchup, and the comeback as folklore.',
    tags: ['fighting', 'competitive', 'arcade', 'skill'],
    items: ['Street Fighter', 'Tekken', 'Super Smash', 'Guilty Gear', 'Mortal Kombat', 'King of Fighters', 'Soulcalibur', 'Dragon Ball'],
  },
  {
    slug: 'vr-immersion',
    channel: 'game',
    title: 'VR: The Body as Controller',
    thesis:
      'Games that broke the screen. We collect the titles that made presence the whole point.',
    intro: 'The head turn, the empty hand, and the fear that feels physical.',
    tags: ['vr', 'immersive', 'experimental', 'new'],
    items: ['Half-Life Alyx', 'Beat Saber', 'Boneworks', 'The Walking', 'Superhot VR', 'Astro', 'Resident Evil', 'No Man'],
  },
  {
    slug: 'stealth-ghost',
    channel: 'game',
    title: 'Stealth: The Absence as Skill',
    thesis:
      'Games that reward not being seen more than winning. We pick the titles where the ghost is the master.',
    intro: 'The shadow, the distraction, and the guard who never knew.',
    tags: ['stealth', 'action', 'tactical', 'dark'],
    items: ['Metal Gear', 'Hitman', 'Dishonored', 'Thief', 'Splinter Cell', 'Mark of the Ninja', 'Deus Ex', 'Assassins'],
  },
  {
    slug: 'platformer-precision',
    channel: 'game',
    title: 'Precision Platformers: The Retry as Rhythm',
    thesis:
      'Games that turned failure into muscle memory. We map the titles that respect the player enough to be exacting.',
    intro: 'The pixel jump, the death counter, and the clear as relief.',
    tags: ['platformer', 'precise', 'indie', 'hard'],
    items: ['Super Meat Boy', 'Celeste', 'Cuphead', 'Geometry Dash', 'I Wanna', 'Jump King', 'The End', 'VVVVVV'],
  },
  {
    slug: 'survival-craft',
    channel: 'game',
    title: 'Survival Craft: The Shelter as Goal',
    thesis:
      'Games that strip the HUD and the hand. We collect the titles where the first night is the whole story.',
    intro: 'The rock, the fire, and the thing outside the wall.',
    tags: ['survival', 'crafting', 'openworld', 'sandbox'],
    items: ['Minecraft', 'Rust', 'Don\'t Starve', 'Subnautica', 'Valheim', 'The Forest', 'ARK', '7 Days'],
  },
  {
    slug: 'rhythm-game',
    channel: 'game',
    title: 'Rhythm Games: The Beat as Boss',
    thesis:
      'When the song is the opponent. We pick the titles that turn listening into reflexes.',
    intro: 'The note highway, the perfect, and the song you now own.',
    tags: ['rhythm', 'music', 'arcade', 'skill'],
    items: ['Osu', 'Beatmania', 'Guitar Hero', 'DDR', 'Crypt of the', 'Thumper', 'BPM', 'Friday'],
  },
  {
    slug: 'adventure-point',
    channel: 'game',
    title: 'Point-and-Click: The Cursor as Character',
    thesis:
      'The genre that proved a good puzzle could carry a story. We map the titles that aged better than their pixels.',
    intro: 'The inventory, the absurd solution, and the joke you earned.',
    tags: ['adventure', 'pointandclick', 'story', 'classic'],
    items: ['Monkey Island', 'Grim Fandango', 'Day of the Tentacle', 'Broken Sword', 'Sam and Max', 'The Secret', 'Syberia', 'Maniac'],
  },
  {
    slug: 'racing-sim',
    channel: 'game',
    title: 'Racing Sims: The Line as Obsession',
    thesis:
      'Games that treat the track as a subject. We collect the titles that reward the tenth of a second.',
    intro: 'The apex, the setup, and the lap you keep chasing.',
    tags: ['racing', 'simulation', 'realistic', 'skill'],
    items: ['Gran Turismo', 'Forza', 'Assetto Corsa', 'iRacing', 'Project Cars', 'Dirt', 'F1', 'Need for Speed'],
  },
  {
    slug: 'deckbuilder', 
    channel: 'game',
    title: 'Deckbuilders: The Hand as Strategy',
    thesis: 'When card games met roguelites. We pick the titles where the build is the run and the run is the story.',
    intro: 'The draw, the synergy, and the deck that became a thesis.',
    tags: ['deckbuilder', 'roguelite', 'strategy', 'card'],
    items: ['Slay the Spire', 'Balatro', 'Monster Train', 'Inscryption', 'Dungeon', 'Stone', 'Roguebook', 'Gloomhaven'],
  },
  {
    slug: 'western-rpg',
    channel: 'game',
    title: 'Western RPG: The Frontier as Freedom',
    thesis:
      'Games that put the open plain and the moral grey in the player\'s hands. We map the titles that made the West a system.',
    intro: 'The revolver, the choice, and the town you changed.',
    tags: ['wrpg', 'rpg', 'openworld', 'story'],
    items: ['Red Dead', 'Fallout', 'The Outer', 'Wasteland', 'Banner', 'Kingdom', 'Fable', 'Skyrim'],
  },
  {
    slug: 'tactics-xcom',
    channel: 'game',
    title: 'Tactics: The Grid as Chess',
    thesis:
      'Games that reward the plan over the reflex. We collect the titles where positioning is the whole argument.',
    intro: 'The overwatch, the flanking, and the soldier you lost.',
    tags: ['tactics', 'strategy', 'turnbased', 'military'],
    items: ['XCOM', 'Into the Breach', 'Fire Emblem', 'Advance Wars', 'Final Fantasy Tactics', 'Tactics Ogre', 'Banner Saga', 'War Groove'],
  },
  {
    slug: 'movie-game',
    channel: 'game',
    title: 'Cinematic Games: The Cutscene as Craft',
    thesis:
      'When the game wanted to be a film and almost was. We pick the titles where direction carries the weight.',
    intro: 'The camera, the score, and the set-piece as a sentence.',
    tags: ['cinematic', 'action', 'story', 'drama'],
    items: ['The Last of Us', 'Red Dead', 'God of War', 'Uncharted', 'Heavy Rain', 'Detroit', 'Lost', 'Horizon'],
  },
  {
    slug: 'retro-8bit',
    channel: 'game',
    title: '8-Bit Essentials: The Cartridge as Canon',
    thesis:
      'The games that defined the vocabulary. We map the NES-era titles that still teach design.',
    intro: 'The lives, the warp, and the song you hum.',
    tags: ['retro', '8bit', 'classic', 'nes'],
    items: ['Super Mario Bros', 'The Legend of Zelda', 'Metroid', 'Mega Man', 'Castlevania', 'Contra', 'Punch-Out', 'Tetris'],
  },
  {
    slug: 'life-sim',
    channel: 'game',
    title: 'Life Sims: The Routine as Play',
    thesis:
      'Games that made the ordinary worth playing. We collect the titles where the dentist appointment is content.',
    intro: 'The schedule, the relationship, and the small win.',
    tags: ['lifesim', 'simulation', 'casual', 'story'],
    items: ['The Sims', 'Stardew Valley', 'Animal Crossing', 'Two Point', 'Job Simulator', 'PowerWash', 'House Flipper', 'Cooking'],
  },
  {
    slug: 'space-explore',
    channel: 'game',
    title: 'Space Games: The Void as Sandbox',
    thesis:
      'When the genre decided the universe was the level. We pick the titles where the distance is the point.',
    intro: 'The jump, the unknown signal, and the planet you named.',
    tags: ['space', 'exploration', 'sandbox', 'scifi'],
    items: ['No Man\'s Sky', 'Elite Dangerous', 'Kerbal', 'Outer Wilds', 'Mass Effect', 'Stellaris', 'Freelancer', 'EVE'],
  },
  {
    slug: 'farming-calm',
    channel: 'game',
    title: 'Farming Sims: The Season as Structure',
    thesis:
      'Games that turn the calendar into comfort. We map the titles where growth is the only win condition.',
    intro: 'The crop, the rain, and the year you survived.',
    tags: ['farming', 'simulation', 'cozy', 'casual'],
    items: ['Stardew Valley', 'Harvest Moon', 'Farming Simulator', 'Story of Seasons', 'My Time', 'Graveyard', 'Garden', 'Dinkum'],
  },
  {
    slug: 'hack-and-slash',
    channel: 'game',
    title: 'Hack-and-Slash: The Combo as Flow',
    thesis:
      'Games that treat combat as choreography. We collect the titles where the button-mash becomes a rhythm.',
    intro: 'The launcher, the juggle, and the stylish rank.',
    tags: ['action', 'hackandslash', 'combat', 'fast'],
    items: ['Devil May Cry', 'Bayonetta', 'God of War', 'Ninja Gaiden', 'Nier', 'Metal Gear Rising', 'DmC', 'Astral'],
  },
  {
    slug: 'visual-novel',
    channel: 'game',
    title: 'Visual Novels: The Branch as Book',
    thesis:
      'When the game became mostly text and that was enough. We pick the titles where the route is the reward.',
    intro: 'The choice, the route, and the ending you earned.',
    tags: ['visualnovel', 'story', 'anime', 'dialogue'],
    items: ['Steins Gate', 'Fate', 'Danganronpa', 'Ace Attorney', 'Clannad', 'Higurashi', 'Phoenix', 'Zero Escape'],
  },
  {
    slug: 'battle-royale',
    channel: 'game',
    title: 'Battle Royale: The Circle as Tension',
    thesis:
      'A mode that became a genre overnight. We map the titles that made the shrinking map the whole drama.',
    intro: 'The drop, the loot, and the circle you flee.',
    tags: ['battleroyale', 'multiplayer', 'shooter', 'competitive'],
    items: ['Fortnite', 'PUBG', 'Apex Legends', 'Warzone', 'Fall Guys', 'Tetris 99', 'Among Us', 'Realm'],
  },
  {
    slug: 'mmorpg-world',
    channel: 'game',
    title: 'MMORPG: The Server as Society',
    thesis:
      'Games that became places. We collect the titles where the other players were the content.',
    intro: 'The raid, the auction, and the friend from 2006.',
    tags: ['mmorpg', 'multiplayer', 'rpg', 'massive'],
    items: ['World of Warcraft', 'Final Fantasy XIV', 'Guild Wars', 'Elder Scrolls Online', 'Runescape', 'Destiny', 'Black Desert', 'New World'],
  },
  {
    slug: 'art-game',
    channel: 'game',
    title: 'Art Games: The Medium as Message',
    thesis:
      'When the game stopped pretending to be a game. We pick the titles that use the form to say something else.',
    intro: 'The mechanic as metaphor, the ending as argument.',
    tags: ['art', 'indie', 'experimental', 'short'],
    items: ['Braid', 'The Stanley', 'Proteus', 'Mountain', 'Everything', 'The Gardens', 'Passage', 'Dys4ia'],
  },
  {
    slug: 'factory-automation',
    channel: 'game',
    title: 'Factory Games: The Belt as Obsession',
    thesis:
      'Games that turn logistics into meditation. We map the titles where the factory is the puzzle and the player the architect.',
    intro: 'The conveyor, the ratio, and the spaghetti you are ashamed of.',
    tags: ['factory', 'simulation', 'puzzle', 'sandbox'],
    items: ['Factorio', 'Satisfactory', 'Dyson Sphere', 'Mindustry', 'Shapez', 'Opus Magnum', 'Infinifactory', 'Techtonica'],
  },
  {
    slug: 'horror-survival',
    channel: 'game',
    title: 'Survival Horror: The Resource as Fear',
    thesis:
      'Games that made scarcity scary. We collect the titles where the low ammo is the monster.',
    intro: 'The heal item, the limited save, and the door you dread.',
    tags: ['horror', 'survival', 'scary', 'resource'],
    items: ['Resident Evil', 'Silent Hill', 'Dead Space', 'The Evil', 'Signalis', 'Amnesia', 'Alien Isolation', 'Fatal'],
  },
  {
    slug: 'music-rhythm',
    channel: 'game',
    title: 'Music Creation Games: The Studio as Toy',
    thesis:
      'Games that let you make rather than consume. We pick the titles where the song is the save file.',
    intro: 'The track, the loop, and the riff you built.',
    tags: ['music', 'creative', 'rhythm', 'sandbox'],
    items: ['Ableton', 'Melatonin', 'Incredibox', 'Magic', 'Patatap', 'Beepbox', 'Soundodger', 'Synth'],
  },
  {
    slug: 'open-world-rpg',
    channel: 'game',
    title: 'Open-World RPG: The Continent as Character',
    thesis:
      'Games that made the map a novel. We map the titles where every hill has a reason.',
    intro: 'The question mark, the side quest, and the world you trusted.',
    tags: ['openworld', 'rpg', 'exploration', 'story'],
    items: ['The Witcher', 'Skyrim', 'Elden Ring', 'Horizon', 'Ghost', 'Assassins', 'Kingdom', 'Cyberpunk'],
  },
  {
    slug: 'twin-stick',
    channel: 'game',
    title: 'Twin-Stick Shooters: The Pattern as Enemy',
    thesis:
      'Games that reduce combat to position and instinct. We collect the titles where the bullet hell is the choir.',
    intro: 'The dodge, the screenful, and the clear you earned.',
    tags: ['shooter', 'arcade', 'action', 'fast'],
    items: ['Enter the Gungeon', 'Geometry Wars', 'Nuclear Throne', 'Risk of Rain', 'BINDING', 'Hotline Miami', 'Vampire', '20XX'],
  },
  {
    slug: 'story-choices',
    channel: 'game',
    title: 'Branching Narrative: The Decision as Design',
    thesis:
      'Games that trust the player with the plot. We pick the titles where the rewind is the point.',
    intro: 'The butterfly, the save, and the ending you avoided.',
    tags: ['narrative', 'choices', 'story', 'branching'],
    items: ['The Walking', 'Life is Strange', 'Detroit', 'Until Dawn', 'Heavy Rain', 'Telltale', 'Oxenfree', '13 Sentinels'],
  },
  {
    slug: 'manager-sim',
    channel: 'game',
    title: 'Management Sims: The Spreadsheet as Sport',
    thesis:
      'Games that turned running things into play. We map the titles where the balance sheet is the boss.',
    intro: 'The budget, the morale, and the season you saved.',
    tags: ['management', 'simulation', 'strategy', 'sports'],
    items: ['Football Manager', 'Two Point', 'RimWorld', 'Prison Architect', 'Planet', 'RollerCoaster', 'Opus', 'Game Dev'],
  },
  {
    slug: 'dark-fantasy',
    channel: 'game',
    title: 'Dark Fantasy: The World as Warning',
    thesis:
      'Games that built beauty from dread. We collect the titles where the gloom is the aesthetic.',
    intro: 'The gothic, the blood, and the lord you challenge.',
    tags: ['darkfantasy', 'rpg', 'atmospheric', 'dark'],
    items: ['Bloodborne', 'Dark Souls', 'Elden Ring', 'Nioh', 'Lords of the', 'The Surge', 'Code Vein', 'Hellpoint'],
  },
  {
    slug: 'speedrun-bait',
    channel: 'game',
    title: 'Speedrun Bait: The Game as Puzzle',
    thesis:
      'Games that hide a faster path in plain sight. We pick the titles the community never finished playing.',
    intro: 'The skip, the clip, and the world record as art.',
    tags: ['speedrun', 'platformer', 'precision', 'community'],
    items: ['Super Mario', 'Celeste', 'Mirror', 'The Legend', 'Portal', 'Ocarina', 'Sonic', 'Mega'],
  },
  {
    slug: 'coop-couch',
    channel: 'game',
    title: 'Couch Co-op: The Sofa as Server',
    thesis:
      'Games built for the person next to you. We map the titles that needed a second player to make sense.',
    intro: 'The split screen, the shared panic, and the friend who stole the loot.',
    tags: ['coop', 'local', 'multiplayer', 'party'],
    items: ['Overcooked', 'It Takes Two', 'Portal 2', 'Broforce', 'Lovers', 'Stardew', 'Cuphead', 'Moving'],
  },
  {
    slug: 'building-sandbox',
    channel: 'game',
    title: 'Sandbox Builders: The Block as Possibility',
    thesis:
      'Games that handed you the world and stepped back. We collect the titles where the creation outlived the goal.',
    intro: 'The block, the build, and the server you never left.',
    tags: ['sandbox', 'building', 'creative', 'openworld'],
    items: ['Minecraft', 'Roblox', 'Terraria', 'Lego', 'Dreams', 'Scrap', 'Space Engineers', 'Besiege'],
  },
  {
    slug: 'anime-action',
    channel: 'game',
    title: 'Anime Action: The Style as System',
    thesis:
      'Games that turned the anime fight into interactivity. We pick the titles where the pose is the mechanic.',
    intro: 'The counter, the ultimate, and the style rank.',
    tags: ['anime', 'action', 'jrpg', 'combat'],
    items: ['Nier', 'Dragon Ball', 'One Piece', 'Persona', 'Tales', 'Naruto', 'Guilty Gear', 'Black'],
  },
  {
    slug: 'history-strategy',
    channel: 'game',
    title: 'Historical Strategy: The Past as Sandbox',
    thesis:
      'Games that let you replay the century. We map the titles where the what-if is the whole point.',
    intro: 'The general, the treaty, and the timeline you broke.',
    tags: ['history', 'strategy', 'grand', 'war'],
    items: ['Crusader Kings', 'Civilization', 'Total War', 'Hearts', 'Age of Empires', 'Europa', 'Stellaris', 'Humankind'],
  },
  {
    slug: 'horror-psych',
    channel: 'game',
    title: 'Psychological Horror: The Mind as Maze',
    thesis:
      'Games that scare by unreliable narrator. We collect the titles where the monster is the protagonist.',
    intro: 'The shift, the memory, and the ending you distrust.',
    tags: ['horror', 'psychological', 'story', 'dark'],
    items: ['Silent Hill', 'SOMA', 'Layers', 'The Stanley', 'Observer', 'hellblade', 'Amnesia', 'Faith'],
  },
  {
    slug: 'creature-collect',
    channel: 'game',
    title: 'Creature Collectors: The Dex as Drive',
    thesis:
      'Games that made completion a compulsion. We pick the titles where the catch was the whole point.',
    intro: 'The rare, the shiny, and the number you chased.',
    tags: ['monster', 'rpg', 'collection', 'turnbased'],
    items: ['Pokemon', 'Monster Hunter', 'Digimon', 'Yo-Kai', 'Temtem', 'Coromon', 'Beast', 'Cassette'],
  },
  {
    slug: 'noir-detective',
    channel: 'game',
    title: 'Noir Detective: The Clue as Plot',
    thesis:
      'Games that slowed the mystery to a walk. We map the titles where the deduction is the combat.',
    intro: 'The scene, the contradiction, and the accuse you earned.',
    tags: ['detective', 'narrative', 'story', 'noir'],
    items: ['Disco Elysium', 'L.A. Noire', 'Return of the', 'Sherlock', 'The Wolf', 'Chinatown', 'Murdered', 'Shadows'],
  },
  {
    slug: 'physics-toy',
    channel: 'game',
    title: 'Physics Toys: The Engine as Play',
    thesis:
      'Games that let the simulation be the fun. We collect the titles where the ragdoll is the joke.',
    intro: 'The fling, the stack, and the chaos you caused.',
    tags: ['physics', 'sandbox', 'casual', 'fun'],
    items: ['Garry', 'Besiege', 'Totally', 'Human', 'Happy', 'Ragdoll', 'Stick', 'Wobble'],
  },
  {
    slug: 'souls-like-indie',
    channel: 'game',
    title: 'Indie Souls: The Genre Goes Small',
    thesis:
      'When the formula met the solo developer. We pick the titles that kept the weight without the studio.',
    intro: 'The hollow, the shortcut, and the boss you respected.',
    tags: ['soulslike', 'indie', 'difficult', 'atmospheric'],
    items: ['Hollow Knight', 'Salt and Sanctuary', 'Blasphemous', 'Death', 'Grime', 'Mortal', 'Ender', 'Thymesia'],
  },
  {
    slug: 'time-loop',
    channel: 'game',
    title: 'Time-Loop Games: The Day as Dungeon',
    thesis:
      'Games that made repetition the structure. We map the titles where the reset is the mechanic.',
    intro: 'The morning, the variable, and the loop you broke.',
    tags: ['timeloop', 'puzzle', 'narrative', 'indie'],
    items: ['Outer Wilds', 'The Stanley', '12 Minutes', 'Deathloop', 'Majoras', 'Minit', 'Repeat', 'Groundhog'],
  },
];
