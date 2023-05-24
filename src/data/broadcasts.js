const broadcasts = [
{time: '16:00', team1: 'England U17', team2: 'Switzerland U17', date: 24},
{time: '17:00', team1: 'Lucknow Super Giants', team2: 'Mumbai Indians', date: 24},
{time: '20:10', team1: 'Milwaukee Brewers', team2: 'Houston Astros', date: 24},
{time: '20:30', team1: 'Elche', team2: 'Sevilla FC', date: 24},
{time: '20:30', team1: 'Villarreal', team2: 'Cadiz', date: 24},
{time: '20:30', team1: 'Real Madrid', team2: 'Rayo Vallecano', date: 24},
{time: '21:00', team1: 'Somerset', team2: 'Hampshire', date: 24},
{time: '21:45', team1: 'Rangers', team2: 'Hearts', date: 24},
{time: '22:00', team1: 'Brighton', team2: 'Man City', date: 24},
{time: '22:00', team1: 'Fiorentina', team2: 'Inter', date: 24},
{time: '23:00', team1: 'Espanyol', team2: 'Atl Madrid', date: 24},
{time: '23:00', team1: 'Betis', team2: 'Getafe', date: 24}
,{time: '02:20', team1: 'Atlanta Braves', team2: 'Los Angeles Dodgers', date: 25}
,{time: '03:05', team1: 'Florida Panthers', team2: 'Carolina Hurricanes', date: 25}
,{time: '03:35', team1: 'Denver Nuggets', team2: 'Los Angeles Lakers', date: 25}
,{time: '12:50', team1: 'Dolphins', team2: 'St. George Illawarra Dragons', date: 25}
,{time: '20:00', team1: 'Middlesex', team2: 'Surrey', date: 25}
,{time: '20:10', team1: 'Tampa Bay Rays', team2: 'Toronto Blue Jays', date: 25}
,{time: '20:30', team1: 'Mallorca', team2: 'Valencia', date: 25}
,{time: '22:00', team1: 'Hull Kingston Rovers', team2: 'Wigan Warriors', date: 25}
,{time: '22:00', team1: 'Man Utd', team2: 'Chelsea', date: 25}
,{time: '22:10', team1: 'Gerwyn Price', team2: 'Jonny Clayton', date: 25}
,{time: '22:30', team1: 'Osasuna', team2: 'Ath Bilbao', date: 25}
,{time: '23:05', team1: 'Washington Nationals', team2: 'San Diego Padres', date: 25}
,{time: '23:10', team1: 'Michael Smith', team2: 'Michael van Gerwen', date: 25}
,{time: '02:05', team1: 'New York Yankees', team2: 'Baltimore Orioles', date: 26}
,{time: '03:35', team1: 'Boston Celtics', team2: 'Miami Heat', date: 26}
,{time: '12:35', team1: 'Melbourne Rebels', team2: 'Western Force', date: 26}
,{time: '12:50', team1: 'Sydney Swans', team2: 'Carlton Blues', date: 26}
,{time: '16:30', team1: 'Belgium', team2: 'India', date: 26}
,{time: '17:00', team1: 'Gujarat Titans', team2: 'TBC', date: 26}
,{time: '18:05', team1: 'Western Province', team2: 'Lions', date: 26}
,{time: '19:00', team1: 'Great Britain (W)', team2: 'China (W)', date: 26}
,{time: '20:30', team1: 'Surrey', team2: 'Kent', date: 26}
,{time: '20:30', team1: 'Leeds Rhinos (W)', team2: 'St. Helens (W)', date: 26}
,{time: '21:00', team1: 'Strathclyde Sirens', team2: 'Celtic Dragons', date: 26}
,{time: '21:20', team1: 'Chicago Cubs', team2: 'Cincinnati Reds', date: 26}
,{time: '21:35', team1: 'Ayrshire Bulls', team2: "Heriot's Rugby", date: 26}
,{time: '21:45', team1: 'Ayr', team2: 'Partick', date: 26}
,{time: '22:00', team1: 'Leeds Rhinos', team2: 'St. Helens', date: 26}
,{time: '22:00', team1: 'Zaragoza', team2: 'Tenerife', date: 26}
,{time: '02:05', team1: 'Baltimore Orioles', team2: 'Texas Rangers', date: 27}
,{time: '03:05', team1: 'Carolina Hurricanes', team2: 'Florida Panthers', date: 27}
,{time: '03:35', team1: 'Los Angeles Lakers', team2: 'Denver Nuggets', date: 27}
,{time: '09:35', team1: 'Geelong Cats', team2: 'GWS Giants', date: 27}
,{time: '12:25', team1: 'Gold Coast Suns', team2: 'Western Bulldogs', date: 27}
,{time: '12:35', team1: 'ACT Brumbies', team2: 'Waikato Chiefs', date: 27}
,{time: '12:35', team1: 'South Sydney Rabbitohs', team2: 'Canberra Raiders', date: 27}
,{time: '14:30', team1: 'Great Britain', team2: 'India', date: 27}
,{time: '14:30', team1: 'Celtic', team2: 'Aberdeen', date: 27}
,{time: '16:00', team1: 'Spezia', team2: 'Torino', date: 27}
,{time: '16:30', team1: 'FC Koln', team2: 'B Munich', date: 27}
,{time: '16:30', team1: 'Borussia Dortmund', team2: 'Mainz', date: 27}
,{time: '16:30', team1: 'Liverpool (W)', team2: 'Man Utd (W)', date: 27}
,{time: '16:30', team1: 'Reading (W)', team2: 'Chelsea (W)', date: 27}
,{time: '17:00', team1: 'Saracens', team2: 'Sale Sharks', date: 27}
,{time: '17:00', team1: 'Belgium (W)', team2: 'China (W)', date: 27}
,{time: '18:45', team1: 'Coventry', team2: 'Luton', date: 27}
,{time: '18:45', team1: 'Armagh', team2: 'Westmeath', date: 27}
,{time: '19:00', team1: 'Fiorentina', team2: 'Roma', date: 27}
,{time: '19:00', team1: 'Watsonians', team2: 'Stirling Wolves', date: 27}
,{time: '19:30', team1: 'Stormers', team2: 'Munster', date: 27}
,{time: '20:00', team1: 'Sevilla FC', team2: 'Real Madrid', date: 27}
,{time: '20:00', team1: 'New York Liberty (W)', team2: 'Connecticut Sun (W)', date: 27}
,{time: '21:00', team1: 'Derry', team2: 'Monaghan', date: 27}
,{time: '23:00', team1: 'New Orleans Breakers', team2: 'Birmingham Stallions', date: 27}
,{time: '00:00', team1: 'Luis Alberto Lopez', team2: 'Michael Conlan', date: 28}
,{time: '00:00', team1: 'Lawrence Okolie', team2: 'Chris Billam Smith', date: 28}
,{time: '00:00', team1: 'Mauricio Lara', team2: 'Leigh Wood', date: 28}
,{time: '02:15', team1: 'Cleveland Indians', team2: 'St Louis Cardinals', date: 28}
,{time: '03:05', team1: 'Vegas Golden Knights', team2: 'Dallas Stars', date: 28}
,{time: '03:35', team1: 'Miami Heat', team2: 'Boston Celtics', date: 28}
,{time: '05:00', team1: 'Alexis Rocha', team2: 'Anthony Young', date: 28}
,{time: '06:10', team1: 'Richmond Tigers', team2: 'Port Adelaide Power', date: 28}
,{time: '09:40', team1: 'Adelaide Crows', team2: 'Brisbane Lions', date: 28}
,{time: '13:30', team1: 'Verona', team2: 'Empoli', date: 28}
,{time: '14:30', team1: 'Great Britain', team2: 'Belgium', date: 28}
,{time: '15:30', team1: 'Carlisle', team2: 'Stockport County', date: 28}
,{time: '15:30', team1: 'Celtic (W)', team2: 'Rangers (W)', date: 28}
,{time: '16:00', team1: 'Bologna', team2: 'Napoli', date: 28}
,{time: '16:00', team1: 'Monza', team2: 'Lecce', date: 28}
,{time: '16:00', team1: 'World XV', team2: 'Barbarians', date: 28}
,{time: '17:00', team1: 'Chennai Super Kings', team2: 'TBC', date: 28}
,{time: '17:00', team1: 'Great Britain (W)', team2: 'Belgium (W)', date: 28}
,{time: '18:30', team1: 'Leicester', team2: 'West Ham', date: 28}
,{time: '18:30', team1: 'Leeds', team2: 'Tottenham', date: 28}
,{time: '18:30', team1: 'Everton', team2: 'Bournemouth', date: 28}
,{time: '19:00', team1: 'Lazio', team2: 'Cremonese', date: 28}
,{time: '20:00', team1: 'Ath Bilbao', team2: 'Elche', date: 28}
,{time: '20:00', team1: 'Valencia', team2: 'Espanyol', date: 28}
,{time: '20:00', team1: 'Girona', team2: 'Betis', date: 28}
,{time: '20:00', team1: 'Almeria', team2: 'Valladolid', date: 28}
,{time: '20:00', team1: 'Rayo Vallecano', team2: 'Villarreal', date: 28}
,{time: '20:00', team1: 'Cadiz', team2: 'Celta Vigo', date: 28}
,{time: '20:00', team1: 'Getafe', team2: 'Osasuna', date: 28}
,{time: '20:00', team1: 'Atl Madrid', team2: 'Sociedad', date: 28}
,{time: '20:00', team1: 'Barcelona', team2: 'Mallorca', date: 28}
,{time: '20:35', team1: 'New York Yankees', team2: 'San Diego Padres', date: 28}
,{time: '21:30', team1: 'Memphis Showboats', team2: 'Houston Gamblers', date: 28}
,{time: '21:45', team1: 'Juventus', team2: 'AC Milan', date: 28}
,{time: '00:30', team1: 'New Jersey Generals', team2: 'Michigan Panthers', date: 29}
,{time: '02:05', team1: 'Atlanta Braves', team2: 'Philadelphia Phillies', date: 29}
,{time: '03:05', team1: 'Florida Panthers', team2: 'Carolina Hurricanes', date: 29}
,{time: '03:35', team1: 'Denver Nuggets', team2: 'Los Angeles Lakers', date: 29}
,{time: '17:00', team1: 'Barnsley', team2: 'Sheffield Wednesday', date: 29}
,{time: '20:05', team1: 'Baltimore Orioles', team2: 'Cleveland Indians', date: 29}
,{time: '20:30', team1: 'Durham', team2: 'Notts', date: 29}
,{time: '23:10', team1: 'Houston Astros', team2: 'Minnesota Twins', date: 29}
,{time: '03:35', team1: 'Boston Celtics', team2: 'Miami Heat', date: 30}
,{time: '02:10', team1: 'New York Mets', team2: 'Philadelphia Phillies', date: 31}
,{time: '13:05', team1: 'Queensland', team2: 'New South Wales', date: 31}
,{time: '20:30', team1: 'Northants', team2: 'Birmingham', date: 31}
,{time: '21:20', team1: 'Chicago Cubs', team2: 'Tampa Bay Rays', date: 31}
,{time: '22:00', team1: 'Sevilla FC', team2: 'Roma', date: 31}
];

export default broadcasts;
