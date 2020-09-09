# boardInfinity

## Problem Statement Assigned:
Create a react web app which lets people compare their Github profiles. Let's call it GithubCompare.
It will be a single page application (SPA) with one input box and a button. Users can enter a github username in the input box and click on the “Compare” button. It will add the user in a list of cards and will show basic statistics of the user like number of followers, following, public repos, public gists.
You can put many Github usernames and it will show cards of each user ranked according to a certain criteria (say total number of followers or total number of public repos or you can make your own algorithm with weight based calculation.

## How I proceed
I was assigned with a problem statement to build a web app using React Js where one can put their username and can checkout their profile details comprising of certains features
like public repos, total number of following, total followers , public gists and many more.

## Day 1
* First of all I've installed the node js followed by npm and created my first react app using the command "npx create-react-app my-app"
* Following files were installed like package.json which contains the useful information of all the installed  packages like their version and so on.
* Started exploring on different packages and their uses and created a simple click button with the intention of populating the details of the users on the webppage.
* I was provided with an api which contains all the required information of a user like it's bio, location, repos, followers and many more.

## Day 2
* After exploring the src folder I've created another subfolder components where I've kept two more files Button.js and Form.js
* Button.js is meant for handling the searching process like if a user click this "search" button then the profile information of that user will get populated on the webpage.
* Installed one package called axios using the command "npm install axios" where axios is used to fetch data from the api to the webapge using HTTP GET REQUEST.
* Created another file called Form.js where Form.js contains the modified version of Button.js. Here I've implemented a text box where one can write their username and when that      person hits enter then his/her profile information will get populated on the web-page.
  
  Finally added some styling to make the UI look user-friendly....
  
 
  

