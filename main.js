// 1.要素の取得
const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

// 2. dragのトリガー
fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

// 4. １つ１つのempty要素を取得
for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

// 3. Drag関数
function dragStart() {
  console.log("start");
  fill.className += " hold"; //付け足す
  setTimeout(() => (fill.className = "invisible"), 0);
}

function dragEnd() {
  console.log("end");
  fill.className = "fill";
}

function dragOver(e) {
  e.preventDefault();
  console.log("over");
}
function dragEnter(e) {
  console.log("enter");
  this.className += " hovered"; //付け足す
}
function dragLeave() {
  console.log("leave");
  this.className = "empty"; //上書き
}
function dragDrop() {
  console.log("drop");
  this.className = "empty";
  this.appendChild(fill);
}
