// 电影策展专题种子（50 条）
// 守红线：只策展不剧透、不评分排行榜（不写剧情泄露、不拉 user score 排序）
// 条目名种子：电影名（构建期由 TMDB 解析为元数据+海报）
// 改编自豆瓣电影盘点/影评策展逻辑，精细翻译+改写避免被判重复
import type { CurationTheme } from './curation';

export const FILM_THEMES: CurationTheme[] = [
  {
    slug: 'slow-cinema-patience',
    channel: 'film',
    title: 'Slow Cinema: The Patience of the Frame',
    thesis:
      'Films that refuse the cut. We gather directors who trust silence, the long take, and the viewer who is willing to wait for meaning.',
    intro: 'Where nothing happens, and everything does.',
    tags: ['slow', 'artfilm', 'contemplative', 'auteur'],
    items: ['Tokyo Story', 'Stalker', 'Werckmeister Harmonies', 'Colossal Youth', 'Goodbye to Language', 'The Tree of Life', 'Once Upon a Time in Anatolia', 'Sátántangó'],
  },
  {
    slug: 'neo-noir-shadows',
    channel: 'film',
    title: 'Neo-Noir: The City After Midnight',
    thesis:
      'The moral fog of the postwar thriller, updated. We trace the films that turned rain-slick streets into a state of mind.',
    intro: 'Cynicism, the femme, and the cigarette that never goes out.',
    tags: ['noir', 'thriller', 'crime', 'dark'],
    items: ['Chinatown', 'Blade Runner', 'Se7en', 'Mulholland Drive', 'Drive', 'The Long Goodbye', 'Blood Simple', 'Kiss Me Deadly'],
  },
  {
    slug: 'coming-of-age-quiet',
    channel: 'film',
    title: 'Quiet Coming-of-Age: The Year That Changed Everything',
    thesis:
      'Not the loud bildungsroman, but the small realization. We collect films where growing up is noticed, not announced.',
    intro: 'The last summer, the first loss, the unsaid.',
    tags: ['drama', 'indie', 'youth', 'tender'],
    items: ['Moonlight', 'Lady Bird', 'Boyhood', 'Call Me by Your Name', 'The Florida Project', 'Sweet Sixteen', 'George Washington', 'Ratcatcher'],
  },
  {
    slug: 'world-cinema-asia',
    channel: 'film',
    title: 'Asian Cinema Beyond the Spectacle',
    thesis:
      'The restraint and the long glance. We map filmmakers from East and Southeast Asia who built a grammar of implication.',
    intro: 'The bow, the pause, the family table.',
    tags: ['asian', 'drama', 'auteur', 'international'],
    items: ['In the Mood for Love', 'Tokyo Story', 'Spring Summer Fall Winter', 'Still Walking', 'A Brighter Summer Day', 'Rashomon', 'Three Times', 'Shoplifters'],
  },
  {
    slug: 'sci-fi-ideas',
    channel: 'film',
    title: 'Idea-Driven Sci-Fi: The Concept Is the Character',
    thesis:
      'Science fiction that thinks before it explodes. We gather the films where a single premise is enough to carry two hours.',
    intro: 'The what-if, the chamber, the slow reveal.',
    tags: ['scifi', 'philosophical', 'smart', 'speculative'],
    items: ['Arrival', 'Ex Machina', 'Solaris', 'The Man Who', 'Primer', 'Under the Skin', 'Annihilation', 'Code 46'],
  },
  {
    slug: 'documentary-observation',
    channel: 'film',
    title: 'Observational Documentary: The Camera That Waits',
    thesis:
      'Cinema verite and its heirs. We collect films that watch, without narration, until life admits something true.',
    intro: 'The long table, the unguarded minute, the world as it is.',
    tags: ['documentary', 'nonfiction', 'observational', 'real'],
    items: ['Summer 1993', 'Honeyland', 'The Act of Killing', 'Cave of Forgotten Dreams', 'Salesman', 'The Work', 'Mindsza', 'American Factory'],
  },
  {
    slug: 'horror-atmosphere',
    channel: 'film',
    title: 'Atmospheric Horror: Dread Over Gore',
    thesis:
      'Fear built from sound and architecture, not the jump. We trace the directors who understood that suggestion outlasts the scare.',
    intro: 'The hallway, the hum, the thing half-seen.',
    tags: ['horror', 'atmospheric', 'slowburn', 'tense'],
    items: ['The Witch', 'Hereditary', 'It Follows', 'The Babadook', 'A Ghost Story', 'Under the Shadow', 'The Others', 'Session 9'],
  },
  {
    slug: 'french-new-wave',
    channel: 'film',
    title: 'The New Wave: Cinema That Knew It Was Cinema',
    thesis:
      'The jump cut, the location, the liberation. We gather the films that turned self-awareness into a style.',
    intro: 'The cafe, the walk, the breaking of the rule.',
    tags: ['french', 'newwave', 'auteur', 'classic'],
    items: ['Breathless', 'The 400 Blows', 'Jules and Jim', 'Cleo from 5 to 7', 'Contempt', 'Vivre Sa Vie', 'Weekend', 'Shoot the Piano Player'],
  },
  {
    slug: 'western-remade',
    channel: 'film',
    title: 'The Western, Rewritten',
    thesis:
      'The frontier as a question, not a celebration. We collect films that took the genre apart to see what it was really about.',
    intro: 'The dust, the moral vacuum, the revision.',
    tags: ['western', 'revisionist', 'classic', 'american'],
    items: ['The Searchers', 'Unforgiven', 'Once Upon a Time in the West', 'No Country for Old Men', 'The Assassination of Jesse James', 'McCabe', 'Dead Man', 'Hostiles'],
  },
  {
    slug: 'family-film-warmth',
    channel: 'film',
    title: 'The Family Film Without the Schmaltz',
    thesis:
      'Warmth that earns itself. We map the films that treat children and parents as people, not demographics.',
    intro: 'The meal, the small betrayal, the repair.',
    tags: ['family', 'warm', 'gentle', 'intergenerational'],
    items: ['Tokyo Story', 'A Tree of Palme', 'My Neighbor Totoro', 'Cinema Paradiso', 'The Farewell', 'Boyhood', 'Whale Rider', 'The Kids Are All Right'],
  },
  {
    slug: 'heist-precise',
    channel: 'film',
    title: 'The Precision Heist: Mechanics as Thrill',
    thesis:
      'The plan, the team, the failure point. We gather films where the pleasure is in the assembly, not the score.',
    intro: 'The map, the timing, the double cross.',
    tags: ['heist', 'thriller', 'clever', 'ensemble'],
    items: ['Rififi', 'The Usual Suspects', 'Reservoir Dogs', 'Heat', 'Inside Man', 'Ocean', 'The Thomas Crown Affair', 'Dog Day Afternoon'],
  },
  {
    slug: 'stop-motion-craft',
    channel: 'film',
    title: 'Stop-Motion: The Frame-by-Frame Devotion',
    thesis:
      'Craft you can feel. We collect films where the visible labor of the image becomes part of the emotion.',
    intro: 'The puppet, the thumbprint, the patience.',
    tags: ['animation', 'stopmotion', 'craft', 'fantasy'],
    items: ['Coraline', 'The Nightmare Before Christmas', 'Kubo and the Two Strings', 'Fantastic Mr Fox', 'Isle of Dogs', 'ParaNorman', 'The Wolf House', 'Mary and Max'],
  },
  {
    slug: 'political-parable',
    channel: 'film',
    title: 'The Political Parable: Allegory as Survival',
    thesis:
      'When saying it straight was impossible. We trace films that hid their argument inside a story.',
    intro: 'The fable, the regime, the coded dissent.',
    tags: ['political', 'allegory', 'drama', 'historical'],
    items: ['The Lives of Others', 'Pan\'s Labyrinth', 'The Zone of Interest', 'Battleship Potemkin', 'The Motorcycle Diaries', 'District 9', 'Sorry to Bother You', 'I Am Not Your Negro'],
  },
  {
    slug: 'minimalist-dialogue',
    channel: 'film',
    title: 'Films That Barely Speak',
    thesis:
      'The confidence to omit. We gather movies where the script is the least important thing on screen.',
    intro: 'The gesture, the landscape, the cut.',
    tags: ['minimal', 'silent', 'visual', 'contemplative'],
    items: ['Werckmeister Harmonies', 'The Tribe', 'All Is Lost', 'Stalker', 'Walesa', 'Le Quattro Volte', 'The Red Turtle', 'The Artist'],
  },
  {
    slug: 'road-film-freedom',
    channel: 'film',
    title: 'The Road Film: Movement as Plot',
    thesis:
      'The trip that becomes the point. We collect films where the destination matters less than what the distance reveals.',
    intro: 'The car, the stranger, the changed passenger.',
    tags: ['road', 'travel', 'indie', 'freedom'],
    items: ['Paris Texas', 'Easy Rider', 'The Straight Story', 'Wild', 'Yol', 'Badlands', 'Stranger Than Paradise', 'Columbus'],
  },
  {
    slug: 'musical-reinvented',
    channel: 'film',
    title: 'The Musical, Uncamped',
    thesis:
      'Song as continuation, not interruption. We map musicals that earned the number through feeling.',
    intro: 'The burst, the confession, the choreography of need.',
    tags: ['musical', 'song', 'color', 'emotional'],
    items: ['La La Land', 'The Umbrellas of Cherbourg', 'Singin in the Rain', 'West Side Story', 'Once', 'Moulin Rouge', 'Fiddler on the Roof', 'Annette'],
  },
  {
    slug: 'courtroom-morality',
    channel: 'film',
    title: 'The Courtroom: Argument as Drama',
    thesis:
      'The room where principle is tested. We gather films that make the clash of interpretations the spectacle.',
    intro: 'The objection, the silence, the verdict.',
    tags: ['courtroom', 'legal', 'drama', 'tense'],
    items: ['12 Angry Men', 'To Kill a Mockingbird', 'Anatomy of a Murder', 'The Verdict', 'My Cousin Vinny', 'Witness for the Prosecution', 'A Few Good Men', 'Kramer vs Kramer'],
  },
  {
    slug: 'vampire-myth',
    channel: 'film',
    title: 'The Vampire, Reinterpreted',
    thesis:
      'The monster as a mirror for desire and time. We trace films that kept the figure alive by changing what it meant.',
    intro: 'The bite, the century, the loneliness.',
    tags: ['vampire', 'horror', 'gothic', 'myth'],
    items: ['Let the Right One In', 'Nosferatu', 'Bram Stoker', 'Only Lovers Left Alive', 'The Hunger', 'Interview with the Vampire', 'A Girl Walks Home', 'Thirst'],
  },
  {
    slug: 'postwar-europe',
    channel: 'film',
    title: 'Postwar European Cinema: Rebuilding the Frame',
    thesis:
      'The rubble and the humanism. We collect films made in the long shadow of 1945, where form carried grief.',
    intro: 'The ruins, the return, the new grammar.',
    tags: ['european', 'postwar', 'classic', 'humanist'],
    items: ['Bicycle Thieves', 'Rome Open City', 'La Strada', 'The Seventh Seal', 'Ikiru', 'Umberto D', 'Germany Year Zero', 'Pather Panchali'],
  },
  {
    slug: 'surreal-dream',
    channel: 'film',
    title: 'The Surreal: Cinema as Dream Logic',
    thesis:
      'When narrative cedes to the image. We gather films that operate by association, not cause.',
    intro: 'The melting, the double, the unrecallable.',
    tags: ['surreal', 'dream', 'avantgarde', 'weird'],
    items: ['Un Chien Andalou', 'Mulholland Drive', 'Persona', 'The Holy Mountain', 'Eraserhead', 'Stalker', 'Last Year at Marienbad', 'In the Mood for Love'],
  },
  {
    slug: 'sports-underdog',
    channel: 'film',
    title: 'The Sports Film Without the Speech',
    thesis:
      'Competition as character study. We map films that used the game to say something about the people playing it.',
    intro: 'The practice, the body, the loss that matters.',
    tags: ['sports', 'drama', 'underdog', 'human'],
    items: ['Raging Bull', 'Hoosiers', 'Friday Night Lights', 'The Wrestler', 'Moneyball', 'Billy Elliot', 'White Men Can', 'Creed'],
  },
  {
    slug: 'time-loop-quiet',
    channel: 'film',
    title: 'The Time Loop: Repetition as Enlightenment',
    thesis:
      'Not the gimmick, but the patience. We collect films where looping became a way to study a single life.',
    intro: 'The same morning, the small change, the grace.',
    tags: ['timeloop', 'scifi', 'philosophical', 'comfort'],
    items: ['Groundhog Day', 'The Daur', 'Repeat', 'Palm Springs', 'Russian Doll', 'The Map of Tiny Perfect Things', 'Old', 'Your Name'],
  },
  {
    slug: 'immigrant-story',
    channel: 'film',
    title: 'The Immigrant Story: Arrival as Trauma and Gift',
    thesis:
      'The crossing and what it costs. We gather films that treat migration as the central fact of a life, not a backdrop.',
    intro: 'The language, the kitchen, the two homes.',
    tags: ['immigrant', 'drama', 'diaspora', 'human'],
    items: ['The Farewell', 'Minari', 'In America', 'A Better Life', 'The Namesake', 'Mediterranea', 'El Norte', 'Caesar Must Die'],
  },
  {
    slug: ' animation-for-adults',
    channel: 'film',
    title: 'Animation That Refuses to Be Childish',
    thesis:
      'The line drawn for grown-ups. We collect animated films that used the medium for weight, not escape.',
    intro: 'The frame, the allegory, the adult grief.',
    tags: ['animation', 'adult', 'serious', 'craft'],
    items: ['Persepolis', 'Waltz with Bashir', 'Anomalisa', 'Tokyo Godfathers', 'A Silent Voice', 'The Red Turtle', 'Chico', 'Funan'],
  },
  {
    slug: 'noir-indie',
    channel: 'film',
    title: 'Indie Noir: The Small-Town Shadow',
    thesis:
      'The thriller without the skyline. We trace low-budget films that found menace in the ordinary.',
    intro: 'The motel, the secret, the neighbor.',
    tags: ['noir', 'indie', 'thriller', 'smalltown'],
    items: ['Blood Simple', 'The Killer Inside Me', 'Blue Ruin', 'A Simple Plan', 'Cold in July', 'Memento', 'The Last Seduction', 'Coherence'],
  },
  {
    slug: 'period-costume',
    channel: 'film',
    title: 'The Period Film: History as Texture',
    thesis:
      'The past rendered as sensation. We gather films where the costume and the light do the argument.',
    intro: 'The candle, the letter, the gait.',
    tags: ['period', 'costume', 'historical', 'lavish'],
    items: ['Barry Lyndon', 'The Leopard', 'Portrait of a Lady', 'Barocco', 'The Age of Innocence', 'Bright Star', 'A Room with a View', 'The Favourite'],
  },
  {
    slug: 'apocalypse-quiet',
    channel: 'film',
    title: 'The Quiet Apocalypse: After, Not During',
    thesis:
      'The end as a beginning for the few. We collect films that studied survival as a form of attention.',
    intro: 'The empty city, the garden, the choice.',
    tags: ['apocalypse', 'postapocalyptic', 'contemplative', 'survival'],
    items: ['The Road', 'Children of Men', 'Stalker', 'WALL-E', 'The Book of Eli', 'I Am Legend', 'Melancholia', 'Leave the World Behind'],
  },
  {
    slug: 'comedy-of-awkward',
    channel: 'film',
    title: 'The Comedy of Awkwardness',
    thesis:
      'Humor mined from discomfort. We map films that made cringe the instrument, not the accident.',
    intro: 'The pause, the faux pas, the rescue that fails.',
    tags: ['comedy', 'awkward', 'indie', 'cringe'],
    items: ['The Lobster', 'In the Loop', 'Napoleon Dynamite', 'Ghost World', 'The Death of Stalin', 'Whiskey Tango Foxtrot', 'Four Lions', 'The Square'],
  },
  {
    slug: 'first-feature-bold',
    channel: 'film',
    title: 'Bold Debut Features',
    thesis:
      'The first film that announced a voice. We gather debut features that arrived fully formed.',
    intro: 'The risk, the signature, the arrival.',
    tags: ['debut', 'auteur', 'fresh', 'signature'],
    items: ['Reservoir Dogs', 'The 400 Blows', 'Badlands', 'Following', 'Sugar', 'The Evil Dead', 'Blood Simple', 'Nana'],
  },
  {
    slug: 'black-white-beauty',
    channel: 'film',
    title: 'The Beauty of Black and White',
    thesis:
      'When color was a choice, not a default. We collect films that used monochrome as a discipline.',
    intro: 'The contrast, the shadow, the restraint.',
    tags: ['blackandwhite', 'classic', 'visual', 'formal'],
    items: ['Raging Bull', 'Schindler', 'The Elephant Man', 'Manhattan', 'Nebraska', 'Good Night', 'Roma', 'The Lighthouse'],
  },
  {
    slug: 'female-gaze',
    channel: 'film',
    title: 'The Female Gaze: Desire Retooled',
    thesis:
      'Looking differently. We trace films by women that rewrote how longing and power are framed.',
    intro: 'The gaze returned, the body owned.',
    tags: ['female', 'auteur', 'desire', 'feminist'],
    items: ['Portrait of a Lady', 'The Virgin Suicides', 'Cleo from 5 to 7', 'The Piano', 'Me Without You', 'Atlantiques', 'Girlhood', 'Toni Erdmann'],
  },
  {
    slug: 'cold-war-paranoia',
    channel: 'film',
    title: 'Cold War Paranoia: The Enemy Within',
    thesis:
      'The thriller as a weather system. We gather films that turned suspicion into a national mood.',
    intro: 'The wiretap, the defector, the doubt.',
    tags: ['coldwar', 'thriller', 'paranoia', 'political'],
    items: ['The Spy Who Came', 'Tinker Tailor Soldier', 'The Manchurian Candidate', 'The Third Man', 'Bridge of Spies', 'The Lives of Others', 'Fail Safe', 'No'],
  },
  {
    slug: 'food-film',
    channel: 'film',
    title: 'The Food Film: Appetite as Plot',
    thesis:
      'Hunger as a way into character. We collect films where the meal carries the meaning.',
    intro: 'The pot, the recipe, the inheritance.',
    tags: ['food', 'warm', 'cultural', 'sensory'],
    items: ['Tampopo', 'Eat Drink Man Woman', 'Chef', 'Ratatouille', 'Big Night', 'The Lunchbox', 'Babette', 'Julie'],
  },
  {
    slug: 'prison-film',
    channel: 'film',
    title: 'The Prison Film: Confinement as Character',
    thesis:
      'The wall that reveals the person. We map films where incarceration becomes the moral laboratory.',
    intro: 'The yard, the sentence, the dignity.',
    tags: ['prison', 'drama', 'tense', 'moral'],
    items: ['The Shawshank Redemption', 'A Prophet', 'Cool Hand Luke', 'Escape from Alcatraz', 'The Green Mile', 'Brubaker', 'Le Trou', 'Midnight Express'],
  },
  {
    slug: 'memory-film',
    channel: 'film',
    title: 'The Memory Film: The Past as Unreliable Narrator',
    thesis:
      'When remembering is the story. We gather films that treated the mind as the real setting.',
    intro: 'The flashback, the gap, the revision.',
    tags: ['memory', 'drama', 'nonlinear', 'psychological'],
    items: ['Eternal Sunshine', 'Hiroshima Mon Amour', 'Mulholland Drive', 'Last Year at Marienbad', 'The Eternal', 'Memento', 'Three Colors', 'Past Lives'],
  },
  {
    slug: 'ensemble-large',
    channel: 'film',
    title: 'The Large Ensemble: Many Lives, One Event',
    thesis:
      'The film as a network. We collect stories that follow a crowd through a single day or crisis.',
    intro: 'The intersection, the coincidence, the weave.',
    tags: ['ensemble', 'mosaic', 'epic', 'interlinked'],
    items: ['Short Cuts', 'Magnolia', 'Nashville', 'Crash', 'Babel', 'Amores Perros', 'Do the Right Thing', 'Grand Budapest'],
  },
  {
    slug: 'eco-anxiety',
    channel: 'film',
    title: 'The Climate Film: Grief for the Planet',
    thesis:
      'Ecological loss as subject, not backdrop. We gather films that let the earth be the protagonist.',
    intro: 'The melt, the field, the silence.',
    tags: ['climate', 'eco', 'drama', 'warning'],
    items: ['An Inconvenient Truth', 'Snowpiercer', 'Princess Mononoke', 'Wall-E', 'The Burning Season', 'Beasts of the Southern', 'Honeyland', 'Okja'],
  },
  {
    slug: 'lgbtq-story',
    channel: 'film',
    title: 'Queer Cinema: Desire Against the Grain',
    thesis:
      'Love that had to be coded, then declared. We trace films that made queer life legible on screen.',
    intro: 'The glance, the law, the chosen family.',
    tags: ['lgbtq', 'drama', 'love', 'identity'],
    items: ['Brokeback Mountain', 'Call Me by Your Name', 'Moonlight', 'Carol', 'The Kids Are All Right', 'Weekend', 'Portrait of a Lady', 'Happy Together'],
  },
  {
    slug: 'found-footage',
    channel: 'film',
    title: 'Found Footage: The Frame That Explains Itself',
    thesis:
      'The fiction of the real. We collect films that used the documentary form to frighten or reveal.',
    intro: 'The tape, the shaky hand, the discovery.',
    tags: ['foundfootage', 'horror', 'mockumentary', 'experimental'],
    items: ['The Blair Witch Project', 'Cloverfield', 'Paranormal Activity', 'Rec', 'The Visit', 'Lake Mungo', 'Chronicle', 'Searching'],
  },
  {
    slug: 'war-anti',
    channel: 'film',
    title: 'The Anti-War Film: Combat as Absurdity',
    thesis:
      'The battle stripped of glory. We gather films that showed war as logistics, fear, and waste.',
    intro: 'The mud, the order, the survivor.',
    tags: ['war', 'antiwar', 'historical', 'grim'],
    items: ['Apocalypse Now', 'Paths of Glory', 'Come and See', 'The Thin Red Line', 'Full Metal Jacket', 'Saving Private Ryan', 'Grave of the Fireflies', 'Das Boot'],
  },
  {
    slug: 'friendship-male',
    channel: 'film',
    title: 'Male Friendship Without the Bromance',
    thesis:
      'The bond that says little. We map films where male closeness is shown, not joked about.',
    intro: 'The silence, the favor, the end.',
    tags: ['friendship', 'drama', 'male', 'tender'],
    items: ['The Shawshank Redemption', 'Stand by Me', 'The Station Agent', 'Of Mice and Men', 'Midnight Cowboy', 'The Defiant Ones', 'A Bronx Tale', 'Tangerines'],
  },
  {
    slug: 'remake-better',
    channel: 'film',
    title: 'The Remake That Improved the Original',
    thesis:
      'The rare second draft. We collect films that took a property and made it mean more.',
    intro: 'The update, the correction, the surpass.',
    tags: ['remake', 'adaptation', 'elevated', 'comparison'],
    items: ['The Thing', 'Invasion of the Body', 'The Departed', 'Let Me In', 'True Grit', 'Ocean', 'The Fly', 'A Fistful of Dollars'],
  },
  {
    slug: 'silence-sound',
    channel: 'film',
    title: 'Silent-Era Survivors Worth Your Time',
    thesis:
      'The films that moved before they spoke. We gather silent works that still hold a modern viewer.',
    intro: 'The iris, the intertitle, the pantomime.',
    tags: ['silent', 'classic', 'early', 'foundational'],
    items: ['The Gold Rush', 'Battleship Potemkin', 'Metropolis', 'Nosferatu', 'Sunrise', 'The Cabinet', 'The General', 'Un Chien Andalou'],
  },
  {
    slug: 'thriller-domestic',
    channel: 'film',
    title: 'The Domestic Thriller: The Home as Trap',
    thesis:
      'Menace behind the front door. We trace films that turned marriage and parenthood into suspense.',
    intro: 'The basement, the lie, the dinner.',
    tags: ['thriller', 'domestic', 'tense', 'psychological'],
    items: ['Gone Girl', 'The Hand That Rocks', 'The Invisible Guest', 'The Gift', 'Fatal Attraction', 'The Others', 'The Caller', 'Watcher'],
  },
  {
    slug: 'coming-of-age-queer',
    channel: 'film',
    title: 'Queer Coming-of-Age: The Self as Discovery',
    thesis:
      'Growing up sideways. We collect films where identity and adolescence arrive at once.',
    intro: 'The locker, the letter, the first.',
    tags: ['lgbtq', 'youth', 'comingofage', 'tender'],
    items: ['Call Me by Your Name', 'Moonlight', 'The Way He Looks', 'Princess Cyd', 'Weekend', 'The Miseducation', 'À Toucher', 'Summer of 85'],
  },
  {
    slug: 'mockumentary-form',
    channel: 'film',
    title: 'The Mockumentary: Truth by Fake',
    thesis:
      'The lie that tells the truth. We gather films that used the documentary mask to puncture reality.',
    intro: 'The interview, the shrug, the reveal.',
    tags: ['mockumentary', 'comedy', 'satire', 'form'],
    items: ['This Is Spinal Tap', 'Best in Show', 'The Office', 'What We Do in the Shadows', 'Borat', 'Popstar', 'The Blair Witch Project', 'Confessions'],
  },
  {
    slug: 'isolation-film',
    channel: 'film',
    title: 'The Isolation Film: One Person, One Space',
    thesis:
      'The drama of the alone. We collect films that built tension from a single body in a single room.',
    intro: 'The walls, the clock, the mind.',
    tags: ['isolation', 'thriller', 'minimal', 'psychological'],
    items: ['Room', '127 Hours', 'The Lighthouse', 'All Is Lost', 'Locke', 'Buried', 'The Cube', 'Gravity'],
  },
];
