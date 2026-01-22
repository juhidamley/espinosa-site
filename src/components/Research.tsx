import researchImage from "@/assets/research.png";
const researchAreas = [
  {
    title: "Religion and Politics",
    description: [
      "American Religion and Politics",
      "U.S. Latino Religion and Politics",
      "History of Religion and the American Presidency",
      "Religion, Race, and the American Presidency",
      "Religion and the Civil Rights Movement",
      "Religion and the Mexican American Civil Rights Movement",
      "Specialized research on religion and Bill Clinton and Barack Obama",
      "Religion, Politics and Global Violence",
      "Religion and Politics in Ukraine"
    ],
    tags: [],
  },
  {
    title: "U.S. Latino Religions and Politics",
    description:[ "U.S. Latino Pentecostal/Charismatic/Evangelical Movements",
      "U.S. Latino Religious History",
      "U.S. Latino Religion, Politics, and Activism",   
      "U.S. Latino Religion, Race, and the American Presidency",
      "Latin American and Caribbean Religions"
    ],
    tags: [],
  },
  {
    title: "American Religions",
    description:["American Religious History",
      "Sociology of American Religion",
      "Pentecostal/Charismatic Origins and Historical Development",
      "Demographic Shifts in North American Religion",
      "Religion and American Film"
    ],
    tags: [],
  },
  {
    title: "Pentecostal and Charismatic Movements",
    description:
    ["American Pentecostal Origins",
      "Global Pentecostal Origins",
      "Seymour and Azusa Street Revival",
      "U.S. Latino Pentecostal Origins, History, and Politics",
      "Contemporary Latino, American, and Global Pentecostalism",
      "Latin America, Mexican, and Puerto Rican Pentecostalism"],
    tags: [],
  },

  {
    title: "Religion, Race, and Film/Media Studies",
    description:
    ["Religion and Film",
      "Religion, Race, and Film",
      "Protestants and Film",
      "Religion and Popular Culture",
      "Religion, Music, and Pop Culture",
      "Religion, Race, and Hip-Hop"],
    tags: [],
  },
];

const Research = () => {
  return (
    <section id="research" className="py-24 surface-warm">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-display mb-4">
            Research Interests
          </h2>
          <div className="flex justify-center mb-8">
            <img src={researchImage} alt="Prof. Espinosa at a conference stand." className="max-w-md w-full rounded-sm shadow-lg" />
          </div>
          <p className="text-body font-body max-w-2xl mx-auto">
            Dr. Gastón Espinosa has five overlapping areas of research, writing, and expertise.
          </p>
        </div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {researchAreas.map((area, index) => (
            <div
              key={area.title}
              className="card-scholarly p-8 hover:shadow-lg transition-shadow duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="font-heading text-2xl font-semibold text-display mb-4">
                {area.title}
              </h3>
              {Array.isArray(area.description) ? (
                <ul className="text-body font-body leading-relaxed mb-6 list-disc list-inside space-y-2">
                  {area.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-body font-body leading-relaxed mb-6">
                  {area.description}
                </p>
              )}
              <div className="flex flex-wrap gap-2">
                {area.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-primary/10 text-primary text-xs font-body font-medium rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}

          <p className="text-body font-body max-w-4xl mx-auto">
            Dr. Espinosa has conducted original archival research in over a dozen archives and private collections in the U.S., Mexico, Puerto Rico, and Europe and as a result has amassed a private collection of over 10,000 pages of primary source material on U.S. Latino, Puerto Rican, and Mexican Religions, U.S. Latino, Puerto Rican, Mexican, an Latin American Pentecostal/Charismatic Movements, American and Global Pentecostal Origins, American Religion and Politics, and Religion, Race, and the American Presidency.  Espinosa has created the survey methodology, framework, and instruments for 5 major surveys (including two national surveys), which profiled the views of more than 4,000 Latinos across the U.S. and Puerto Rico from 2000-2008.  He also created the methodology, framework, and instruments and provided the training for 266 in-person community profile interviews in 45 congregations representing 25 distinct religious traditions in 8 cities and rural areas across the U.S. and Puerto Rico: East Los Angeles, rural Colorado, San Antonio, rural Iowa, Chicago, Miami, New York City, and San Juan, Puerto Rico.  Espinosa has conducted more than 20 oral history interviews.  He holds copyright on all of the aforementioned primary source surveys, data, and community profile interviews. He has surveyed and interviewed more people on the intersection of U.S. Latino religion, politics, and civic activism than any scholar in the U.S.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Research;
