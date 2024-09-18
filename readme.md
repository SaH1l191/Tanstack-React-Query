cacheing in react query 
// api resonse is caches 
data is first fetched from the cache but anyways network request is sent as react query assumes that 
data might be constantly changing 

useful when frequent asynch data is to be required 
also when data updates occur after initial page load and we navigte to it again it shows the previous data and upddates it 
rather than showing the loading state  again and again , enhancing user experience

normally the fetching data requests are stale marked 
and at every reload refetching of netwrok is performed to check whether the data is changed or not 

if we know the app better then we can use stale time : 30s (eg)
so the request wil be fresh for first 30seconds and then after 30s it makes new newtork request


if we want to fetch data continously then we use refetchInternval :1000s (eg) eveery single second 

if we want to fetch data continously even when we go to other tab switch then we use 
refetchInternvalInBackground : true 

disclaimer : data fetching will continue if we keep on switching to other chrome tabs 


fetching on clicking on the button 

if we want to disable auto data fetching on component render then we use enabled : false 


This is all inclulded under UseQuery oobject hook 


also check npm i json-server which allow backend to work and test in browser with api endpoints 