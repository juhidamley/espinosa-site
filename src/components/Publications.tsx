import { useState } from "react";
import { X, ExternalLink, ArrowUpDown, Search } from "lucide-react";

const bookCoverModules = import.meta.glob("../assets/bookCovers/*.{jpg,jpeg,png,webp,avif}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const getBookCover = (fileName: string): string => {
  return bookCoverModules[`../assets/bookCovers/${fileName}`] ?? "";
};


const books = [
  {
    id: 1,
    title: "Religion, Race, and the American Presidency",
    year: "2008",
    publisher: "Bloomsbury USA",
    isbn: "9780742563216",
    coverImage: getBookCover("rrap.jpg"),
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
    coverImage: getBookCover("lpa.jpeg"),
    description: "Every year an estimated 600,000 U.S. Latinos convert from Catholicism to Protestantism. Today, 12.5 million Latinos self-identify as Protestant—a population larger than all U.S. Jews and Muslims combined. Spearheading this spiritual transformation is the Pentecostal movement and Assemblies of God, which is the destination for one out of four converts. In a deeply researched social and cultural history, Gastón Espinosa uncovers the roots of this remarkable turn and the Latino AG’s growing leadership nationwide.",
    awardNominations: [
      "Nominated by the Prize Committee of The American Society of Church History for the 2016 Albert Outler Prize ",
      "Nominated by the Prize Committee of the Society for Pentecostal Studies for the 2016 Pneuma Book Award",
    ],
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
    coverImage: getBookCover("wjs.webp"),
    description: "In 1906, William J. Seymour (1870-1922) preached Pentecostal revival at the Azusa Street mission in Los Angeles. From these and other humble origins the movement has blossomed to 631 million people around the world. Gastón Espinosa provides new insight into the life and ministry of Seymour, the Azusa Street revival, and Seymour's influence on global Pentecostal origins. After defining key terms and concepts, he surveys the changing interpretations of Seymour over the past 100 years, critically engages them in a biography, and then provides an unparalleled collection of primary sources, all in a single volume. He pays particular attention to race relations, Seymour's paradigmatic global influence from 1906 to 1912, and the break between Seymour and Charles Parham, another founder of Pentecostalism. Espinosa's fragmentation thesis argues that the Pentecostal propensity to invoke direct unmediated experiences with the Holy Spirit empowers ordinary people to break the bottle of denominationalism and to rapidly indigenize and spread their message.",
    awardNominations: [
      "Nominated by the Prize Committee of the Society for Pentecostal Studies for the 2015 Pneuma Book Award",
    ],
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
    coverImage: getBookCover("pos.jpg"),
    description: "Protestants on Screen explores the Protestant contributions to American and European film over the past hundred years, focusing on the post-1960 period. It analyzes how Protestant filmmakers, beliefs, theology, symbols, sensibilities, and cultural patterns have shaped film. This book argues that Protestants helped birth and shape the film industry and harness the power of motion pictures for spiritual instruction, edification, and cultural influence. Despite the rapid secularization of the film industry, Protestants influenced U.S. filmmaking in three distinct ways since the 1920s. It tracks key Protestant themes like faith and doubt, sin and depravity, biblical literalism, personal conversion and redemption, holiness and sanctification, moralism and pietism, Providence and secularism, apocalypticism, righteousness and justice, religion and race, and the priesthood of all believers and its offshoots, democratization and individualism. The book problematizes the stereotype of Protestants as world-denouncing and -defying puritans and iconoclasts who stood in the way of film's maturation as an art. The authors contend that Protestants were instead among the key catalysts in the origins and development of film and contribute to this day an identifiable aesthetic impulse manifest in themes like reform, embodiment of the biblical Word, a reenchantment of the mundane, and the interplay of the literal and the symbolic.",
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
    coverImage: getBookCover("rrbo.webp"),
    description: "Contrary to popular claims, religion played a critical role in Barack Obama's 2008 election as president of the United States. Religion, race, and gender entered the national and electoral dialogue in an unprecedented manner. What stood out most in the 2008 presidential campaign was not that Republicans reached out to religious voters but that Democrats did―and with a vengeance. This tightly edited volume demonstrates how Obama charted a new course for Democrats by staking out claims among moderate-conservative faith communities and emerged victorious in the presidential contest, in part, by promoting a new Democratic racial-ethnic and religious pluralism.",
    purchaseLinks: [
      { label: "Amazon", url: "https://www.amazon.com/-/he/Gast%C3%B3n-Espinosa/dp/0415633761" },
      { label: "Routledge", url: "https://www.routledge.com/Religion-Race-and-Barack-Obamas-New-Democratic-Pluralism/Espinosa/p/book/9780415633772" },
      { label: "Google Books", url: "https://books.google.com/books/about/Religion_Race_and_Barack_Obama_s_New_Dem.html?id=eU-gs12A2ZsC&source=kp_book_description" },
    ],
  },
  {
    id: 6,
    title: "Religion and the American Presidency",
    subtitle: "George Washington to George W. Bush with Commentary and Primary Sources",
    year: "2009",
    publisher: "Columbia University Press",
    isbn: "9780231143332",
    coverImage: getBookCover("ramp.jpg"),
    description: "This book challenges the idea that the mixing of religion and presidential politics is a new phenomenon. It explores how presidents have drawn on their religious upbringing, rhetoric, ideas, and beliefs to promote their domestic and foreign policies to the nation. This influence is evident in Washington's decision to add 'so help me God' to the presidential oath, accusations by Adam's supporters that Jefferson was an infidel, Lincoln's biblical metaphors during the Civil War, and FDR's call to fight against Nazi totalitarianism on behalf of Judeo-Christian civilization. It is also apparent in Truman's support for Israel, Eisenhower's Cold War decision to add 'In God We Trust' on American currency, the debate over JFK's Catholicism, Jimmy Carter's born-again Christianity, Reagan's 'Evil Empire' speech, Clinton's public repentance, and George W. Bush's 'crusade' against Islamic terrorists.",
    purchaseLinks: [
      { label: "Amazon", url: "https://www.amazon.com/Religion-American-Presidency-Washington-Commentary/dp/023114332X" },
      { label: "Columbia UP", url: "https://cup.columbia.edu/book/religion-and-the-american-presidency/9780231143325/" },
      { label: "Google Books", url: "https://books.google.com/books?id=slyqAOhXDz8C&hl=fr&source=gbs_navlinks_s" },
    ],
  },
  {
    id: 7,
    title: "Mexican American Religions",
    subtitle: "Spirituality, Activism, & Culture with Mario Garcia",
    year: "2008",
    publisher: "Duke University Press",
    isbn: "0822388952",
    coverImage: getBookCover("mar.webp"),
    description: 'This collection presents a rich, multidisciplinary inquiry into the role of religion in the Mexican American community. Breaking new ground by analyzing the influence of religion on Mexican American literature, art, activism, and popular culture, it makes the case for the establishment of Mexican American religious studies as a distinct, recognized field of scholarly inquiry. Scholars of religion, Latin American, and Chicano/a studies as well as of sociology, anthropology, and literary and performance studies, address several broad themes. Taking on questions of history and interpretation, they examine the origins of Mexican American religious studies and Mario Barrera\'s theory of internal colonialism. In discussions of the utopian community founded by the preacher and activist Reies López Tijerina, César Chávez\'s faith-based activism, and the Los Angeles-based Católicos Por La Raza movement of the late 1960s, other contributors focus on mystics and prophets. Still others illuminate popular Catholicism by looking at Our Lady of Guadalupe, home altars, and Los Pastores dramas (nativity plays) as vehicles for personal, social, and political empowerment.',
    purchaseLinks: [
      { label: "Amazon", url: "https://www.amazon.com/Mexican-American-Religions-Spirituality-Activism/dp/0822341190" },
      { label: "Duke UP", url: "https://www.dukeupress.edu/mexican-american-religions" },
      { label: "Google Books", url: "https://books.google.com/books?id=JjpF75fFpYMC&printsec=copyright" },
    ],
  },
  {
    id: 9,
    title: "Latino Religions & Civic Activism in the United States",
    subtitle: "w/J. Miranda & V. Elizondo",
    year: "2005",
    publisher: "Oxford University Press",
    isbn: "9780195162271",
    coverImage: getBookCover("lrca.jpg"),
    description: "The Latino community in the United States is commonly stereotyped as Roman Catholic and politically passive. Latino Religions and Civic Activism in the United States challenges and revises these stereotypes by demonstrating the critical influence of Latino Catholics, Evangelicals, Pentecostals, Mainline Protestants, and others on political, civic, and social engagement in the United States and Puerto Rico. It also revises the ostensibly secular narrative of Latino history and politics. The authors analyze the critical role that institutional, popular, and civil religion have played in Latino activism. This timely book offers readers a new framework by which to understand and to interpret the central importance of religious symbols, rhetoric, ideology, world-views, and leaders to Latino religions and politics over the past 150 years.",
    purchaseLinks: [
      { label: "Amazon", url: "https://www.amazon.com/Latino-Religions-Activism-United-States/dp/0195162285" },
      { label: "Oxford UP", url: "https://global.oup.com/academic/product/latino-religions-and-civic-activism-in-the-united-states-9780195162271?cc=us&lang=en&" },
      { label: "Google Books", url: "" },
    ],
  },
  {
    id: 8,
    title: "Rethinking Latino Religions and Identity",
    subtitle: "co-edited with Miguel de la Torre",
    year: "2006",
    publisher: "Pilgrim Press",
    isbn: "0829816585",
    coverImage: getBookCover("rl.jpg"),
    description: "The essays in this book critically examine how Latinos(as) engage in defining their identity, which in turn affects how their religious beliefs and expressions are created and constructed. In addition to the co-editors, contributors include: Edwin David Aponte, Jorge A. Aquino, Michelle A. Gonzalez, Luis D. Leon, Lara Medina, Manuel Mejido Costoya, Laura E. Perez, and Manuel A. Vasquez.",
    purchaseLinks: [
      { label: "Amazon", url: "https://www.amazon.com/Rethinking-Latino-Religion-Identity-Miguel/dp/0829816585" },
      { label: "Google Books", url: "https://books.google.com/books/about/Rethinking_Latino_a_Religion_and_Identit.html?id=cy4RAQAAIAAJ" },
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
    type: "Screenplay",
    year: "2002",
    title: "Ordinary Prophet",
    publisher: "UCLA School of Theater, Film, & Television",
    description: "TODO",
  },
  {
    type: "Journal Article",
    year: "",
    title: "The Pentecostal Christology of William J. Seymour, the Azusa Street Revival, and Early Pentecostalism",
    publisher: "Religions",
    description: "TODO",
  },
  {
    type: "Journal Article",
    year: "2020",
    title: "COVID-19 Apocalypse: Pandemics, Race Riots and the End of the World,",
    publisher: "Journal of Religion and American Culture",
    description: "TODO",
  },
  {
    type: "Journal Article",
    year: "2017",
    title: "Latino Muslims the United States: Reversion, Politics, and Islamidad",
    publisher: "Journal of Race, Ethnicity, and Religion, Vol. 8, Issue 1",
    description: "TODO",
    link: "https://journals.lehigh.edu/jrer/article/view/278",
  },
  {
    type: "Journal Article",
    year: "2013",
    title: "Latino Religion, Ethnicity, and Demographic Shifts in American Public Life",
    publisher: "Politique Américaine No. 21 (France)",
    description: "TODO"    
  },
  {
    type: "Journal Article",
    year: "2013",
    title: "Mexican American and Latino Religions",
    publisher: "Oxford Annotated Bibliographies in Latino Studies",
    description: "This bibliography traces the origins and historical development of Mexican American and Latino religions in the United States and then discusses some of the most important publications in the field.",
    link: "https://www.oxfordbibliographies.com/display/document/obo-9780199913701/obo-9780199913701-0007.xml",
  },
  {
    type: "Survey",
    year: "2012",
    title: "Latino Religions and Politics Survey: Voter Report: Pre-2012 Election Findings",
    publisher: "TODO",
    description: "TODO",
  },
  {
    type: "Journal Article",
    year: "2012",
    title: "Barack Obama's Political Theology: Pluralism, Deliberative Democracy, and the Christian Faith",
    publisher: "Journal of Political Theology",
    description: "Barack Obama secured the 2008 presidency by synthesizing a diverse range of religious and secular influences into a \"political theology\" that united a broad coalition of progressive, moderate, and religious voters. His approach required both faithful and secular citizens to translate their private convictions into universal, reason-based values centered on compromise and the common good.",
    link: "https://doi.org/10.1558/poth.v13i5.610",
  },
  {
    type: "Review",
    year: "2012",
    title: "Invited Review of David Watt, Farmworkers and the Churches: The Movement in California and Texas",
    publisher: "The American Historical Review  117, no. 4",
    description: "TODO",
  },
  {
    type: "Journal Article",
    year: "2012",
    title: "Righteousness and Justice”: Latino Catholics and Protestants, Barack Obama, and the 2008 Election",
    publisher: "Journal of Race, Ethnicity, and Religion, Vol. 3, Issue 5",
    description: "This article examines how Barack Obama utilized a faith-based \"political theology\" to build a winning coalition among Latino Catholics and Protestants, effectively bridging the \"God Gap\" during the 2008 election. His work analyzes how the campaign's targeted religious outreach and inclusive moral narrative successfully reversed Republican voting trends within these key demographic groups.",
    link: "https://journals.lehigh.edu/jrer/issue/view/95",
  },
  {
    type: "Journal Article",
    year: "",
    title: "Latinos and Religion in the 2008 Presidential Election",
    publisher: "",
    description:
      "",
  },
  {
    type: "Journal Article",
    year: "2009",
    title: "Latino Religions and Politics: Catholics, Protestants, the 2008 Election and Beyond",
    publisher: "Hemisphere Volume 19, Issue 1",
    description: "Quantitative evidence regarding both the importance of the Hispanic electorate in US politics, and the importance of religion informing their political options.",
    link: 'https://lacc.fiu.edu/publications/hemisphere/19.pdf'
  },
  {
    type: "Study",
    year: "2008",
    title: "Latino Religion, Education, & Marriage in the United States",
    publisher: "Marriage & Family Review 43",
    description: "This study analyzes the Hispanic Churches in American Public Life National Survey (n = 2,060) data set to examine the relationship between religious affiliation and commitment and education, marital status, and social views in the U.S. Latino community. The findings indicate that religious affiliation and high rates of religious participation and commitment are important factors that are positively and negatively related to Latino education, marriage, and social action.",
    link: "https://doi.org/10.1080/01494920802072439"
  },
  {
    type: "Review",
    year: "2008",
    title: "Invited Review of Paul Barton, Hispanic Methodists, Presbyterians, and Baptists in Texas",
    publisher: "Reviews in Religion and Theology, Vol. 15, No. 4",
    description: "Paul Barton's study is a good introduction to three of the oldest and largest Hispanic Mainline Protestant traditions in Texas. Although framed as a comparative history, the Methodists received the most significant coverage, and the volume does not follow a strict chronological approach, but rather a thematic approach.",
    link: "https://doi.org/10.1111/J.1467-9418.2008.00398_1.X"
  },
  {
    type: "Essay",
    year: "2007",
    title: "'The Other Within': The Case for Mexican American Religious Studies",
    publisher: "American Academy of Religion Spotlight on Teaching",
    description: "This essay offers one approach to Mexican-American religions by examining the rationale for the field based upon the demographic and religious profile of the community, a working definition of Mexican-American/Chicano religions, and an ethno-phenomenological theoretical approach to interpreting Mexican-American religions that may help bridge the growing chasm between religious and theological studies. This essay is an outgrowth of my larger study on “History and Theory in the Study of Mexican American Religions,” in editors Miguel de la Torre and Gastón Espinosa’s Rethinking Latino Religions and Identity (2006).",
    link: "http://rsnonline.org/index9aa8.html?option=com_content&view=article&id=331&Itemid=416#:~:text=This%20essay%20offers%20one%20approach,Religions%20and%20Identity%20(2006)."
  },
  {
    type: "Journal Article",
    year: "2007",
    title: "'Today We Act, Tomorrow We Vote': Latino Religions, Politics, and Activism in U.S. Civil Society",
    publisher: "Annals of the American Academy of Political & Social Science",
    description: "The findings in this study indicate that Catholic and Protestant leaders like Cardinal Roger Mahony of the Archdiocese of Los Angeles and Rev. Samuel Rodríguez of the National Hispanic Christian Leadership Conference drew on religious rhetoric, symbols, moral authority, interfaith religious coalition building, and the Bible in the 2005-2007 immigration reform debate and in their struggle for greater tolerance and inclusion of Latinos in U.S. civil society. Mahony and other Catholics also drew on Catholic social teaching and several strategies employed by César Chávez in their struggles for social justice.",
    link: "https://doi.org/10.1177/0002716207301099",
  },
  {
    type: "Review",
    year: "2005",
    title: "Invited Review of Arlene Sánchez Walsh, Latino Pentecostal Identity: Evangelical Faith, Self, and Society",
    publisher: "Church History Vol. 74, No. 3",
    description: "TODO",
    link: "",
  },
  {
    type: "Journal Article",
    year: "2004",
    title: "The Pentecostalization of Latin American and U.S. Latino Christianity",
    publisher: "Pneuma: The Journal for the Society of Pentecostal Studies, Vol. 26, No. 2",
    description: "TODO",
    link: "https://doi.org/10.1163/157007404776111063",
  },
  {
    type: "Journal Article",
    year: "2004",
    title: "Changements démographiques et religieux chez les hispaniques des Etats-Unis",
    publisher: "Social Compass: International Review of Sociology of Religion",
    description: "The author explores the debate over US Latino religious affiliation. Depending on whom you believe, Latino Catholic affiliation in the United States runs from 77 to as low as 50%.",
    link: "https://doi.org/10.1177/0037768604045632",
  },
  {
    type: "Report",
    year: "2003",
    title: "Hispanic Churches in American Public Life",
    publisher: "University of Notre Dame",
    description: "This publication presents a summary of the findings of the Hispanic Churches in American Public Life (HCAPL) research project. The HCAPL project was a three-year study, funded by a grant from The Pew Charitable Trusts, that sought to examine the impact of religion on political and civic engagement in the Latino community.",
    link: "https://doi.org/10.7274/24828537",
  },
  {
    type: "Journal Article",
    year: "1999",
    title: "'El Azteca:' Francisco Olazábal and Latino Pentecostal Charisma, Power, and Healing in the Borderlands",
    publisher: "Journal of the American Academy of Religion 67/3 ",
    description: "TODO",
    link: "https://doi.org/10.1093/jaarel/67.3.597",
  },
  {
    type: "",
    year: "",
    title: "",
    publisher: "",
    description: "",
    link: "",
  },
  {
    type: "",
    year: "",
    title: "",
    publisher: "",
    description: "",
    link: "",
  },
  {
    type: "",
    year: "",
    title: "",
    publisher: "",
    description: "",
    link: "",
  },
  {
    type: "",
    year: "",
    title: "",
    publisher: "",
    description: "",
    link: "",
  },
  {
    type: "",
    year: "",
    title: "",
    publisher: "",
    description: "",
    link: "",
  },
  {
    type: "",
    year: "",
    title: "",
    publisher: "",
    description: "",
    link: "",
  },
];

const upcomingWorks = [
  {
    type: "Book",
    title: "Religion, Race, Gender, and the American Presidency: 2000-2020",
    timeline: "Summer/Fall 2026",
    status: "In Progress",
    description: "",
    link: "",
  },
  {
    type: "Book",
    title: "U.S. Latino Religions and Politics in American Public Life",
    timeline: "TBD",
    status: "In Progress",
    description: "",
    link: "",
  },
  {
    type: "Book",
    title: "The Spiritual Impulse of the Mexican American Civil Rights Movement",
    timeline: "TBD",
    status: "In Progress",
    description: "",
    link: "",
  },
  {
    type: "Book",
    title: "Religion, Race, Gender, and the 2024 Presidential Election",
    timeline: "TBD",
    status: "In Progress",
    description: "",
    link: "",
  },
];

type SortOption = "newest" | "oldest" | "alphabetical";
type PublicationViewLimit = 5 | 10 | 20 | "all";

const Publications = () => {
  const [selectedBook, setSelectedBook] = useState<typeof books[0] | null>(null);
  const [bookSort, setBookSort] = useState<SortOption>("newest");
  const [publicationSort, setPublicationSort] = useState<SortOption>("newest");
  const [publicationViewLimit, setPublicationViewLimit] = useState<PublicationViewLimit>(5);
  const [searchQuery, setSearchQuery] = useState("");

  const sortData = <T extends { year: string; title: string }>(data: T[], sortBy: SortOption): T[] => {
    const sorted = [...data];
    const getYearValue = (value: string): number | null => {
      const yearMatch = value.match(/\d{4}/);
      if (!yearMatch) return null;
      const parsed = Number.parseInt(yearMatch[0], 10);
      return Number.isFinite(parsed) ? parsed : null;
    };

    const compareByYear = (a: T, b: T, direction: "asc" | "desc"): number => {
      const aYear = getYearValue(a.year);
      const bYear = getYearValue(b.year);

      if (aYear === null && bYear === null) return a.title.localeCompare(b.title);
      if (aYear === null) return 1;
      if (bYear === null) return -1;

      return direction === "desc" ? bYear - aYear : aYear - bYear;
    };

    switch (sortBy) {
      case "newest":
        return sorted.sort((a, b) => compareByYear(a, b, "desc"));
      case "oldest":
        return sorted.sort((a, b) => compareByYear(a, b, "asc"));
      case "alphabetical":
        return sorted.sort((a, b) => a.title.localeCompare(b.title));
      default:
        return sorted;
    }
  };

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const matchesSearch = (fields: Array<string | undefined>) => {
    if (!normalizedQuery) return true;
    return fields.some((field) => field?.toLowerCase().includes(normalizedQuery));
  };

  const filteredBooks = books.filter((book) => {
    if (!book.title) return false;
    return matchesSearch([
      book.title,
      book.subtitle,
      book.publisher,
      book.year,
      book.isbn,
      book.description,
    ]);
  });

  const filteredPublications = otherPublications.filter((pub) => {
    if (!pub.title) return false;
    return matchesSearch([
      pub.title,
      pub.type,
      pub.publisher,
      pub.year,
      pub.description,
    ]);
  });

  const filteredUpcomingWorks = upcomingWorks.filter((work) => {
    if (!work.title) return false;
    return matchesSearch([
      work.title,
      work.type,
      work.timeline,
      work.status,
      work.description,
    ]);
  });

  const sortedBooks = sortData(filteredBooks, bookSort);
  const sortedPublications = sortData(filteredPublications, publicationSort);
  const visiblePublications =
    publicationViewLimit === "all"
      ? sortedPublications
      : sortedPublications.slice(0, publicationViewLimit);

  return (
    <section id="publications" className="py-24 bg-background">
      <div className="section-container">
        <div className="mb-10">
          <label htmlFor="publication-search" className="block font-body text-sm text-body/80 mb-2">
            Search all publications
          </label>
          <div className="relative max-w-2xl">
            <Search className="w-4 h-4 text-body/60 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              id="publication-search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, publisher, year, topic..."
              className="w-full pl-10 pr-10 py-2.5 border border-border rounded-md bg-background text-body font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Clear publication search"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-primary/10 transition-colors"
              >
                <X className="w-4 h-4 text-body/70" />
              </button>
            )}
          </div>
        </div>

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
              {sortedBooks.length === 0 && (
                <p className="text-body/70 font-body px-1">No books match your search.</p>
              )}
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
              <select
                value={publicationViewLimit}
                onChange={(e) => {
                  const value = e.target.value;
                  setPublicationViewLimit(value === "all" ? "all" : Number(value) as PublicationViewLimit);
                }}
                aria-label="Number of publications to show"
                className="px-4 py-2 border border-border rounded-md bg-background text-body font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value={5}>Show 5</option>
                <option value={10}>Show 10</option>
                <option value={20}>Show 20</option>
                <option value="all">Show All</option>
              </select>
            </div>
          </div>

          <div className="space-y-6">
            {sortedPublications.length > 0 && (
              <p className="text-sm text-body/70 font-body">
                Showing {visiblePublications.length} of {sortedPublications.length}
              </p>
            )}
            {sortedPublications.length === 0 && (
              <p className="text-body/70 font-body">No articles or chapters match your search.</p>
            )}
            {visiblePublications.map((pub, index) => (
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

            {publicationViewLimit !== "all" && sortedPublications.length > visiblePublications.length && (
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setPublicationViewLimit((current) => {
                      if (current === 5) return 10;
                      if (current === 10) return 20;
                      return "all";
                    });
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 border border-primary/30 text-primary rounded-md hover:bg-primary/10 transition-colors font-body text-sm"
                >
                  View More
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="divider-ornate my-16">
          <span className="text-primary text-2xl">✦</span>
        </div>

        {/* Upcoming Publications & Books */}
        <div>
          <div className="mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-display mb-4">
              Upcoming Publications & Books
            </h2>
            <p className="text-body font-body leading-relaxed max-w-2xl">
              Forthcoming books, articles, and projects currently in progress.
            </p>
          </div>

          <div className="space-y-6">
            {filteredUpcomingWorks.length === 0 && (
              <p className="text-body/70 font-body">No upcoming items match your search.</p>
            )}
            {filteredUpcomingWorks.map((work, index) => (
              <div key={index} className="card-scholarly p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                        {work.type}
                      </span>
                      <span className="text-xs text-body/70 font-body uppercase tracking-wide">
                        {work.status}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-display mb-2">
                      {work.title}
                    </h3>
                    <p className="text-sm text-body/80 font-body italic mb-3">
                      {work.timeline}
                    </p>
                    <p className="text-body font-body leading-relaxed">
                      {work.description}
                    </p>
                  </div>

                  {work.link && (
                    <a
                      href={work.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-body text-sm whitespace-nowrap"
                    >
                      Learn More
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
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
                <div className="card-scholarly self-start p-0 overflow-hidden">
                  <div className="relative aspect-[2/3] overflow-hidden bg-primary/5">
                    {selectedBook.coverImage ? (
                      <img
                        src={selectedBook.coverImage}
                        alt={selectedBook.title}
                        className="absolute inset-0 block w-full h-full object-cover object-top scale-[1.02]"
                      />
                    ) : (
                      <div className="h-full flex items-center justify-center text-center p-6">
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

                  {selectedBook.awardNominations && selectedBook.awardNominations.length > 0 && (
                    <div className="mb-8">
                      <h5 className="font-heading text-lg font-semibold text-display mb-3">
                        Award Nominations
                      </h5>
                      <ul className="list-disc pl-5 space-y-2 text-body font-body leading-relaxed">
                        {selectedBook.awardNominations.map((nomination, index) => (
                          <li key={index}>{nomination}</li>
                        ))}
                      </ul>
                    </div>
                  )}

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
