// var fstForm = document.getElementById("fstForm");
// var numOfBooksInput = document.getElementById("numOfBooks");
// var err = document.getElementById("error");
// var formContain = document.getElementById("formContain");

// // var btn = document.getElementsByClassName("btn");

// var numOfBooks = 0;
// var currentIndex = 0;
// fstForm.addEventListener("submit", function (e) {
//   //   console.log(inp[0].value);
//   var value = Number(numOfBooksInput.value);
//   if (!value || value < 0 || value > 10) {
//     err.innerText = "please enter number between 0 and 10";
//   } else {
//     numOfBooks = value;
//     err.innerText = "";
//     numOfBooksInput.value = "";
//     fstForm.style.display = "none";
//     booksForm(numOfBooks);
//   }
// });

// function booksForm(num) {
//   for (var i = 0; i < num; i++) {
//     // Create new form elements dynamically
//     var form = document.createElement("form");
//     form.setAttribute("class", "bookForm");
//     form.style.display = i == 0 ? "block" : "none";

//     var label = document.createElement("label");
//     label.innerText = "Book Name: ";
//     var input = document.createElement("input");
//     input.setAttribute("type", "text");
//     // input.setAttribute("class", "bookInp");
//     input.required = true;

//     var label1 = document.createElement("label");
//     label1.innerText = "Book Price: ";
//     var input1 = document.createElement("input");
//     input1.setAttribute("type", "number");
//     // input1.setAttribute("class", "bookInp");
//     input1.required = true;

//     var label2 = document.createElement("label");
//     label2.innerText = "Book Author: ";
//     var input2 = document.createElement("input");
//     input2.setAttribute("type", "text");
//     input2.setAttribute("class", "bookInp");
//     input2.required = true;

//     form.appendChild(label);
//     form.appendChild(input);
//     form.appendChild(document.createElement("br"));
//     form.appendChild(label1);
//     form.appendChild(input1);
//     form.appendChild(document.createElement("br"));
//     form.appendChild(label2);
//     form.appendChild(input2);
//     form.appendChild(document.createElement("br"));

//     var submitBtn = document.createElement("button");
//     submitBtn.innerText = "Submit";

//     form.appendChild(label);
//     form.appendChild(input);
//     form.appendChild(document.createElement("br"));
//     form.appendChild(label1);
//     form.appendChild(input1);
//     form.appendChild(document.createElement("br"));

//     form.appendChild(label2);
//     form.appendChild(input2);
//     form.appendChild(document.createElement("br"));
//     form.appendChild(submitBtn);

//     formContain.appendChild(form);

//     form.addEventListener("submit", function (e) {
//       e.preventDefault();
//       if (input.value && input1.value && input2.value) {
//         console.log("Book Name:", input.value);
//         console.log("Book Price:", input1.value);
//         console.log("Book Author:", input2.value);
//         form.style.display = "none";
//         currentIndex++;
//         showNextForm();
//       } else {
//         var div = document.createElement("div");
//         div.innerText = "All fields must be filled out";
//         div.style.color = "red";
//         document.body.appendChild(div);
//       }
//     });
//   }
// }
// function showNextForm() {
//   var forms = document.getElementsByClassName("bookForm");
//   if (currentIndex < forms.length) {
//     forms[currentIndex].style.display = "block";
//   }
// }
// // function booksForm(num) {
// //   for (var i = 0; i < num; i++) {
// //     var form = document.createElement("form");
// //     form.setAttribute("class", "bookForm");
// //     //
// //     var label = document.createElement("label");
// //     label.innerText = "Book Name ";
// //     var input = document.createElement("input");
// //     input.setAttribute("type", "text");
// //     input.setAttribute("class", "bookInp");
// //     //
// //     var label1 = document.createElement("label");
// //     label1.innerText = "Book Price ";
// //     var input1 = document.createElement("input");
// //     input1.setAttribute("type", "number");
// //     input1.setAttribute("class", "bookInp");
// //     //
// //     var label2 = document.createElement("label");
// //     label2.innerText = "Book Author ";
// //     var input2 = document.createElement("input");
// //     input2.setAttribute("type", "text");
// //     input2.setAttribute("class", "bookInp");
// //     //
// //     form.appendChild(label);
// //     form.appendChild(input);
// //     form.appendChild(document.createElement("br"));
// //     form.appendChild(label1);
// //     form.appendChild(input1);
// //     form.appendChild(document.createElement("br"));
// //     form.appendChild(label2);
// //     form.appendChild(input2);
// //     form.appendChild(document.createElement("br"));
// //     //
// //     document.body.appendChild(form);
// //     var submitBtn = document.createElement("button");
// //     submitBtn.innerText = "Submit";
// //     submitBtn.setAttribute("class", "submitBtn");
// //     form.appendChild(submitBtn);
// //     submitBtn.addEventListener("click", function (e) {
// //       e.preventDefault();
// //       console.log(input.value, input1.value, input2.value);
// //       // var newBook = {
// //       //   name: input.value,
// //       //   price: input1.value,
// //       //   author: input2.value
// //       // };
// //       form.remove();
// //     });
// //   }
// // }

var initialForm = document.getElementById("fstForm");
var numOfBooksInput = document.getElementById("numOfBooks");
var error = document.getElementById("error");
var formContainer = document.getElementById("formContain");

var numOfBooks = 0;
var currentFormIndex = 0;
var arr = [];

initialForm.addEventListener("submit", function (e) {
  e.preventDefault();
  var value = Number(numOfBooksInput.value);

  if (!value || value < 0 || value > 10) {
    error.innerText = "Please enter a number between 0 and 10.";
  } else {
    numOfBooks = value;
    error.innerText = "";
    numOfBooksInput.value = "";
    initialForm.style.display = "none";
    createBookForms(numOfBooks);
  }
});

function createBookForms(num) {
  for (var i = 0; i < num; i++) {
    const form = document.createElement("form");
    form.classList.add("bookForm");
    form.style.display = i === 0 ? "block" : "none";

    const labelName = document.createElement("label");
    labelName.innerText = "Book Name: ";
    const inputName = document.createElement("input");
    inputName.setAttribute("type", "text");
    inputName.required = true;

    const labelPrice = document.createElement("label");
    labelPrice.innerText = "Book Price :    ";
    const inputPrice = document.createElement("input");
    inputPrice.setAttribute("type", "number");
    inputPrice.required = true;

    const labelAuthor = document.createElement("label");
    labelAuthor.innerText = "Book Author:";
    const inputAuthor = document.createElement("input");
    inputAuthor.setAttribute("type", "text");
    inputAuthor.required = true;

    const submitBtn = document.createElement("button");
    submitBtn.innerText = "Submit";

    form.appendChild(labelName);
    form.appendChild(inputName);
    form.appendChild(document.createElement("br"));
    form.appendChild(labelPrice);
    form.appendChild(inputPrice);
    form.appendChild(document.createElement("br"));
    form.appendChild(labelAuthor);
    form.appendChild(inputAuthor);
    form.appendChild(document.createElement("br"));
    form.appendChild(submitBtn);

    formContainer.appendChild(form);

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (inputName.value && inputPrice.value && inputAuthor.value) {
        var obj = {
          bookName: inputName.value,
          bookPrice: Number(inputPrice.value),
          bookAuthor: inputAuthor.value,
        };
        arr.push(obj);
        form.style.display = "none";
        currentFormIndex++;
        showNextForm();
      } else {
        error.innerText = "Please enter a data";
      }
    });
  }
}

function showNextForm() {
  const forms = document.getElementsByClassName("bookForm");
  if (currentFormIndex < forms.length) {
    forms[currentFormIndex].style.display = "block";
  } else {
    var table = document.createElement("table");
    table.setAttribute("id", "myTable");
    var rows = "";
    arr.forEach(function (el, i, arrr) {
      console.log(arrr);
      rows += `
      <tr>
      <td>${arrr[i].bookName}</td>
      <td>${arrr[i].bookPrice}</td>
      <td>${arrr[i].bookAuthor}</td>
      <td><button class="btnEdit">edit</button></td>
      <td><button class="btnDelete">delete</button></td>
    </tr>
      `;
    });
    table.addEventListener("click", function (e) {
      if (e.target.className === "btnEdit") {
        var row = e.target.closest("tr");
        row.className = "rowEdit";
        var tds = row.querySelectorAll("td");
        console.log(tds[0].innerText);
        row.innerHTML = `
        <input type="text" id="Nameedited" value="${tds[0].innerText}" />
        <input type="text" id="Priceedited" value="${tds[1].innerText}" />
        <input type="text" id="Authoredited" value="${tds[2].innerText}" />
        <button class="btnSave">save</button>
        <button class="btnCancel">cancel</button>
        `;
        var NameEdited = document.getElementById("Nameedited");
        var PriceEdited = document.getElementById("Priceedited");
        var AuthorEdited = document.getElementById("Authoredited");
        row.addEventListener("click", function (e) {
          if (e.target.className === "btnSave") {
            row.innerHTML = `
        <td>${NameEdited.value}</td>
        <td>${PriceEdited.value}</td>
        <td>${AuthorEdited.value}</td>
        <td><button class="btnEdit">edit</button></td>
        <td><button class="btnDelete">delete</button></td>
      `;
          } else if (e.target.className === "btnCancel") {
            row.innerHTML = `
        <td>${tds[0].innerText}</td>
        <td>${tds[1].innerText}</td>
        <td>${tds[2].innerText}</td>
        <td><button class="btnEdit">edit</button></td>
        <td><button class="btnDelete">delete</button></td>
      `;
          }
        });
      } else if (e.target.className === "btnDelete") {
        arr = arr.slice(1);
        console.log(arr);
        console.log(arr.length);
        var row = e.target.closest("tr");
        row.remove();
        if (arr.length === 0) {
          error.innerHTML = "There is no books To Display";
          error.style.display = "block";
          document.body.appendChild(error);
        }
      }
    });

    table.innerHTML = `<thead>
    <tr>
      <th>Book Name</th>
      <th>Book Price</th>
      <th>Book Author</th>
      <th colspan="2">Controls</th>
    </tr>
  </thead>
  <tbody>
  ${rows}
    
  </tbody>
  `;
    document.body.appendChild(table);
  }
}
