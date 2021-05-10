console.log("testing");
class Book {
  constructor(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
  }
}
class Display {
  add(book) {
    let tableBody = document.getElementById("tableBody");
    let html = `<tr>
<th scope="col">${book.name}</th>
<th scope="col">${book.author}</th>
<th scope="col">${book.type}</th>
</tr>`;
    tableBody.innerHTML += html;
  }
  clear() {
    libraryForm.reset();
  }
  validation(book) {
    if (book.name.length < 3 || book.author < 3) {
      return false;
    } else {
      return true;
    }
  }
  show(type, displayMessage) {
    let message = document.getElementById('messageBody');
    let boldText;
    if(type==='success'){
        boldText = 'Success';
    }
    else{
        boldText = 'Error!';
    }
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>${boldText}:</strong> ${displayMessage}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>`;
    setTimeout(function () {
        message.innerHTML = ''
    }, 5000);

}
}

let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", (e) => {
  console.log("form submit");
  let name = document.getElementById("bookName").value;
  let author = document.getElementById("author").value;
  let type = "";
  let suspense = document.getElementById("suspense");
  let comedy = document.getElementById("comedy");
  let programming = document.getElementById("programming");
  if (suspense.checked) {
    type = suspense.value;
  } else if (comedy.checked) {
    type = comedy.value;
  } else if (programming.checked) {
    type = programming.value;
  }
  let book = new Book(name, author, type);
  let display = new Display();
  console.log(book);
  if(display.validation(book)){
    display.add(book);
    display.clear();
    display.show('success', 'Your book has been successfully added')
  }
  else{
    display.show('danger', 'Sorry you cannot add this book');
      console.log('error')
  }
 

  e.preventDefault();
});
