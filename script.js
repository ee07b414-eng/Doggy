const button = document.querySelector("#helloButton");
const status = document.querySelector("#status");

button?.addEventListener("click", () => {
  status.textContent = "项目已经成功连接到 GitHub 仓库。";
});
