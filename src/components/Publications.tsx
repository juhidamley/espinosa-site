import { useState } from "react";
import { X, ExternalLink, ArrowUpDown } from "lucide-react";

const books = [
  {
    id: 1,
    title: "Religion, Race, and the American Presidency",
    year: "2008",
    publisher: "Bloomsbury USA",
    isbn: "9780742563216",
    coverImage: "src/assets/bookCovers/rrap.jpg",
    description: "The role that race and religion play in American presidential elections is attracting national attention like never before. The 2008 presidential candidates reached out to an unprecedented number of racial and religious voting constituencies, including African Americans, Latinos, Muslims, Mainline Protestants, Evangelicals, Catholics, Jews, women, the non-religious, and more. Drawing upon survey data, interviews, and case studies, this book examines the complicated relationships between recent American presidents and key racial and religious groups. The paperback edition features a new capstone chapter on the 2008 elections.",
    purchaseLinks: [
      { label: "Amazon", url: "https://www.amazon.com/Religion-American-Presidency-Gaston-Espinosa/dp/0742563219" },
      { label: "Bloomsbury", url: "https://www.bloomsbury.com/us/religion-race-and-the-american-presidency-9780742563223/" },
      { label: "VitalSource", url: "https://www.vitalsource.com/products/religion-race-and-the-american-presidency-espinosa-gaston-v9780742563216?srsltid=AfmBOorUP4EL3SoCEkPsR9Gl4Z-pgFJV3DRBCIFDiEkVOBq9Xl00wRLn" },
      { label: "Google Books", url: "https://books.google.com/books/about/Religion_Race_and_the_American_Presidenc.html?id=s0FWrdLu-AcC" },
    ],
  },
  {
    id: 2,
    title: "Latino Pentecostals in America",
    subtitle: "Faith and Politics in Action",
    year: "2014",
    publisher: "Harvard University Press",
    isbn: "9780674970915",
    coverImage: "src/assets/bookCovers/lpa.jpeg",
    description: "Every year an estimated 600,000 U.S. Latinos convert from Catholicism to Protestantism. Today, 12.5 million Latinos self-identify as Protestant—a population larger than all U.S. Jews and Muslims combined. Spearheading this spiritual transformation is the Pentecostal movement and Assemblies of God, which is the destination for one out of four converts. In a deeply researched social and cultural history, Gastón Espinosa uncovers the roots of this remarkable turn and the Latino AG’s growing leadership nationwide.",
    purchaseLinks: [
      { label: "Amazon", url: "https://www.amazon.com/Latino-Pentecostals-America-Politics-Action/dp/0674728874" },
      { label: "Harvard UP", url: "https://www.hup.harvard.edu/books/9780674970915" },
      { label: "Google Books", url: "https://books.google.com/books/about/Latino_Pentecostals_in_America.html?id=2e1DBAAAQBAJ" },
    ],
  },
  {
    id: 3,
    title: "William J. Seymour and the Origins of Global Pentecostalism",
    subtitle: "A Biography and Documentary History",
    year: "2014",
    publisher: "Duke University Press",
    isbn: "978-0-8223-5635-6",
    coverImage: "src/assets/bookCovers/wjs.webp",
    description: "In 1906, William J. Seymour (1870–1922) preached Pentecostal revival at the Azusa Street mission in Los Angeles. From these and other humble origins the movement has blossomed to 631 million people around the world. Gastón Espinosa provides new insight into the life and ministry of Seymour, the Azusa Street revival, and Seymour's influence on global Pentecostal origins. After defining key terms and concepts, he surveys the changing interpretations of Seymour over the past 100 years, critically engages them in a biography, and then provides an unparalleled collection of primary sources, all in a single volume. He pays particular attention to race relations, Seymour's paradigmatic global influence from 1906 to 1912, and the break between Seymour and Charles Parham, another founder of Pentecostalism. Espinosa's fragmentation thesis argues that the Pentecostal propensity to invoke direct unmediated experiences with the Holy Spirit empowers ordinary people to break the bottle of denominationalism and to rapidly indigenize and spread their message.",
    purchaseLinks: [
      { label: "Amazon", url: "https://www.amazon.com/William-Seymour-Origins-Global-Pentecostalism/dp/082235635X" },
      { label: "Duke UP", url: "https://www.dukeupress.edu/william-j-seymour-and-the-origins-of-global-pentecostalism" },
      { label: "Google Books", url: "https://www.google.com/books/edition/William_J_Seymour_and_the_Origins_of_Glo/39DZBAAAQBAJ?hl=en&gbpv=0" },
    ],
  },
  {
    id: 4,
    title: "Protestants on Screen",
    subtitle: "Religion, Politics and Aesthetics in European and American Movies",
    year: "2023",
    publisher: "Oxford University Press",
    isbn: "9780190058906",
    coverImage: "src/assets/bookCovers/pos.jpg",
    description: "Protestants on Screen explores the Protestant contributions to American and European film over the past hundred years, focusing on the post-1960 period. It analyzes how Protestant filmmakers, beliefs, theology, symbols, sensibilities, and cultural patterns have shaped film. This book argues that Protestants helped birth and shape the film industry and harness the power of motion pictures for spiritual instruction, edification, and cultural influence. Despite the rapid secularization of the film industry, Protestants influenced U.S. filmmaking in three distinct ways since the 1920s. It tracks key Protestant themes like faith and doubt, sin and depravity, biblical literalism, personal conversion and redemption, holiness and sanctification, moralism and pietism, Providence and secularism, apocalypticism, righteousness and justice, religion and race, and the priesthood of all believers and its offshoots, democratization and individualism. The book problematizes the stereotype of Protestants as world-denouncing and -defying puritans and iconoclasts who stood in the way of film’s maturation as an art. The authors contend that Protestants were instead among the key catalysts in the origins and development of film and contribute to this day an identifiable aesthetic impulse manifest in themes like reform, embodiment of the biblical Word, a reenchantment of the mundane, and the interplay of the literal and the symbolic.",
    purchaseLinks: [
      { label: "Amazon", url: "https://www.amazon.com/dp/0190058900?tag=oxacglobal-20" },
      { label: "Oxford UP", url: "https://academic.oup.com/book/49426" },
      { label: "Google Books", url: "https://books.google.com/books/about/Protestants_on_Screen.html?id=oYfQEAAAQBAJ&source=kp_book_description" },
    ],
  },
  {
    id: 5,
    title: "Religion, Race, and Barack Obama's New Democratic Pluralism",
    year: "2013",
    publisher: "Routledge",
    isbn: "9780415633772",
    coverImage: "src/assets/bookCovers/rrbo.jpg",
    description: "Contrary to popular claims, religion played a critical role in Barack Obama's 2008 election as president of the United States. Religion, race, and gender entered the national and electoral dialogue in an unprecedented manner. What stood out most in the 2008 presidential campaign was not that Republicans reached out to religious voters but that Democrats did―and with a vengeance. This tightly edited volume demonstrates how Obama charted a new course for Democrats by staking out claims among moderate-conservative faith communities and emerged victorious in the presidential contest, in part, by promoting a new Democratic racial-ethnic and religious pluralism.",
    purchaseLinks: [
      { label: "Amazon", url: "https://www.amazon.com/-/he/Gast%C3%B3n-Espinosa/dp/0415633761" },
      { label: "Routledge", url: "https://www.routledge.com/Religion-Race-and-Barack-Obamas-New-Democratic-Pluralism/Espinosa/p/book/9780415633772" },
      { label: "Google Books", url: "https://books.google.com/books/about/Religion_Race_and_Barack_Obama_s_New_Dem.html?id=eU-gs12A2ZsC&source=kp_book_description" },
    ],
  },
  {
    id: 0,
    title: "",
    subtitle: "",
    year: "",
    publisher: "",
    isbn: "",
    coverImage: "src/assets/bookCovers/",
    description: "",
    purchaseLinks: [
      { label: "Amazon", url: "" },
      { label: "Oxford UP", url: "" },
      { label: "Google Books", url: "" },
    ],
  },
];

const otherPublications = [
  {
    type: "Journal Article",
    year: "2023",
    title: "Nones, No Religious Preference, No Religion and the Misclassification of Latino Religious Identity",
    publisher: "Religions 14",
    description:
      "This article challenges the conventional wisdom about the reported decline of Christianity and Protestantism in the U.S. and the rise of the “nones” among Latinos. It does so by cross-examining the growth of the “nones” (those respondents reportedly having no religion and/or no religious preference) in the U.S. Latino community, which is slated to make up almost 28 percent of the U.S. population by 2060.",
      link: "https://doi.org/10.3390/rel14030420",
  },
  {
    type: "Journal Article",
    year: "2022",
    title: "Latinos Shifting Republican? Evangelical, Pentecostal, Catholic Charismatic Voting in the 2020 Election in the U.S., Florida, and Texas",
    publisher: "Pneuma: The Journal for the Society of Pentecostal Studies 44",
    description:
      "This article utilizes the Latino Religions and Politics National Survey (n = 1,292) to provide a preliminary investigation into Latino religious and political identity and voting results in the 2020 Election. It provides important new data on the Latino vote lean by religion (Catholic, Protestant, Evangelical, Pentecostal, Catholic Charismatic), with special attention to the critical role that religion in general and Evangelicals and Pentecostals/Charismatics in particular may have played in helping to increase Latino Republican support for President Trump across the nation from 28 percent in 2016 to 32 percent in 2020 and increase his levels of support in Florida and Texas.",
      link: "https://doi.org/10.1163/15700747-bja10079",
  },
  {
    type: "",
    year: "",
    title: "",
    publisher: "",
    description:
      "",
  },
];

type SortOption = "newest" | "oldest" | "alphabetical";

const Publications = () => {
  const [selectedBook, setSelectedBook] = useState<typeof books[0] | null>(null);
  const [bookSort, setBookSort] = useState<SortOption>("newest");
  const [publicationSort, setPublicationSort] = useState<SortOption>("newest");

  const sortData = <T extends { year: string; title: string }>(data: T[], sortBy: SortOption): T[] => {
    const sorted = [...data];
    switch (sortBy) {
      case "newest":
        return sorted.sort((a, b) => parseInt(b.year) - parseInt(a.year));
      case "oldest":
        return sorted.sort((a, b) => parseInt(a.year) - parseInt(b.year));
      case "alphabetical":
        return sorted.sort((a, b) => a.title.localeCompare(b.title));
      default:
        return sorted;
    }
  };

  const sortedBooks = sortData(books, bookSort);
  const sortedPublications = sortData(otherPublications, publicationSort);

  return (
    <section id="publications" className="py-24 bg-background">
      <div className="section-container">
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
            <div>
              <h2 className="font-heading text-4xl md:text-5xl font-semibold text-display mb-4">
                Books
              </h2>
              <p className="text-body font-body leading-relaxed max-w-2xl">
                Click on any book to learn more and find purchase options.
              </p>
            </div>
            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <ArrowUpDown className="w-4 h-4 text-body/70" />
              <select
                value={bookSort}
                onChange={(e) => setBookSort(e.target.value as SortOption)}
                className="px-4 py-2 border border-border rounded-md bg-background text-body font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="alphabetical">A-Z</option>
              </select>
            </div>
          </div>

          {/* Scrollable Library */}
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory">
              {sortedBooks.map((book) => (
                <div
                  key={book.id}
                  onClick={() => setSelectedBook(book)}
                  className="flex-shrink-0 w-64 cursor-pointer group snap-start"
                >
                  <div className="card-scholarly p-0 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="aspect-[2/3] bg-primary/5 flex items-center justify-center">
                      {book.coverImage ? (
                        <img
                          src={book.coverImage}
                          alt={book.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-center p-6">
                          <p className="font-heading text-lg font-semibold text-display">
                            {book.title}
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <p className="font-heading text-sm font-semibold text-display line-clamp-2 mb-1">
                        {book.title}
                      </p>
                      <p className="text-xs text-body/70 font-body">
                        {book.year} • {book.publisher}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider-ornate my-16">
          <span className="text-primary text-2xl">✦</span>
        </div>

        {/* Other Publications */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <h2 className="font-heading text-4xl md:text-5xl font-semibold text-display mb-4">
                Articles & Chapters
              </h2>
              <p className="text-body font-body leading-relaxed max-w-2xl">
                Selected refereed articles, book chapters, and reviews.
              </p>
            </div>
            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <ArrowUpDown className="w-4 h-4 text-body/70" />
              <select
                value={publicationSort}
                onChange={(e) => setPublicationSort(e.target.value as SortOption)}
                className="px-4 py-2 border border-border rounded-md bg-background text-body font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="alphabetical">A-Z</option>
              </select>
            </div>
          </div>

          <div className="space-y-6">
            {sortedPublications.map((pub, index) => (
              <div key={index} className="card-scholarly p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                    {pub.type}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-heading text-xl font-semibold text-display">
                        {pub.title}
                      </h3>
                      <span className="text-sm text-body/70 font-body whitespace-nowrap">
                        {pub.year}
                      </span>
                    </div>
                    <p className="text-sm text-body/80 font-body italic mb-3">
                      {pub.publisher}
                    </p>
                    <p className="text-body font-body leading-relaxed mb-3">
                      {pub.description}
                    </p>
                    {pub.link && (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-body text-sm"
                      >
                        Read More
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Book Quick View Modal */}
      {selectedBook && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedBook(null)}
        >
          <div
            className="bg-background rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-background border-b border-border/50 px-6 py-4 flex items-center justify-between">
              <h3 className="font-heading text-2xl font-semibold text-display">
                Book Details
              </h3>
              <button
                onClick={() => setSelectedBook(null)}
                className="p-2 hover:bg-primary/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              <div className="grid md:grid-cols-[300px,1fr] gap-8">
                {/* Book Cover */}
                <div className="card-scholarly p-0 overflow-hidden">
                  <div className="aspect-[2/3] bg-primary/5 flex items-center justify-center">
                    {selectedBook.coverImage ? (
                      <img
                        src={selectedBook.coverImage}
                        alt={selectedBook.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-center p-6">
                        <p className="font-heading text-xl font-semibold text-display">
                          {selectedBook.title}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Book Info */}
                <div>
                  <h4 className="font-heading text-3xl font-semibold text-display mb-2">
                    {selectedBook.title}
                  </h4>
                  {selectedBook.subtitle && (
                    <p className="font-heading text-xl text-body/80 mb-4">
                      {selectedBook.subtitle}
                    </p>
                  )}
                  <div className="flex gap-4 text-sm text-body/70 font-body mb-6">
                    <span>{selectedBook.year}</span>
                    <span>•</span>
                    <span>{selectedBook.publisher}</span>
                    <span>•</span>
                    <span>ISBN: {selectedBook.isbn}</span>
                  </div>

                  <p className="text-body font-body leading-relaxed mb-8">
                    {selectedBook.description}
                  </p>

                  {/* Purchase Links */}
                  <div>
                    <h5 className="font-heading text-lg font-semibold text-display mb-4">
                      Purchase Options
                    </h5>
                    <div className="flex flex-wrap gap-3">
                      {selectedBook.purchaseLinks.map((link, index) => (
                        <a
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-body text-sm"
                        >
                          {link.label}
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Publications;
