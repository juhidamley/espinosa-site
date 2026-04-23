import React, { useMemo, useState } from "react";

type Appearance = {
  date?: string;
  type?: string; // e.g., "Talk", "Panel", "Performance"
  series?: string;
  title: string;
  location?: string;
  description?: string;
  link?: string;
};

const APPEARANCES: Appearance[] = [
  {
    date: "10/02/2024",
    type: "Presentation",
    title: "Latinos, Religion, and the Presidency",
    location: "University of San Diego",
  },
  {
    date: "11/30/2023",
    type: "Interview",
    title: "Interview and Dialogue with Ann Navarro (CNN)",
    location: "Garrisson Theater, Scripps College",
  },
  {
    date: "11/11/2023", 
    type: "Webinar",
    title: "Freedom of Religion Clause",
    series: "Teaching American History",
    location: "Ashland University",
  },
  {
    date: "09/23/2022", 
    type: "Presentation",
    title: "Borders, Politics, and the American Future: Latino Religions, Politics, and Society in the Wake of Charlottesville",
    location: "University of Virginia",
  },
  {
    date: "04/18/2022", 
    type: "Presentation",
    title: "Latino Pentecostals and Muslims in American Public Life",
    location: "UC Berkeley",
  },
  {
    date: "03/22/2022", 
    type: "Presentation",
    title: "Faith of César Chávez",
    location: "Claremont Colleges Lunch Forum",
    series: "Hispanic Heritage Month",
  },
  {
    date: "04/13/2021", 
    type: "Presentation",
    title: "William J. Seymour, the Azusa Revival & Black Spirituality in Los Angeles",
    location: "California African American Museum, Los Angeles",
  },
  {
    date: "01/01/2021", 
    type: "Presentation",
    title: "Latino Religions and Politics in the 2020 Election",
    location: "UC Irvine",
  },
  {
    date: "09/21/2020",
    type: "Keynote",
    title: "U.S. Latino Electorate and Voting in the Age of Trump",
    series: "Hispanic Heritage Month Speaker",
    location: "Comparative Race & Ethnic Studies Department, Texas Christian University",
  },
  {
    date: "9/30/2020", 
    type: "Presentation",
    title: "Latino Religions and the 2020 Election",
    location: "Claremont McKenna College",
    description: "This presentation disseminated the findings from my Latino Religions & Politics survey to reporters.",
  },
  {
    date: "02/21/2020", 
    type: "Presentation",
    title: "Influence of Religion on Ukrainian Independence, Politics & Society, Conference Introduction",
    location: "Institute of International Relations, National University of Kyiv",
    description: "",
  },
  {
    date: "02/21/2020", 
    type: "Presentation",
    title: "Reflections on the Influence of Religion on Ukrainian Independence, Politics & Society",
    location: "Institute of International Relations, National University of Kyiv",
    description: "",
  },
  {
    date: "01/05/2020", 
    type: "Respondent",
    title: "Debating Yoga and Mindfulness in Public Schools: Reforming Secular Education or Reestablishing Religion",
    location: "American Society of Church History, New York City",
    description: "",
  },
  {
    date: "11/22-24/2019", 
    type: "Collaboration Meeting",
    title: "American Academy of Religion Conference",
    location: "San Diego, California",
    description: "",
  },
  {
    date: "11/2/2019", 
    type: "Colloquium",
    title: "The American Founding in American History",
    location: "Ashland University, Arizona",
    description: "",
  },
  {
    date: "", 
    type: "",
    title: "",
    location: "",
    description: "",
  },
  // Add more appearances here
];

const Appearances = () => {
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [seriesFilter, setSeriesFilter] = useState<string>("all");
  const [query, setQuery] = useState<string>("");

  const types = useMemo(() => {
    return Array.from(new Set(APPEARANCES.map((a) => a.type).filter(Boolean)));
  }, []);

  const series = useMemo(() => {
    return Array.from(new Set(APPEARANCES.map((a) => a.series).filter(Boolean)));
  }, []);

  const filtered = useMemo(() => {
    return APPEARANCES.filter((a) => {
      if (typeFilter !== "all" && (a.type ?? "") !== typeFilter) return false;
      if (seriesFilter !== "all" && (a.series ?? "") !== seriesFilter) return false;
      if (query.trim()) {
        const q = query.trim().toLowerCase();
        const hay = `${a.title} ${a.location ?? ""} ${a.series ?? ""} ${a.description ?? ""}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [typeFilter, seriesFilter, query]);

  return (
    <section className="section-container py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-heading text-4xl mb-4">Appearances</h1>
        <p className="mb-6 text-foreground/70">Selected talks, panels, and performances.</p>

        <div className="mb-4 flex flex-wrap items-center gap-3">
          <label className="text-sm text-foreground/70">Type</label>
          <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className="text-sm border border-border rounded px-2 py-1">
            <option value="all">All</option>
            {types.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>

          <label className="text-sm text-foreground/70">Series</label>
          <select value={seriesFilter} onChange={(e) => setSeriesFilter(e.target.value)} className="text-sm border border-border rounded px-2 py-1">
            <option value="all">All</option>
            {series.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>

          <input
            placeholder="Search title, location..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="ml-auto text-sm border border-border rounded px-2 py-1 max-w-xs"
          />

          <button onClick={() => { setTypeFilter("all"); setSeriesFilter("all"); setQuery(""); }} className="text-sm text-foreground/60 hover:text-foreground">
            Clear
          </button>
        </div>

        <ul className="space-y-6">
          {filtered.map((a, i) => (
            <li key={i} className="border border-border rounded p-4 relative">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-lg">{a.title}</h3>
                  {a.series && <div className="text-sm text-foreground/60 italic">{a.series}</div>}
                  {a.location && <div className="text-sm text-foreground/60">{a.location}</div>}
                </div>
                {a.date && <div className="text-sm text-foreground/60">{a.date}</div>}
              </div>
              {a.description && <p className="mt-2 text-sm text-foreground/70">{a.description}</p>}
              {a.link && (
                <a href={a.link} target="_blank" rel="noreferrer" className="mt-2 inline-block text-primary">
                  Details
                </a>
              )}

              {a.type && (
                <span className="absolute bottom-4 right-2 text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                  {a.type}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Appearances;
