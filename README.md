 TinyUrl

#Folder structure
  ├── app                     # Front end of application (React - typescript)
  
  
  ├── server                  # Application server (Node.js - typescript - Express)
  
  ├── screenSHots             # Screen shots of application
  
  ├── videoShots              # Video trailer of application
  

#How to run?
  1. To start server cd server -> npm start
  2. To start an app cd app    -> npm start
  3. MongoDb is places on atlas free cluster

#Features
  1. Genereta short url based on Long url and baseUrl
    -> Post method (localhost:5000/:shortening ,{longUrl, baseUrl}) generates short url and retrives it to user
  2. Redirect short url to long url using browser.
  3. Redirect short url to long url using code
    -> If you want to redirect using rest api inside frontend of application use post method (localhost:5000/:urlCode) it will return long url which can be used inside 
       window.open(response.data.longurl, "_blank");
  4. Get how many trafic was on each url and domain in last 24H
    -> Get method (localhost:5000/:visitedDomainsSorted) retrives two array with url/domains and count in last 24h

  
  #Description
  1. What is a URL shortening system?
     -> Url shortening system is used for creating short urls from long URLs. When someone access short url, system will redirect him to long url. THis is usefull for many
        reasons. It Saves a lot of space and users will have less misstypes. More important feature is that using this system we can easily count trafic both on speciifc url
        and even domain/subdomain
