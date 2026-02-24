1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll:
We Can take a id by using getElementById, as we know that ID is specefic and powerful, we can give an html element ID and we can call it by using getElementById, on the otherhand we can call a Class by using getElementByClass, we can call a specific class by using QuerySelector and we can call all the classes into an html element by using QuerySelectorAll...



2. How do you create and insert a new element into the DOM?
Ans: There are some ways to create and insert a new element into the DOM: Such as:
1. CreateElement (we can use createElement to create a New Element into the Dom.
2. We can directly use innerHtml to insert a new element.
3. We can change the text content by using innerText.



3. Event Bubbling? And how does it work?
Ans: Event Bubbling is a term of DOM, where an event starts from the target element. (For example: when we clicked on a button inside a div, the event trigged the button, then on the div, then on the body, and then on the document and continue...…)
and for this reason we can use addEventListner()on a parent element. And this behavior called Event Bubbling...



4. What is Event Delegation in JavaScript? Why is it useful?
Ans: Event Delegation is process where we add one event listener to a parent element instead of multiple listeners to a child elements, this is related to event bubbling.....



5.What is the difference between preventDefault() and stopPropagation() methods?
Ans: PreventDefault Stop the default behavior of an element.. StopPropagation helps to stop bubbling of a parent element..
These two are works with the event... 
