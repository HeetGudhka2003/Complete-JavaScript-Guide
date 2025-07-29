/* 

DOM (Document Object Model): It is a representation of an HTML document. It treats HTML as a tree and its elements as nodes.

1. document: It is a global object that represents the HTML document. It has various properties and methods that can be used to access and manipulate the document.

2. document.getElementById(): It is used to get an element by its id.

3. document.getElementsByClassName(): It is used to get all elements with a specific class name.

4. document.getElementsByTagName(): It is used to get all elements with a specific tag name.

5. document.querySelector(): It is used to get the first element that matches a specific CSS selector.

6. document.querySelectorAll(): It is used to get all elements that match a specific CSS selector.

7. document.createElement(): It is used to create new HTML elements.

8. document.createTextNode(): It is used to create new text nodes.

9. document.appendChild(): It is used to append a child element to a parent element.

10. document.removeChild(): It is used to remove a child element from a parent element.

11. document.addEventListener(): It is used to add an event listener to an element.

12. document.removeEventListener(): It is used to remove an event listener from an element.

13. document.setAttribute(): It is used to set an attribute on an element.

14. document.removeAttribute(): It is used to remove an attribute from an element.

15. document.getAttribute(): It is used to get the value of an attribute on an element.

16. document.style: It is used to set or get the style of an element.

17. document.title: It is used to set or get the title of the document.

18. document.URL: It is used to get the URL of the current document.

19. document.firstChild: It is used to get the first child element of an element.

20. document.lastChild: It is used to get the last child element of an element.

21. document.parentNode: It is used to get the parent element of an element.

22. document.childNodes: It is used to get all child elements of an element.

23. document.innerHTML: It is used to set or get the inner HTML of an element.

24. document.textContent: It is used to set or get the text content of an element.

25. document.location: It is used to get the location of the current document.

22. document.firstElementChild: It is used to get the first child element of an element.

23. document.lastElementChild: It is used to get the last child element of an element.

24. document.previousElementSibling: It is used to get the previous sibling element of an element.

25. document.nextElementSibling: It is used to get the next sibling element of an element.

*/

// 1. document

console.log(document); // Logs entire HTML document

// 2. getElementById

let heading = document.getElementById("heading");
heading.style.color = "red";

// 3. getElementsByClassName

let classList = document.getElementsByClassName("ordered-list");
console.log(classList);

// 4. getElementsByTagName

let allParas = document.getElementsByTagName("p");
console.log(allParas);

// 5. querySelector

let firstListItem = document.querySelector("li");
console.log(firstListItem);

// 6. querySelectorAll

let allListItems = document.querySelectorAll("li");
console.log(allListItems);

// 7. createElement

let newDiv = document.createElement("div");

// 8. createTextNode

let textNode = document.createTextNode("Created using createTextNode");

// 9. appendChild

newDiv.appendChild(textNode);
document.body.appendChild(newDiv);

// 10. removeChild

let removeTarget = document.createElement("p");
removeTarget.textContent = "This will be removed";
document.body.appendChild(removeTarget);
document.body.removeChild(removeTarget);

// 11. addEventListener

newDiv.addEventListener("click", () => {

  alert("Div Clicked!");

});

// 12. removeEventListener (not visible unless used with named function)

function handleClick() {

  console.log("Clicked!");
}

newDiv.addEventListener("dblclick", handleClick);

newDiv.removeEventListener("dblclick", handleClick);

// 13. setAttribute

newDiv.setAttribute("id", "newly-created-div");

// 14. removeAttribute

newDiv.removeAttribute("id");

// 15. getAttribute

let hasClass = heading.getAttribute("id");
console.log("Heading ID:", hasClass);

// 16. style

heading.style.backgroundColor = "yellow";

// 17. title

document.title = "Manipulated Title";

// 18. URL

console.log("Page URL:", document.URL);

// 19. firstChild

console.log("First Child of Body:", document.body.firstChild);

// 20. lastChild

console.log("Last Child of Body:", document.body.lastChild);

// 21. parentNode

console.log("Parent of heading:", heading.parentNode);

// 22. childNodes

console.log("Child nodes of body:", document.body.childNodes);

// 23. innerHTML

newDiv.innerHTML = "<b>Replaced with innerHTML</b>";

// 24. textContent

heading.textContent = "Updated Heading with textContent";

// 25. location

console.log("Location object:", document.location);

// 26. firstElementChild

console.log("First Element Child of Body:", document.body.firstElementChild);

// 27. lastElementChild

console.log("Last Element Child of Body:", document.body.lastElementChild);

// 28. previousElementSibling

let para = document.querySelector("p");
console.log("Previous Sibling of Paragraph:", para.previousElementSibling);

// 29. nextElementSibling

console.log("Next Sibling of Paragraph:", para.nextElementSibling);

// 30. Bonus: Modify title again for clarity

document.title = "DOM Methods Tested";