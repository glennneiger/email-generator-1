const tours = {

    tour01: ["Prospect Heights South, Part 1", "Sally Henderson", "Saturday, June 3, 2018, 3:00 PM", "sample-photo.jpg", "In front of St. Francis DeSales School for the Deaf, 260 Eastern Parkway, corner Classon Avenue, Brooklyn", "2,3,4 train to Eastern Parkway/Brooklyn Museum stop, or 2,3,4,5, Shuttle, at Franklin Avenue stop", "Eastern Parkway at Nostrand Avenue, Brooklyn"],
    tour02: ["Exploring the South Park", "Allison Morrison", "Sunday, June 4, 2018, 3:00 PM", "sample-photo.jpg", "East 138th Street & Grand Concourse, Bronx (North East of Grand Concourse, street level near the Department of Transportation street map)", "4 or 5 train to East 138th Street & Grand Concourse", "138th Street & 3rd Avenue (Alexander Avenue) near 6 train, Bronx"],
    tour03: ["Sculpture in the Fabulous 50s", "Thomas Pittson", "Sunday, June 4, 2018, 3:00 PM", "sample-photo.jpg", "SW corner of 1st Avenue and East 49th Street, Manhattan", "E train to Lexington, 6 train to 51st; M15, M50 bus", "Rockefeller Center "],
    tour04: ["Outdoor Street Art", "Sylvia Lawrence", "Saturday, June 10, 2018, 10:30 AM", "sample-photo.jpg", "At the entrance to Clement Moore Park located on Tenth Avenue, between 21st Street and 22nd Street, Manhattan", "C, E trains to 23rd Street; M23 bus", "Near 10th Avenue and West 25th Street, Manhattan"],
    tour05: ["Artists and Villians", "Albert Morris", "Saturday, June 10, 2018, 10:00 AM", "sample-photo.jpg", "East 70th Street, adjacent to the entrance to the Frick (in front of the side garden), Manhattan", "6 train to 68th Street Hunter College; Q train to 72nd Street; M1, M2, M3, M4, M72 bus", "Lexington Avenue and 70th Street, Manhattan"],
    tour06: ["SOHO Art Tour #2", "Phyllis Samstein", "Sunday, June 11 , 2018, 3:00 PM", "sample-photo.jpg", "At the statue of George Washington on horseback, Union Square, near East 14th Street, Manhattan. Look for the man in the red baseball cap.", "4, 5, 6, L, N, Q, R train; M14 bus", "Astor Place"],
    tour07: ["Gowanus, Part 1", "Frank Mack", "Sunday, June 11 , 2018, 3:00 PM", "sample-photo.jpg", "Intersection of Manhattan Avenue and Greenpoint Avenue, upstairs from the Greenpoint Avenue station of the G train, Brooklyn", "G train to Greenpoint Avenue", "Near that same station, Brooklyn"],
    tour08: ["South Bronx", "Michael Peppertine", "Saturday, June 17, 2018, 10:00 AM", "sample-photo.jpg", "SW corner of Canal Street and Church Street, outside the post office, Manhattan", "A, C, E, N, Q, R", "Near Houston Street, Manhattan "],
    tour09: ["Art Deco South Queens", "Michael Peppertine", "Sunday, June 18 , 2018, 3:00 PM", "sample-photo.jpg", "NW corner of Broadway and 62nd Street, Manhattan", "1, A, C, or D train to 59th Street Columbus Circle; M5,7,10, 20, 104 bus", "TBD"],
    tour10: ["Preservation of Our Architectural Treasures", "Diane Zane", "Sunday, June 18 , 2018, 3:00 PM", "sample-photo.jpg", "In front of Pershing square Cafe, directly across42nd Street from Grand Central Terminal, Manhattan", "4, 5, 6, 7 train to Grand Central, M42 bus", "Plaza Hotel, 5th Avenue at 59th Street, Manhattan"],
    tour11: ["Suffrage", "Dalia Cally", "Wednesday, June 21, 2018, 3:00 PM", "sample-photo.jpg", "The Hudson Gate entrance to the City College campus, located on Amsterdam Avenue at West 139th Street, Manhattan", "1 train to 137th Street; M100, M101 bus", "City College, Manhattan"],
    tour12: ["Stroll Through the Heights", "Ellis Jefferson", "Saturday, June 24, 2018, 10:00 AM", "sample-photo.jpg", "In front of the Schomburg Center for Research in Black Culture, northwest corner of Lenox Avenue (aka Malcolm X Boulevard) and 135th Street, Manhattan", "2 or 3 train to 135th Street; M7, M102, Bx33 bus", "TBD"],
    tour13: ["Grand Central Underground", "Michael Peppertine", "Saturday, June 24, 2018, 10:00 AM", "sample-photo.jpg", "SW corner of Sixth Avenue and West 41st Street, Manhattan", "D, F train to 42nd Street/Bryant Park; M5, M7, M42, M55 bus", "Near Second Avenue and East 44th Street, Manhattan "],
    tour14: ["Downtown Manhattan", "Joshua Raza", "Sunday, June 25 , 2018, 10:00 AM", "sample-photo.jpg", "Under the arches of the Municipal Building's south entrance near Centre and Chambers Streets by the subway stairs, Manhattan", "4, 5, 6 train to Brooklyn Bridge/City Hall; R train to City Hall; M9, M103 bus", "TBD"],
    tour15: ["Gowanus, Part 2", "Frank Mack", "Sunday, June 25 , 2018, 3:00 PM", "sample-photo.jpg", "At Driggs Avenue and Humboldt Street (short walk from the Nassau Avenue station of the G train), Brooklyn", "G train to Nassau Avenue", "Near Manhattan Avenue and Ash Street (closer to the Greenpoint Avenue station, or the ferry), Brooklyn "],
    tour16: ["Artists and Accountants", "Brice Anderson", "Saturday, June 31, 2018, 10:00 AM", "sample-photo.jpg", "At the Washington Arch in Washington Square Park, Manhattan", "A, C, E, D, F train to West 4th Street; R train to 8th Street; 6 train to Astor Place", "LaGuardia Place near Bleecker Street, Manhattan"],
    tour17: ["Upper West Side Candy Shops", "Sylvia Lawrence", "Friday, July 6, 2018, 10:00 AM", "sample-photo.jpg", "In front of  976 Madison Avenue (between East 76th and East 77th Streets), Manhattan", "6 train to 77th Streeet; M1, M2, M3, M4, M79 bus", "Close to East 79th Street and Madison Avenue, Manhattan"],
    tour18: ["Overvalued Buildings in Bad Neighborhoods", "Albert Morris", "Saturday, July 7, 2018, 10:00 AM", "sample-photo.jpg", "SE corner of Park Avenue and 69th Street, across from the entrance of the Union Club, Manhattan", "6 train to 68th Street Hunter College; Q train to 72nd Street; M1, M2, M3, M4, M72 bus", "Fifth Avenue and 62nd Street, Manhattan"],
    tour19: ["Fort Tilden Review", "Sally Henderson", "Saturday, July 7, 2018, 3:00 PM", "sample-photo.jpg", "At the corner of Vanderbilt and Lafayette Avenues, by the yellow Steele House (200 Lafayette Avenue), Brooklyn", "G train, Clinton/Washington stop, Clinton Ave. exit; C train to nearby Lafayette Avenue", "Near Barclay's Center"],
    tour20: ["Queen Tennis Anyone?", "Lloyd Trufelman", "Sunday, July 8, 2018, 3:00 PM", "sample-photo.jpg", "In front of the Queens Museum in Flushing Meadows-Corona Park, at the entrance facing the Unisphere, Queens", "7 train to Mets-Willets Point; Q48 bus", "Queens Museum"],
    tour21: ["First Light and the Revolution", "Frank Mack", "Sunday, July 8, 2018, 3:00 PM", "sample-photo.jpg", "In front of the Admiral Farragut Monument, at the north end of Madison Square Park, just in from 26th Street about halfway between Madison Avenue and Fifth Avenue, Manhattan", "N, R, F, M, 6 trains to 23rd Street; M1, M2, M3, M5 buses to 5th Ave/23rd Street", "TBD"],
    tour22: ["Lowlands, Central Queens", "Michael Peppertine", "Saturday, July 14, 2018, 10:00 AM", "sample-photo.jpg", "SW corner of Clark and Henry Streets, Brooklyn", "2, 3 train to Clark Street; A, C train to Hight Street", "Near Atlantic Avenue, Brooklyn "],
    tour23: ["South Street Ferry", "Joshua Raza", "Sunday, July 15 , 2018, 10:00 AM", "sample-photo.jpg", "Inside the entrance to the Staten Island Ferry at South Ferry at the bottom of the escalators on the left side, Manhattan", "1 train to South Ferry; R train to Whitehall Street; 4,5 trains to Bowling Green; M15, M20, M55 bus", "St. Peter's Church, 22 Barclay Street, Manhattan"],
    tour24: ["Bronx is Booming", "Jean Claude Pasa", "Sunday, July 15 , 2018, 3:00 PM", "sample-photo.jpg", "The Visitor Center at Poe Park (Kingsbridge Road stop on the D train), Bronx", "D train to Kingsbridge Road", "Grand Concourse at 182nd Street, D train stop, Bronx"],
    tour25: ["Mad Hatters: Old Hat Shops", "Ellis Jefferson", "Saturday, July 21, 2018, 10:00 AM", "sample-photo.jpg", "Under the McDonald’s sign on the southwest corner of 125th Street and Broadway, Manhattan.", "1 train to 125th Street; M11, M60, M104 bus", "Near Fairway Market, 2328 12th Avenue, near 133rd Street, Manhattan"],
    tour26: ["Walk Through Vendors", "Tom Tambor", "Saturday, July 21, 2018, 3:00 PM", "sample-photo.jpg", "In front of the Starbucks located at 107 Continental Avenue, just south of Queens Blvd, in Forest Hills, Queens", "E, F, M, R trains to Forest Hills-71st Avenue or LIRR to Forest Hills Station", "Near the intersection of Woodhaven Blvd and Union Turnpike, in front of Stop n’ Shop, 8989 Union Turnpike, Queens"],
    tour27: ["Famous Shops That Lost Money", "Larry Summa", "Sunday, July 22 , 2018, 12:00 PM", "sample-photo.jpg", "In front of Phebe's, corner of Bowery and East 4th Street, Manhattan", "D, F train to Broadway-Lafayette; 6 train to Bleecker Street; M15, M103 bus", "In front of Phebe's, corner of Bowery and East 4th Street, Manhattan"],
    tour28: ["Waterfronts With Bad Views", "Frank Mack", "Sunday, July 22 , 2018, 3:00 PM", "sample-photo.jpg", "At Wythe Avenue and Broadway", "J train to Marcy Avenue (5 blocks); L train to Beford Avenue (11 blocks); B32 bus", "Around North 7th Street, not far from the Bedford Avenue station of the L train"],
    tour29: ["South Harlem Fruit Shops", "Mary Beth Zillow", "Saturday, July 28, 2018, 10:00 AM", "sample-photo.jpg", "Sahadi's, 187 Atlantic Avenue, Brooklyn", "N, R train to Court Street (6 blocks); 2, 4, 5 train to Borough Hall (4 blocks); A, C, G train to Hoyt-Schermerhorn (5 blocks); B63, B65 bus", "Sahadi's, 187 Atlantic Avenue, Brooklyn"],
    tour30: ["Urban Gardening", "Michael Peppertine", "Saturday, July 28, 2018, 10:00 AM", "sample-photo.jpg", "SW corner of Chambers and Church Streets, Manhattan", "A, C, 1, 2, 3 train to Chambers Street; M22, M55 bus", "On Broadway, in the vicinity of White Street, Manhattan"],
    tour31: ["Foggy Bottom on the UES", "Stephen Eide", "Sunday, July 29 , 2018, 10:00 AM", "sample-photo.jpg", "Southern end of Bowling Green Park, Manhattan", "4, 5, 6 train to Bowling Green; 1 train to South Ferry; R train to Whitehall Street; M15, M20, M55 bus", "Fraunces Tavern"],
    tour32: ["Subway Lines That Run On Time", "Phyllis Samstein", "Sunday, July 29 , 2018, 3:00 PM", "sample-photo.jpg", "Outside Hudson Yards #7 train entrance, West 34th Street, between 10th & 11th Avenues, Manhattan. Look for the man wearing the red baseball cap.", "7 train to Hudson Yards; M12, M34 bus", "Grand Central Terminal "]

};

//If/else statements and assignments
if (document.querySelector("body").id === "body01") {
    document.getElementById("tour-name").textContent = tours.tour01[0];
    document.getElementById("tour-guide").textContent = "With " + tours.tour01[1];
    document.getElementById("tour-date-time").textContent = tours.tour01[2];
    document.getElementById("tour-photo").src = tours.tour01[3];
    document.getElementById("meeting-location").textContent = tours.tour01[4];
    document.getElementById("nearest-transit").textContent = tours.tour01[5];
    document.getElementById("ending-location").textContent = tours.tour01[6];
} else if (document.querySelector("body").id === "body02") {
    document.getElementById("tour-name").textContent = tours.tour02[0];
    document.getElementById("tour-guide").textContent = "With " + tours.tour02[1];
    document.getElementById("tour-date-time").textContent = tours.tour02[2];
    document.getElementById("tour-photo").src = tours.tour02[3];
    document.getElementById("meeting-location").textContent = tours.tour02[4];
    document.getElementById("nearest-transit").textContent = tours.tour02[5];
    document.getElementById("ending-location").textContent = tours.tour02[6];
} else if (document.querySelector("body").id === "body03") {
    document.getElementById("tour-name").textContent = tours.tour03[0];
    document.getElementById("tour-guide").textContent = "With " + tours.tour03[1];
    document.getElementById("tour-date-time").textContent = tours.tour03[2];
    document.getElementById("tour-photo").src = tours.tour03[3];
    document.getElementById("meeting-location").textContent = tours.tour03[4];
    document.getElementById("nearest-transit").textContent = tours.tour03[5];
    document.getElementById("ending-location").textContent = tours.tour03[6];
} else if (document.querySelector("body").id === "body04") {
    document.getElementById("tour-name").textContent = tours.tour04[0];
    document.getElementById("tour-guide").textContent = "With " + tours.tour04[1];
    document.getElementById("tour-date-time").textContent = tours.tour04[2];
    document.getElementById("tour-photo").src = tours.tour04[3];
    document.getElementById("meeting-location").textContent = tours.tour04[4];
    document.getElementById("nearest-transit").textContent = tours.tour04[5];
    document.getElementById("ending-location").textContent = tours.tour04[6];
} else if (document.querySelector("body").id === "body05") {
    document.getElementById("tour-name").textContent = tours.tour05[0];
    document.getElementById("tour-guide").textContent = "With " + tours.tour05[1];
    document.getElementById("tour-date-time").textContent = tours.tour05[2];
    document.getElementById("tour-photo").src = tours.tour05[3];
    document.getElementById("meeting-location").textContent = tours.tour05[4];
    document.getElementById("nearest-transit").textContent = tours.tour05[5];
    document.getElementById("ending-location").textContent = tours.tour05[6];
} else if (document.querySelector("body").id === "body06") {
    document.getElementById("tour-name").textContent = tours.tour06[0];
    document.getElementById("tour-guide").textContent = "With " + tours.tour06[1];
    document.getElementById("tour-date-time").textContent = tours.tour06[2];
    document.getElementById("tour-photo").src = tours.tour06[3];
    document.getElementById("meeting-location").textContent = tours.tour06[4];
    document.getElementById("nearest-transit").textContent = tours.tour06[5];
    document.getElementById("ending-location").textContent = tours.tour06[6];
} else if (document.querySelector("body").id === "body07") {
    document.getElementById("tour-name").textContent = tours.tour07[0];
    document.getElementById("tour-guide").textContent = "With " + tours.tour07[1];
    document.getElementById("tour-date-time").textContent = tours.tour07[2];
    document.getElementById("tour-photo").src = tours.tour07[3];
    document.getElementById("meeting-location").textContent = tours.tour07[4];
    document.getElementById("nearest-transit").textContent = tours.tour07[5];
    document.getElementById("ending-location").textContent = tours.tour07[6];
} else if (document.querySelector("body").id === "body08") {
    document.getElementById("tour-name").textContent = tours.tour08[0];
    document.getElementById("tour-guide").textContent = "With " + tours.tour08[1];
    document.getElementById("tour-date-time").textContent = tours.tour08[2];
    document.getElementById("tour-photo").src = tours.tour08[3];
    document.getElementById("meeting-location").textContent = tours.tour08[4];
    document.getElementById("nearest-transit").textContent = tours.tour08[5];
    document.getElementById("ending-location").textContent = tours.tour08[6];
} else if (document.querySelector("body").id === "body09") {
    document.getElementById("tour-name").textContent = tours.tour09[0];
    document.getElementById("tour-guide").textContent = "With " + tours.tour09[1];
    document.getElementById("tour-date-time").textContent = tours.tour09[2];
    document.getElementById("tour-photo").src = tours.tour09[3];
    document.getElementById("meeting-location").textContent = tours.tour09[4];
    document.getElementById("nearest-transit").textContent = tours.tour09[5];
    document.getElementById("ending-location").textContent = tours.tour09[6];
} else if (document.querySelector("body").id === "body10") {
    document.getElementById("tour-name").textContent = tours.tour10[0];
    document.getElementById("tour-guide").textContent = "With " + tours.tour10[1];
    document.getElementById("tour-date-time").textContent = tours.tour10[2];
    document.getElementById("tour-photo").src = tours.tour10[3];
    document.getElementById("meeting-location").textContent = tours.tour10[4];
    document.getElementById("nearest-transit").textContent = tours.tour10[5];
    document.getElementById("ending-location").textContent = tours.tour10[6];
} else if (document.querySelector("body").id === "body11") {
    document.getElementById("tour-name").textContent = tours.tour11[0];
    document.getElementById("tour-guide").textContent = "With " + tours.tour11[1];
    document.getElementById("tour-date-time").textContent = tours.tour11[2];
    document.getElementById("tour-photo").src = tours.tour11[3];
    document.getElementById("meeting-location").textContent = tours.tour11[4];
    document.getElementById("nearest-transit").textContent = tours.tour11[5];
    document.getElementById("ending-location").textContent = tours.tour11[6];
} else if (document.querySelector("body").id === "body12") {
    document.getElementById("tour-name").textContent = tours.tour12[0];
    document.getElementById("tour-guide").textContent = "With " + tours.tour12[1];
    document.getElementById("tour-date-time").textContent = tours.tour12[2];
    document.getElementById("tour-photo").src = tours.tour12[3];
    document.getElementById("meeting-location").textContent = tours.tour12[4];
    document.getElementById("nearest-transit").textContent = tours.tour12[5];
    document.getElementById("ending-location").textContent = tours.tour12[6];
} else if (document.querySelector("body").id === "body13") {
    document.getElementById("tour-name").textContent = tours.tour13[0];
    document.getElementById("tour-guide").textContent = "With " + tours.tour13[1];
    document.getElementById("tour-date-time").textContent = tours.tour13[2];
    document.getElementById("tour-photo").src = tours.tour13[3];
    document.getElementById("meeting-location").textContent = tours.tour13[4];
    document.getElementById("nearest-transit").textContent = tours.tour13[5];
    document.getElementById("ending-location").textContent = tours.tour13[6];
} else if (document.querySelector("body").id === "body14") {
    document.getElementById("tour-name").textContent = tours.tour14[0];
    document.getElementById("tour-guide").textContent = "With " + tours.tour14[1];
    document.getElementById("tour-date-time").textContent = tours.tour14[2];
    document.getElementById("tour-photo").src = tours.tour14[3];
    document.getElementById("meeting-location").textContent = tours.tour14[4];
    document.getElementById("nearest-transit").textContent = tours.tour14[5];
    document.getElementById("ending-location").textContent = tours.tour14[6];
} else if (document.querySelector("body").id === "body15") {
    document.getElementById("tour-name").textContent = tours.tour15[0];
    document.getElementById("tour-guide").textContent = "With " + tours.tour15[1];
    document.getElementById("tour-date-time").textContent = tours.tour15[2];
    document.getElementById("tour-photo").src = tours.tour15[3];
    document.getElementById("meeting-location").textContent = tours.tour15[4];
    document.getElementById("nearest-transit").textContent = tours.tour15[5];
    document.getElementById("ending-location").textContent = tours.tour15[6];
} else if (document.querySelector("body").id === "body16") {
    document.getElementById("tour-name").textContent = tours.tour16[0];
    document.getElementById("tour-guide").textContent = "With " + tours.tour16[1];
    document.getElementById("tour-date-time").textContent = tours.tour16[2];
    document.getElementById("tour-photo").src = tours.tour16[3];
    document.getElementById("meeting-location").textContent = tours.tour16[4];
    document.getElementById("nearest-transit").textContent = tours.tour16[5];
    document.getElementById("ending-location").textContent = tours.tour16[6];
} else if (document.querySelector("body").id === "body17") {
    document.getElementById("tour-name").textContent = tours.tour17[0];
    document.getElementById("tour-guide").textContent = "With " + tours.tour17[1];
    document.getElementById("tour-date-time").textContent = tours.tour17[2];
    document.getElementById("tour-photo").src = tours.tour17[3];
    document.getElementById("meeting-location").textContent = tours.tour17[4];
    document.getElementById("nearest-transit").textContent = tours.tour17[5];
    document.getElementById("ending-location").textContent = tours.tour17[6];
} else if (document.querySelector("body").id === "body18") {
    document.getElementById("tour-name").textContent = tours.tour18[0];
    document.getElementById("tour-guide").textContent = "With " + tours.tour18[1];
    document.getElementById("tour-date-time").textContent = tours.tour18[2];
    document.getElementById("tour-photo").src = tours.tour18[3];
    document.getElementById("meeting-location").textContent = tours.tour18[4];
    document.getElementById("nearest-transit").textContent = tours.tour18[5];
    document.getElementById("ending-location").textContent = tours.tour18[6];
} else if (document.querySelector("body").id === "body19") {
    document.getElementById("tour-name").textContent = tours.tour19[0];
    document.getElementById("tour-guide").textContent = "With " + tours.tour19[1];
    document.getElementById("tour-photo").src = tours.tour19[3];
    document.getElementById("tour-date-time").textContent = tours.tour19[2];
    document.getElementById("meeting-location").textContent = tours.tour19[4];
    document.getElementById("nearest-transit").textContent = tours.tour19[5];
    document.getElementById("ending-location").textContent = tours.tour19[6];
} else if (document.querySelector("body").id === "body20") {
    document.getElementById("tour-name").textContent = tours.tour20[0];
    document.getElementById("tour-guide").textContent = "With " + tours.tour20[1];
    document.getElementById("tour-date-time").textContent = tours.tour20[2];
    document.getElementById("tour-photo").src = tours.tour20[3];
    document.getElementById("meeting-location").textContent = tours.tour20[4];
    document.getElementById("nearest-transit").textContent = tours.tour20[5];
    document.getElementById("ending-location").textContent = tours.tour20[6];
} else if (document.querySelector("body").id === "body21") {
    document.getElementById("tour-name").textContent = tours.tour21[0];
    document.getElementById("tour-guide").textContent = "With " + tours.tour21[1];
    document.getElementById("tour-date-time").textContent = tours.tour21[2];
    document.getElementById("tour-photo").src = tours.tour21[3];
    document.getElementById("meeting-location").textContent = tours.tour21[4];
    document.getElementById("nearest-transit").textContent = tours.tour21[5];
    document.getElementById("ending-location").textContent = tours.tour21[6];
} else if (document.querySelector("body").id === "body22") {
    document.getElementById("tour-name").textContent = tours.tour22[0];
    document.getElementById("tour-guide").textContent = "With " + tours.tour22[1];
    document.getElementById("tour-date-time").textContent = tours.tour22[2];
    document.getElementById("tour-photo").src = tours.tour22[3];
    document.getElementById("meeting-location").textContent = tours.tour22[4];
    document.getElementById("nearest-transit").textContent = tours.tour22[5];
    document.getElementById("ending-location").textContent = tours.tour22[6];
} else if (document.querySelector("body").id === "body23") {
    document.getElementById("tour-name").textContent = tours.tour23[0];
    document.getElementById("tour-guide").textContent = "With " + tours.tour23[1];
    document.getElementById("tour-date-time").textContent = tours.tour23[2];
    document.getElementById("tour-photo").src = tours.tour23[3];
    document.getElementById("meeting-location").textContent = tours.tour23[4];
    document.getElementById("nearest-transit").textContent = tours.tour23[5];
    document.getElementById("ending-location").textContent = tours.tour23[6];
} else if (document.querySelector("body").id === "body24") {
    document.getElementById("tour-name").textContent = tours.tour24[0];
    document.getElementById("tour-guide").textContent = "With " + tours.tour24[1];
    document.getElementById("tour-date-time").textContent = tours.tour24[2];
    document.getElementById("tour-photo").src = tours.tour24[3];
    document.getElementById("meeting-location").textContent = tours.tour24[4];
    document.getElementById("nearest-transit").textContent = tours.tour24[5];
    document.getElementById("ending-location").textContent = tours.tour24[6];
} else if (document.querySelector("body").id === "body25") {
    document.getElementById("tour-name").textContent = tours.tour25[0];
    document.getElementById("tour-guide").textContent = "With " + tours.tour25[1];
    document.getElementById("tour-date-time").textContent = tours.tour25[2];
    document.getElementById("tour-photo").src = tours.tour25[3];
    document.getElementById("meeting-location").textContent = tours.tour25[4];
    document.getElementById("nearest-transit").textContent = tours.tour25[5];
    document.getElementById("ending-location").textContent = tours.tour25[6];
} else if (document.querySelector("body").id === "body26") {
    document.getElementById("tour-name").textContent = tours.tour26[0];
    document.getElementById("tour-guide").textContent = "With " + tours.tour26[1];
    document.getElementById("tour-date-time").textContent = tours.tour26[2];
    document.getElementById("tour-photo").src = tours.tour26[3];
    document.getElementById("meeting-location").textContent = tours.tour26[4];
    document.getElementById("nearest-transit").textContent = tours.tour26[5];
    document.getElementById("ending-location").textContent = tours.tour26[6];
} else if (document.querySelector("body").id === "body27") {
    document.getElementById("tour-name").textContent = tours.tour27[0];
    document.getElementById("tour-guide").textContent = "With " + tours.tour27[1];
    document.getElementById("tour-date-time").textContent = tours.tour27[2];
    document.getElementById("tour-photo").src = tours.tour27[3];
    document.getElementById("meeting-location").textContent = tours.tour27[4];
    document.getElementById("nearest-transit").textContent = tours.tour27[5];
    document.getElementById("ending-location").textContent = tours.tour27[6];
} else if (document.querySelector("body").id === "body28") {
    document.getElementById("tour-name").textContent = tours.tour28[0];
    document.getElementById("tour-guide").textContent = "With " + tours.tour28[1];
    document.getElementById("tour-date-time").textContent = tours.tour28[2];
    document.getElementById("tour-photo").src = tours.tour28[3];
    document.getElementById("meeting-location").textContent = tours.tour28[4];
    document.getElementById("nearest-transit").textContent = tours.tour28[5];
    document.getElementById("ending-location").textContent = tours.tour28[6];
} else if (document.querySelector("body").id === "body29") {
    document.getElementById("tour-name").textContent = tours.tour29[0];
    document.getElementById("tour-guide").textContent = "With " + tours.tour29[1];
    document.getElementById("tour-date-time").textContent = tours.tour29[2];
    document.getElementById("tour-photo").src = tours.tour29[3];
    document.getElementById("meeting-location").textContent = tours.tour29[4];
    document.getElementById("nearest-transit").textContent = tours.tour29[5];
    document.getElementById("ending-location").textContent = tours.tour29[6];
} else if (document.querySelector("body").id === "body30") {
    document.getElementById("tour-name").textContent = tours.tour30[0];
    document.getElementById("tour-guide").textContent = "With " + tours.tour30[1];
    document.getElementById("tour-date-time").textContent = tours.tour30[2];
    document.getElementById("tour-photo").src = tours.tour30[3];
    document.getElementById("meeting-location").textContent = tours.tour30[4];
    document.getElementById("nearest-transit").textContent = tours.tour30[5];
    document.getElementById("ending-location").textContent = tours.tour30[6];
} else if (document.querySelector("body").id === "body31") {
    document.getElementById("tour-name").textContent = tours.tour31[0];
    document.getElementById("tour-guide").textContent = "With " + tours.tour31[1];
    document.getElementById("tour-date-time").textContent = tours.tour31[2];
    document.getElementById("tour-photo").src = tours.tour31[3];
    document.getElementById("meeting-location").textContent = tours.tour31[4];
    document.getElementById("nearest-transit").textContent = tours.tour31[5];
    document.getElementById("ending-location").textContent = tours.tour31[6];
} else if (document.querySelector("body").id === "body32") {
    document.getElementById("tour-name").textContent = tours.tour32[0];
    document.getElementById("tour-guide").textContent = "With " + tours.tour32[1];
    document.getElementById("tour-date-time").textContent = tours.tour32[2];
    document.getElementById("tour-photo").src = tours.tour32[3];
    document.getElementById("meeting-location").textContent = tours.tour32[4];
    document.getElementById("nearest-transit").textContent = tours.tour32[5];
    document.getElementById("ending-location").textContent = tours.tour32[6];
}