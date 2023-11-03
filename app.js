console.log("Let's get this party started!");

const form = document.querySelector("#giphForm");
const container = document.querySelector("#giphContainer");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  let searchRq = e.target.querySelector("#giphInput").value;
  let giphLink = await getGiphyInfo(searchRq);
  updatePage(giphLink);
});

async function getGiphyInfo(request) {
  let link = await axios.get("https://api.giphy.com/v1/gifs/random/", { params: { api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym", tag: request } });
  console.log(link.data.data.images.looping.mp4);
  return link.data.data.images.looping.mp4;
}

function updatePage(link) {
  const video = document.createElement("video");
  video.src = link;
  video.loop = true;
  video.autoplay = true;
  video.width = 300;
  video.height = 360;
  container.append(video);
}

container.addEventListener("click", function (e) {
  if (e.target.tagName === "VIDEO") {
    e.target.remove();
  }
});
