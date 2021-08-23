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

2. What's the main value? Who needs such a system and why?
   -> As i said in previous question there are great number of advantages to use url shortening systems:
      It improves search engine ranking
      Shorter Urls make sharing Easier
      Tracking capabilities
      More legitimacy
      ....
3. Describe The main mechanism of work and system components.
   -> User need to input Url which he wants to shorten, and he needs to choose base URl (url of server which will generate/redirect short url).
      When users sends requred data to server, server will take long url and generate unique url code. It will concate baseUrl + urlCode and create full shortUrl.
      With this short url user can access his long url using redirection. 

4. What do you think are the imain challenges in implementing and running the system.
    -> This system will be read-heavy. Every request will go into our server. Besides read-heavy difficulty we will have a lot recors to our database. 
       There are a lot of ways we can improve out system. BEcause we can anticipate storing milions of recors without any realtionship we can use NoSql database for easier                scaling, We can cache url that are frequentl used. If we go really big we can implement Load Balancer for balancing requests. 
         
 5. Try to suggest some ideas for advanced features 
    -> We can implement expiration date if specified for shortUrl. This user can limit usega of url for some period and we can purge regords from databse when date expires and
       someone tries to access.
    -> We can create advcance analitics for every request. Which we could use for geotargeting, devicetargeting...
    -> Private URl -> user can specify which ip addresses can access url 
    -> Connect custom domain
