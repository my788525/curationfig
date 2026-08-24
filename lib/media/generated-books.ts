// AUTO-GENERATED curation data for the Books & Literature channel.
// Source: editorial curation over well-documented public literary works.
// Retrieved: 2026-08-24. All titles, authors, and first-publish years below are
// publicly documented facts (standard bibliographic record). No fabricated reviews,
// ratings, or first-person reader experiences. Cover images are null (no book-cover
// API reachable from build env) — cards use the no-cover fallback honestly.

export type GeneratedBook = {
  source: 'books';
  refId: string;
  title: string;
  creator: string; // author
  year?: string; // first publication year (public bibliographic fact)
  tags: string[];
  cover: null;
  url: string;
  seedName: string;
  synopsis?: string;
};

function b(title: string, author: string, year: string, tags: string[], note?: string): GeneratedBook {
  return {
    source: 'books',
    refId: `book:${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
    title,
    creator: author,
    year,
    tags,
    cover: null,
    url: `/books/${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}/`,
    seedName: title,
    synopsis: note,
  };
}

export const BOOKS_ITEMS: GeneratedBook[] = [
  // ===== Page to Screen: Beloved Books That Became Film & TV =====
  b('The Lord of the Rings', 'J.R.R. Tolkien', '1954', ['fantasy', 'epic', 'adaptation'], 'Adapted into the Peter Jackson film trilogy (2001–2003), among the highest-grossing film series ever.'),
  b('Harry Potter and the Sorcerer’s Stone', 'J.K. Rowling', '1997', ['fantasy', 'young-adult', 'adaptation'], 'Launched an 8-film series (2001–2011) and a global franchise.'),
  b('The Handmaid’s Tale', 'Margaret Atwood', '1985', ['dystopia', 'literary-fiction', 'adaptation'], 'Adapted into the Emmy-winning Hulu series (2017–).'),
  b('Dune', 'Frank Herbert', '1965', ['science-fiction', 'adaptation'], 'Adapted into Denis Villeneuve’s films (2021, 2024) after the 1984 David Lynch version.'),
  b('The Shining', 'Stephen King', '1977', ['horror', 'adaptation'], 'Adapted into Stanley Kubrick’s 1980 film.'),
  b('Gone Girl', 'Gillian Flynn', '2012', ['thriller', 'adaptation'], 'Adapted into the 2014 David Fincher film starring Rosamund Pike.'),
  b('The Martian', 'Andy Weir', '2011', ['science-fiction', 'adaptation'], 'Adapted into the 2015 Ridley Scott film starring Matt Damon.'),
  b('Never Let Me Go', 'Kazuo Ishiguro', '2005', ['literary-fiction', 'dystopia', 'adaptation'], 'Adapted into the 2010 film with Carey Mulligan.'),
  b('The Goldfinch', 'Donna Tartt', '2013', ['literary-fiction', 'adaptation'], 'Won the Pulitzer Prize; adapted into the 2019 film.'),
  b('Big Little Lies', 'Liane Moriarty', '2014', ['drama', 'adaptation'], 'Adapted into the HBO series (2017–2019) with Nicole Kidman and Reese Witherspoon.'),

  // ===== Modern Literary Fiction: The 21st-Century Canon =====
  b('The Road', 'Cormac McCarthy', '2006', ['literary-fiction', 'post-apocalyptic'], 'Won the 2007 Pulitzer Prize for Fiction.'),
  b('A Visit from the Goon Squad', 'Jennifer Egan', '2010', ['literary-fiction'], 'Won the 2011 Pulitzer Prize for Fiction.'),
  b('The Underground Railroad', 'Colson Whitehead', '2016', ['literary-fiction', 'historical'], 'Won the 2017 Pulitzer Prize for Fiction.'),
  b('The Overstory', 'Richard Powers', '2018', ['literary-fiction', 'environmental'], 'Won the 2019 Pulitzer Prize for Fiction.'),
  b('The Sellout', 'Paul Beatty', '2015', ['literary-fiction', 'satire'], 'Won the 2016 Man Booker Prize — first American to do so.'),
  b('Lincoln in the Bardo', 'George Saunders', '2017', ['literary-fiction', 'experimental'], 'Won the 2017 Man Booker Prize.'),
  b('The Song of Achilles', 'Madeline Miller', '2011', ['literary-fiction', 'myth-retelling'], 'Won the 2012 Orange Prize for Fiction.'),
  b('A Little Life', 'Hanya Yanagihara', '2015', ['literary-fiction', 'contemporary'], 'Shortlisted for the 2015 Man Booker Prize; a modern bestseller.'),
  b('Normal People', 'Sally Rooney', '2018', ['literary-fiction', 'contemporary'], 'Adapted into the 2020 BBC/Hulu series.'),
  b('Tomorrow, and Tomorrow, and Tomorrow', 'Gabrielle Zevin', '2022', ['literary-fiction', 'contemporary'], 'A New York Times bestseller and critics’ favorite.'),

  // ===== Fantasy & Sci-Fi Foundations (adaptation-rich) =====
  b('A Game of Thrones', 'George R.R. Martin', '1996', ['fantasy', 'adaptation'], 'First of A Song of Ice and Fire; adapted into HBO’s Game of Thrones (2011–2019).'),
  b('The Hobbit', 'J.R.R. Tolkien', '1937', ['fantasy', 'adaptation'], 'Adapted into the Peter Jackson film trilogy (2012–2014).'),
  b('Foundation', 'Isaac Asimov', '1951', ['science-fiction'], 'Adapted into the Apple TV+ series (2021–).'),
  b('Neuromancer', 'William Gibson', '1984', ['science-fiction', 'cyberpunk'], 'Won the Nebula, Hugo, and Philip K. Dick awards; foundational cyberpunk.'),
  b('Hyperion', 'Dan Simmons', '1989', ['science-fiction'], 'Won the 1990 Hugo Award for Best Novel.'),
  b('The Name of the Wind', 'Patrick Rothfuss', '2007', ['fantasy'], 'First of The Kingkiller Chronicle; a modern fantasy bestseller.'),
  b('Mistborn: The Final Empire', 'Brandon Sanderson', '2006', ['fantasy'], 'First of the Mistborn series; a contemporary fantasy landmark.'),
  b('The Left Hand of Darkness', 'Ursula K. Le Guin', '1969', ['science-fiction'], 'Won the 1970 Hugo and Nebula awards.'),
  b('Children of Time', 'Adrian Tchaikovsky', '2015', ['science-fiction'], 'Won the 2016 Arthur C. Clarke Award.'),
  b('Piranesi', 'Susanna Clarke', '2020', ['fantasy', 'literary-fiction'], 'Won the 2021 Women’s Prize for Fiction.'),

  // ===== Graphic-Adjacent: Novels That Became Comics =====
  b('American Gods', 'Neil Gaiman', '2001', ['fantasy', 'mythology', 'adaptation'], 'Adapted into both a Starz series (2017–2021) and a comic by P. Craig Russell.'),
  b('The Sandman', 'Neil Gaiman', '1990', ['fantasy', 'graphic-novel', 'adaptation'], 'Original comics series; adapted into the Netflix series (2022–).'),
  b('Good Omens', 'Neil Gaiman & Terry Pratchett', '1990', ['fantasy', 'comedy', 'adaptation'], 'Adapted into the Amazon series (2019) with Gaiman as co-writer.'),
  b('The Graveyard Book', 'Neil Gaiman', '2008', ['fantasy', 'young-adult', 'adaptation'], 'Won both the Newbery and Carnegie medals; adapted into a graphic novel by P. Craig Russell.'),
  b('Stardust', 'Neil Gaiman', '1998', ['fantasy', 'romance', 'adaptation'], 'Adapted into the 2007 film and a Charles Vess-illustrated edition.'),
  b('Coraline', 'Neil Gaiman', '2002', ['fantasy', 'horror', 'adaptation'], 'Adapted into the 2009 stop-motion film and a graphic novel.'),
  b('The League of Extraordinary Gentlemen', 'Alan Moore', '1999', ['comics', 'steampunk', 'adaptation'], 'Original comics; adapted into the 2003 film.'),
  b('V for Vendetta', 'Alan Moore', '1982', ['comics', 'dystopia', 'adaptation'], 'Original comics; adapted into the 2005 film.'),
  b('From Hell', 'Alan Moore', '1989', ['comics', 'historical', 'adaptation'], 'Original comics; adapted into the 2001 film.'),
  b('The Sleeper and the Spindle', 'Neil Gaiman', '2014', ['fantasy', 'fairy-tale', 'graphic-novel'], 'Illustrated by Chris Riddell; a fairy-tale retelling.'),

  // ===== Short Stories & Collections: The Form at Its Best =====
  b('Tenth of December', 'George Saunders', '2013', ['short-stories', 'literary-fiction'], 'Won the 2014 Story Prize; a bestselling collection.'),
  b('Interpreter of Maladies', 'Jhumpa Lahiri', '1999', ['short-stories', 'literary-fiction'], 'Won the 2000 Pulitzer Prize for Fiction.'),
  b('Olive Kitteridge', 'Elizabeth Strout', '2008', ['short-stories', 'literary-fiction'], 'Won the 2009 Pulitzer Prize for Fiction; adapted into the HBO miniseries (2014).'),
  b('Her Body and Other Parties', 'Carmen Maria Machado', '2017', ['short-stories', 'speculative'], 'Finalist for the 2017 National Book Award.'),
  b('The Thing Around Your Neck', 'Chimamanda Ngozi Adichie', '2009', ['short-stories', 'literary-fiction'], 'A widely taught contemporary collection.'),
  b('Dubliners', 'James Joyce', '1914', ['short-stories', 'classic'], 'A foundational modernist short-story collection.'),
  b('The Complete Stories', 'Flannery O’Connor', '1971', ['short-stories', 'classic'], 'Published complete in 1971; a Southern Gothic touchstone.'),
  b('Friday Black', 'Nana Kwame Adjei-Brenyah', '2018', ['short-stories', 'speculative'], 'A New York Times bestseller; satirical speculative fiction.'),
  b('Invisible Cities', 'Italo Calvino', '1972', ['short-stories', 'experimental'], 'A classic of imaginative, framed short fiction.'),
  b('Cosmicomics', 'Italo Calvino', '1965', ['short-stories', 'experimental'], 'A classic of playful, science-adjacent short fiction.'),
];
