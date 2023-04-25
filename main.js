const URL = "https://api.github.com/users/";
const get = (params) => document.querySelector(`[${params}]`);
// theme
const wrapper = get("data-body");
const themeText = get("data-theme-text");
const toggleTheme = get("data-toggle-btn");
const themeDarkIcon = get("data-dark-icon");
const themeLightIcon = get("data-light-icon");
// input
const userInput = get("data-input");
const form = get("data-form");
const inputClearBtn = get("data-input-clear");
const searchBtn = get("data-search-btn");
const error = get("data-error");
// user info
const pfp = get("data-pfp");
const nameOfUser = get("data-name");
const dateJoined = get("data-joined");
const profileLink = get("data-profile-link");
const bio = get("data-bio");
const repos = get("data-repos");
const followers = get("data-followers");
const following = get("data-following");
const location = get("data-location");
const website = get("data-website");
const twitter = get("data-twitter");
const company = get("data-company");

// default
let userName = "chiragdbb";
getUserData(userName);

// fetch user data from github
function getUserData(username) {
	fetch(URL + username)
		.then((response) => {
			if (response.ok) {
				return response.json();
			}
			throw new Error(`Username Invalid`);
		})
		.then((json) => displayUserData(json))
		.catch((err) => {
			console.log(err);
			//diplay error on UI
			error.classList.add("active");
		});
}

// display data on interface
function displayUserData(data) {
	const newDate = new Date(data.created_at).toDateString().split(" ");
	pfp.src = data.avatar_url;
	nameOfUser.innerHTML = data.name;
	dateJoined.innerHTML = `Joined ${newDate[2]} ${newDate[1]} ${newDate[3]}`;
	profileLink.href = data.html_url;
	profileLink.innerHTML = `@${data.login}`;
	if (data.bio !== null) {
		bio.innerHTML = data.bio;
	} else {
		bio.innerHTML = "This profile has no bio";
	}
	repos.innerHTML = data.public_repos;
	followers.innerHTML = data.followers;
	following.innerHTML = data.following;
	if (data.location !== null) {
		location.parentElement.style.opacity = "1";
		location.innerHTML = data.location;
	} else {
		location.innerHTML = "Not Available";
		location.parentElement.style.opacity = "0.5";
	}
	if (data.company !== null) {
		company.parentElement.style.opacity = "1";
		company.innerHTML = data.company;
	} else {
		company.innerHTML = "Not Available";
		company.parentElement.style.opacity = "0.5";
	}
	if (data.twitter_username !== null) {
		twitter.parentElement.style.opacity = "1";
		twitter.href = `https://twitter.com/${data.twitter_username}`;
		twitter.innerHTML = data.twitter_username;
	} else {
		twitter.innerHTML = "Not Available";
		twitter.parentElement.style.opacity = "0.5";
	}
	if (data.blog !== "") {
		website.parentElement.style.opacity = "1";
		website.href = data.blog;
		website.innerHTML = data.blog;
	} else {
		website.innerHTML = "Not Available";
		website.parentElement.style.opacity = "0.5";
	}
}

form.addEventListener("submit", (e) => {
	e.preventDefault();
	userName = userInput.value;
	if (userName !== "") {
		getUserData(userName);
	} else return;
});

inputClearBtn.addEventListener("click", () => {
	inputClearBtn.classList.remove("active");
	userInput.value = "";
});

userInput.addEventListener("input", () => {
	if (userInput.value !== "") {
		inputClearBtn.classList.add("active");
	} else {
		inputClearBtn.classList.remove("active");
	}
	error.classList.remove("active");
});

// dark mode
let currentTheme = "";
getTheme();

toggleTheme.addEventListener("click", () => {
	changeTheme();
});

function changeTheme() {
	wrapper.classList.toggle("dark");

	if (wrapper.classList.contains("dark")) {
		currentTheme = "dark";
	} else {
		currentTheme = "light";
	}

	// light
	if (currentTheme === "light") {
		themeText.innerHTML = "Dark";
		themeLightIcon.classList.remove("active");
		themeDarkIcon.classList.remove("not-active");
	} else {
		// dark
		themeText.innerHTML = "Light";
		themeLightIcon.classList.add("active");
		themeDarkIcon.classList.add("not-active");
	}

	// add theme in local storage
	localStorage.setItem("theme", currentTheme);
}

function getTheme() {

	// check preference in local storage
	if (localStorage.getItem("theme")) {
		currentTheme = localStorage.getItem("theme");
	} else {
		currentTheme = "light";
	}
	// check if user had dark theme
	if (currentTheme === "dark") {
		changeTheme();
	}
	return currentTheme;
}
