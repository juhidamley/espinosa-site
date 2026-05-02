type LeadershipModule = {
  role: string;
  meta?: string;
  date?: string;
  description?: string;
  details?: string[];
};

const getModuleLength = (item: LeadershipModule) => {
  const parts = [item.role, item.meta, item.date, item.description, ...(item.details ?? [])].filter(Boolean);
  return parts.join(" ").length;
};

const getModuleSpanClass = (item: LeadershipModule) => {
  const length = getModuleLength(item);

  if (length > 260) {
    return "md:col-span-2 xl:col-span-3";
  }

  if (length > 170) {
    return "md:col-span-2";
  }

  return "";
};

const leadershipSections: Array<{
  title: string;
  intro: string;
  items: LeadershipModule[];
}> = [
  {
    title: "Leadership in the Profession & National and International Influence",
    intro:
      "Selected leadership roles, public scholarship, and national and international engagements that shaped scholarly conversations and broadened the reach of Professor Espinosa's work.",
    items: [
      {
        role: "Religion, Race, Gender & 2024 Election Conference",
        meta: "Claremont McKenna College",
        date: "October 31, 2024",
        description:
          "Post-Election Symposia on November 7, 2024 brought together 15 leading social scientists, scholars, and religious leaders to discuss the 10 most important segments of the 2024 U.S. electorate: Blacks, Latinos, Asians, Jews, Muslims, women, Catholics, evangelicals, mainline Protestants, and seculars.",
      },
      {
        role: "Founding Co-Editor",
        meta: "Columbia University Press Series in Religion and Politics with Chet Gillis of Georgetown University",
        date: "2007-present",
      },
      {
        role: "Founding Board of Advisors",
        meta: "John C. Danforth Center on Religion & Politics, Washington University in St. Louis",
      },
      {
        role: "Founding Board of Advisors",
        meta: "Oxford Bibliographies in Latino Studies, Oxford University Press",
      },
      {
        role: "Committee on Racial & Ethnic Minorities (CREM) in the Profession",
        meta: "American Academy of Religion",
        date: "2010-14",
      },
      {
        role: "President",
        meta: "La Comunidad of Hispanic Scholars of Religion, American Academy of Religion",
        date: "2008-2011",
      },
      {
        role: "Vice President",
        meta: "La Comunidad of Hispanic Scholars of Religion, American Academy of Religion",
        date: "2004-2007",
      },
      {
        role: "Invited VIP Participant",
        meta: "White House briefing for religion scholars; John McCain roundtable on comprehensive immigration reform; Arianna Huffington event on rebranding the Democratic Party",
      },
      {
        role: "Selection Committee Member",
        meta: "Hispanic Theological Initiative Book Prize",
        date: "Two terms",
      },
      {
        role: "Official National Nominator",
        meta: "18th Annual Heinz Award for the late Senator John Heinz",
      },
      {
        role: "Scholarly Commentary",
        meta: "Cited in the Los Angeles Times, Chicago Tribune, Dallas Morning News, Boston Globe, Miami Herald, Christian Science Monitor, BBC World News, Univision, KCET, AP, Newsweek, and others",
      },
      {
        role: "Scholarly Paper Presentations",
        meta: "Harvard, Yale, Princeton, Dartmouth, Penn, Chicago, Northwestern, Notre Dame, St. Louis University, UCLA, USC, UCSD, UCSB, Paris, Prague, Odessa, Uppsala, Linköping, and the Swedish Parliament",
      },
      {
        role: "Chair",
        meta: "Department of Religious Studies, Claremont McKenna College",
        date: "2008-2011 and 2018-2021",
      },
      {
        role: "Racial-Ethnic Cultural Understanding General Education Proposal",
        date: "2021-present",
      },
      {
        role: "Crisis in Ukraine Symposium and War in Ukraine Social Engagement Fair",
        date: "2021-2022",
      },
      {
        role: "7 Claremont Colleges Faculty Leadership Program",
      },
      {
        role: "Project Director",
        meta: "Latino Religions and Politics National Survey (n = 1,104)",
        date: "Fall 2008",
      },
      {
        role: "Project Manager",
        meta: "Hispanic Churches in American Public Life (HCAPL) Project and Surveys",
        date: "1999-2002",
        description:
          "Funded by a $1.3 million grant from The Pew Charitable Trusts. The project fielded three surveys, including a U.S. Latino national survey, a Puerto Rican island survey, a religious leaders survey, and a civic leaders survey, and interviewed 266 Latinos in 45 congregations representing 25 religious traditions.",
      },
      {
        role: "Directed Seven Conferences",
        meta: "U.S. and Europe, including UCSB (2000), Vanguard (2001), Washington, D.C. (2002), Claremont McKenna College (2005), Germany (2015), Ukraine (2020), and a symposium at Claremont McKenna College in 2019",
      },
      {
        role: "Survey and Community Profile Leadership",
        meta: "Methodology, framework, instruments, bilingual research teams, and oral history/interview supervision",
      },
      {
        role: "Scholarly External Reviewer",
        meta: "Oxford, Columbia, Penn State, Cornell, Duke, Florida, and other university presses; Journal of Politics, Political Behavior, Social Science Quarterly, Latino Studies, Journal of Race, Ethnicity, and Religion, Church History, Religion Compass, Journal for the Scientific Study of Religion, Citizenship Studies, and other journals",
      },
      {
        role: "Mentoring, Faculty Advising, and Teaching",
        meta: "Religion, politics, race, violence, film, and American religious history",
        description:
          "Courses include Religion, Race, and the Civil Rights Movement; U.S. Latino Religions and Politics; Mystics, Prophets, and Social Change; American Religions and Politics; Religion, Politics, and Global Violence; American Religious History; Religion and American Film; Race and Religion in Hollywood Film; and Hip-Hop, Religion and Revolution.",
      },
      {
        role: "Institutional Service and Civic Engagement",
        meta: "Racial reconciliation, inter-religious dialogue, social justice work, and collaborative campus initiatives",
      },
    ],
  },
  {
    title: "Institutional Leadership, Service, Mentoring, Faculty Advising, Teaching",
    intro:
      "Institutional leadership, service, mentoring, faculty advising, research administration, and teaching across departments, colleges, centers, and collaborative projects.",
    items: [
      {
        role: "Conference on Religion, Race, Gender, and the 2024 Election",
        meta: "Pre- and Post-Election Conferences, Claremont McKenna College",
        date: "October 31 and November 7, 2024",
        description:
          "Supervised 10 research assistants for the conference and post-election symposium.",
      },
      {
        role: "Conference on the War in Ukraine",
        description:
          "Supervised 10 research assistants for the conference and related public programming.",
      },
      {
        role: "7 Claremont Colleges Faculty Leadership Program",
        description:
          "Selected by Claremont McKenna College to participate in the program.",
        details: [
          "The stated goal of the program is to cultivate talented and diverse faculty leaders.",
          "The program seeks to explore short-term and long-term strategies for promoting institutional health amid the changing landscape of higher education.",
          "It seeks to identify the attributes and skills needed for successful development into leadership roles.",
          "It seeks to cultivate relationships with current and future leaders across The Claremont Colleges.",
          "It seeks to increase awareness of how to manage crises and support all members of the campus community.",
          "It seeks to identify behaviors, techniques, and practices that promote equity, diversity, and inclusion.",
        ],
      },
      {
        role: "Chair",
        meta: "Department of Religious Studies, Claremont McKenna College",
        date: "2009-2011, 2013, 2018-2021",
      },
      {
        role: "Chair",
        meta: "5 Claremont Colleges Religious Studies Program",
        date: "2009-2011, 2018-2021",
      },
      {
        role: "Co-Chair with Daniel Livesay",
        meta: "Racial-Ethnic Cultural Understanding GE Proposal Subcommittee, CMC",
        date: "2020-21",
      },
      {
        role: "Chair",
        meta: "7 Claremont Colleges Committee on Religious Affairs (CORA)",
        date: "2013-2016, 2017-2018",
        details: [
          "Proposed and initiated rotation of RS Theory and Methods course: RLST 180 Interpreting Religious Worlds.",
          "Proposed, facilitated, and co-worked with Dr. Luis Sales (Scripps) on the new 5Cs Intercollegiate RS Website.",
          "Organized many fall, spring, and graduation pre-registration events, dinners, events, and course booklets.",
        ],
      },
      {
        role: "Chair",
        meta: "Department of Religious Studies Internal CMC Curricular Review and External Review by WASC",
      },
      {
        role: "Chair",
        meta: "3 Faculty Searches in the History of Christianity and Islamic Studies and Chair of 5 Adjunct Appointments",
      },
      {
        role: "Curricular Leadership",
        meta: "CMC Religious Studies Major and Curriculum",
        description:
          "Facilitated and wrote the first draft of the revised CMC Religious Studies major and curriculum.",
        details: [
          "Facilitated and drafted the revised CMC RS tenure and promotion standards in 2009.",
          "Proposed and drafted the new individualized Religious Studies concentration in the RS major.",
          "Proposed to the CMC Curriculum Committee the 3-week Summer School track.",
          "Received a major financial gift to CMC by a former RS major's family in the name of Gastón Espinosa.",
          "Led and coordinated over 20 field trips to churches, mosques, Buddhist temples, and other sites.",
          "Initiated and drafted the RS Department statement in support of anti-racism and the Black community.",
        ],
      },
      {
        role: "Member and Liaison",
        meta: "Claremont Graduate University Coptic Studies Council",
        date: "2007-2009",
      },
      {
        role: "Keynote Presentations",
        meta: "CUC Chicano/Latino Student Association, Library, Chaplaincy events",
      },
      {
        role: "CMC Committee Service",
        meta: "APT, SAC, TOP Searches, President's Anti-Racism Initiative, Curriculum C, Athenaeum, Chaplaincy, Recruitment",
      },
      {
        role: "Search Committee Service",
        meta: "History of Christianity (CMC, chair), Islamic Studies (CMC, chair), Hinduism (CMC), Religion and Science (Mudd), American History (CMC), Protestant Chaplain (CUC), Stoughton Endowed Chair in Religion (CMC), Mormon Studies Chair at CGU (two searches)",
      },
      {
        role: "Director",
        meta: "Religion & American Presidency Conference at CMC",
        date: "April 2005",
        description:
          "Eight students assisted, and 20 scholars participated along with TIME reporter David Aikman and U.S. Senator Carol Moseley Braun.",
      },
      {
        role: "Advisor",
        meta: "Latino Student Association (LSA) and Muslim Student Association (MSA)",
      },
      {
        role: "PhD Dissertation Chair",
        meta: "3 Claremont Graduate University students",
      },
      {
        role: "MA Dissertation/Thesis or Exam Chair or Committee Member",
        meta: "12 Claremont Graduate University and UCR students",
      },
      {
        role: "Thesis Advisor/Reader",
        meta: "35 BA, MA, and PhD students",
        description:
          "11 students won awards in 2006, 2007, 2008, 2010, and 2012-2016.",
      },
      {
        role: "Speaker",
        meta: "Two CGU fundraising events for a Chair in Mormonism and a Chair in Catholic Studies",
      },
      {
        role: "Faculty Mentor",
        meta: "Hispanic Theological Initiative (HTI) for PhD students",
      },
      {
        role: "Faculty Mentor",
        meta: "AAR Committee on Racial and Ethnic Minorities (CREM) in the Profession",
      },
      {
        role: "César Chávez Day Annual Celebration Events",
        meta: "Pomona",
        description: "Drove CMC students to events in 2009 and 2011.",
      },
      {
        role: "Presentations",
        meta: "Chicano/Latino Students Association Center for Hispanic Heritage Month",
      },
      {
        role: "Participant",
        meta: "CUC Graduate Student of Color Lunch",
        date: "April 4, 2012",
        description: "Claremont, CA.",
      },
    ],
  },
];

const Leadership = () => {
  return (
    <section className="py-24 bg-background">
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h1 className="font-heading text-4xl md:text-5xl font-semibold text-display mb-4">
              Leadership
            </h1>
            <p className="font-body max-w-3xl text-foreground/70">
              Two areas of leadership highlight Professor Espinosa's work in the profession and in institutional life.
            </p>
          </div>

          <div className="space-y-8">
            {leadershipSections.map((section) => (
              <article key={section.title} className="card-scholarly p-8 md:p-10">
                <h2 className="font-heading text-2xl md:text-3xl font-semibold text-display mb-4">
                  {section.title}
                </h2>
                <p className="text-body font-body leading-relaxed mb-6 max-w-4xl">
                  {section.intro}
                </p>
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 md:grid-flow-dense">
                  {section.items.map((item) => (
                    <div
                      key={`${item.role}-${item.meta ?? ""}-${item.date ?? ""}`}
                      className={`rounded border border-border/70 bg-background/70 p-4 text-body font-body leading-relaxed shadow-sm ${getModuleSpanClass(item)}`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="font-heading text-lg font-semibold text-display leading-snug">
                          {item.role}
                        </h3>
                        {item.date && (
                          <span className="shrink-0 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                            {item.date}
                          </span>
                        )}
                      </div>
                      {item.meta && (
                        <p className="mt-2 text-sm font-medium text-foreground/70">
                          {item.meta}
                        </p>
                      )}
                      {item.description && (
                        <p className="mt-3 text-sm text-foreground/70">
                          {item.description}
                        </p>
                      )}
                      {item.details && (
                        <ul className="mt-3 space-y-2 text-sm text-foreground/70">
                          {item.details.map((detail) => (
                            <li key={detail} className="flex gap-2">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
