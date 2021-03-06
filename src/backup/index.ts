import apod from '../protocols/apod'

const backupPhotos: Array<apod> =
  [
    {
      "copyright": "Craig Bobchin",
      "date": "2017-12-24",
      "explanation": "What's happened to the sky? On Friday, the photogenic launch plume from a SpaceX rocket launch created quite a spectacle over parts of southern California and Arizona.  Looking at times like a giant space fish, the impressive rocket launch from Vandenberg Air Force Base near Lompoc, California, was so bright because it was backlit by the setting Sun. Lifting off during a minuscule one-second launch window, the Falcon 9 rocket successfully delivered to low Earth orbit ten Iridium NEXT satellites that are part of a developing global communications network. The plume from the first stage is seen on the right, while the soaring upper stage rocket is seen at the apex of the plume toward the left. Several good videos of the launch were taken.  The featured image was captured from Orange County, California, in a 2.5 second duration exposure.   Gallery: More images of the SpaceX launch",
      "hdurl": "https://apod.nasa.gov/apod/image/1712/SpaceXLaunch_Bobchin_5407.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "SpaceX Rocket Launch Plume over California",
      "url": "https://apod.nasa.gov/apod/image/1712/SpaceXLaunch_Bobchin_960.jpg"
    },
    {
      "date": "2014-08-19",
      "explanation": "Where should Philae land? As ESA's robotic spacecraft Rosetta circles toward Comet 67P/ Churyumov-Gerasimenko, a decision must eventually be made as to where its mechanical lander should attempt to touch-down.  Reaching the comet earlier this month, Rosetta is sending back detailed pictures of the comet's unusual nucleus from which a smooth landing site will be selected.   Pictured above, near the image top, the head of the comet's nucleus shows rugged grooves, while near the image bottom, the body shows a patch-work of areas sometimes separated by jagged hills.  Some of the patch-work areas apparent on both the head and body seem to have fields of relatively smooth terrain. In the connecting area called the neck, however, visible across the image center, a relatively large swath of light-colored smooth terrain appears, punctuated occasionally by large boulders. Rosetta is scheduled to release Philae toward the dark mountain-sized comet nucleus with an anticipated landing date in November.",
      "hdurl": "https://apod.nasa.gov/apod/image/1408/rosetta02_esa_2048.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "Contrasting Terrains on Comet Churyumov-Gerasimenko",
      "url": "https://apod.nasa.gov/apod/image/1408/rosetta02_esa_960.jpg"
    },
    {
      "copyright": "Robert SchwarzU. Wisconsin",
      "date": "2002-03-20",
      "explanation": "Looking out from the bottom of the world, strange and spectacular sights are sometimes observed.  Such was the case during the long Antarctic night of 1998, as awesome aurora sub-storms were photographed above scientific outposts.  Visible in the left foreground of the above photograph is the Martin A. Pomerantz Observatory while the now defunct SPIREX telescope canvas dome is visible to its right.  The outside temperature at the time this photograph was taken was about -73 Celsius (-100 Fahrenheit), although a slightly heated box sheltered the camera.",
      "hdurl": "https://apod.nasa.gov/apod/image/0203/spaurora1_schwarz.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "Aurora Over Antarctica",
      "url": "https://apod.nasa.gov/apod/image/0203/spaurora1_schwarz.jpg"
    },
    {
      "copyright": "Stéphane VetterNuits sacrées Music: Eric Aron",
      "date": "2015-06-01",
      "explanation": "Why do some auroras pulsate? No one is sure. Although this unusual behavior has been known for a long time, the cause remains an active topic of research. Featured here is a dramatic video that captured some impressive pulsating auroras in mid-March over Sv�nafellsj�kull Glacier in Iceland. The 48-second video shown is not time-lapse.  The real-time pulsations are exemplified by sequences where the astrophotographer is visible moving about in the foreground.  A close inspection of the enigmatic flickering sky colors reveals that some structures appear to repeat, while others do not. The quick rapidity of the pulsations seen here is somewhat unusual -- more common are aurora with pulsations that last several seconds. Recent research shows that pulsations are more common in electron-generated aurora, rather than proton aurora, and that the Earth's local magnetic field may fluctuate in unison.   Astrophysicists: Browse 1,000+ codes in the Astrophysics Source Code Library",
      "media_type": "video",
      "service_version": "v1",
      "title": "Pulsating Aurora over Iceland",
      "url": "https://player.vimeo.com/video/128714112?color=ffffff&byline=0&portrait=0"
    },
    {
      "copyright": "Witta Priester",
      "date": "2018-08-19",
      "explanation": "What kind of clouds are these? Although their cause is presently unknown, such unusual atmospheric structures, as menacing as they might seem, do not appear to be harbingers of meteorological doom. Formally recognized as a distinct cloud type only last year, Asperitas clouds can be stunning in appearance, unusual in occurrence, and are relatively unstudied. Whereas most low cloud decks are flat bottomed, asperitas clouds appear to have significant vertical structure underneath. Speculation therefore holds that asperitas clouds might be related to lenticular clouds that form near mountains, or mammatus clouds associated with thunderstorms, or perhaps a foehn wind -- a type of dry downward wind that flows off mountains. Such a wind called the Canterbury arch streams toward the east coast of New Zealand's South Island. The featured image, taken above Hanmer Springs in Canterbury, New Zealand, in 2005, shows great detail partly because sunlight illuminates the undulating clouds from the side.",
      "hdurl": "https://apod.nasa.gov/apod/image/1808/asperatus_priester_1024.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "Asperitas Clouds Over New Zealand",
      "url": "https://apod.nasa.gov/apod/image/1808/asperatus_priester_1024.jpg"
    },    
    {
      "copyright": "Lorenzo Lovato",
      "date": "1999-11-12",
      "explanation": "Will this be the year? Last year's Leonid meteor shower did not produce the meteor storm many had hoped for. Still, it put on a dazzling show with many bright fireball meteors. For example, this Leonid fireball, photographed through light clouds, eerily flashed across the skies of Monteromano, Italy on November 17, 1998. This year, the chances for a storm with thousands of meteors per hour are considered good ... but experts are quick to acknowledge that such predictions are tricky. Want to see for yourself? The predicted peak should occur on early Thursday, November 18 (UTC) but meteor activity will certainly be observable days before and after. If the night is clear, just grab a lawn chair and a warm jacket, go outside and look up!",
      "hdurl": "https://apod.nasa.gov/apod/image/9911/leonid_lorenzo_1.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "1998 Leonid Fireball",
      "url": "https://apod.nasa.gov/apod/image/9911/leonid_lorenzo_1.jpg"
    },
    {
      "date": "2005-04-04",
      "explanation": "How did this strange-looking galaxy form?  Astronomers turn detectives when trying to figure out the cause of unusual jumbles of stars, gas, and dust like NGC 1316.   A preliminary inspection indicates that NGC 1316 is an enormous elliptical galaxy that includes dark dust lanes usually found in a spiral.  The above image taken by the Hubble Space Telescope shows details, however, that help in reconstructing the history of this gigantic jumble.  Close inspection finds fewer low mass globular clusters of stars toward NGC 1316's center. Such an effect is expected in galaxies that have undergone collisions or merging with other galaxies in the past few billion years.  After such collisions, many star clusters would be destroyed in the dense galactic center.  The dark knots and lanes of dust indicate that one or more of the devoured galaxies were spiral galaxies.  NGC 1316 spans about 60,000 light years and lies about 75 million light years away toward the constellation of the Furnace.",
      "hdurl": "https://apod.nasa.gov/apod/image/0504/ngc1316_hst_big.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "NGC 1316: After Galaxies Collide",
      "url": "https://apod.nasa.gov/apod/image/0504/ngc1316_hst.jpg"
    },
    {
      "copyright": "Wally Pacholka",
      "date": "2009-08-18",
      "explanation": "Why take a picture of just the Badlands when you can take one that also shows the spectacular sky above it? Just such a picture, actually a digital stitched panorama of four images, was taken in late June near midnight, looking southwest. In the foreground, the unusual buttes of the Badlands Wall, part of the Badlands National Park in South Dakota, USA, were momentarily illuminated by flashlight during a long duration exposure of the background night sky. The mountain-like buttes visible are composed of soft rock that show sharp erosion features from wind and water. The South Dakota Badlands also contain ancient beds rich with easy-to-find fossils.  Some fossils are over 25 million years old and hold clues to the evolutionary origins of the horse and the saber-toothed tiger.  Bright Jupiter dominates the sky on the left just above the buttes, while the spectacular Milky Way Galaxy runs down the image right.   digg_url = 'http://apod.nasa.gov/apod/ap090818.html'; digg_skin = 'compact';",
      "hdurl": "https://apod.nasa.gov/apod/image/0908/badlands_pacholka_big.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "The Milky Way Over the Badlands",
      "url": "https://apod.nasa.gov/apod/image/0908/badlands_pacholka.jpg"
    },
    {
      "copyright": "European Southern Observatory",
      "date": "1999-03-09",
      "explanation": "The Very Large Telescope (VLT) Interferometric Array will be able to act as individual telescopes or as one huge telescope. Of the four planned VLTs in Chile, two have now reached completion. The first VLT to operate is visible on the left of the above photograph and was recently given the name Antu.  To its right is Kueyen, which achieved its first observations just last week. Each VLT telescope by itself is now one of the largest optical telescopes in the world, joining the new cadre of large telescopes with mirrors greater than 8-meters in diameter. After Melipal and Yepun are completed in the next few years, the four VLTs will be able to combine their light to achieve the sensitivity of a single 16-meter telescope, and the resolution of a single 200-meter telescope. Over the next few years, the VLT telescopes will explore the universe in unprecedented detail, searching for everything from ordinary planets orbiting nearby stars to extraordinary explosions in the distant universe.",
      "hdurl": "https://apod.nasa.gov/apod/image/9903/vlt_vlt_big.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "The VLT Interferometric Array",
      "url": "https://apod.nasa.gov/apod/image/9903/vlt_vlt.jpg"
    },
    {
      "date": "2000-09-30",
      "explanation": "British astronomer Sir William Herschel discovered Titania and Oberon in January of 1787. He wasn't reading Shakespeare's A Midsummer Night's Dream though, he was making the first telescopic observations of moons of the planet Uranus (a planet which he himself discovered in 1781). In January of 1986, nearly 200 years later, NASA's robot explorer Voyager 2 became the only spacecraft to visit the remote Uranian system. Above is Voyager's highest resolution picture of Titania, Uranus' largest moon. The picture is a composite of two images recorded from a distance of 229,000 miles. The icy, rocky world is seen to be covered with impact craters. A prominent system of fault valleys, some nearly 1,000 miles long, is visible as trench-like features near the terminator (shadow line). Deposits of highly reflective material which may represent frost can be seen along the sun-facing valley walls. The large impact crater near the top, known as Gertrude, is about 180 miles across. At the bottom the 60 mile wide fault valley, Belmont Chasma, cuts into crater Ursula. Titania itself is 1,000 miles in diameter.",
      "hdurl": "https://apod.nasa.gov/apod/image/0009/titania3_voyg2_big.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "Titania's Trenches",
      "url": "https://apod.nasa.gov/apod/image/0009/titania3_voyg2.jpg"
    },
    {
      "copyright": "Ralf Rohner",
      "date": "2018-09-22",
      "explanation": "On the August 18 night flight from San Francisco to Zurich, a window seat offered this tantalizing view when curtains of light draped a colorful glow across the sky over Hudson Bay. Constructed by digitally stacking six short exposures made with a hand held camera, the scene records the shimmering aurora borealis or northern lights just as the approaching high altitude sunrise illuminated the northeastern horizon. It also caught the flash of a Perseid meteor streaking beneath the handle stars of the Big Dipper of the north. A few days past the meteor shower's peak, its trail still points across the sky toward Perseus. Beautiful aurorae and shower meteors both occur in Earth's upper atmosphere at altitudes of 100 kilometers or so, far above commercial airline flights. The aurora are caused by energetic charged particles from the magnetosphere, while meteors are trails of comet dust.",
      "hdurl": "https://apod.nasa.gov/apod/image/1809/CurtainsofLightRohner.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "Window Seat over Hudson Bay",
      "url": "https://apod.nasa.gov/apod/image/1809/CurtainsofLightRohner1024.jpg"
    },
    {
      "date": "2004-02-11",
      "explanation": "The Sleeping Beauty galaxy may appear peaceful at first sight but it is actually tossing and turning.  In an unexpected twist, recent observations have shown that the gas in the outer regions of this photogenic spiral is rotating in the opposite direction from all of the stars! Collisions between gas in the inner and outer regions are creating many hot blue stars and pink emission nebula. The above image was taken by the Hubble Space Telescope in 2001 and released last week.  The fascinating internal motions of M64, also cataloged as NGC 4826, are thought to be the result of a collision between a small galaxy and a large galaxy where the resultant mix has not yet settled down.",
      "hdurl": "https://apod.nasa.gov/apod/image/0402/m64_hst_big.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "M64: The Sleeping Beauty Galaxy",
      "url": "https://apod.nasa.gov/apod/image/0402/m64_hst.jpg"
    },
    {
      "date": "1998-02-13",
      "explanation": "Inaugurating the era of space exploration for the US, the First Explorer was launched into Earth orbit forty years ago (February 1, 1958) by the Army Ballistic Missle Agency. The Explorer I satellite weighed about 30 pounds, was 6 feet long, 6 inches in diameter and consisted of batteries, transmitters, and scientific instrumentation built into the fourth stage of a Jupiter-C rocket. Foreshadowing NASA and the adventurous and successful Explorer Program, Explorer I bolstered national prestige in the wake of Sputnik. The satellite also contributed to a spectacular scientific bonanza - the discovery of Earth-girdling belts of magnetically trapped charged particles now known as the Van Allen Radiation Belts.",
      "hdurl": "https://apod.nasa.gov/apod/image/9802/explorer1_jpl_big.gif",
      "media_type": "image",
      "service_version": "v1",
      "title": "Explorer I",
      "url": "https://apod.nasa.gov/apod/image/9802/explorer1_jpl.jpg"
    },
    {
      "date": "1997-08-01",
      "explanation": "You've had a hard day rolling past Martian rocks, so now just relax your APXS and enjoy the Martian sunset. The above pictures taken by Mars Pathfinder highlight how clouds vary during the end of a Martian day. The atmosphere on Mars is much thinner than on Earth and dominated by carbon dioxide rather than nitrogen.  Clouds on Mars can be water or carbon dioxide based, depending on conditions, whereas Earth's clouds are all water based.  At night the temperature at Sagan Memorial Station will dip from about -15 degrees Celsius (+4 Fahrenheit) to -77 degrees Celsius (-107 Fahrenheit). Temperatures only this cold won't bother Sojourner.",
      "hdurl": "https://apod.nasa.gov/apod/image/9708/marsunset_pf_big.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "A Martian Sunset",
      "url": "https://apod.nasa.gov/apod/image/9708/marsunset_pf.jpg"
    },
    {
      "copyright": "Jeff Dai",
      "date": "2020-04-10",
      "explanation": "From home this Full Moon looked bright. Around our fair planet it rose as the Sun set on April 7/8, the first Full Moon after the vernal equinox and the start of northern hemisphere spring. April's full lunar phase was also near perigee, the closest point in the Moon's elliptical orbit. In fact, it was nearer perigee than any other Full Moon of 2020 making it the brightest Full Moon of the year. To create the visual experience a range of exposures was blended to capture the emerging foreground foliage and bright lunar disk. The hopefull image of spring was recorded from a home garden in skies over Chongqing, China.   April Full Moon Gallery: Notable images submitted to APOD",
      "hdurl": "https://apod.nasa.gov/apod/image/2004/MoonSpringDai_1980crop.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "Full Moon of Spring",
      "url": "https://apod.nasa.gov/apod/image/2004/MoonSpringDai_1024crop.jpg"
    },
    {
      "copyright": "Rogelio\nBernal Andreo",
      "date": "2016-12-04",
      "explanation": "Familiar stars in Orion and constellations across the sky now have official names. Over the past year, the International Astronomical Union, the only body officially tasked with naming stars, approved names already in common use for 227 of the brightest stars, including the most famous stars on the sky Sirius, Polaris, and Betelgeuse.  Pictured, the constellation of Orion is shown with several of these now-official star names superposed.  Spanning about 30 degrees, this breath-taking vista stretches across the well-known constellation from head to toe (left to right) and beyond. The common names for all three stars in Orion's belt are also now official.  At 1,500 light years away, the Great Orion Nebula is the closest large star forming region, here visible just right and below center. Also visible are famous nebulae including the Horsehead Nebula and the Witch Head Nebula. Of course, the Orion Nebula and bright stars are easy to see with the unaided eye, but dust clouds and emission from the extensive interstellar gas in this nebula-rich complex, are too faint and much harder to record. In the featured mosaic of broadband telescopic images, additional image data acquired with a narrow hydrogen alpha filter was used to bring out the pervasive tendrils of energized atomic hydrogen gas like in the arc of the giant Barnard's Loop.    Open Science: Browse 1,350+ codes in the Astrophysics Source Code Library",
      "hdurl": "https://apod.nasa.gov/apod/image/1503/OrionClouds_Andreo_2048.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "Orion and Official Star Names",
      "url": "https://apod.nasa.gov/apod/image/1503/OrionClouds_Andreo_Annotated_1080.jpg"
    },
    {
      "date": "2008-02-26",
      "explanation": "Why did an acidic haze spread across Venus?  The unusual clouds were discovered last July by ESA's robotic Venus Express spacecraft currently orbiting Venus.  The bright and smooth haze was found by Venus Express to be rich in sulfuric acid, created when an unknown process lifted water vapor and sulphur dioxide from lower levels into Venus' upper atmosphere.  There, sunlight broke these molecules apart and some of them recombined into the volatile sulfuric acid.  Over the course of just a few days last July, the smooth acidic clouds spread from the South Pole of Venus across half the planet.  The above false-color picture of Venus was taken last July 23rd in ultraviolet light, and shows the unusual haze as relatively smooth regions across the image bottom. The cause of the dark streaks in the clouds is also not yet understood and is being researched.   digg_url = 'http://apod.nasa.gov/apod/ap080226.html'; digg_skin = 'compact';",
      "hdurl": "https://apod.nasa.gov/apod/image/0802/venussouth_vexpress_big.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "Mysterious Acid Haze on Venus",
      "url": "https://apod.nasa.gov/apod/image/0802/venussouth_vexpress.jpg"
    },
    {
      "date": "2008-03-30",
      "explanation": "Is the distant universe really what it appears to be?  Astronomers hope not.  Intervening dark matter, which is normally invisible, might show its presence by distorting images originating in the  distant universe, much the way an old window distorts images originating on the other side.  By noting the degree to which background galaxies appear unusually flat and unusually similar to neighbors, the dark matter distribution producing these weak gravitational lensing distortions can be estimated.  Analysis of the shapes of 200,000 distant galaxies imaged with the Canada-France-Hawaii Telescope (CFHT) does indicate the presence of a massive network of distributed dark matter.  Future results may even be able to discern details of the distribution.  The above computer generated simulation image shows how dark matter, shown in red, distorts the light path from and apparent shape of distant galaxies, depicted in blue.    digg_url = 'http://apod.nasa.gov/apod/ap080330.html'; digg_skin = 'compact';",
      "hdurl": "https://apod.nasa.gov/apod/image/0803/glshear_cfht_big.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "Weak Lensing Distorts the Universe",
      "url": "https://apod.nasa.gov/apod/image/0803/glshear_cfht.jpg"
    },
    {
      "copyright": "Dean Jacobsen",
      "date": "2003-10-02",
      "explanation": "The 1970s are often overlooked. In particular, the beautiful grouping of reflection nebulae NGC 1977, NGC 1975, and NGC 1973 in Orion are often overlooked in favor of the substantial stellar nursery better known as the Orion Nebula. Found along the sword of Orion just north of the bright Orion Nebula complex, these nebulae are also associated with Orion's giant molecular cloud which lies about 1,500 light-years away, but are dominated by the characteristic blue color of interstellar dust reflecting light from hot young stars. In this sharp color image a portion of the Orion Nebula appears along the bottom border with the cluster of reflection nebulae at picture center. NGC 1977 stretches across the field just below center, separated from NGC 1973 (above right) and NGC 1975 (above left) by dark regions laced with faint red emission from hydrogen atoms. Taken together, the dark regions suggest to many the shape of a running man.",
      "hdurl": "https://apod.nasa.gov/apod/image/0310/ngc1970s_jacobsen_full.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "Reflections on the 1970s",
      "url": "https://apod.nasa.gov/apod/image/0310/ngc1970s_jacobsen_c1.jpg"
    },
    {
      "copyright": "Jayanne English",
      "date": "1999-02-03",
      "explanation": "Tomorrow's picture: Spiral Sunspot  < Archive | Index | Search | Calendar | Glossary | Education | About APOD >  Authors & editors: Robert Nemiroff (MTU) & Jerry Bonnell (USRA) NASA Technical Rep.: Jay Norris. Specific rights apply. A service of: LHEA at NASA/ GSFC & Michigan Tech. U.",
      "hdurl": "https://apod.nasa.gov/apod/image/9902/mushroom_cgps_big.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "A Galactic Mushroom Cloud",
      "url": "https://apod.nasa.gov/apod/image/9902/mushroom_cgps.jpg"
    },
    {
      "date": "2004-02-15",
      "explanation": "How did this spherule come to be on the Moon? When a meteorite strikes the Moon, the energy of the impact melts some of the splattering rock, a fraction of which might cool into tiny glass beads.  Many of these glass beads were present in lunar soil samples returned to Earth by the Apollo missions.  Pictured above is one such glass spherule that measures only a quarter of a millimeter across.  This spherule is particularly interesting because it has been victim to an even smaller impact.  A miniature crater is visible on the upper left, surrounded by a fragmented area caused by the shockwaves of the small impact.  By dating many of these impacts, some astronomers estimate that cratering on our Moon increased roughly 500 million years ago and continues even today.",
      "hdurl": "https://apod.nasa.gov/apod/image/0402/spherule_apollo11.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "A Spherule from the Earth's Moon",
      "url": "https://apod.nasa.gov/apod/image/0402/spherule_apollo11_big.jpg"
    },
    {
      "date": "1995-12-20",
      "explanation": "Sometimes it takes a keen eye to see a good mirage. Around the center of the red galaxy image in the above photograph lie four blue \"smudges.\"  Each smudge is actually a different image of the same  background quasar.  The central galaxy happens to fall directly in the light path of the quasar.  Consequently, the huge mass of the galaxy is able to pull separate images of the quasar around it - an effect called gravitational lensing. Hence we see a gravitational mirage! Astronomers have hopes of using light differences between these quasar images to not only \"weigh\" the central galaxy but even provide clues about the expansion rate and composition of the universe.",
      "hdurl": "https://apod.nasa.gov/apod/image/glens2_hst_big.gif",
      "media_type": "image",
      "service_version": "v1",
      "title": "A Galaxy Gravitational Lens",
      "url": "https://apod.nasa.gov/apod/image/glens2_hst.gif"
    },
    {
      "date": "2017-05-02",
      "explanation": "There it is!  The Cygnus supply ship was a welcome sight to the astronauts on the International Space Station just over a week ago. Launched three days before on a United Launch Alliance Atlas V from Cape Canaveral, Florida, the Orbital ATK's Cygnus spacecraft approached the International Space Station above the backdrop of a picturesque planet Earth.  The Sun was setting off the image to the upper left, illuminating clouds well below the approaching vehicle. The robotic Cygnus spacecraft was captured first on camera and later with the space station's Canadarm2 by ESA's Flight Engineer Thomas Pesquet and NASA's Expedition-51 Commander Peggy Whitson. Commander Whitson, a biochemist, has now set a new American record for the most total days in space.  Besides essentials, the Cygnus carried equipment to bolster over 200 science experiments being conducted on the football-field sized Earth-orbiting outpost.",
      "hdurl": "https://apod.nasa.gov/apod/image/1705/CygnusApproach_ISS_4940.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "Approach above Sunset",
      "url": "https://apod.nasa.gov/apod/image/1705/CygnusApproach_ISS_960.jpg"
    },
    {
      "copyright": "Miguel Claro",
      "date": "2019-09-27",
      "explanation": "The center of our Milky Way galaxy can be found some 26,000 light-years away toward the constellation Sagittarius. Even on a dark night, you can't really see it though. Gaze in that direction, and your sight-line is quickly obscured by intervening interstellar dust. In fact, dark dust clouds, glowing nebulae, and crowded starfieds are packed along the fertile galactic plane and central regions of our galaxy. This annotated view, a mosaic of dark sky images, highlights some favorites, particularly for small telescope or binocular equipped skygazers. The cropped version puts the direction to the galactic center on the far right. It identifies well-known Messier objects like the Lagoon nebula (M8), the Trifid (M20), star cloud M24, and some of E.E. Barnard's dark markings on the sky. A full version extends the view to the right toward the constellation Scorpius, in all covering over 20 degrees across the center of the Milky Way.",
      "hdurl": "https://apod.nasa.gov/apod/image/1909/MilkyWay-CorePanorama_8738-Cr-Anno.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "The Annotated Galactic Center",
      "url": "https://apod.nasa.gov/apod/image/1909/MilkyWay-CorePanorama_8738-Cr-Anno1080.jpg"
    },
    {
      "copyright": "Noel Munford",
      "date": "2000-07-26",
      "explanation": "As the Moon passed almost directly through the center of Earth's shadow on July 16th, sky gazers in the Pacific hemisphere were graced by a lingering lunar eclipse. The total phase lasted 1 hour and 47 minutes, the longest since 1859. A longer total lunar eclipse won't occur until the year 3000. Taking advantage of the lengthy totality, astronomer and photographer, Noel Munford used a small telescope to record this colourful picture of the eclipsed Moon and nearby stars in the skies above Palmerston North, New Zealand. Near the top in this southern hemisphere perspective is the 84 kilometer wide bright ray crater Tycho. The Moon looks red even when it lies completely in shadow because it is still illuminated by sunlight reddened by dust and refracted by the atmosphere along the Earth's limb. Changes in atmospheric dust content mean that each eclipse can have a different appearance. An experienced observer, Munford comments that at mid totality this eclipse had a more uniform, delicate, subtle colour and was one of the lightest he has seen.",
      "hdurl": "https://apod.nasa.gov/apod/image/0007/nzeclipse_munford_big.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "Lingering Lunar Eclipse",
      "url": "https://apod.nasa.gov/apod/image/0007/nzeclipse_munford.jpg"
    },
    {
      "date": "2009-05-03",
      "explanation": "In 1787, astronomer William Herschel discovered the Eskimo Nebula.  From the ground, NGC 2392 resembles a person's head surrounded by a parka hood.  In 2000, the Hubble Space Telescope imaged the Eskimo Nebula.  From space, the nebula displays gas clouds so complex they are not fully understood.  The Eskimo Nebula is clearly a planetary nebula, and the gas seen above composed the outer layers of a Sun-like star only 10,000 years ago.  The inner filaments visible above are being ejected by strong wind of particles from the central star.  The outer disk contains unusual light-year long orange filaments. The Eskimo Nebula spans about 1/3 of a light year and lies in our Milky Way Galaxy, about 3,000 light years distant, toward the constellation of the Twins (Gemini).   digg_url = 'http://apod.nasa.gov/apod/ap090503.html'; digg_skin = 'compact';",
      "hdurl": "https://apod.nasa.gov/apod/image/0905/eskimo3_hst_big.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "The Eskimo Nebula from Hubble",
      "url": "https://apod.nasa.gov/apod/image/0905/eskimo3_hst.jpg"
    },
    {
      "date": "2013-07-06",
      "explanation": "The universe is filled with galaxies. But to see them astronomers must look out beyond the stars of our own galaxy, the Milky Way. This colorful Hubble Space Telescopic portrait features spiral galaxy NGC 6384, about 80 million light-years away in the direction of the constellation Ophiuchus. At that distance, NGC 6384 spans an estimated 150,000 light-years, while the Hubble close-up of the galaxy's central region is about 70,000 light-years wide. The sharp image shows details in the distant galaxy's blue star clusters and dust lanes along magnificent spiral arms, and a bright core dominated by yellowish starlight. Still, the individual stars seen in the picture are all in the relatively close foreground, well within our own galaxy. The brighter Milky Way stars show noticeable crosses, or diffraction spikes, caused by the telescope itself.",
      "hdurl": "https://apod.nasa.gov/apod/image/1307/ngc6384_hst_3871.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "NGC 6384: Spiral Beyond the Stars",
      "url": "https://apod.nasa.gov/apod/image/1307/ngc6384_hst_1265.jpg"
    },
    {
      "copyright": "Olivér Nagy",
      "date": "2016-03-26",
      "explanation": "This 3 month long exposure packed the days from December 22, 2015 through March 20 into a box. Dubbed a solargraph, the unconventional, unfolded picture was recorded with a pinhole camera made from a cube-shaped container, its sides lined with photographic paper. Fixed to a single spot for the entire exposure, the simple camera recorded the Sun's path through Hungarian skies. Each day a glowing trail was burned into the photosensitive paper. From short and low, to long and high, the trails follow the progression from winter solstice to spring equinox. Of course, dark gaps in the daily sun trails are caused by cloud cover. Sunny days produce the more continuous bright tracks.",
      "hdurl": "https://apod.nasa.gov/apod/image/1603/SolsticeEquinoxCube_Nagy4000.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "Solstice to Equinox Cubed",
      "url": "https://apod.nasa.gov/apod/image/1603/SolsticeEquinoxCube_Nagy1024.jpg"
    },
    {
      "date": "2000-11-01",
      "explanation": "This eight-frame animation is based on the first ever images of a double asteroid! Formerly thought to be a single enormous chunk of rock, asteroid 90 Antiope resides in the solar system's main asteroid belt between Mars and Jupiter. Now, these premier images reveal Antiope to actually consist of two 50 mile wide asteroids separated by about 100 miles. Like weights on each end of an elastic string, the pair mutually orbit their center of mass, or balance point in the space between them, once every 16.5 hours. Binary asteroids and asteroids with moons are believed to be rare, but observations of their orbits allow a direct determination of asteroid masses and densities. Surprisingly, Antiope and known asteroid-moon systems are found to have densities closer to ice than rock, despite their relatively dark and unreflective surfaces. These sharp images were made at the Keck Observatory atop the Hawaiian volcano Mauna Kea using newly developed adaptive optics technology to overcome the blurring effect of Earth's atmosphere.",
      "hdurl": "https://apod.nasa.gov/apod/image/0011/antiope_merline.gif",
      "media_type": "image",
      "service_version": "v1",
      "title": "Double Asteroid 90 Antiope",
      "url": "https://apod.nasa.gov/apod/image/0011/antiope_merline.gif"
    },
    {
      "copyright": "European Southern Observatory",
      "date": "2015-06-12",
      "explanation": "Braided, serpentine filaments of glowing gas suggest this nebula's popular name, The Medusa Nebula. Also known as Abell 21, this Medusa is an old planetary nebula some 1,500 light-years away along the southern border of the constellation Gemini. Like its mythological namesake, the nebula is associated with a dramatic transformation. The planetary nebula phase represents a final stage in the evolution of low mass stars like the sun, as they transform themselves from red giants to hot white dwarf stars and in the process shrug off their outer layers. Ultraviolet radiation from the hot star powers the nebular glow. An unrelated, bright, foreground star is near center in this close-up, telescopic view, while the Medusa's transforming central star is actually the dimmer star below center and toward the right-hand part of the frame. The Medusa Nebula is estimated to be over 4 light-years across.",
      "hdurl": "https://apod.nasa.gov/apod/image/1506/eso1520aMedusaL.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "The Medusa Nebula",
      "url": "https://apod.nasa.gov/apod/image/1506/eso1520aMedusaS.jpg"
    },
    {
      "date": "2018-04-29",
      "explanation": "How far out will humanity explore? If this video's fusion of real space imagery and fictional space visualizations is on the right track, then at least the Solar System. Some of the video's wondrous sequences depict future humans drifting through the rings of Saturn, exploring Jupiter from a nearby spacecraft, and jumping off a high cliff in the low gravity of a moon of Uranus. Although no one can know the future, wandering and exploring beyond boundaries -- both physical and intellectual -- is part of the human spirit and has frequently served humanity well in the past.",
      "media_type": "video",
      "service_version": "v1",
      "title": "Wanderers",
      "url": "//player.vimeo.com/video/108650530?title=0&byline=0&portrait=0&badge=0&color=ffffff"
    },
    {
      "date": "2010-09-26",
      "explanation": "Why does this galaxy have such a long tail?   In this stunning vista recorded with the Hubble Space Telescope's Advanced Camera for Surveys, distant galaxies form a dramatic backdrop for disrupted spiral galaxy Arp 188, the Tadpole Galaxy. The cosmic tadpole is a mere 420 million light-years distant toward the northern constellation Draco. Its eye-catching tail is about 280 thousand light-years long and features massive, bright blue star clusters. One story goes that a more compact intruder galaxy crossed in front of Arp 188 - from left to right in this view - and was slung around behind the Tadpole by their gravitational attraction. During the close encounter, tidal forces drew out the spiral galaxy's stars, gas, and dust forming the spectacular tail. The intruder galaxy itself, estimated to lie about 300 thousand light-years behind the Tadpole, can be seen through foreground spiral arms at the lower left. Following its terrestrial namesake, the Tadpole Galaxy will likely lose its tail as it grows older, the tail's star clusters forming smaller satellites of the large spiral galaxy.",
      "hdurl": "https://apod.nasa.gov/apod/image/1009/tadpole_hst_big.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "Arp 188 and the Tadpole's Tidal Tail",
      "url": "https://apod.nasa.gov/apod/image/1009/tadpole_hst.jpg"
    },
    {
      "copyright": "StarryWonders",
      "date": "2005-08-23",
      "explanation": "NGC 281 is a busy workshop of star formation.  Prominent features include a small open cluster of stars, a diffuse red-glowing emission nebula, large lanes of obscuring gas and dust, and dense knots of dust and gas in which stars may still be forming.  The open cluster of stars IC 1590 visible around the center has formed only in the last few million years.  The brightest member of this cluster is actually a multiple-star system shining light that helps ionize the nebula's gas, causing the red glow visible throughout.  The lanes of dust visible left of center are likely homes of future star formation.  Particularly striking in the above photograph are the dark Bok globules visible against the bright nebula.  The NGC 281 system, dubbed the Pacman nebula for its overall shape, lies about 10 thousand light years distant.",
      "hdurl": "https://apod.nasa.gov/apod/image/0508/pacman_cannistra_big.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "NGC 281: The Pacman Nebula",
      "url": "https://apod.nasa.gov/apod/image/0508/pacman_cannistra.jpg"
    },
    {
      "copyright": "Ken Crawford",
      "date": "2013-10-25",
      "explanation": "Point your telescope toward the high flying constellation Pegasus and you can find this expanse of Milky Way stars and distant galaxies. Centered on NGC 7814, the pretty field of view would almost be covered by a full moon. NGC 7814 is sometimes called the Little Sombrero for its resemblance to the brighter more famous M104, the Sombrero Galaxy. Both Sombrero and Little Sombrero are spiral galaxies seen edge-on, and both have extensive central bulges cut by a thinner disk with dust lanes in silhouette. In fact, NGC 7814 is some 40 million light-years away and an estimated 60,000 light-years across. That actually makes the Little Sombrero about the same physical size as its better known namesake, appearing to be smaller and fainter only because it is farther away. A very faint dwarf galaxy, potentially a satellite of NGC 7814, is revealed in the deep exposure just below the Little Sombrero.",
      "hdurl": "https://apod.nasa.gov/apod/image/1310/NGC7814crawford2048.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "NGC 7814: The Little Sombrero in Pegasus",
      "url": "https://apod.nasa.gov/apod/image/1310/NGC7814crawford900.jpg"
    },
    {
      "copyright": "Yuichi Takasaka",
      "date": "2011-09-23",
      "explanation": "September's equinox arrives today at 0905 UT. As the Sun crosses the celestial equator heading south, spring begins in the southern hemisphere and autumn in the north. And though the seasonal connection is still puzzling, both spring and autumn bring an increase in geomagnetic storms. So as northern nights grow longer, the equinox also heralds the arrival of a good season for viewing aurora. Recorded earlier this month, these curtains of September's shimmering green light sprawl across a gorgeous night skyscape. In the foreground lies Hidden Lake Territorial Park near Yellowknife, Northwest Territories, Canada. Calm water reflects the aurora, with bright star trails peering through the mesmerizing sky glow. Of course, shining at altitudes of 100 kilometers or so, planet Earth's auroras are visible from space.",
      "hdurl": "https://apod.nasa.gov/apod/image/1109/C404-5244-6082AuroraTakasaka.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "September's Aurora",
      "url": "https://apod.nasa.gov/apod/image/1109/C404-5244-6082AuroraTakasaka900.jpg"
    },
    {
      "date": "2007-01-21",
      "explanation": "This floating ring is the size of a galaxy.  In fact, it is part of the photogenic Sombrero Galaxy, one of the largest galaxies in the nearby Virgo Cluster of Galaxies.  The dark band of dust that obscures the mid-section of the Sombrero Galaxy in optical light actually glows brightly in infrared light.  The above image shows the infrared glow, recently recorded by the orbiting Spitzer Space Telescope, superposed in false-color on an existing image taken by NASA's Hubble Space Telescope in optical light.  The Sombrero Galaxy, also known as M104, spans about 50,000 light years across and lies 28 million light years away.  M104 can be seen with a small telescope in the direction of the constellation Virgo.",
      "hdurl": "https://apod.nasa.gov/apod/image/0701/sombrero_spitzer_big.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "The Sombrero Galaxy in Infrared",
      "url": "https://apod.nasa.gov/apod/image/0701/sombrero_spitzer.jpg"
    },
    {
      "date": "2016-09-21",
      "explanation": "Globular clusters once ruled the Milky Way.  Back in the old days, back when our Galaxy first formed, perhaps thousands of globular clusters roamed our Galaxy.  Today, there are less than 200 left.  Over the eons, many globular clusters were destroyed by repeated fateful encounters with each other or the Galactic center.  Surviving relics are older than any Earth fossil, older than any other structures in our Galaxy, and limit the universe itself in raw age.  There are few, if any, young globular clusters in our Milky Way Galaxy because conditions are not ripe for more to form. The featured video shows what it might look like to go from the Earth to the globular cluster Terzan 5, ending with a picture of the cluster taken with the Hubble Space Telescope.  This star cluster was recently found to contain not only stars formed in the early days of our Milky Way Galaxy, but also, quite surprisingly, others that formed in a separate burst of star formation about 7 billion years later.",
      "media_type": "video",
      "service_version": "v1",
      "title": "Zooming in on Star Cluster Terzan 5",
      "url": "https://www.youtube.com/embed/jtQOAtiJq3o?rel=0"
    },
    {
      "date": "2005-05-11",
      "explanation": "This floating ring is the size of a galaxy.  In fact, it is part of the photogenic Sombrero Galaxy, one of the largest galaxies in the nearby Virgo Cluster of Galaxies.  The dark band of dust that obscures the mid-section of the Sombrero Galaxy in optical light actually glows brightly in infrared light.  The above image shows the infrared glow, recently recorded by the orbiting Spitzer Space Telescope, superposed in false-color on an existing image taken by NASA's Hubble Space Telescope in optical light.  The Sombrero Galaxy, also known as M104, spans about 50,000 light years across and lies 28 million light years away.  M104 can be seen with a small telescope in the direction of the constellation of Virgo.",
      "hdurl": "https://apod.nasa.gov/apod/image/0505/sombrero_spitzer_big.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "The Sombrero Galaxy in Infrared",
      "url": "https://apod.nasa.gov/apod/image/0505/sombrero_spitzer.jpg"
    },
    {
      "date": "2019-06-16",
      "explanation": "What created this unusual mountain? There is a new theory.  Ahuna Mons is the largest mountain on the largest known asteroid in our Solar System, Ceres, which orbits our Sun in the main asteroid belt between Mars and Jupiter. Ahuna Mons, though, is like nothing that humanity has ever seen before. For one thing, its slopes are garnished not with old craters but young vertical streaks.  The new hypothesis, based on numerous gravity measurements, holds that a bubble of mud rose from deep within the dwarf planet and pushed through the icy surface at a weak point rich in reflective salt -- and then froze.  The bright streaks are thought to be similar to other recently surfaced material such as visible in Ceres' famous bright spots.  The featured double-height digital image was constructed from surface maps taken of Ceres in 2016 by the robotic Dawn mission. Successfully completing its mission in 2018, Dawn continues to orbit Ceres even though it has exhausted the fuel needed to keep its antennas pointed toward Earth.   Anniversary:  The first APOD appeared 24 years ago today.",
      "hdurl": "https://apod.nasa.gov/apod/image/1906/AhunaMonsCeres_Dawn_1280.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "Unusual Mountain Ahuna Mons on Asteroid Ceres",
      "url": "https://apod.nasa.gov/apod/image/1906/AhunaMonsCeres_Dawn_960.jpg"
    },
    {
      "date": "2001-01-21",
      "explanation": "Most stars appear only as points of light.  In 1995, Betelgeuse became the second star, after our Sun, to have it surface resolved.  Later that year, Mira was added to the list.  Mira A is a red giant star undergoing dramatic pulsations, causing it to become more than 100 times brighter over the course of a year.  Mira was discovered to be the first variable star about 400 years ago  by David Fabricus.  Mira can extend to over 700 times the size of our Sun, and is only 400 light-years away.  The above photograph taken by the Hubble Space Telescope shows the true face of Mira.  But what are we seeing?  The unusual extended feature off the lower left of the star remains somewhat mysterious.  Possible explanations include gravitational perturbation and/or heating from Mira's white dwarf star companion.",
      "hdurl": "https://apod.nasa.gov/apod/image/9708/mira_hst_big.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "Resolving Mira",
      "url": "https://apod.nasa.gov/apod/image/9708/mira_hst.jpg"
    },
    {
      "date": "1996-09-10",
      "explanation": "\r Why is M77 surrounded by an ultraviolet glow? \r M77, also called NGC 1068, appears at first sight to be a relatively normal \r barred spiral galaxy. But when photographed in the \r ultraviolet (UV), as \r shown above in false color, the galaxy sports an ultraviolet halo - shown as violet in the photograph. The blue spiral structure closer to the picture's center indicates normal ultraviolet emission from bright young stars that have recently formed there. \r Astronomers now hypothesize that the outer glow arises from UV light emitted from the galaxy's active center and reflected to us from clouds of \r gas and \r dust. These same gas and dust clouds obscure the active center of this \r Seyfert galaxy - where an ultramassive \r black hole is thought to live.\r \r",
      "hdurl": "https://apod.nasa.gov/apod/image/m77_uit_big.gif",
      "media_type": "image",
      "service_version": "v1",
      "title": "M77: Spiral with a Strange Glow",
      "url": "https://apod.nasa.gov/apod/image/m77_uit.gif"
    },
    {
      "date": "2018-09-16",
      "explanation": "What's happened to our Sun?  Nothing very unusual -- it just threw a filament. Toward the middle of 2012, a long standing solar filament suddenly erupted into space producing an energetic Coronal Mass Ejection (CME).  The filament had been held up for days by the Sun's ever changing magnetic field and the timing of the eruption was unexpected. Watched closely by the Sun-orbiting Solar Dynamics Observatory, the resulting explosion shot electrons and ions into the Solar System, some of which arrived at Earth three days later and impacted Earth's magnetosphere, causing visible aurorae. Loops of plasma surrounding an active region can be seen above the erupting filament in the featured ultraviolet image.  Although the Sun is now in a relatively inactive state of its 11-year cycle,  unexpected holes have opened in the Sun's corona allowing an excess of charged particles to stream into space. As before, these charged particles are creating auroras.",
      "hdurl": "https://apod.nasa.gov/apod/image/1809/filament_sdo_1080.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "A Solar Filament Erupts",
      "url": "https://apod.nasa.gov/apod/image/1809/filament_sdo_960.jpg"
    },
    {
      "date": "2004-12-12",
      "explanation": "Birds don't fly this high.  Airplanes don't go this fast.  The Statue of Liberty weighs less.  No species other than human can even comprehend what is going on, nor could any human just a millennium ago.  The launch of a rocket bound for space is an event that inspires awe and challenges description.  Pictured above, the Space Shuttle Atlantis lifted off to visit the International Space Station  during the early morning hours of 2001 July 12.  From a standing start, the two million kilogram rocket ship left to circle the Earth where the outside air is too thin to breathe and where there is little noticeable onboard gravity.  Rockets bound for space are now launched from somewhere on Earth about once a week.",
      "hdurl": "https://apod.nasa.gov/apod/image/0301/nightlaunch_sts104_big.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "Atlantis to Orbit",
      "url": "https://apod.nasa.gov/apod/image/0301/nightlaunch_sts104.jpg"
    },
    {
      "date": "2005-12-19",
      "explanation": "How thin are the rings of Saturn?  Brightness measurements from different angles have shown Saturn's rings to be about one kilometer thick, making them many times thinner, in relative proportion, than a razor blade.  This thinness sometimes appears in dramatic fashion during an image taken nearly along the ring plane.  The robot Cassini spacecraft now orbiting Saturn has now captured another shot that dramatically highlights the ring's thinness.  The above artistic looking image was taken early last month in infrared polarized light.   If alone in space, the unlit part of Saturn would be much darker.  Reflection of light off of moons like Enceladus (pictured) and the billions of small particles in Saturn's rings, however, gives the giant space orb an unusual glow, an effect highlighted in polarized light.",
      "hdurl": "https://apod.nasa.gov/apod/image/0512/thinring2_cassini_big.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "Thin Rings Around Polarized Saturn",
      "url": "https://apod.nasa.gov/apod/image/0512/thinring2_cassini.jpg"
    },
    {
      "copyright": "SAAO",
      "date": "2009-01-29",
      "explanation": "Of course, everyone is concerned about what to wear to a solar eclipse. This is a great example though, especially for the first eclipse of the International Year of Astronomy 2009. In the picture, recorded during the January 26 solar eclipse from the grounds of the South African Astronomical Observatory at Cape Town, repeated images of the eclipse adorn a well-chosen shirt. The effect is familiar to eclipse enthusiasts as small gaps, commonly between leaves on trees, act as pinhole cameras to generate multiple recognizable images of the eclipse. From the Cape Town perspective, the solar eclipse was a partial one, with a maximum of about 65% of the Sun covered. But along a track extending across the Indian Ocean and western Indonesia the eclipse became annular, the solar disk briefly appearing as a fiery ring around the silhouetted Moon.   digg_url = 'http://apod.nasa.gov/apod/ap090129.html'; digg_skin = 'compact';",
      "hdurl": "https://apod.nasa.gov/apod/image/0901/eclipseshirt_fishley.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "Eclipse Shirt 2009",
      "url": "https://apod.nasa.gov/apod/image/0901/eclipseshirt_fishley_c600.jpg"
    },    
    {
      "date": "1997-04-16",
      "explanation": "Comet Hale-Bopp continues to look impressive.\r The photograph above\r captured the comet on April 7th passing nearly in front\r of M34,\r a star cluster in the constellation of Perseus.\r Many of the stars in this open cluster\r can be seen through Comet Hale-Bopp's\r white dust tail. The bright blue ion tail\r now shows several streams. Now receding\r from both the Sun and the Earth, Comet Hale-Bopp\r should still remain an impressive sight\r for weeks to come as it slowly fades.\r",
      "hdurl": "https://apod.nasa.gov/apod/image/9704/halebopp8_aac_big.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "A Star Cluster Through Hale-Bopp's Tail \r\nCredit and Copyright:",
      "url": "https://apod.nasa.gov/apod/image/9704/halebopp8_aac.jpg"
    },
    {
      "copyright": "T. Rector",
      "date": "2008-01-09",
      "explanation": "Beautiful nearby spiral galaxy IC 342 could be more famous if it wasn't so hidden.  A sprawling island universe, IC 342 would be a prominent galaxy in our night sky, but it is almost hidden from view behind the veil of stars, gas and dust clouds in the plane of our Milky Way galaxy. Similar in size to other large, bright spiral galaxies IC 342 is a mere 7 million light-years distant in the long-necked, northern constellation of the Giraffe (Camelopardalis). Even though IC 342's light is dimmed by intervening cosmic clouds, this remarkably sharp telescopic image traces the galaxy's own obscuring dust, blue star clusters, and glowing pink star forming regions along spiral arms that wind far from the galaxy's core. IC 342 may have undergone a recent burst of star formation activity and is close enough to have gravitationally influenced the evolution of the local group of galaxies and the Milky Way.   Note: Astronomy lectures by an APOD editor are now available as a free podcast.",
      "hdurl": "https://apod.nasa.gov/apod/image/0801/ic342_noao_big.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "Hidden Galaxy IC 342 from Kitt Peak",
      "url": "https://apod.nasa.gov/apod/image/0801/ic342_noao.jpg"
    },    
    {
      "date": "2000-12-30",
      "explanation": "No matter which direction you look, no matter what type of light you see, the sky glows - but why?  The sources of many of these background radiations have remained long-standing puzzles, but this millennial year brought some partial resolutions.  In X-ray light the recently launched spacecraft Chandra and XMM resolved much of the seemingly uniform X-ray background into many discrete sources, many of which appear to be black holes at the centers of galaxies accreting matter.  In microwave light, the BOOMERANG and MAXIMA-1 missions resolved with new clarity the seemingly uniform microwave background.  The size and distribution of these spots indicates a geometrically flat universe, which, when combined recent supernovae results, indicate a universe with an accelerating expansion rate filled with dark matter and dark energy. Pictured above, a map spanning ten degrees of the microwave sky resolves the microwave background into hot and cold spots, as indicated in microkelvins.",
      "hdurl": "https://apod.nasa.gov/apod/image/0012/cmbmap_maxima_big.gif",
      "media_type": "image",
      "service_version": "v1",
      "title": "A Year of Resolving Backgrounds",
      "url": "https://apod.nasa.gov/apod/image/0012/cmbmap_maxima.gif"
    },
    {
      "copyright": "Bob Franke",
      "date": "2011-07-12",
      "explanation": "Here is one of the largest objects that anyone will ever see on the sky. Each of these fuzzy blobs is a galaxy, together making up the Perseus Cluster, one of the closest clusters of galaxies. The cluster is seen through a foreground of faint stars in our own Milky Way Galaxy. Near the cluster center, roughly 250 million light-years away, is the cluster's dominant galaxy NGC 1275, seen above as a large galaxy on the image left. A prodigious source of x-rays and radio emission, NGC 1275 accretes matter as gas and galaxies fall into it. The Perseus Cluster of Galaxies, also cataloged as Abell 426, is part of the Pisces-Perseus supercluster spanning over 15 degrees and containing over 1,000 galaxies. At the distance of NGC 1275, this view covers about 15 million light-years.",
      "hdurl": "https://apod.nasa.gov/apod/image/1107/abell426_franke_1800.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "The Perseus Cluster of Galaxies",
      "url": "https://apod.nasa.gov/apod/image/1107/abell426_franke_900.jpg"
    },
    {
      "copyright": "SETI League",
      "date": "2011-02-06",
      "explanation": "No one knows for sure what caused this signal.  There is a slight possibility that it just might originate from an extraterrestrial intelligence. The bright colors on the blue background indicate that an anomalous signal was received here on Earth by a radio telescope involved in a Search for Extraterrestrial Intelligence (SETI).  A search for these signals is ongoing by  several groups including volunteer members of the SETI League.  Time labels the vertical axis of the above plot, and frequency marks the horizontal axis.  Although  this strong signal was never positively identified, astronomers have identified in it many attributes characteristic of a more mundane and ultimately terrestrial origin.  In this case, a leading possibility is that the signal originates from an unusual modulation between a GPS satellite and an unidentified Earth-based source. Many unusual signals from space remain unidentified.  No signal has yet been strong enough or run long enough to be unambiguously identified as originating from an extraterrestrial intelligence.",
      "hdurl": "https://apod.nasa.gov/apod/image/1102/unknownseti_cavan_607.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "An Anomalous SETI Signal",
      "url": "https://apod.nasa.gov/apod/image/1102/unknownseti_cavan_900.jpg"
    },
    {
      "copyright": "Robert Schwarz",
      "date": "2007-09-07",
      "explanation": "The Moon was up continuously for 14 days in August -- when viewed from the South Pole. But during the total lunar eclipse on August 28, it circled only about 10 degrees above the horizon. For Robert Schwarz, the resulting long line-of-sight through the atmosphere that blurred his images was a minor problem when he recorded this four hour long lunar eclipse sequence. A more severe problem was the outdoor air temperature of -68 C (-90 F). The extreme cold required him to make the series of exposures through a slit in a window from inside a heated room. Though the heat produced convection and further blurring, it was the only way to keep the camera at a reasonable operating temperature for an extended period of time. Still, he was rewarded with this impressive record of August's lunar eclipse from a unique perspective on planet Earth.",
      "hdurl": "https://apod.nasa.gov/apod/image/0709/TLESouthPole_schwarz.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "South Pole Lunar Eclipse",
      "url": "https://apod.nasa.gov/apod/image/0709/TLESouthPole_schwarz909.jpg"
    },
    {
      "copyright": "Stefano De Rosa",
      "date": "2017-12-08",
      "explanation": "December's Full Moon phase occurred near perigee, the closest point in its orbit around our fair planet. Big and bright, the fully illuminated lunar disk sets over rugged mountains in this early morningscape from Turin, Italy. Captured just before sunrise on the opposite horizon, scattered sunlight near the edge of Earth's shadow provides the beautiful reddish glow of the alpine peaks. Hills in the foreground are still in shadow. But the scattered sunlight just illuminates the dome and towers of Turin's historic Basilica of Superga on a hilltop near the lower right in the telephoto frame.",
      "hdurl": "https://apod.nasa.gov/apod/image/1712/2017SuperMoonAlpsSuperga.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "Alpine Superga Moonset",
      "url": "https://apod.nasa.gov/apod/image/1712/2017SuperMoonAlpsSuperga1024.jpg"
    },
    {
      "date": "2015-09-27",
      "explanation": "Tonight a bright full Moon will fade to red. Tonight's moon will be particularly bright because it is reaching its fully lit phase when it is relatively close to the Earth in its elliptical orbit.  In fact, by some measures of size and brightness, tonight's full Moon is designated a supermoon, although perhaps the \"super\" is overstated because it will be only a few percent larger and brighter than the average full Moon. However, our Moon will fade to a dim red because it will also undergo a total lunar eclipse -- an episode when the Moon becomes completely engulfed in Earth's shadow. The faint red color results from blue sunlight being more strongly scattered away by the Earth's atmosphere. Tonight's moon can also be called a Harvest Moon as it is the full Moon that occurs closest to the September equinox, a time signaling crop harvest in Earth's northern hemisphere. Total eclipses of supermoons are relatively rare -- the last supermoon lunar eclipse was in 1982, and the next will be in 2033. Tonight's supermoon total eclipse will last over an hour and be best visible from eastern North America after sunset, South America in the middle of the night, and Western Europe before sunrise.    Live Feed from NASA: Supermoon Eclipse 2015",
      "media_type": "video",
      "service_version": "v1",
      "title": "Tonight: A Supermoon Lunar Eclipse",
      "url": "https://www.youtube.com/embed/vKAw_wrIr5s?rel=0"
    },
    {
      "date": "2015-08-02",
      "explanation": "On the Moon, it is easy to remember where you parked.  In December of 1972, Apollo 17 astronauts Eugene Cernan and Harrison Schmitt spent about 75 hours on the Moon in the Taurus-Littrow valley, while colleague Ronald Evans orbited overhead. This sharp image was taken by Cernan as he and Schmitt roamed the valley floor. The image shows Schmitt on the left with the lunar rover at the edge of Shorty Crater, near the spot where geologist Schmitt discovered orange lunar soil. The Apollo 17 crew returned with 110 kilograms of rock and soil samples, more than was returned from any of the other lunar landing sites. Now forty three years later, Cernan and Schmitt are still the last to walk on the Moon.   APOD Editor to Speak: Saturday, August 8 at Keweenaw Science & Engineering Festival",
      "hdurl": "https://apod.nasa.gov/apod/image/1508/moonshorty_apollo17_1498.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "Apollo 17 at Shorty Crater",
      "url": "https://apod.nasa.gov/apod/image/1508/moonshorty_apollo17_1080.jpg"
    },    
    {
      "date": "2020-03-11",
      "explanation": "Astronomers believe they have now found the most powerful example of a black hole outburst yet seen in our Universe.  The composite, false-color featured image is of a cluster of galaxies in the constellation of Ophiuchus, the serpent-bearer.  The composite includes X-ray images (from the Chandra X-ray Observatory and XMM-Newton) in purple, and a radio image (from India's Giant Metrewave Radio Telescope) in blue (along with an infrared image of the galaxies and stars in the field in white for good measure).  The dashed line marks the border of a cavity blown out by the supermassive black hole which lurks at the center of the galaxy marked by the cross.  Radio emission fills this cavity.  This big blowout is believed to be due to the black hole eating too much and experiencing a transient bout of \"black hole nausea\", which resulted in the ejection of a powerful radio jet blasting into intergalactic space.  The amount of energy needed to blow this cavity is equivalent to about 10 billion supernova explosions.",
      "hdurl": "https://apod.nasa.gov/apod/image/2003/OphGalaxyClusterLabeled_Chandra_960.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "An Extreme Black Hole Outburst",
      "url": "https://apod.nasa.gov/apod/image/2003/OphGalaxyClusterLabeled_Chandra_960.jpg"
    },
  ]

export default backupPhotos