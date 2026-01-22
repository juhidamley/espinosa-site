import { BookOpen, Users, Presentation, GraduationCap } from "lucide-react";
import aboutImage from "@/assets/about1.png";
import aboutImage2 from "@/assets/about2.png";

const stats = [
  { icon: BookOpen, value: "50+", label: "Refereed Articles, Book Chapters, and Reviews" },
  { icon: Users, value: "9", label: "Major Surveys" },
  { icon: Presentation, value: "200+", label: "Scholarly Keynotes" },
  { icon: GraduationCap, value: "15", label: "Courses" },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="section-container">
        {/* At a Glance Banner */}
        <div className="card-scholarly p-8 mb-12">
          <h3 className="font-heading text-xl font-semibold text-display mb-6">
            At a Glance
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center mb-4">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="font-heading text-2xl font-semibold text-display">
                  {stat.value}
                </p>
                <p className="text-caption text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="divider-ornate">
          <span className="text-primary text-2xl">✦</span>
        </div>

        <div>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-display mb-8">
            About
          </h2>
          <div className="flex justify-center mb-8">
            <img src={aboutImage} alt="Prof. Espinosa with students" className="max-w-md w-full rounded-sm shadow-lg" />
          </div>
          <div className="space-y-6 text-body font-body leading-relaxed max-w-4xl">
            <p>
              Dr. Gastón Enrique Espinosa is the Arthur V. Stoughton Professor of Religious Studies at Claremont McKenna College.
            </p>
            <p>
              He grew up in southern California and is a graduate of Princeton Seminary, Harvard University, and the University of California at Santa Barbara, where he earned his Ph.D. Espinosa has held visiting academic and fellowship appointments at Dartmouth College, Northwestern University, the National Humanities Center Institute for Advanced Studies, the University of Münster, Germany, and in the Department of Politics at Princeton University.
            </p>
            <p>
              He has lectured on American and Latino religion, politics, and activism at Harvard, Yale, Princeton, Dartmouth, Penn, Chicago, UC Berkeley, UCLA, UCSD, UCSD, UCR, Northwestern, Notre Dame, St. Louis University, USC, the University of Paris VII, the University of Paris, XII, the Ecoles de Hautes Etudes en Sciences Sociales, Paris, France, and the Centre for International Studies and Research (CERI), Sciences Po, Paris, Heidelberg, Germany, the Cluster of Excellence in Politics at the University of Münster, Germany, Halle-Wittenberg University, Germany, Taras Shevchenko National University, Kyiv, Ukraine, V.N. Karazin Kharkiv National University, Kharkiv, Ukraine, I.I. Mechnikov National University, Odessa, Ukraine, Uppsala University, Sweden, Lund University, Sweden, Linköping University, Sweden, the Swedish Theological Institute, Jerusalem, to a delegation of the Swedish Parliament, and numerous other colleges and universities across the U.S.
            </p>
            <p>
              Professor Espinosa has spoken in public venues such as the National Press Club in Washington, D.C., the National Conference of Editorial Writers, the Pew Forum on Religion and Public Life, the USC Annenberg School of Communication, the American Academy of Religion, the American Political Science Association, the Society for the Scientific Study of Religion, Latin American Studies Association, the Fulbright American Studies Institute, on National Public Radio, and at the National Hispanic Presidential Prayer Breakfast with President Bush and Senator Joseph Lieberman.
            </p>
            
            <p>
              His scholarly opinions have been cited in the Los Angeles Times, Chicago Tribune, Dallas Morning News, Boston Globe, Miami Herald, Christian Science Monitor, Religion Newswriters Association, Associated Press, KCET, BBC World News, La Opinion, La Prensa, Univision, and Newsweek.
            </p>

            <p>
              He has won a number of fellowships and awards, including in a National Endowment for the Humanities (NEH) Fellowship at the National Humanities Center Institute for Advanced Studies (NC). He has also won the Yale Program in Religion and American History Fellowship, the Princeton Charlotte W. Newcombe Fellowship, the Dartmouth College César Chávez Fellowship, the Northwestern University Andrew Mellon Fellowship, the U.C. Santa Barbara Outstanding Teaching Award, and the Huggins-Quarles Award from the Organization of American Historians. 
            </p>

            <div className="flex justify-center mb-8">
            <img src={aboutImage2} alt="Prof. Espinosa speaking at Princeton" className="max-w-md w-full rounded-sm shadow-lg" />
          </div>

            <p>
              Espinosa has written, and/or is working on, a number of books for Oxford, Harvard, Columbia, Duke and other presses such as:
            </p>
            <ul className="list-disc list-inside">
              <li>Protestants on Screen: Religion, Politics and Aesthetics in European and American Film (Oxford forthcoming)</li>
              <li>Latino Pentecostals in America: Faith and Politics in Action (Harvard, 2014)</li>
              <li>William J. Seymour and the Origins of Global Pentecostalism (Duke, 2014)</li>
              <li>Religion, Race, and Barack Obama's New Democratic Pluralism (Routledge, 2012)</li>
              <li>Religion, Race, and the American Presidency (Rowman & Littlefield, 2011)</li>
              <li>Religion and the American Presidency: George Washington to George W. Bush with Commentary and Primary Sources (Columbia, 2009)</li>
              <li>Mexican American Religions: Spirituality, Activism, and Culture (Duke, 2008)</li>
              <li>Rethinking Latino Religions and Identity (Pilgrim, 2006)</li>
              <li>Latino Religions and Civic Activism in the United States (Oxford, 2005)</li>
            </ul>

            <p>
              He is currently working on a monograph on Latino Religions and Politics in American Public Life and two documentary histories on Race, Religion and American Politics and The Spiritual Impulse of the Mexican American Civil Rights Movement.
            </p>
  
            <p>
              Dr. Espinosa has conducted original archival research in over a dozen archives and private collections in the U.S., Mexico, Puerto Rico, and Europe and as a result has amassed a private collection of over 10,000 pages of primary source material on U.S. Latino, Puerto Rican, and Mexican Religions, U.S. Latino, Puerto Rican, Mexican, an Latin American Pentecostal/Charismatic Movements, American and Global Pentecostal Origins, American Religion and Politics, and Religion, Race, and the American Presidency. Espinosa has directed and created the survey methodology, framework, and instruments nine major surveys of almost 8,000 U.S. Latinos.  He directed and/or managed the Latina Pentecostal Women in Ministry Survey 1998 (n = 60) , the Latina Methodist Women in Ministry Survey 1998 (n = 25), The Pew Charitable Trusts Funded Hispanic Churches in American Public Life National Survey 2000 (n = 2,310), the Pew Hispanic Civic Leaders Survey 2001 (n = 229), The Pew Hispanic Churches Religious Leaders Survey 2001 (n = 205), the Latino Religions and Politics (LRAP) National Survey 2008 (1,108), the Latino Religions and Politics (LRAP) National Survey 2012 (n – 1,000), the Latino Muslims in America Survey 2014 (n = 560), the Latino Religions and Politics (LRAP) National Survey 2020 (n = 1,292), and is preparing the Latino Muslims in America Survey for Fall/Winter 2022-2023.  He has directed eight major conferences in California, Washington, D.C., Germany, and Ukraine.
            </p>
            <p>
              In addition to his qualitative social science research, he has created and directed the methodology, framework, and instruments and training bilingual research teams to conduct 266 in-person community profile interviews in 45 congregations representing 25 distinct religious traditions in 8 cities and rural areas across the U.S. and Puerto Rico: East Los Angeles, rural Colorado, San Antonio, rural Iowa, Chicago, Miami, New York City, and San Juan, Puerto Rico. Espinosa has also conducted more than 30 oral history and personal interviews. He has personally surveyed and interviewed more people on the intersection of U.S. Latino religion, politics, and civic activism than any scholar in the U.S. and holds copyright on all of the aforementioned primary source surveys, data, and community profile interviews.  He teaches courses on Religion, Race, and the Civil Rights Movement, U.S. Latino Religions and Politics, Mystics Prophets, and Social Change, American Religions and Politics, Religion, Politics, and Global Violence, and American Religious History.
            </p>
            <p>
              Dr. Espinosa has also studied at the UCLA School of Theater, Film and Television, written a screenplay on race relations in Jim Crow America, served as a script advisor and consultant for historical and documentary film projects, and co-hosted with Lawrence Bender, Luis Mandoki, and Oscar Torres several screenings of Innocent Voices about child soldiers in El Salvador (https://www.imdb.com/title/tt0387914/).
            </p>
            <p>
              He also served as a scholarly and marketing consultant to religious audiences for An Inconvenient Truth, Sister Aimee, and for other documentary and feature-length film projects. He also teaches Religion and American Film, Race and Religion in Hollywood Film, and a new course this Spring 2023 on Hip-Hop, Religion and Revolution.
            </p>
            <p>
              He has served on many editorial review boards and foundations, worked for racial reconciliation, inter-religious dialogue, social justice with the Anti-Defamation League, and for affordable housing for low-income families and Latin American immigrants in Southern California. He is currently collaborating with Dr. Daniel Livesay to promote a new Racial-Ethnic Cultural Understanding General Education requirement at Claremont McKenna College and hosting a War in Ukraine Social Engagement College Fair this Fall 2022.
            </p>
            <p>
              Espinosa currently serves as Founding Co-Editor (with Chet Gillis of Georgetown University) of The Columbia University Press Series on Religion and Politics, a Founding Advisory Board Member of the John C. Danforth Center on Religion and Politics (Wash U, St. Louis), and on the National Committee for Racial and Ethnic Minorities in the Profession for the 10,000 member American Academy of Religion. He served as the two-term President of La Comunidad of Hispanic Scholars of Religion at the American Academy of Religion.  In recognition of his work, the Generations Center of Princeton named him one of the nation's 100 Positive Men of Color.
            </p>
            <p>
              Submit all inquiries to Dr. Espinosa to 427r33@gmail.com
            </p>
              <p>
                Dr. Gastón Enrique Espinosa is the Arthur V. Stoughton Professor of Religious Studies at Claremont McKenna College.
              </p>
              <p>
                He grew up in southern California and is a graduate of Princeton Seminary, Harvard University, and the University of California at Santa Barbara, where he earned his Ph.D. Espinosa has held visiting academic and fellowship appointments at Dartmouth College, Northwestern University, the National Humanities Center Institute for Advanced Studies, the University of Münster, Germany, and in the Department of Politics at Princeton University.
              </p>
              <p>
                He has lectured on American and Latino religion, politics, and activism at Harvard, Yale, Princeton, Dartmouth, Penn, Chicago, UC Berkeley, UCLA, UCSD, UCSD, UCR, Northwestern, Notre Dame, St. Louis University, USC, the University of Paris VII, the University of Paris, XII, the Ecoles de Hautes Etudes en Sciences Sociales, Paris, France, and the Centre for International Studies and Research (CERI), Sciences Po, Paris, Heidelberg, Germany, the Cluster of Excellence in Politics at the University of Münster, Germany, Halle-Wittenberg University, Germany, Taras Shevchenko National University, Kyiv, Ukraine, V.N. Karazin Kharkiv National University, Kharkiv, Ukraine, I.I. Mechnikov National University, Odessa, Ukraine, Uppsala University, Sweden, Lund University, Sweden, Linköping University, Sweden, the Swedish Theological Institute, Jerusalem, to a delegation of the Swedish Parliament, and numerous other colleges and universities across the U.S.
              </p>
              <p>
                Professor Espinosa has spoken in public venues such as the National Press Club in Washington, D.C., the National Conference of Editorial Writers, the Pew Forum on Religion and Public Life, the USC Annenberg School of Communication, the American Academy of Religion, the American Political Science Association, the Society for the Scientific Study of Religion, Latin American Studies Association, the Fulbright American Studies Institute, on National Public Radio, and at the National Hispanic Presidential Prayer Breakfast with President Bush and Senator Joseph Lieberman.
              </p>
              
              <p>
                His scholarly opinions have been cited in the Los Angeles Times, Chicago Tribune, Dallas Morning News, Boston Globe, Miami Herald, Christian Science Monitor, Religion Newswriters Association, Associated Press, KCET, BBC World News, La Opinion, La Prensa, Univision, and Newsweek.
              </p>

              <p>
                He has won a number of fellowships and awards, including in a National Endowment for the Humanities (NEH) Fellowship at the National Humanities Center Institute for Advanced Studies (NC). He has also won the Yale Program in Religion and American History Fellowship, the Princeton Charlotte W. Newcombe Fellowship, the Dartmouth College César Chávez Fellowship, the Northwestern University Andrew Mellon Fellowship, the U.C. Santa Barbara Outstanding Teaching Award, and the Huggins-Quarles Award from the Organization of American Historians. 
              </p>

              <p>
                Espinosa has written, and/or is working on, a number of books for Oxford, Harvard, Columbia, Duke and other presses such as:
              </p>
              <ul>
                <li>Protestants on Screen: Religion, Politics and Aesthetics in European and American Film (Oxford forthcoming)</li>
                <li>Latino Pentecostals in America: Faith and Politics in Action (Harvard, 2014)</li>
                <li>William J. Seymour and the Origins of Global Pentecostalism (Duke, 2014)</li>
                <li>Religion, Race, and Barack Obama’s New Democratic Pluralism (Routledge, 2012)</li>
                <li>Religion, Race, and the American Presidency (Rowman & Littlefield, 2011)</li>
                <li>Religion and the American Presidency: George Washington to George W. Bush with      Commentary and Primary Sources (Columbia, 2009)</li>
                <li>Mexican American Religions: Spirituality, Activism, and Culture (Duke, 2008)</li>
                <li>Rethinking Latino Religions and Identity (Pilgrim, 2006)</li>
                <li>Latino Religions and Civic Activism in the United States (Oxford, 2005)</li>
              </ul>

              <p>
                He is currently working on a a monograph on Latino Religions and Politics in American Public Life and two documentary histories on Race, Religion and American Politics and The Spiritual Impulse of the Mexican American Civil Rights Movement.
              </p>
    
              <p>
                Dr. Espinosa has conducted original archival research in over a dozen archives and private collections in the U.S., Mexico, Puerto Rico, and Europe and as a result has amassed a private collection of over 10,000 pages of primary source material on U.S. Latino, Puerto Rican, and Mexican Religions, U.S. Latino, Puerto Rican, Mexican, an Latin American Pentecostal/Charismatic Movements, American and Global Pentecostal Origins, American Religion and Politics, and Religion, Race, and the American Presidency. Espinosa has directed and created the survey methodology, framework, and instruments nine major surveys of almost 8,000 U.S. Latinos.  He directed and/or managed the Latina Pentecostal Women in Ministry Survey 1998 (n = 60) , the Latina Methodist Women in Ministry Survey 1998 (n = 25), The Pew Charitable Trusts Funded Hispanic Churches in American Public Life National Survey 2000 (n = 2,310), the Pew Hispanic Civic Leaders Survey 2001 (n = 229), The Pew Hispanic Churches Religious Leaders Survey 2001 (n = 205), the Latino Religions and Politics (LRAP) National Survey 2008 (1,108), the Latino Religions and Politics (LRAP) National Survey 2012 (n – 1,000), the Latino Muslims in America Survey 2014 (n = 560), the Latino Religions and Politics (LRAP) National Survey 2020 (n = 1,292), and is preparing the Latino Muslims in America Survey for Fall/Winter 2022-2023.  He has directed eight major conferences in California, Washington, D.C., Germany, and Ukraine.
              </p>
              <p>In addition to his qualitative social science research, he has created and directed the methodology, framework, and instruments and training bilingual research teams to conduct 266 in-person community profile interviews in 45 congregations representing 25 distinct religious traditions in 8 cities and rural areas across the U.S. and Puerto Rico: East Los Angeles, rural Colorado, San Antonio, rural Iowa, Chicago, Miami, New York City, and San Juan, Puerto Rico. Espinosa has also conducted more than 30 oral history and personal interviews. He has personally surveyed and interviewed more people on the intersection of U.S. Latino religion, politics, and civic activism than any scholar in the U.S. and holds copyright on all of the aforementioned primary source surveys, data, and community profile interviews.  He teaches courses on Religion, Race, and the Civil Rights Movement, U.S. Latino Religions and Politics, Mystics Prophets, and Social Change, American Religions and Politics, Religion, Politics, and Global Violence, and American Religious History.</p>
              <p>Dr. Espinosa has also studied at the UCLA School of Theater, Film and Television, written a screenplay on race relations in Jim Crow America, served as a script advisor and consultant for historical and documentary film projects, and co-hosted with Lawrence Bender, Luis Mandoki, and Oscar Torres several screenings of Innocent Voices about child soldiers in El Salvador (https://www.imdb.com/title/tt0387914/).</p>
              <p>He also served as a scholarly and marketing consultant to religious audiences for An Inconvenient Truth, Sister Aimee, and for other documentary and feature-length film projects. He also teaches Religion and American Film, Race and Religion in Hollywood Film, and a new course this Spring 2023 on Hip-Hop, Religion and Revolution.</p>
              <p>He has served on many editorial review boards and foundations, worked for racial reconciliation, inter-religious dialogue, social justice with the Anti-Defamation League, and for affordable housing for low-income families and Latin American immigrants in Southern California. He is currently collaborating with Dr. Daniel Livesay to promote a new Racial-Ethnic Cultural Understanding General Education requirement at Claremont McKenna College and hosting a War in Ukraine Social Engagement College Fair this Fall 2022.</p>
              <p>Espinosa currently serves as Founding Co-Editor (with Chet Gillis of Georgetown University) of The Columbia University Press Series on Religion and Politics, a Founding Advisory Board Member of the John C. Danforth Center on Religion and Politics (Wash U, St. Louis), and on the National Committee for Racial and Ethnic Minorities in the Profession for the 10,000 member American Academy of Religion. He served as the two-term President of La Comunidad of Hispanic Scholars of Religion at the American Academy of Religion.  In recognition of his work, the Generations Center of Princeton named him one of the nation's 100 Positive Men of Color.</p>
            <p>
              Submit all inquiries to Dr. Espinosa to 427r33@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
