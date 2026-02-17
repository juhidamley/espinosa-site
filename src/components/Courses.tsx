import { Calendar } from "lucide-react";
import { useMemo, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const undergraduateCourses = [
  {
    code: "FHS 10",
    title: "Mystics, Prophets, and Social Change",
    semester: "FA2025",
    themes: ["Religion", "American History & Culture"],
    fulfills: ["FHS"],
    description:
      "This reading and writing seminar introduces students to some of the most important religious and secular mystics, prophets, and social radicals in human history. It explores how and why their ideas and critiques of God, sin, justice, and/or salvation positively and negatively shaped their attitude towards religion, politics, and calls for revolutionary social change. We also explore why many of their ideas continue to shape religion, culture, and politics around the world to this day. Thinkers analyzed include Moses, Confucius, The Buddha, Lao Tzu, Jesus, Mohammad, Joan of Arc, Aquinas, Martin Luther, John Calvin, Thomas Jefferson, James Madison, Bartolomé de las Casas, Angelina Emile Grimké, Charles Darwin, Karl Marx, Sigmund Freud, Chairman Mao, William James, Theodore Herzl, Walter Rauschenbusch, Gandhi, Abdul Ghaffar Khan, Martin Luther King, Jr., Elizabeth Cady Stanton, Mary Daly, Leonardo Boff, Billy Graham, Oprah Winfrey, Angela Davis, and others.",
  },
  {
    code: "FHS 10",
    title: "Race: A History",
    semester: "SP2019",
    themes: ["Race", "American History & Culture"],
    fulfills: ["FHS"],
    description:
      "This course will examine the history of racism, racial prejudice, and discrimination around the world and in the U.S. In particular, it will examine the historical development of racism with particular focus on the post-1800 period. Special attention will be paid to the intellectual and scientific origins of racism and racial views in Europe and North America, with additional reading on Asia, the Middle East and Africa. The course will explore racialization among Christians, Muslims, Jews, Buddhists, and Shinto practitioners and racial-ethnic minority prejudice. It will conclude by analyzing how racial-ethnic minorities have attempted to resist racism and social marginalization, whether or not race is a myth as some have argued, and what strategies one can adopt to overcome racism.",
  },
  {
    code: "RLST 37",
    title: "History of World Christianity",
    semester: "N/A",
    themes: ["Religion"],
    fulfills: ["N/A"],
    description:
      "Explores the history of Christianity from Jesus to the present in the Middle East, Europe, Africa, Asia, and the Americas. Focus on key debates and controversies over the canon of Scripture, orthodoxy versus heresy, the papacy, church-state conflicts, the crusades, Christian-Muslim-Jewish debates, the Protestant Reformation, Christian feminism, liberalism, fundamentalism, evangelicalism and pentecostalism, liberation theology, and key struggles over missions, colonialism, and indigenization",
  },
  {
    code: "RLST 83",
    title: "Hip-Hop, Religion and Revolution",
    semester: "SP2026",
    themes: ["Religion", "Race", "Pop Culture", "Black History & Culture"],
    fulfills: ["Religious Studies", "PZ Humanities/Fine Arts", "HM 5C HSA Courses", "CMC Religious Studies GE", "SC Letters GE"],
    description:
      "The seminar critically examines the revolutionary intersections of religion, race, and Hip-Hop.  It explores how Black and to a lesser extent Latino, Muslim, and Jewish Hip-Hop, R&B, and other music artists have drawn on their racial-ethnic and/or religious identities, upbringings, indigenous knowledge, and racialized experiences to shape their music and messages to the masses from the 1960s to the present and how they call for revolutionary social change in their opposition to anti-Black racism and other forms of discrimination in society.  It also explores how they have sought to transform the social construction their racial identities and used their superstar power and platforms to promote racial justice and change.  The class will be divided up into three parts.  Artists critically analyzed include Mahalia Jackson, Sam Cooke, Nina Simone, Tupac, NWA, Ice-Cube, Jay-Z, Kanye West, Kendrick Lamar, Beyoncé, Nicki Minaj, Drake, Latifah, The Weekend, Usher, DJ. Khaled, Lacrae, Talib Kweli, Eminem, and Daddy Yankee, among others.  We will explore two or more artists per week through scholarly books and articles, biographies, song lyrics, and music videos.",
  },
  {
    code: "RLST 84",
    title: "Religion, Race, and the Civil Rights Movement",
    semester: "SP2025",
    themes: ["Religion", "Race", "Politics", "Black History & Culture", "Latino History & Culture"],
    fulfills: ["Religious Studies", "American Studies", "CMC Religious Studies GE", "CMC Public Policy Major", "Holocaust & Human Rights", "SC Letters GE"],
    description:
      "Examines the influence of religion on the origins and development of white supremacy and the pan-ethnic civil rights movement in the U.S. by focusing on the African American, Mexican American/Chicano, and American Indian (AIM) struggles. It will analyze how Protestants, Catholics, Muslims, and Native Americans such as Martin Luther King, Jr., Malcolm X, César Chávez, Ralph Abernathy, Reies López Tijerina, Dolores Huerta, Dennis Banks, and others drew on their religious ideologies, symbols, texts, and counter-narratives in their struggles against white supremacy, segregation, political disenfranchisement, and for civil rights and social justice. Particular focus will be paid to the post-1950 struggles.",
  },
  {
    code: "RLST 125",
    title: "Race and Religion in Hollywood Film",
    semester: "FA2025",
    themes: ["Film", "Race", "Black History & Culture", "Latino History & Culture"],
    fulfills: ["Religious Studies", "Media Studies", "PZ Humanities/Fine Arts", "HM 5C HSA Courses", "CMC Religious Studies GE", "SC Race & Ethnic St GE", "SC Letters GE"],
    description:
      "This course critically examines how Blacks, Latinos/as, and Native Americans have been depicted and socially constructed in Hollywood-distributed films over the past century. We analyze and interpret how film can function as a vehicle for racial, religious, political, gender, and social commentary, conscientization, protest, and reconciliation. After briefly examining film structure and screenwriting, the course analyzes the intersection of race and religion via leaders, traditions, motifs, and sensibilities in genres such as: Science Fiction (Avatar), Action-Adventure (Indiana Jones Temple of Doom, Live & Let Die), Westerns (Conquest of Cochise, Magnificent 7), Drama (Birth of a Nation, Mi Familia, Colors, Malcolm X, César Chávez, Selma), Comedies (Sister Act), and Animation (Pocahontas). We interpret film as a cultural canvas that imparts not only the writer and director's vision about the social construction of race, religion and society, but also those of the masses.",
  },
  {
    code: "RLST 138",
    title: "American Religious History",
    semester: "N/A",
    themes: ["Religion", "American History & Culture"],
    fulfills: ["N/A"],
    description:
      "Examines American religious history from the pre-Columbian period to the present. It explores the origins, development, and key conflicts and turning points in the history of Native American, Liberal and Mainline Protestant, Catholic, Fundamentalist, Evangelical, Pentecostal, Jewish, Muslim, Hindu, Buddhist, Mormon, Spiritualist, and other religious traditions. It will pay attention to struggles over religion, race, slavery, civil rights, gender and sexuality, and social reform.",
  },
  {
    code: "RLST 136",
    title: "Religion in Contemporary America",
    semester: "N/A",
    themes: ["Religion", "American History & Culture"],
    fulfills: ["N/A"],
    description:
      "Explores the religious, spiritual, and sociological trends and developments in American religions since the 1960s with particular attention to race, ethnicity, gender, church-state debates, moral issues, and politics.",
  },
  {
    code: "RLST 153",
    title: "Religion and American Politics",
    semester: "N/A",
    themes: ["Religion", "Politics", "American History & Culture"],
    fulfills: ["N/A"],
    description:
      "Explores major debates and controversies in American religions and politics from the colonial period to the present. Special attention will be paid to debates about the impact of religion on the Constitution, the Bill of Rights, the Declaration of Independence, African-American and Latino Civil Rights movements, the Christian Right, Church-State debate, and religion and political views of women, seculars, Blacks, Latinos, Jews, and Muslims.",
  },
  {
    code: "RLST 166b",
    title: "Religion, Politics and Global Violence",
    semester: "SP2026",
    themes: ["Religion", "Politics"],
    fulfills: ["Religious Studies", "Middle Eastern Studies", "PZ Humanities/Fine Arts", "HM 5C HSA Courses", "CMC Religious Studies GE", "CMC Leadership Breadth", "Holocaust & Human Rights", "SC Letters GE", "PO Area 3 Requirement"],
    description:
      "Examines the intersection of religion, politics, and global violence. It explores how Christians, Muslims, Jews, Hindus, and Buddhists have used the name of God(s), religious history, and/or religious ideology to justify war, acts of violence, and terrorism. It analyzes external violence between world religions (e.g., Hindu-Muslim) and internal violence within religions (e.g., Protestant-Catholic, Shia-Sunni). It explores religion and cultural nationalism; religious discrimination, ethnic cleansing, and genocide. It focuses on historical and contemporary religious wars and religiously inspired violence in (1) the Middle East – Israel/Palestine, (2) the Balkans – Bosnia & Serbia, (3) Iraq & Iran, (4) Afghanistan, (5) Northern Ireland, (6) U.S., (7) Sudan, (8) Rwanda, (9) Sri Lanka, and (10) India.",
  },
  {
    code: "RLST 171",
    title: "Religion and Film",
    semester: "FA2024",
    themes: ["Religion", "Film"],
    fulfills: ["Religious Studies", "Media Studies", "PZ Humanities/Fine Arts", "HM 5C HSA Courses", "CMC Religious Studies GE", "SC Letters GE", "PO Area 3 Requirement"],

    description:
      "Employs critical race, gender, and post-colonial theories and frameworks to analyze the role of religious symbols, rhetoric, values, and world-views in American film. After briefly examining film genre, structure, and screenwriting, the course will explore religious sensibilities in different genres such as: Historical Epic (10 Commandments, Gandhi, The Message), Action/Adventure (Indiana Jones & Temple of Doom, Pocahontas), Science Fiction (Star Wars, Matrix), Comedy (Heaven Can Wait, Dogma), Drama (Exorcist, The Mission), Westerns/War (Platoon, Pale Rider, 3:10 to Yuma), Musicals (Jesus Christ Superstar, Yentl), and Politics (Romero, Malcolm X).",
  },
  {
    code: "RLST 173",
    title: "U.S. Latino Religions and Politics",
    semester: "SP2020",
    themes: ["Religion", "Politics", "Latino History & Culture"],
    fulfills: ["Religious Studies", "Latin American Studies", "HM 5C HSA Courses", "CMC Religious Studies GE", "PO Area 3 Requirement"],
    description:
      "Examines the critical impact of religion on Latino politics and civic activism in the United States. Special attention will be paid to religion and the Chicano movement, César Chávez¹s farmworkers struggle, Reies López Tijerina¹s land grant struggle, the Sanctuary movement, and the Elián González controversy. It will also how Latino Catholic, Mainline Protestant, Evangelical, and Pentecostal religious affiliation shapes party affiliation, presidential voting, and church-state and social attitudes. Offered every third year.",
  },
  {
    code: "RLST 174",
    title: "Religion and the American Presidency",
    semester: "N/A",
    themes: ["Religion", "Politics", "American History & Culture"],
    fulfills: ["N/A"],
    description:
      "Explores how religious symbols, traditions, and worldviews shaped the Founding Fathers and the domestic and foreign policies of presidents Washington, Jefferson, Madison, Lincoln, FDR, Truman, Eisenhower, JFK, Carter, Reagan, Bush Sr., Clinton, and Bush Jr. Special attention will be paid to civil religion, religious pluralism, and key theoretical interpretations of religion and the presidency.",
  },
  {
    code: "RLST 176",
    title: "Visionaries/Prophets/Leadership",
    semester: "SP2021",
    themes: ["Religion", "Politics", "Leadership"],
    fulfills: ["Religious Studies", "Leadership Studies", "PZ Humanities/Fine Arts", "HM 5C HSA Courses", "CMC Religious Studies GE", "CMC Leadership Breadth", "PO Area 3 Requirement"],
    description:
      "This course examines the transformative leadership visions, methods, and practices of internationally recognized religious and secular founders, innovators, and societal prophets. It analyzes their leadership styles, communication strategies, marketing techniques, psychological appeals, and how they kept their leadership styles and religious or secular visions grounded in the hopes and dreams of the masses. Each week we analyze one but occasionally two (for contrast) leaders like Moses, Confucius, Buddha, Jesus, Muhammad, Joan of Arc, Martin Luther, Bartolomé de las Casas, Theodor Herzl, Elizabeth Cady Stanton, Chairman Mao, Gandhi, Abdul Ghaffar Khan, Dorothy Day, M.L.King, Gustavo Gutiérrez, Billy Graham, Rosemary Radford Reuther, Indira Gandhi, Muhammad Yunus, Desmond Tutu, the Dalai Lama.",
  },
  
];

const graduateCourses = [
  {
    code: "RLST 463",
    title: "U.S. Religions, 1870-Present. CGU HC",
    semester: "N/A",
    themes: ["Religion", "American History & Culture"],
    fulfills: [],
    description:
      "The course will examine U.S. Religions from 1870-Present with special attention to American religious historiography; religion, race, and civil rights; religion, race, and politics; Pentecostalism, Evangelicalism, Catholicism; African American, Latino, and Asian American religious expressions; the impact of American Christianity on Global Christianity; and historical and contemporary sociology of religion, generational shifts, and religious diversity and pluralism.",
  },
  {
    code: "RLST 419",
    title: "Race and Ethnicity in American Religions. CGU HC",
    semester: "N/A",
    themes: ["Religion", "Race", "American History & Culture"],
    fulfills: [],
    description:
      "This course analyzes the retelling of U.S. religious history and the new religious America in light of the histories, struggles for civil rights and liberation, and immigration trends of racial-ethnic minorities. In particular, it focuses on how the alternative narratives of African American and especially U.S. Latino and Asian American religions problematize and call for a reconceptualization of American religious history.",
  },
];

type Course = {
  code: string;
  title: string;
  semester: string;
  schedule?: string;
  enrollment?: string;
  themes: string[];
  fulfills: string[];
  description: string;
};

const CourseCard = ({ course }: { course: Course }) => {
  return (
    <div className="card-scholarly p-8 flex flex-col md:flex-row gap-6 h-full">
      <div className="flex-1">
        <div className="mb-4">
          <span className="text-primary font-body text-sm font-semibold">
            {course.code}
          </span>
        </div>
        <h3 className="font-heading text-xl font-semibold text-display mb-3">
          {course.title}
        </h3>
        <p className="text-body font-body text-sm leading-relaxed">
          {course.description}
        </p>
      </div>
      <div className="space-y-3 pt-4 md:pt-0 md:border-l md:border-border md:pl-6 border-t md:border-t-0 md:w-1/4 md:shrink-0">
        <div className="flex items-center gap-3 text-caption text-sm">
          <Calendar className="w-4 h-4" />
          <span>Last Offered: {course.semester}</span>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground mb-2">
            Themes
          </p>
          <div className="flex flex-wrap gap-2">
            {course.themes.map((tag) => (
              <span key={`${course.code}-${course.title}-theme-${tag}`} className="text-xs font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full bg-muted text-muted-foreground truncate max-w-[120px] cursor-help" title={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground mb-2">
            Fulfillment
          </p>
          {course.fulfills.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {course.fulfills.map((tag) => (
                <span key={`${course.code}-${course.title}-fulfills-${tag}`} className="text-xs font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full bg-muted text-muted-foreground truncate max-w-[120px] cursor-help" title={tag}>
                  {tag}
                </span>
              ))}
            </div>
          ) : (
            <span className="text-xs text-muted-foreground">—</span>
          )}
        </div>
      </div>
    </div>
  );
};

const Courses = () => {
  const [selectedTheme, setSelectedTheme] = useState<string>("all");
  const [selectedFulfillment, setSelectedFulfillment] = useState<string>("all");
  const [selectedLevel, setSelectedLevel] = useState<string>("all");
  const [sortOrder, setSortOrder] = useState<string>("default");

  const themeOptions = useMemo(() => {
    const tagSet = new Set<string>();
    [...undergraduateCourses, ...graduateCourses].forEach((course) => {
      course.themes.forEach((tag) => tagSet.add(tag));
    });
    return Array.from(tagSet).sort((a, b) => a.localeCompare(b));
  }, []);

  const fulfillmentOptions = useMemo(() => {
    const tagSet = new Set<string>();
    [...undergraduateCourses, ...graduateCourses].forEach((course) => {
      course.fulfills.forEach((tag) => tagSet.add(tag));
    });
    return Array.from(tagSet).sort((a, b) => a.localeCompare(b));
  }, []);

  const filteredUndergraduate = useMemo(() => {
    if (selectedLevel === "graduate") {
      return [];
    }
    let filtered = undergraduateCourses.filter((course) => {
      const themeMatch =
        selectedTheme === "all" || course.themes.includes(selectedTheme);
      const fulfillmentMatch =
        selectedFulfillment === "all" ||
        course.fulfills.includes(selectedFulfillment);
      return themeMatch && fulfillmentMatch;
    });

    if (sortOrder === "newest") {
      filtered = [...filtered].sort((a, b) => {
        if (a.semester === "N/A") return 1;
        if (b.semester === "N/A") return -1;
        
        const aYear = parseInt(a.semester.slice(-4));
        const bYear = parseInt(b.semester.slice(-4));
        const aSeason = a.semester.slice(0, 2);
        const bSeason = b.semester.slice(0, 2);
        
        if (aYear !== bYear) return bYear - aYear;
        return bSeason === "FA" && aSeason === "SP" ? -1 : 1;
      });
    } else if (sortOrder === "oldest") {
      filtered = [...filtered].sort((a, b) => {
        if (a.semester === "N/A") return 1;
        if (b.semester === "N/A") return -1;
        
        const aYear = parseInt(a.semester.slice(-4));
        const bYear = parseInt(b.semester.slice(-4));
        const aSeason = a.semester.slice(0, 2);
        const bSeason = b.semester.slice(0, 2);
        
        if (aYear !== bYear) return aYear - bYear;
        return aSeason === "SP" && bSeason === "FA" ? -1 : 1;
      });
    }

    return filtered;
  }, [selectedTheme, selectedFulfillment, selectedLevel, sortOrder]);

  const filteredGraduate = useMemo(() => {
    if (selectedLevel === "undergraduate") {
      return [];
    }
    let filtered = graduateCourses.filter((course) => {
      const themeMatch =
        selectedTheme === "all" || course.themes.includes(selectedTheme);
      const fulfillmentMatch =
        selectedFulfillment === "all" ||
        course.fulfills.includes(selectedFulfillment);
      return themeMatch && fulfillmentMatch;
    });

    if (sortOrder === "newest") {
      filtered = [...filtered].sort((a, b) => {
        if (a.semester === "N/A") return 1;
        if (b.semester === "N/A") return -1;
        
        const aYear = parseInt(a.semester.slice(-4));
        const bYear = parseInt(b.semester.slice(-4));
        const aSeason = a.semester.slice(0, 2);
        const bSeason = b.semester.slice(0, 2);
        
        if (aYear !== bYear) return bYear - aYear;
        return bSeason === "FA" && aSeason === "SP" ? -1 : 1;
      });
    } else if (sortOrder === "oldest") {
      filtered = [...filtered].sort((a, b) => {
        if (a.semester === "N/A") return 1;
        if (b.semester === "N/A") return -1;
        
        const aYear = parseInt(a.semester.slice(-4));
        const bYear = parseInt(b.semester.slice(-4));
        const aSeason = a.semester.slice(0, 2);
        const bSeason = b.semester.slice(0, 2);
        
        if (aYear !== bYear) return aYear - bYear;
        return aSeason === "SP" && bSeason === "FA" ? -1 : 1;
      });
    }

    return filtered;
  }, [selectedTheme, selectedFulfillment, selectedLevel, sortOrder]);

  return (
      <section id="courses" className="py-24 surface-warm">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-display mb-4">
            Courses Offered
          </h2>
          <p className="text-body font-body max-w-2xl mx-auto">
            Prof. Espinosa offers a variety of courses in religious studies that touch upon a variety of fields and fulfill a variety of academic requirements. Use the filters below to explore the courses most relevant to your interests and academic needs.
          </p>
        </div>

        <div className="mb-12">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Select value={selectedTheme} onValueChange={setSelectedTheme}>
              <SelectTrigger className="w-[220px]">
                <SelectValue placeholder="Themes" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Themes</SelectItem>
                {themeOptions.map((tag) => (
                  <SelectItem key={tag} value={tag}>
                    {tag}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedFulfillment} onValueChange={setSelectedFulfillment}>
              <SelectTrigger className="w-[220px]">
                <SelectValue placeholder="Fulfillment" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Fulfillment</SelectItem>
                {fulfillmentOptions.map((tag) => (
                  <SelectItem key={tag} value={tag}>
                    {tag}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedLevel} onValueChange={setSelectedLevel}>
              <SelectTrigger className="w-[220px]">
                <SelectValue placeholder="Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="undergraduate">Undergraduate</SelectItem>
                <SelectItem value="graduate">Graduate</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortOrder} onValueChange={setSortOrder}>
              <SelectTrigger className="w-[220px]">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default Order</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
              </SelectContent>
            </Select>

            {(selectedTheme !== "all" || selectedFulfillment !== "all" || selectedLevel !== "all" || sortOrder !== "default") && (
              <button
                type="button"
                onClick={() => {
                  setSelectedTheme("all");
                  setSelectedFulfillment("all");
                  setSelectedLevel("all");
                  setSortOrder("default");
                }}
                className="rounded-full border border-border px-4 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground hover:border-primary/50"
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>

        <div className="mb-14">
          <h3 className="font-heading text-2xl font-semibold text-display mb-6 text-center">
            Undergraduate Courses
          </h3>
          <div className="space-y-8">
            {filteredUndergraduate.map((course) => (
              <CourseCard key={`${course.code}-${course.title}`} course={course} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-heading text-2xl font-semibold text-display mb-6 text-center">
            Graduate Courses
          </h3>
          <div className="space-y-8">
            {filteredGraduate.map((course) => (
              <CourseCard key={`${course.code}-${course.title}`} course={course} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
