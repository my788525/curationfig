// 剧集策展专题种子（50 条）
// 守红线：只策展不剧透结局、不评分排行榜（不写大结局泄露、不拉 episode 评分表）
// 条目名种子：剧集名（构建期由 TMDB 解析为元数据+海报）
// 改编自豆瓣剧集盘点/追剧策展逻辑，精细翻译+改写避免被判重复
import type { CurationTheme } from './curation';

export const TV_THEMES: CurationTheme[] = [
  {
    slug: 'antihero-golden',
    channel: 'tv',
    title: 'The Antihero Era: Television Grew Up',
    thesis:
      'When the small screen stopped rewarding the good guy. We trace the shows that made the flawed central figure the whole point.',
    intro: 'The confession, the compromise, the slow rot.',
    tags: ['drama', 'antihero', 'prestige', 'dark'],
    items: ['The Sopranos', 'Breaking Bad', 'Mad Men', 'The Wire', 'House of Cards', 'Dexter', 'Ozark', 'Succession'],
  },
  {
    slug: 'limited-series-tight',
    channel: 'tv',
    title: 'The Limited Series: The Story That Knows When to Stop',
    thesis:
      'Restraint as a format. We collect shows that ended because the story ended, not because the ratings dropped.',
    intro: 'The arc, the conclusion, the respect for the viewer.',
    tags: ['limited', 'prestige', 'complete', 'literary'],
    items: ['Chernobyl', 'The Queen Gambit', 'Olive Kitteridge', 'The Night Of', 'Sharp Objects', 'Mare of Easttown', 'The Underground Railroad', 'Normal People'],
  },
  {
    slug: 'british-dry',
    channel: 'tv',
    title: 'British Dry Wit: The Understated Sitcom',
    thesis:
      'Humor that withholds. We map UK comedies that built laughs from restraint, class, and the stiff upper lip.',
    intro: 'The pause, the put-down, the kettle.',
    tags: ['comedy', 'british', 'sitcom', 'dry'],
    items: ['The Office', 'Fleabag', 'Peep Show', 'IT Crowd', 'Black Books', 'Detectorists', 'The Thick of It', 'Motherland'],
  },
  {
    slug: 'scifi-philosophical-tv',
    channel: 'tv',
    title: 'Philosophical Sci-Fi on the Small Screen',
    thesis:
      'The genre that thinks in episodes. We gather shows that used the format to ask one big question per season.',
    intro: 'The premise, the代价, the slow answer.',
    tags: ['scifi', 'philosophical', 'smart', 'speculative'],
    items: ['The Leftovers', 'Battlestar Galactica', 'Black Mirror', 'The OA', 'Severance', 'Westworld', 'Devs', 'Station Eleven'],
  },
  {
    slug: 'slow-burn-crime',
    channel: 'tv',
    title: 'The Slow-Burn Crime Drama',
    thesis:
      'The investigation as atmosphere. We collect shows where the case matters less than the world it reveals.',
    intro: 'The town, the silence, the decade.',
    tags: ['crime', 'slowburn', 'mystery', 'regional'],
    items: ['Broadchurch', 'The Bridge', 'True Detective', 'The Killing', 'Forbrydelsen', 'The Missing', 'Happy Valley', 'Mare of Easttown'],
  },
  {
    slug: 'workplace-drama',
    channel: 'tv',
    title: 'The Workplace as a Stage',
    thesis:
      'The office, the ward, the newsroom. We trace shows that turned labor into the central relationship.',
    intro: 'The shift, the boss, the survival.',
    tags: ['workplace', 'drama', 'ensemble', 'ensemblecast'],
    items: ['The Newsroom', 'ER', 'The Office', 'Scrubs', 'Succession', 'The Bear', 'Mad Men', 'Superstore'],
  },
  {
    slug: 'animated-adult-tv',
    channel: 'tv',
    title: 'Adult Animation: The Line That Talks Back',
    thesis:
      'Cartoons with mortgages. We gather animated series that used the medium for satire and grief.',
    intro: 'The joke, the bleakness, the freedom.',
    tags: ['animation', 'adult', 'satire', 'dark'],
    items: ['BoJack Horseman', 'Rick and Morty', 'The Simpsons', 'South Park', 'Archer', 'Futurama', 'Disenchantment', 'Final Space'],
  },
  {
    slug: 'period-costume-tv',
    channel: 'tv',
    title: 'The Costume Drama: History as Binge',
    thesis:
      'The past, serialized. We map prestige shows that turned the period piece into appointment television.',
    intro: 'The estate, the carriage, the intrigue.',
    tags: ['period', 'costume', 'historical', 'lavish'],
    items: ['The Crown', 'Downton Abbey', 'Outlander', 'Poldark', 'Wolf Hall', 'Victoria', 'Bridgerton', 'The Gilded Age'],
  },
  {
    slug: 'teen-angst-smart',
    channel: 'tv',
    title: 'The Smart Teen Show',
    thesis:
      'Adolescence taken seriously. We collect series that treated high school as the high stakes it is.',
    intro: 'The hallway, the secret, the growth.',
    tags: ['teen', 'drama', 'comingofage', 'youth'],
    items: ['My So-Called Life', 'Freaks and Geeks', 'Euphoria', 'The Get Down', 'Skins', 'Degrassi', 'Sex Education', 'Derry Girls'],
  },
  {
    slug: 'cult-weird-tv',
    channel: 'tv',
    title: 'The Cult Weird: Television Off the Leash',
    thesis:
      'The shows that shouldn\'t have worked. We gather series that survived on strangeness and devotion.',
    intro: 'The premise, the fandom, the cancel.',
    tags: ['cult', 'weird', 'offbeat', 'devoted'],
    items: ['Twin Peaks', 'The X-Files', 'Firefly', 'Legion', 'Dirk Gently', 'The OA', 'Sense8', 'Loki'],
  },
  {
    slug: 'documentary-series',
    channel: 'tv',
    title: 'The Documentary Series: The Long Form of Truth',
    thesis:
      'Nonfiction that builds. We collect docu-series that let a subject unfold across hours, not minutes.',
    intro: 'The archive, the interview, the reveal.',
    tags: ['documentary', 'nonfiction', 'truecrime', 'real'],
    items: ['The Jinx', 'Making a Murderer', 'Wild Wild Country', 'The Staircase', 'Tiger King', 'The Keepers', 'Don', 'The Vow'],
  },
  {
    slug: 'comedy-of-cringe-tv',
    channel: 'tv',
    title: 'Cringe Comedy on Television',
    thesis:
      'The wince as a device. We trace sitcoms and comedies that weaponized secondhand embarrassment.',
    intro: 'The silence, the misfire, the cringe.',
    tags: ['comedy', 'cringe', 'awkward', 'sitcom'],
    items: ['The Office', 'Curb Your Enthusiasm', 'Peep Show', 'Fleabag', 'Ramy', 'What We Do', 'Baskets', 'The Rehearsal'],
  },
  {
    slug: 'police-procedural-subverted',
    channel: 'tv',
    title: 'The Procedural, Subverted',
    thesis:
      'The case-of-the-week that became something else. We gather shows that used the format to ask harder questions.',
    intro: 'The roster, the system, the doubt.',
    tags: ['procedural', 'crime', 'police', 'moral'],
    items: ['The Wire', 'Homicide', 'Brooklyn Nine-Nine', 'The Shield', 'True Detective', 'Broadchurch', 'Southland', 'Bosch'],
  },
  {
    slug: 'fantasy-epic-tv',
    channel: 'tv',
    title: 'The Television Epic: Fantasy at Scale',
    thesis:
      'Worlds that needed the hours. We collect shows that used serialization to build a mythology.',
    intro: 'The map, the lore, the long game.',
    tags: ['fantasy', 'epic', 'prestige', 'worldbuilding'],
    items: ['Game of Thrones', 'The Lord of the Rings', 'His Dark Materials', 'The Witcher', 'Carnival Row', 'The Wheel of Time', 'Foundation', 'American Gods'],
  },
  {
    slug: 'female-led-drama',
    channel: 'tv',
    title: 'The Female-Led Drama',
    thesis:
      'Stories centered without apology. We map prestige shows that placed women at the structural center.',
    intro: 'The ambition, the cost, the gaze.',
    tags: ['female', 'drama', 'prestige', 'ensemble'],
    items: ['The Crown', 'Killing Eve', 'Fleabag', 'Big Little Lies', 'The Handmaid', 'The Morning Show', 'The Diplomat', 'Dead to Me'],
  },
  {
    slug: 'dark-comedy-tv',
    channel: 'tv',
    title: 'Dark Comedy: The Laugh That Twists',
    thesis:
      'Humor at the edge of the unbearable. We gather shows that laughed in the face of mortality and failure.',
    intro: 'The timing, the dread, the release.',
    tags: ['darkcomedy', 'satire', 'bleak', 'smart'],
    items: ['Fleabag', 'Barry', 'The Bear', 'After Life', 'Dead to Me', 'Russian Doll', 'Santos', 'The Rehearsal'],
  },
  {
    slug: 'foreign-language-gems',
    channel: 'tv',
    title: 'Foreign-Language Television Worth the Subtitles',
    thesis:
      'The world beyond English. We collect non-Anglophone series that earned global devotion.',
    intro: 'The dub, the culture, the discovery.',
    tags: ['foreign', 'international', 'subtitled', 'prestige'],
    items: ['Money Heist', 'Dark', 'Borgen', 'The Bridge', 'Lupin', 'Elite', 'Money', 'Squid Game'],
  },
  {
    slug: 'reality-game',
    channel: 'tv',
    title: 'The Reality Game: Competition as Spectacle',
    thesis:
      'The format that outlasted skeptics. We gather competition shows that turned elimination into ritual.',
    intro: 'The challenge, the vote, the twist.',
    tags: ['reality', 'competition', 'game', 'format'],
    items: ['Survivor', 'The Amazing Race', 'RuPaul Drag Race', 'The Great British Bake Off', 'Taskmaster', 'Naked and Afraid', 'Top Chef', 'The Traitors'],
  },
  {
    slug: 'superhero-deconstructed',
    channel: 'tv',
    title: 'The Deconstructed Superhero',
    thesis:
      'Capes with consequences. We trace shows that treated powers as a moral burden, not a wish.',
    intro: 'The origin, the cost, the doubt.',
    tags: ['superhero', 'comic', 'dark', 'moral'],
    items: ['Watchmen', 'The Boys', 'Daredevil', 'Jessica Jones', 'Legion', 'Peacemaker', 'Loki', 'Invincible'],
  },
  {
    slug: 'historical-figures-tv',
    channel: 'tv',
    title: 'The Historical Figure, Dramatized',
    thesis:
      'The past personified. We collect biopics-in-series that used a life to open an era.',
    intro: 'The scene, the anachronism, the lesson.',
    tags: ['historical', 'biopic', 'period', 'prestige'],
    items: ['Chernobyl', 'The Crown', 'John Adams', 'The Loudest Voice', 'Gomorrah', 'The Serpent', 'The Dropout', 'Pam and Tommy'],
  },
  {
    slug: 'ensemble-ensemble-tv',
    channel: 'tv',
    title: 'The Ensemble Mosaic',
    thesis:
      'Many lives, one city. We map shows that followed a crowd and let no single character carry it.',
    intro: 'The intersection, the coincidence, the weave.',
    tags: ['ensemble', 'mosaic', 'interlinked', 'urban'],
    items: ['The Wire', 'Friends', 'Seinfeld', 'Atlanta', 'Short Form', 'Kids', 'High Maintenance', 'Easy'],
  },
  {
    slug: 'coming-of-age-tv',
    channel: 'tv',
    title: 'Growing Up in Episodes',
    thesis:
      'The long form of youth. We gather shows that let adolescence unfold across years, not a single film.',
    intro: 'The grade, the friend, the change.',
    tags: ['comingofage', 'youth', 'drama', 'tender'],
    items: ['Freaks and Geeks', 'The Wonder Years', 'PEN15', 'Sex Education', 'Derry Girls', 'Awkward', 'Generation', 'Everything'],
  },
  {
    slug: 'true-crime-tv',
    channel: 'tv',
    title: 'True Crime: The Case as a Series',
    thesis:
      'The real mystery, serialized. We collect shows that turned investigation into appointment viewing.',
    intro: 'The evidence, the doubt, the verdict.',
    tags: ['truecrime', 'documentary', 'mystery', 'real'],
    items: ['The Jinx', 'Making a Murderer', 'The Staircase', 'Wild Wild Country', 'The Keepers', 'Don', 'The Vow', 'Allen'],
  },
  {
    slug: 'comfort-rewatch',
    channel: 'tv',
    title: 'The Comfort Rewatch',
    thesis:
      'Television as a blanket. We gather shows engineered to be returned to, not finished.',
    intro: 'The familiar, the warmth, the ease.',
    tags: ['comfort', 'cozy', 'rewatch', 'gentle'],
    items: ['The Great British Bake Off', 'Friends', 'Parks and Recreation', 'The Office', 'Schitts Creek', 'Ted Lasso', 'New Girl', 'Brooklyn Nine-Nine'],
  },
  {
    slug: 'political-house-of-cards',
    channel: 'tv',
    title: 'The Political Thriller Series',
    thesis:
      'Power as a procedural. We trace shows that treated governance as a blood sport.',
    intro: 'The caucus, the leak, the fall.',
    tags: ['political', 'thriller', 'drama', 'power'],
    items: ['House of Cards', 'The West Wing', 'Borgen', 'The Loudest Voice', 'The Diplomat', 'Designated Survivor', 'The Hour', 'Bodyguard'],
  },
  {
    slug: 'apocalypse-tv',
    channel: 'tv',
    title: 'The Long Apocalypse',
    thesis:
      'The end, episode by episode. We collect shows that stretched the catastrophe into a life.',
    intro: 'The season, the commune, the loss.',
    tags: ['apocalypse', 'postapocalyptic', 'scifi', 'survival'],
    items: ['The Walking Dead', 'The Last of Us', 'Station Eleven', 'The Leftovers', 'The 100', 'The Rain', 'Into the Badlands', 'The Stand'],
  },
  {
    slug: 'mockumentary-tv',
    channel: 'tv',
    title: 'The Television Mockumentary',
    thesis:
      'The fake documentary as a sitcom engine. We gather shows that used the talking head to comic effect.',
    intro: 'The stare, the aside, the form.',
    tags: ['mockumentary', 'comedy', 'sitcom', 'form'],
    items: ['The Office', 'Parks and Recreation', 'Modern Family', 'The Comeback', 'Abbott Elementary', 'Documentary', 'People', 'The Muppets'],
  },
  {
    slug: 'coming-out-story-tv',
    channel: 'tv',
    title: 'Queer TV: The Arc of Becoming Visible',
    thesis:
      'Representation serialized. We map shows that let LGBTQ lives unfold across a run, not a single episode.',
    intro: 'The roommate, the secret, the pride.',
    tags: ['lgbtq', 'drama', 'love', 'identity'],
    items: ['Queer as Folk', 'Looking', 'Pose', 'The L Word', 'Sense8', 'Euphoria', 'Sex Education', 'Heartstopper'],
  },
  {
    slug: 'food-tv',
    channel: 'tv',
    title: 'The Food Show: Appetite as Format',
    thesis:
      'Hunger, televised. We collect series that turned cooking and eating into narrative.',
    intro: 'The kitchen, the judge, the bite.',
    tags: ['food', 'cooking', 'competition', 'sensory'],
    items: ['The Great British Bake Off', 'Chef Table', 'Top Chef', 'MasterChef', 'Salt Fat Acid', 'Street Food', 'Ugly Delicious', 'The Bear'],
  },
  {
    slug: 'time-travel-tv',
    channel: 'tv',
    title: 'Time Travel on the Small Screen',
    thesis:
      'The paradox as a season arc. We gather shows that used temporal loops to study character.',
    intro: 'The reset, the rule, the grief.',
    tags: ['timetravel', 'scifi', 'loops', 'puzzle'],
    items: ['Dark', 'The Umbrella Academy', 'Russian Doll', 'Travelers', '12 Monkeys', 'Legends of Tomorrow', 'Forever', 'The River'],
  },
  {
    slug: 'workplace-comedy',
    channel: 'tv',
    title: 'The Workplace Comedy',
    thesis:
      'The job as joke. We trace sitcoms that found the absurd in the daily grind.',
    intro: 'The meeting, the boss, the survive.',
    tags: ['workplace', 'comedy', 'sitcom', 'relatable'],
    items: ['The Office', 'Parks and Recreation', 'Superstore', 'Brooklyn Nine-Nine', 'Abbott Elementary', 'Scrubs', 'The IT Crowd', 'Kim'],
  },
  {
    slug: 'household-sitcom',
    channel: 'tv',
    title: 'The Modern Family Sitcom',
    thesis:
      'The household, reconfigured. We collect comedies that updated who counts as family.',
    intro: 'The dinner, the chaos, the love.',
    tags: ['sitcom', 'family', 'comedy', 'warm'],
    items: ['Modern Family', 'Schitts Creek', 'Black-ish', 'Kim Possible', 'The Conners', 'Fresh Off', 'One Day', 'Abbott'],
  },
  {
    slug: 'detective-genius',
    channel: 'tv',
    title: 'The Genius Detective',
    thesis:
      'The mind as the machine. We gather procedurals built around a single improbable intellect.',
    intro: 'The clue, the deduction, the flaw.',
    tags: ['detective', 'mystery', 'procedural', 'smart'],
    items: ['Sherlock', 'Monk', 'Psych', 'The Mentalist', 'Elementary', 'House', 'Perception', 'Lie to Me'],
  },
  {
    slug: 'nordic-noir',
    channel: 'tv',
    title: 'Nordic Noir: The Cold Case',
    thesis:
      'The grim latitude. We map Scandinavian crime dramas that turned weather into mood.',
    intro: 'The snow, the silence, the secret.',
    tags: ['nordic', 'noir', 'crime', 'cold'],
    items: ['The Bridge', 'The Killing', 'Forbrydelsen', 'Wallander', 'Borgen', 'The Chestnut', 'Mammon', 'Bordertown'],
  },
  {
    slug: 'streaming-phenomenon',
    channel: 'tv',
    title: 'The Streaming Phenomenon',
    thesis:
      'The show everyone watched at once. We collect series that defined the binge era.',
    intro: 'The drop, the spoiler, the watercooler.',
    tags: ['streaming', 'binge', 'phenomenon', 'global'],
    items: ['Stranger Things', 'Squid Game', 'The Queen Gambit', 'Wednesday', 'The Witcher', 'Dahmer', 'The Night Agent', 'Money Heist'],
  },
  {
    slug: 'high-school-drama',
    channel: 'tv',
    title: 'The High School Drama, Elevated',
    thesis:
      'Adolescence with production values. We gather teen soaps that took the hallway seriously.',
    intro: 'The locker, the love, the status.',
    tags: ['teen', 'drama', 'highschool', 'soap'],
    items: ['Euphoria', 'Gossip Girl', 'The O.C.', 'One Tree Hill', 'Riverdale', 'Dawson', 'Elite', 'Outer Banks'],
  },
  {
    slug: 'spy-thriller-tv',
    channel: 'tv',
    title: 'The Television Spy Thriller',
    thesis:
      'The double life, serialized. We trace espionage shows that thrived on the long game.',
    intro: 'The cover, the mole, the cost.',
    tags: ['spy', 'thriller', 'coldwar', 'tense'],
    items: ['The Americans', 'Homeland', 'The Night Manager', 'Killing Eve', 'Slow Horses', 'The Looming Tower', 'The Catch', 'Counterpart'],
  },
  {
    slug: 'medical-drama',
    channel: 'tv',
    title: 'The Medical Drama: The Hospital as Microcosm',
    thesis:
      'The ER as a moral arena. We collect shows that used medicine to test character under pressure.',
    intro: 'The code, the call, the grief.',
    tags: ['medical', 'drama', 'hospital', 'ensemble'],
    items: ['ER', 'House', 'Grey Anatomy', 'Scrubs', 'The Good Doctor', 'Nurses', 'The Pitt', 'Chicago Med'],
  },
  {
    slug: 'found-family-tv',
    channel: 'tv',
    title: 'The Found Family',
    thesis:
      'The crew that chose each other. We map shows where the team became the emotional center.',
    intro: 'The bunk, the mission, the bond.',
    tags: ['foundfamily', 'ensemble', 'warm', 'team'],
    items: ['Firefly', 'Stranger Things', 'The Umbrella Academy', 'Sense8', 'Supernatural', 'The A-Team', 'Orange', 'The Expanse'],
  },
  {
    slug: 'courtroom-tv',
    channel: 'tv',
    title: 'The Television Courtroom',
    thesis:
      'The case as a weekly ritual. We gather legal dramas that made argument the spectacle.',
    intro: 'The objection, the verdict, the doubt.',
    tags: ['courtroom', 'legal', 'drama', 'tense'],
    items: ['The Good Wife', 'Suits', 'Law and Order', 'How to Get Away', 'The Practice', 'Better Call Saul', 'The Defenders', 'Pearson'],
  },
  {
    slug: 'cozy-mystery-tv',
    channel: 'tv',
    title: 'The Cozy Mystery',
    thesis:
      'The kill without the gore. We collect whodunits that kept the blood off the screen and the puzzle on it.',
    intro: 'The village, the amateur, the tea.',
    tags: ['mystery', 'cozy', 'whodunit', 'gentle'],
    items: ['Murder She Wrote', 'Only Murders', 'Father Brown', 'Agatha Raisin', 'Midsomer Murders', 'The Thursday Murder', 'Death in Paradise', 'Ms'],
  },
  {
    slug: 'dystopia-tv',
    channel: 'tv',
    title: 'The Television Dystopia',
    thesis:
      'The worst world, sustained. We gather shows that built oppressive futures and lived in them.',
    intro: 'The regime, the resistance, the routine.',
    tags: ['dystopia', 'scifi', 'political', 'grim'],
    items: ['The Handmaid', 'Black Mirror', 'The Man in the High Castle', 'The 100', 'The Society', '3%', 'The Feed', 'Years and Years'],
  },
  {
    slug: 'standup-special-tv',
    channel: 'tv',
    title: 'The Comedy Special as Event',
    thesis:
      'The hour that travels. We map stand-up specials that became cultural moments on the small screen.',
    intro: 'The opener, the bit, the silence.',
    tags: ['standup', 'comedy', 'special', 'cultural'],
    items: ['Chappelle', 'Bo Burnham', 'Hannah Gadsby', 'John Mulaney', 'Hasan', 'Ali Wong', 'Ricky Gervais', 'Dave Chappelle'],
  },
  {
    slug: 'heist-tv',
    channel: 'tv',
    title: 'The Television Heist',
    thesis:
      'The long con, episode by episode. We collect shows that stretched the plan across a season.',
    intro: 'The crew, the mark, the turn.',
    tags: ['heist', 'thriller', 'ensemble', 'clever'],
    items: ['Money Heist', 'Lupin', 'Ozark', 'The Blacklist', 'Leverage', 'White Collar', 'Tinker Tailor', 'The Catch'],
  },
  {
    slug: 'family-saga-tv',
    channel: 'tv',
    title: 'The Multi-Generation Saga',
    thesis:
      'The family as the story. We gather shows that followed a bloodline across decades.',
    intro: 'The inheritance, the rift, the return.',
    tags: ['saga', 'family', 'period', 'epic'],
    items: ['The Crown', 'Succession', 'Gosford Park', 'Downton Abbey', 'The Forsyte', 'Pachinko', 'The Beguiled', 'Bloodline'],
  },
  {
    slug: 'improv-tv',
    channel: 'tv',
    title: 'The Improvised Series',
    thesis:
      'The script that wasn\'t. We trace shows that built comedy from the unscripted moment.',
    intro: 'The yes, the riff, the save.',
    tags: ['improv', 'comedy', 'experimental', 'form'],
    items: ['Curb Your Enthusiasm', 'The Office', 'Reno 911', 'Whose Line', 'Bajillion', 'The Rehearsal', 'Mascots', 'Wedding'],
  },
  {
    slug: 'supernatural-soft',
    channel: 'tv',
    title: 'The Soft Supernatural',
    thesis:
      'The uncanny, kept quiet. We collect shows that used the strange as atmosphere, not spectacle.',
    intro: 'The sign, the doubt, the chill.',
    tags: ['supernatural', 'horror', 'atmospheric', 'mystery'],
    items: ['The OA', 'Stranger Things', 'Sense8', 'The Leftovers', 'Midnight Mass', 'The Haunting', 'Dark', 'Twin Peaks'],
  },
];
