const inputValue = document.getElementsByTagName("input")[0];
const getInput = () => {
  return `https://jsonplaceholder.typicode.com/posts/${inputValue.value}`;
};

const divPost = document.querySelector(".post");
const divTitle = document.querySelector(".post-title");

const getPost = () => {
  fetch(getInput()).then(async (res) => {
    if (res.status === 200) {
      const responce = await res.json();
      createPost(responce);
    } else {
      alert("Error");
    }
  });
};

const myForm = document.querySelector("form");
myForm.addEventListener("submit", (event) => {
  event.preventDefault;
  getPost();
});

const createPost = (arr) => {
  divTitle.innerText = arr.title;
  divPost.prepend(divTitle);
};
const btnComment = document.querySelector(".btn-comment");
btnComment.addEventListener("click", () => {
  getComment(inputValue.value);
});

const getComment = (id) => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then((res) => res.json())
    .then(createText);
};

const ul = document.querySelector(".comment > ul");

const createText = (arr) => {
  arr.forEach((el) => {
    const text = document.createElement("li");
    text.innerText = el.name;
    ul.append(text);
  });
};
