// Fetch API requires a discussion of...
// Callbacks, Promises, Thenables, and Async/Await

// abstract into functions

//maybe from a form

const getDataFromForm = () => {
  const requestObj =  {
    firstName: "Bruce",
    lastName: "Lee",
    catagories: ["nerdy"]
  };
  return requestObj;
}

const buildRequstUrl = (requestData)  => {
  return `http://api.icndb.com/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}$limitTo=${requestData.catagories}`;
}

const requestJoke = async (url) => {
  const response = await fetch(url);
  const jsonResponse = await response.json();
  const joke = jsonResponse.value.joke;
  postJokeToPage(joke);
}

const postJokeToPage = (joke) => {
  console.log(joke);
}

// Procedural "workflow" function
const processJokeRequest = async () => {
  const requestData = getDataFromForm();
  const requestUrl = buildRequstUrl(requestData);
  await requestJoke(requestUrl);
  console.log("finished!");
}

processJokeRequest();
