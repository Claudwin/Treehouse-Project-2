
/*------------------------VARIABLES-------------------------------------*/

//pagination variables
let $pagination;
let $ul;
let $studentList = $(`.student-item`);
let StudentsToDisplay = 10;

//search section variables
let newMatchedStudents = [];
let $refreshBtn;
let $search;

/*------------------------Calls Functions On Page Load-------------------------------------*/

$(document).ready(function() {
createPagination($studentList); //Calls pagination Functions
$searchDiv();

});
/*------------------------showPage-------------------------------------*/

const showPage = (pageNumber, StudentList) => {
  //hide all student links
  $($studentList).hide();
//loop through all students in the student list argument
  for (let i = 0; i < StudentList.length; i++) {
  if (i < pageNumber * StudentsToDisplay && i + 1 > (pageNumber - 1) * StudentsToDisplay) {
    //show selected array of students
    $(StudentList[i]).show();
  }
}
};

/*------------------------createPagination-------------------------------------*/
//This ​function ​creates ​all ​the ​page ​links ​based ​on ​a ​list ​of ​students.
const createPagination = (appendStudentsLinks) => {
$pagination = $(`<div class ="pagination"</div>`);
$ul = $('<ul></ul>');
//append pagination section to page
$(`.page`).append($pagination);
//calculate pages needed
let $pages = Math.ceil(appendStudentsLinks.length / StudentsToDisplay);

for (let i = 1; i <= $pages; i++) {
let $pages = (`<li><a href="#"> ${i} </a></li>`);
//append page links to the ul element in tha pagination section
$($ul).append($pages);
//select the pagination class from css. file
$(`.pagination`).append($ul);
//on page load, show first page
if (i === 1) {
  showPage(1, appendStudentsLinks);
  //add active class to page 1 on load
  $(`.pagination ul li a`).attr(`class`, `active`);
}
}

/*------------------------eventHandler-------------------------------------*/

$(`.pagination li a`).click(function () {
  //create variable to hold the text (value of i) of the button clicked
  let $currentPage = $(this).text();

  showPage($currentPage, appendStudentsLinks);

  //remove the class 'active' from the current page
  $(`.active`).removeClass(`active`);

  $(this).addClass(`active`);
});

};

/*------------------------Search Section-------------------------------------*/
 const  $searchDiv = () => {
   const $searchBox = $('<div class="student-search"><input placeholder="Search students..."><button>Search</button></div>');
  $('.page-header').append($searchBox)
 };
