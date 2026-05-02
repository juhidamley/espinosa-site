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
    date: "Oct. 11, 2019",
    type: "Presentation",
    series: "International & Security Studies",
    title: "Abu Bakr al-Baghdadi, ISIS & Violence the New Caliphate",
    location: "Institute of International Relations, National University of Kyiv, Ukraine"
  },
  {
    date: "Oct. 11, 2019",
    type: "Presentation",
    series: "International & Security Studies",
    title: "Curing Violence: 5 Possibilities & Healing Politics with Religion & Peacebuilding",
    location: "Institute of International Relations, National University of Kyiv, Ukraine"
  },
  {
    date: "Oct. 10, 2019",
    type: "Presentation",
    series: "International & Security Studies",
    title: "Serbian Violence against Bosnian Muslims",
    location: "Institute of International Relations, National University of Kyiv, Ukraine"
  },
  {
    date: "Oct. 10, 2019",
    type: "Presentation",
    series: "International & Security Studies",
    title: "Meir Kahane & Yoel Lerner & Catastrophic Messianism in Israel",
    location: "Institute of International Relations, National University of Kyiv, Ukraine"
  },
  {
    date: "Oct. 10, 2019",
    type: "Presentation",
    series: "International & Security Studies",
    title: "Aboulima, Rantisi, Hamas & Islamic Justification for Violence",
    location: "Institute of International Relations, National University of Kyiv, Ukraine"
  },
  {
    date: "Oct. 10, 2019",
    type: "Presentation",
    series: "International & Security Studies",
    title: "Spear of Shiva: Hindu-Muslim Violence & Gynocide in Gujarat, India",
    location: "Institute of International Relations, National University of Kyiv, Ukraine"
  },
  {
    date: "Oct. 10, 2019",
    type: "Presentation",
    series: "International & Security Studies",
    title: "Sinhalese Buddhist Violence v. Muslims & Hindus in Sri Lanka",
    location: "Institute of International Relations, National University of Kyiv, Ukraine"
  },
  {
    date: "Oct. 10, 2019",
    type: "Presentation",
    series: "International & Security Studies",
    title: "Osama bin Laden & al-Qaeda in Afghanistan & Iraq",
    location: "Institute of International Relations, National University of Kyiv, Ukraine"
  },
  {
    date: "Oct. 8, 2019",
    type: "Presentation",
    series: "International & Security Studies",
    title: "Sociology of Violence: Theater of Terror, Performance Violence",
    location: "Institute of International Relations, National University of Kyiv, Ukraine"
  },
  {
    date: "Oct. 8, 2019",
    type: "Presentation",
    series: "International & Security Studies",
    title: "Sociology of Violence: Cosmic War, Martyrs, and Satanization of the Enemy",
    location: "Institute of International Relations, National University of Kyiv, Ukraine"
  },
  {
    date: "Oct. 8, 2019",
    type: "Presentation",
    series: "International & Security Studies",
    title: "Sociology of Violence: Warrior’s Power, Marginal Men, & The Mind of God",
    location: "Institute of International Relations, National University of Kyiv, Ukraine"
  },
  {
    date: "Sept. 3, 2019",
    type: "Keynote",
    series: "Claremont McKenna College Convocation",
    title: "Notes on Cultivating the Intellectual Life"
  },
  {
    date: "May 13-17, 2019",
    type: "Meeting",
    title: "Collaboration & Planning Meetings",
    location: "Department of Politics, Princeton University"
  },
  {
    date: "Feb. 13, 2019",
    type: "Presentation",
    series: "VISA",
    title: "Robert Emmons and the Theory of Spiritual Intelligence",
    location: "Care Center, CMC"
  },
  {
    date: "November 17, 2018",
    type: "Presentation",
    series: "American Academy of Religion Conference",
    title: "Trends in Anti-Catholic, Anti-Evangelical, Anti-Muslim, and Anti-Mormon Bias in the U.S. Professorate and Academy",
    location: "AAR"
  },
  {
    date: "September 24, 2018",
    type: "Presentation",
    title: "The Spiritual Impulse of the Mexican American Civil Rights Movement, 1965-1975",
    location: "Arizona State University, Department of Religious Studies"
  },
  {
    date: "May 24, 2018",
    type: "Presentation",
    series: "Department of History",
    title: "Understanding the Crusades, Religion & Violence in the Middle East",
    location: "V.N. Karazin Kharkiv National University, Kharkiv, Ukraine"
  },
  {
    date: "May 23, 2018",
    type: "Presentation",
    series: "Department of Sociology",
    title: "Secularism, Religion, & Rise of the Nones",
    location: "V.N. Karazin Kharkiv National University, Kharkiv, Ukraine"
  },
  {
    date: "May 22, 2018",
    type: "Presentation",
    series: "Department of Sociology",
    title: "Race, Religion and the 2016 Election of Trump",
    location: "V.N. Karazin Kharkiv National University, Kharkiv, Ukraine"
  },
  {
    date: "May 18, 2018",
    type: "Presentation",
    series: "Institute of International Relations",
    title: "ISIS, Religion and Politics in the Middle East",
    location: "Taras Shevchenko National University, Kiev, Ukraine"
  },
  {
    date: "May 17, 2018",
    type: "Presentation",
    series: "Institute of International Relations",
    title: "Religion, Race, and the 2016 Election",
    location: "Taras Shevchenko National University, Kiev, Ukraine"
  },
  {
    date: "April 4, 2018",
    type: "Presentation",
    title: "Understanding ISIS, Religion and Violence",
    location: "I.I. Mechnikov National University, Odessa, Ukraine"
  },
  {
    date: "November 22, 2017",
    type: "Presentation",
    title: "Religion, Race, & the 2016 Election",
    location: "I.I. Mechnikov National University, Odessa, Ukraine"
  },
  {
    date: "January 10, 2017",
    type: "Keynote",
    series: "National Conference on Ministry to the U.S. Armed Forces",
    title: "Emerging Trends in American Religions",
    location: "Washington, D.C./Alexandria, VA"
  },
  {
    date: "October 18, 2016",
    type: "Presentation",
    title: "Religion & Politics in U.S. Presidential Election of 2016",
    location: "Linköping University, Linkoping"
  },
  {
    date: "October 18, 2016",
    type: "Presentation",
    title: "Understanding ISIS",
    location: "Linköping University, Linkoping, Sweden"
  },
  {
    date: "October 17, 2016",
    type: "Presentation",
    title: "Religion and the American Presidency",
    location: "Linköping University, Linkoping, Sweden"
  },
  {
    date: "October 17, 2016",
    type: "Presentation",
    title: "Recent Trends in World Christianity",
    location: "Johannelunds Theological College & Seminary, Uppsala"
  },
  {
    date: "November 20, 2016",
    type: "Presentation",
    series: "The Public Understanding of Religion Session, American Academy of Religion",
    title: "Understanding American Protestantism and Evangelicalism in American Society",
    location: "Atlanta, GA"
  },
  {
    date: "October 12, 2016",
    type: "Keynote",
    series: "Lecture for National Hispanic Heritage Month",
    title: "Race, Religion and the 2016 Election",
    location: "Department of Politics, Princeton University"
  },
  {
    date: "April 2016",
    type: "Presentation",
    series: "Athenaeum",
    title: "Religion, Race, and the 2016 Election",
    location: "Claremont McKenna College"
  },
  {
    date: "October 28, 2015",
    type: "Keynote Presentation",
    series: "Cluster on Excellence in Religion and Politics",
    title: "Trends in U.S. Latino Religions and Politics",
    location: "University of Münster, Münster, Germany"
  },
  {
    date: "October 27, 2015",
    type: "Keynote Presentation",
    series: "Cluster on Excellence in Religion and Politics",
    title: "The Spiritual Impulse of the Mexican American Civil Rights Movement",
    location: "University of Münster, Germany"
  },
  {
    date: "October 26, 2015",
    type: "Keynote Presentation",
    series: "Cluster on Excellence in Religion and Politics",
    title: "Latinos and the Future of American Religion and Politics",
    location: "University of Münster, Germany"
  },
  {
    date: "September 21, 2015",
    type: "Keynote Presentation",
    title: "Latino Pentecostals in American Public Life: Faith & Politics in Action",
    location: "The Jesse Miranda Center for Hispanic Leadership, La Puente, CA"
  },
  {
    date: "May 22, 2015",
    type: "Presentation",
    series: "Protestantism on Screen: Religion, Politics & Aesthetics Conference",
    title: "Conflicting Visions of the English Reformation in the film Cromwell",
    location: "University of Halle-Wittenberg, Germany"
  },
  {
    date: "March 13, 2015",
    type: "Plenary Panel Discussant",
    series: "Society for Pentecostal Studies",
    title: "Latino Pentecostalism and Immigration Reform",
    location: "Southeastern University, Lakeland, Florida"
  },
  {
    date: "November 21, 2014",
    type: "Presentation",
    series: "American Academy of Religion",
    title: "Trends, Diversity, and Developments in American Protestant Christianities",
    location: "San Diego"
  },
  {
    date: "August 30, 2014",
    type: "Keynote",
    series: "Latin American Council of Christian Churches Conference",
    title: "Francisco Olazábal and Latino Pentecostal Leadership",
    location: "El Paso, Texas"
  },
  {
    date: "August 28, 2014",
    type: "Keynote",
    series: "Centennial Celebration of the Southern Pacific District of the Assemblies of God",
    title: "Silent No More: Latino Assemblies of God History, Politics and Leadership in the U.S.",
    location: "Garden Grove"
  },
  {
    date: "February 2, 2013",
    type: "Keynote Plenary Presentation",
    title: "Religion, Politics, and Presidential Elections: Pentecostalism and Politics in the USA",
    location: "Heidelberg University, Germany"
  },
  {
    date: "January 30, 2013",
    type: "Presentation",
    title: "Racial-Ethnic Demographic Shifts and the Future of American Religion and Politics",
    location: "Swedish Theological Institute, Jerusalem, Israel"
  },
  {
    date: "December 5, 2012",
    type: "Keynote Presentation",
    title: "Latinos, Religion and the 2008-2012 Presidential Elections",
    location: "John F. Kennedy School of Government, Harvard University, Cambridge, MA"
  },
  {
    date: "December 5, 2012",
    type: "Keynote Presentation",
    title: "Latinos and Electoral Politics",
    location: "Harvard University Divinity School"
  },
  {
    date: "December 2, 2012",
    type: "Seminar Presentation",
    series: "St. Laurentii Foundation",
    title: "Impact of Religion on the Modern Presidency",
    location: "University Lund, Sweden"
  },
  {
    date: "December 2, 2012",
    type: "Keynote Presentation",
    series: "Department of Theology",
    title: "Religion, Race, and the American Presidency",
    location: "University of Lund, Sweden"
  },
  {
    date: "November 28, 2012",
    type: "Keynote Presentation",
    title: "Religion, Race, and the American Presidency, 2000-2012",
    location: "University of Linkoping Student Foreign Policy Association, Sweden"
  },
  {
    date: "November 28, 2012",
    type: "Class presentation",
    series: "Department of Religious Studies",
    title: "Osama bin Laden’s Religious Justification for Jihad against the U.S.",
    location: "University of Linkoping, Sweden"
  },
  {
    date: "Nov 28, 2012",
    type: "Class Presentation",
    title: "The Israeli-Palestinian Muslim Conflict",
    location: "University of Linkoping, Sweden"
  },
  {
    date: "November 28, 2012",
    type: "Faculty Seminar",
    series: "Department of Religious Studies",
    title: "Religion, Seculars, and the Reported Growth of No Religion in America",
    location: "University of Linkoping, Sweden"
  },
  {
    date: "Nov. 27, 2012",
    type: "Seminar",
    title: "Religion, Race, and the 2012 Presidential Election",
    location: "Swedish Parliament, Sweden"
  },
  {
    date: "November 14, 2012",
    type: "Keynote Presentation",
    title: "Racial-Ethnic Demographic Shifts and the Future of American Religion and Politics",
    location: "Whittier College, CA"
  },
  {
    date: "Oct. 17, 2012",
    type: "Keynote Presentation",
    series: "Tipple-Vosburgh Endowed Lecture Series in Faith, Race, & Politics",
    title: "Racial Ethnic Demographic Shifts & the Future of American Politics",
    location: "Drew University, NJ"
  },
  {
    date: "October 8, 2012",
    type: "Keynote Presentation",
    series: "University of Miami Forum on Religion and Public Life",
    title: "Religion and the Race to the White House",
    location: "University of Miami, FL"
  },
  {
    date: "October 9, 2012",
    type: "Class Presentation",
    title: "Latinos, Religion and the 2008 Election",
    location: "University of Miami, FL"
  },
  {
    date: "May 11, 2012",
    type: "Briefing",
    title: "White House Briefing for Religion Scholars on Religion in Public Life",
    location: "Washington D.C."
  },
  {
    date: "Nov. 2011",
    type: "Panelist",
    series: "La Comunidad of Hispanic Scholars of Religion at the American Academy of Religion Conference",
    title: "Grants and Fellowships for Latino/a Graduate Students & Faculty"
  },
  {
    date: "November 20, 2011",
    type: "Panelist",
    series: "American Academy of Religion Committee on Racial & Ethnic Minorities",
    title: "Getting Published: Negotiating the Publishing World",
    location: "San Francisco, CA"
  },
  {
    date: "November 19, 2011",
    type: "Presentation",
    series: "Public Understanding of Religion, American Academy of Religion",
    title: "Trends in American Evangelicalism and Pentecostalism",
    location: "San Francisco, CA"
  },
  {
    date: "November 19, 2011",
    type: "Panelist",
    series: "La Comunidad of Hispanic Scholars of Religion",
    title: "Religion Grant and Fellowship Panel and Workshop",
    location: "San Francisco, CA"
  },
  {
    date: "November 19, 2011",
    type: "Election Chair",
    series: "American Academy of Religion Conference",
    title: "Chaired and Ran La Comunidad of Hispanic Scholars of Religion (AAR & SBL) Elections",
    location: "San Francisco, CA"
  },
  {
    date: "June 25, 2011",
    type: "Respondent",
    series: "Hispanic Theological Initiative First Book Award",
    title: "Divino Campañero: Toward a Hispanic Pentecostal Christology",
    location: "Princeton Seminary, NJ"
  },
  {
    date: "March 6, 2010",
    type: "Presentation",
    series: "International Society for Pentecostal Studies",
    title: "“Righteousness and Justice”: Barack Obama, Pentecostals, and the 2008 Election",
    location: "Minneapolis, MN"
  },
  {
    date: "Mar. 10, 2010",
    type: "Presentation",
    series: "Claremont Discourse-CUC Library",
    title: "Religion & Presidential Politics: The Faith Factor in Barack Obama’s 2008 Election Campaign",
    location: "Claremont"
  },
  {
    date: "November 2009",
    type: "Radio Interview",
    title: "Counterintuitive Findings in Religion, Barack Obama, and the 2008 Election",
    location: "KSPC Pomona College Radio",
    description: "45-minute interview"
  },
  {
    date: "November 7, 2009",
    type: "Presentation",
    series: "American Academy of Religion Conference",
    title: "Latino Evangelicals, Barack Obama, and the 2008 Election",
    location: "Montreal, Canada",
    description: "Organized the panel on 'Barack Obama, Evangelicals, and the 2008 Election'."
  },
  {
    date: "October 19, 2009",
    type: "Keynote",
    title: "Barack Obama, Evangelicals, and the 2008 Presidential Election",
    location: "Linköping Universitet, Sweden"
  },
  {
    date: "October 15, 2009",
    type: "Presentation",
    title: "Religion, Barack Obama, and the 2008 Presidential Election",
    location: "Swedish Parliament"
  },
  {
    date: "October 16, 2009",
    type: "Keynote",
    title: "Trends and Shifts in Latin American Pentecostalism",
    location: "Uppsala University, Uppsala, Sweden"
  },
  {
    date: "October 14, 2009",
    type: "Keynote",
    title: "The Pentecostalization of Latin American and U.S. Latino Christianity",
    location: "Linköping University, Sweden"
  },
  {
    date: "October 13, 2009",
    type: "Presentation",
    series: "Centre d’etudes et de recherches internationals (CERI)",
    title: "Barack Obama, Religion, and the 2008 Election",
    location: "Sciences Po, Paris, France"
  },
  {
    date: "October 12, 2009",
    type: "Keynote",
    title: "Selena and the Politics of Cultural Redemption",
    location: "University of Paris XII, Paris, France"
  },
  {
    date: "October 12, 2009",
    type: "Presentation",
    title: "Religion, Latinos, and the 2008 Election",
    location: "University of Paris VII, Paris, France"
  },
  {
    date: "August 16, 2009",
    type: "Panelist",
    series: "European Pentecostal Charismatic Research Association Conference",
    title: "Oxford Center for Mission Studies",
    location: "Oxford, England"
  },
  {
    date: "May 16, 2009",
    type: "Address",
    series: "Commencement Celebration Address",
    title: "Brown Moses: Latino Pentecostal Charisma, Power, and Healing in the Borderlands",
    location: "Latin American Council of Christian Churches Teología Seminario, East Los Angeles, CA"
  },
  {
    date: "April 16, 2009",
    type: "Keynote",
    series: "18th Annual Hispanic Lecture in Religion and Theology",
    title: "Latino Religions and the 2008 Presidential Election: Catholics, Protestants, and Political Change",
    location: "Drew University"
  },
  {
    date: "February 12, 2009",
    type: "Keynote",
    title: "Latinos and the 2008 Presidential Election",
    location: "Claremont Graduate University, School of Politics and Economics, Claremont, CA"
  },
  {
    date: "January 20, 2009",
    type: "Keynote",
    title: "The Historical and Religious Significance Barack Obama’s Presidential Election",
    location: "Claremont Colleges"
  },
  {
    date: "November 1, 2008",
    type: "Respondent",
    series: "American Academy of Religion Conference",
    title: "Pentecostalism and Prosperity: Changing Discourses",
    location: "Chicago, IL"
  },
  {
    date: "November 2, 2008",
    type: "Panelist",
    series: "American Academy of Religion Conference",
    title: "Ethics and the 2008 Presidential Election",
    location: "Chicago, IL"
  },
  {
    date: "October 16, 2008",
    type: "Conference Call",
    title: "Latino Religion, Immigration, and the 2008 Election",
    location: "National Media",
    description: "National Conference Call and report findings from the Latino Religions and Politics National Survey (n = 1,104) with 34 media outlets."
  },
  {
    date: "September 15, 2008",
    type: "Keynote",
    title: "Latino Religions, Politics, and the 2008 Presidential Election",
    location: "University of Pennsylvania"
  },
  {
    date: "August 16, 2008",
    type: "Interview",
    title: "Religion and the 2008 Election: McCain and Obama at Rick Warren’s Saddleback Community Church",
    location: "National Public Radio (NPR)"
  },
  {
    date: "August 7, 2008",
    type: "Keynote",
    title: "Latino Evangelicals and the 2008 Presidential Election",
    location: "Vanguard University"
  },
  {
    date: "April 24, 2008",
    type: "Lecture",
    title: "César Chávez and Reies López Tijerina: Voices of Non-Violence",
    location: "Claremont School of Theology, Claremont, CA"
  },
  {
    date: "April 20, 2008",
    type: "Panelist",
    series: "Mormonism, Religion, & American Politics: The Future of Mormonism in High Places",
    title: "Mitt Romney & 2008 Election",
    location: "Claremont Graduate University"
  },
  {
    date: "April 15, 2008",
    type: "Presentation",
    title: "Brown Moses: Latino Pentecostal Charisma, Power, and Healing in the Borderlands",
    location: "Harvard University Divinity School",
    description: "Talk followed by reception and dinner."
  },
  {
    date: "April 13, 2008",
    type: "Interview",
    title: "Latino Catholic Defections to Evangelical and Pentecostalism Protestantism",
    location: "BBC World Radio News Hour"
  },
  {
    date: "January 7, 2008",
    type: "Keynote",
    title: "Demographic Shifts Latino Religions & Politics",
    location: "Denver Seminary"
  },
  {
    date: "November 3, 2005",
    type: "Keynote Presentation",
    title: "Latino Religion, Politics, and Demographic Shifts and the American Presidency",
    location: "Foundation for American Communications, Chapel Hill, North Carolina",
    description: "Invitation only."
  },
  {
    date: "October 5, 2005",
    type: "Presentation",
    title: "Selena and the Politics of Cultural Redemption",
    location: "Claremont College Consortium’s Chicano/Latino Student Affairs Center"
  },
  {
    date: "September 17, 2005",
    type: "Panel Discussant",
    title: "Religion, Politics, and the 2004 Presidential Election",
    location: "National Conference of Editorial Writers in Portland, Oregon",
    description: "Joined by Dr. Melissa Harris-Lacewell of the Univ. of Chicago; session hosted by Washington Post syndicated columnist E. J. Dione. Spoke to 150 writers."
  },
  {
    date: "July 21, 2005",
    type: "Keynote Presentation",
    title: "Latino Religions and the 2004 Presidential Election",
    location: "Foundations for American Communications, Claremont McKenna College"
  },
  {
    date: "April 25, 2005",
    type: "Keynote Presentation",
    title: "Latino Religions, Politics, and the 2004 Presidential Election",
    location: "Foundation for American Communication, Arizona Republic, Phoenix",
    description: "18 newspaper reporters and media correspondents attended."
  },
  {
    date: "April 12, 2005",
    type: "Radio Show Interview",
    title: "Latino Religions, Politics, and the 2004 Presidential Election",
    location: "National Public Radio (NPR)",
    description: "Interview with Kristin Wiederholt."
  },
  {
    date: "April 5, 2005",
    type: "Paper Presentation",
    series: "Religion and the American Presidency Conference",
    title: "Latinos, Religion, and the American Presidency",
    location: "Claremont McKenna College"
  },
  {
    date: "April 5, 2005",
    type: "Paper Presentation",
    series: "Religion and the American Presidency Conference",
    title: "Religion and the Presidency of William Jefferson Clinton",
    location: "Claremont McKenna College"
  },
  {
    date: "April 4, 2005",
    type: "Reflection",
    title: "Interfaith Memorial Service for Pope John Paul II",
    location: "The Claremont Colleges McAlister Center for Religious Activities"
  },
  {
    date: "March 30, 2005",
    type: "Radio Show Interview",
    title: "U.S. Catholic Latinos Drawn to Evangelical Christianity",
    location: "National Public Radio (NPR)",
    description: "Interview with Kristin Wiederholt."
  },
  {
    date: "February 2, 2005",
    type: "Keynote",
    title: "Demographic Shifts in U.S. Latino Religions and Society",
    location: "Southern Methodist University"
  },
  {
    date: "October 28, 2004",
    type: "Keynote",
    title: "Latinos, Religion, and the 2004 Presidential Race",
    location: "Greenville College, Greenville, IL"
  },
  {
    date: "October 29, 2004",
    type: "Keynote",
    title: "Not all Latinos Eat Tacos: Latino Diversity, Labels, and Identity",
    location: "Greenville College"
  },
  {
    date: "October 26, 2004",
    type: "Keynote",
    title: "Latino Religions, Politics, and the 2004 Presidential Election",
    location: "Claremont McKenna College, Athenaeum"
  },
  {
    date: "October 26, 2004",
    type: "Discussant",
    series: "Positioning Mormonism Conference",
    title: "Positing Mormonism in American Religious History",
    location: "Claremont Graduate University"
  },
  {
    date: "October 13-15, 2004",
    type: "Discussant",
    series: "U.S. Department of Health & Human Services",
    title: "Hispanic Healthy Marriage Initiative Roundtable",
    location: "Washington, D.C.",
    description: "25 VIP Guests."
  },
  {
    date: "September 22-23, 2004",
    type: "Discussant",
    title: "LATINO SUMMIT",
    location: "Washington, D.C.",
    description: "12 VIP Guests."
  },
  {
    date: "September 21, 2004",
    type: "Keynote",
    title: "Latino Religions, Politics, and the 2004 Presidential Election",
    location: "USC Annenberg School of Communication"
  },
  {
    date: "December 9-10, 2004",
    type: "Consultant",
    title: "Annie E. Casey Foundation Faith Dialogue",
    location: "Washington, D.C.",
    description: "Invitation only – 20 participants from across the U.S."
  },
  {
    date: "December 3, 2004",
    type: "Consultant",
    title: "Rebranding the Democratic Party",
    description: "Hosted by Arianna Huffington, Callie Khouri, and Victoria Hopper at Huffington’s home."
  },
  {
    date: "Aug. 12, 2004",
    type: "Keynote",
    series: "UCLA International Summer Program",
    title: "The Latino Pentecostal Movement in the United States; Trends on Latin American and U.S. Latino Religions and Society",
    location: "UCLA, Los Angeles, CA"
  },
  {
    date: "April 26, 2004",
    type: "Keynote",
    series: "Foundations for American Communications",
    title: "Selena and the Politics of Cultural Redemption in the U.S.-Mexico Borderlands",
    location: "New Orleans Times-Picayune"
  },
  {
    date: "March 12, 2004",
    type: "Keynote",
    series: "God and Politics: Religion and the 2004 Presidential Election",
    title: "Latinos, Religion, and Political Party Affiliation",
    location: "National Press Club, Washington, D.C.",
    description: "Sponsored by FACS. Attended by 25 media outlets including ABC, RNS, NPR, and the Washington Post."
  },
  {
    date: "February 27, 2004",
    type: "Keynote",
    series: "Northwestern University Latino Studies Luncheon",
    title: "Trends in Latin American Religions and Society",
    location: "Northwestern University"
  },
  {
    date: "January 12, 2004",
    type: "Keynote",
    title: "The Spiritual Impulse of the Mexican American Civil Rights Movement",
    location: "Department of History, University of Texas at San Antonio"
  },
  {
    date: "January 15, 2004",
    type: "Keynote",
    title: "The Impact of Pluralism on Trends in Latin American and U.S. Latino Religions and Society",
    location: "Department of Religion, University of Florida"
  },
  {
    date: "December 16, 2003",
    type: "Keynote",
    title: "The Spiritual Impulse of the Mexican American Civil Rights Movement",
    location: "St. Louis University"
  },
  {
    date: "October 6, 2003",
    type: "Keynote",
    series: "Tulipanes Art and Film Festival",
    title: "Selena and the Politics of Cultural Redemption in the Borderlands",
    location: "Holland, MI"
  },
  {
    date: "Oct, 2003",
    type: "Keynote",
    title: "The Future of Latino Religions in the Americas",
    location: "Hope College, MI"
  },
  {
    date: "September 19, 2003",
    type: "Keynote",
    series: "The Future of Christianity Conference",
    title: "Trends in Latin American Religions and Society",
    location: "St. Louis University"
  },
  {
    date: "June 3, 2003",
    type: "Keynote",
    series: "Hispanic Churches in the Local Community Conference",
    title: "Demographic Shifts and Trends in Latino Religions: Proselytism, Conversion, and the Growth of Evangelical and Pentecostal Protestantism; Religious Affiliation, Political Party Choice & the 2000 Presidential Election",
    location: "Dallas, TX",
    description: "Sponsored by the Dallas Morning News and the Religion Newswriters Association."
  },
  {
    date: "April 8-9, 2003",
    type: "Roundtable",
    series: "Faith Research Dialogue",
    title: "The Annie E. Casey Foundation: Planning, Research, and Development Unit",
    location: "Baltimore, MD",
    description: "Selected discussant with 12 other scholars from across the nation."
  },
  {
    date: "May 20, 2003",
    type: "Keynote",
    series: "Schaefer Mars Lecture Series",
    title: "Rapacious Wolves: Pentecostal Proselytism, Demographic Shifts and the Future of U.S. Latino Christianity in the 21st Century",
    location: "Northwestern University"
  },
  {
    date: "March 14-15, 2003",
    type: "Respondent",
    series: "Rethinking U.S. Catholicism: International and Comparative Frameworks Conference",
    title: "How did the Spaniards Convert Indians? Comparing Mission History",
    location: "University of Notre Dame"
  },
  {
    date: "January 27, 2003",
    type: "Keynote",
    series: "Faith at Work in the Latino Community Conference",
    title: "Counterintuitive Findings in Latino Religions in American Public Life",
    location: "University of Notre Dame"
  },
  {
    date: "December 2, 2002",
    type: "Keynote",
    series: "Institute for Latino Studies",
    title: "Latino Religions and Political Activism",
    location: "University of Notre Dame, South Bend"
  },
  {
    date: "November 20, 2002",
    type: "Lecture",
    title: "Latino Protestantism in the U.S.-Mexico Borderlands",
    location: "Department of Religion, Northwestern University"
  },
  {
    date: "October 16, 2002",
    type: "Presentation",
    series: "Pew Forum on Religion and Public Life",
    title: "Latino Religions in American Public Life: Salient Findings",
    location: "Washington, D.C."
  },
  {
    date: "August 30, 2002",
    type: "Paper",
    series: "American Political Science Association",
    title: "Latino Religion and Politics in American Public Life",
    location: "Boston, MA"
  },
  {
    date: "July 1, 2002",
    type: "Keynote",
    series: "Fulbright American Studies Institute, Religion in the United States: Pluralism & Public Presence Conference",
    title: "Demographic Shifts in Latino Religions in the U.S.",
    location: "U.C. Santa Barbara"
  },
  {
    date: "July 16, 2002",
    type: "Keynote",
    series: "Fulbright American Studies Institute, Religion in the U.S.: Pluralism & Public Presence Conference",
    title: "The Growing Public Presence of Latinos in the U.S.",
    location: "UCSB"
  },
  {
    date: "May 2002",
    type: "Keynote",
    title: "Brown Moses: Francisco Olazábal and Latino Pentecostal Healing, Power and Identity in Jim Crow America",
    location: "Dept. of Ethnic Studies, U.C. San Diego"
  },
  {
    date: "May 2002",
    type: "Keynote",
    title: "Shifts in Latino Religions and Politics",
    location: "National Hispanic Presidential Breakfast, Washington, D.C.",
    description: "Spoke along with President George W. Bush and Senator Joseph Lieberman."
  },
  {
    date: "May 2002",
    type: "Keynote",
    series: "Hispanic Churches in American Public Life National Conference",
    title: "Demographic Shifts in Latino Religions in the United States",
    location: "Washington, D.C."
  },
  {
    date: "May 2002",
    type: "Keynote",
    series: "Hispanic Churches in American Public Life National Conference",
    title: "Latino Mainline, Evangelical and Pentecostal Beliefs in Public Life",
    location: "Washington, D.C."
  },
  {
    date: "May 2002",
    type: "Keynote",
    series: "Hispanic Churches in American Public Life National Conference",
    title: "Latino Protestant, Evangelical and Pentecostal Women in Public Life",
    location: "Washington, D.C."
  },
  {
    date: "May 2002",
    type: "Keynote",
    series: "Hispanic Churches in American Public Life Conference",
    title: "Latino Religion Affiliation, Political Party Choice & 2000 Presidential Election",
    location: "Washington, D.C."
  },
  {
    date: "May 2002",
    type: "Lecture",
    title: "Latino Protestantism in the Borderlands",
    location: "Department of History, UCSB"
  },
  {
    date: "Nov. 2001",
    type: "Paper",
    series: "American Academy of Religion",
    title: "Latino Religious Historiography",
    location: "Denver, CO"
  },
  {
    date: "October 2001",
    type: "Paper",
    series: "Hispanic Churches in American Public Life",
    title: "Latino Religious Leadership and Public Life",
    location: "Mexican American Cultural Center"
  },
  {
    date: "June 2001",
    type: "Keynote",
    title: "Hispanic Catholics and the American Public Square",
    location: "Faith and Reason Institute, Washington D.C."
  },
  {
    date: "May 2001",
    type: "Lecture",
    title: "'From One to Many:' Latino Protestantism in the Borderlands",
    location: "UCSB"
  },
  {
    date: "May 2001",
    type: "Paper",
    series: "Hispanic Churches in American Public Life Conference",
    title: "Demographic Shifts in Latino Religions and Politics",
    location: "Vanguard University, Costa Mesa, CA"
  },
  {
    date: "April 2001",
    type: "Paper",
    series: "Organization of American Historians",
    title: "The Aztec Pentecostal: Negotiating a Mexican Pentecostal Identity in Jim Crow America",
    location: "Los Angeles, CA"
  },
  {
    date: "April 2001",
    type: "Paper",
    title: "Latino Religions and Politics in the City",
    location: "Los Angeles Clergy Association"
  },
  {
    date: "November 2000",
    type: "Keynote Speaker",
    title: "Selena and the Politics of Cultural Redemption",
    location: "USC Center for Religion and Civic Culture, Los Angeles"
  },
  {
    date: "June 2000",
    type: "Paper",
    series: "Urban Institute 2000",
    title: "Confronting Myths of Latino Culture",
    location: "Los Angeles, CA"
  },
  {
    date: "March 2000",
    type: "Paper",
    series: "Hispanic Summit 2000",
    title: "Trends in Latino Religions",
    location: "Washington, D.C."
  },
  {
    date: "November, 1999",
    type: "Paper",
    series: "American Academy of Religion",
    title: "The Mexican Madonna: Selena, Religion, and Popular Culture",
    location: "Boston, MA"
  },
  {
    date: "November 1998",
    type: "Respondent",
    series: "Hispanic Religion, Culture, and Society Group at the American Academy of Religion",
    title: "Race, Mestizaje, and Conflict",
    location: "Florida"
  },
  {
    date: "April 1999",
    type: "Paper",
    series: "Organization of American Historians",
    title: "Borderland Religion: Los Angeles and the Origins of the Latino Pentecostal Movement in the U.S., Mexico, and Puerto Rico",
    location: "Toronto, Canada"
  },
  {
    date: "Spring 1999",
    type: "Lecture",
    title: "The History of Latino Protestantism in the United States",
    location: "UCSB"
  },
  {
    date: "November 1998",
    type: "Paper",
    series: "American Academy of Religion",
    title: "’En La Lucha:' A Religio-Social Profile of Latina Protestant Clergywomen in the U.S. and Puerto Rico",
    location: "Florida"
  },
  {
    date: "October 1998",
    type: "Presentation",
    series: "Pentecostal and Charismatic Movements in California Conference",
    title: "’Let the Spirit Fly:’ The Latino Charismatic Movement in the Roman Catholic Church in the U.S.",
    location: "Vanguard University, Costa Mesa, CA"
  },
  {
    date: "May 1998",
    type: "Presentation",
    series: "Pew Program in Religion & American History",
    title: "Transgressing Borders and Boundaries: The Azusa Street Revival and the Birth of the Pentecostal Movement in Los Angeles, 1906-1913",
    location: "Yale University"
  },
  {
    date: "1998",
    type: "Presentations",
    title: "Pentecostalism in Los Angeles, the United States, and Latin America",
    location: "Dartmouth",
    description: "3 presentations including class lectures, round-table discussions, and colloquiums."
  },
  {
    date: "May 1998",
    type: "Consultant",
    title: "Consultant to the Latin American Council of Christian Churches"
  },
  {
    date: "1998-1999",
    type: "Consultant",
    title: "Consultant to The Pew Project on Latino Immigrant Religions in Los Angeles"
  },
  {
    date: "April 1998",
    type: "Paper",
    series: "Women & Twentieth-Century Protestantism Conference",
    title: "The Role of Women in the Latino Pentecostal Movement in the Borderlands",
    location: "University of Chicago"
  },
  {
    date: "April 1998",
    type: "Keynote",
    title: "’Transgressing Boundaries’: Los Angeles and the Birth of the Pentecostal Movement",
    location: "University of Vermont"
  },
  {
    date: "March 1998",
    type: "Respondent",
    series: "Society for Pentecostal Studies",
    title: "Women and the Construction of Ethnic Identity in Victory Outreach",
    location: "Cleveland, TN",
    description: "Respondent to Arlene Sánchez-Walsh."
  },
  {
    date: "February 1998",
    type: "Keynote Speaker",
    series: "U.C. President's Fellowship Lecture",
    title: "Back to the Future: Los Angeles and the Latino Pentecostal Movement in the Borderlands",
    location: "UCLA"
  },
  {
    date: "November 1997",
    type: "Paper",
    series: "North American Religions Section, American Academy of Religion",
    title: "Los Angeles and the Origins of the Latino Pentecostal Movement, 1900-1945",
    location: "San Francisco, CA"
  },
  {
    date: "February 1997",
    type: "Paper",
    series: "Latin American Studies Association Regional Conference",
    title: "’We Preach the Truth:’ Inter-Religious Competition in the California Latino Immigrant Marketplace in the 1990s",
    location: "San Diego, CA"
  },
  {
    date: "February 1997",
    type: "Paper",
    series: "Women & Twentieth-Century Protestantism Conference",
    title: "’Your Daughters Shall Prophesy’: The Role of Women in 20th Century Latino/a Pentecostalism in the U.S.-Mexican Borderlands",
    location: "Harvard Divinity School, Cambridge, MA"
  },
  {
    date: "October 1996",
    type: "Paper",
    series: "Religion and the American Future",
    title: "Cultural Warfare and Reconciliation",
    location: "Santa Barbara, California"
  },
  {
    date: "March 1996",
    type: "Paper",
    series: "American Academy of Religion Regional Conference",
    title: "Immigrants, Homeboys, and Sects: The Changing Complexion of Latino Religions in the 1990s",
    location: "San Diego, CA"
  },
  {
    date: "February 1996",
    type: "Paper",
    series: "New Directions in Chicano Religions Conference",
    title: "Pentecostalism as Post-Modern Mysticism in the Borderlands",
    location: "U.C. Santa Barbara"
  },
  {
    date: "September 1997",
    type: "Commentary",
    series: "KCET Life & Times",
    title: "Latino Pentecostal Storefront Churches in LA"
  },
  {
    date: "April 1996",
    type: "Advisor & Scriptwriter",
    title: "California Council for the Humanities (CCH) Film"
  },
  {
    date: "January 1995",
    type: "Guest Lecturer",
    title: "The U.S./Mexican War, 1846-1848: The Underside of History",
    location: "University of California, Santa Barbara"
  },
  {
    date: "October 1995",
    type: "Paper",
    series: "Society for the Scientific Study of Religion",
    title: "Azusa Street and the Historical Origins of Puerto Rican Pentecostalism, 1906-1940",
    location: "St. Louis, MO"
  },
  {
    date: "September 1995",
    type: "Keynote Speaker",
    series: "Hispanic Association for Theological Education",
    title: "The Changing Face of Latino Religions",
    location: "Los Angeles, CA"
  },
];

const Appearances = () => {
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [query, setQuery] = useState<string>("");

  const types = useMemo(() => {
    return Array.from(new Set(APPEARANCES.map((a) => a.type).filter(Boolean)));
  }, []);

  const filtered = useMemo(() => {
    return APPEARANCES.filter((a) => {
      if (typeFilter !== "all" && (a.type ?? "") !== typeFilter) return false;
      if (query.trim()) {
        const q = query.trim().toLowerCase();
        const hay = `${a.title} ${a.location ?? ""} ${a.series ?? ""} ${a.description ?? ""}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [typeFilter, query]);

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

          <input
            placeholder="Search title, location..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="ml-auto text-sm border border-border rounded px-2 py-1 max-w-xs"
          />

          <button onClick={() => { setTypeFilter("all"); setQuery(""); }} className="text-sm text-foreground/60 hover:text-foreground">
            Clear
          </button>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((a, i) => (
            <li key={i} className="relative flex h-full flex-col rounded border border-border p-4">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="font-semibold text-lg leading-snug">{a.title}</h3>
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
