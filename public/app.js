const month = ["January","February","March","April","May","June","July",
"August","September","October","November","December"];

const userInput = document.getElementById('user-input')
const searchBtn = document.getElementById('search-btn')
const profilePic = document.getElementById('github-profile')
const username = document.getElementById('username')
const dateJoined = document.getElementById('date-joined')
const userBio = document.getElementById('user-bio')
const userRepositories = document.getElementById('user-repositories')
const userFollowers = document.getElementById('user-followers')
const userFollowing = document.getElementById('user-following')
const twitterUsername = document.getElementById('twitter-username')
const websiteUrl = document.getElementById('website-url')
const userLocation = document.getElementById('user-location')
const userCompany = document.getElementById('user-company')

const infoDisplay = document.getElementById('info-display')

const pleaseSearch = document.getElementById('please')



const getUser = async(userInput) =>{
    // e.preventDefault();

        const response = await axios.get('https://api.github.com/users/' + userInput.value)
    
        const data = response.data
        console.log(data)

        const formatttedDate = new Date(data.created_at)
        console.log("Type of...." + typeof(formatttedDate))

      
        profilePic.src = data.avatar_url
        username.innerHTML = "Name: " + data.name
        dateJoined.innerHTML = "Joined: " + month[formatttedDate.getMonth()] + ', ' + formatttedDate.getFullYear()
        userRepositories.innerHTML = "Public Repos: " + data.public_repos
        userFollowers.innerHTML = "Followers: " + data.followers
        userFollowing.innerHTML = "Following: " + data.following
        twitterUsername.innerHTML = data.twitter_username
        userBio.innerHTML = "Bio: " + data.bio
        userLocation.innerHTML =  data.location
        websiteUrl.innerHTML = data.blog
        userCompany.innerHTML = data.company
        
    // catch(error){console.log(error)}
}

searchBtn.addEventListener('click', () =>{
    getUser(userInput);
    infoDisplay.setAttribute("style", "display:block;");
    pleaseSearch.setAttribute("style", "visibility: hidden;");
    userInput.value = ''
     
     
   
})



