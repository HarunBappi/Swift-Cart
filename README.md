## 1.  What is the difference between null and undefined?
- Undefined means a variable has been declare variable but not assign a value . Undefined types undefined.
- Null means an Intentional absence of value Assigned by the developer. Null types Object.

## 2. What is the use of the map() function in JavaScript? How is it different from forEach()?
- map() 
  - map() Operates on each element, Returns a new Array but no change original Array.
- forEach()
  - Works on every element but Returns nothing. 

## 3. What is the difference between == and ===?

- ==
  - Just compare in value.
  - Convert type before Comparing.
- ===
  - Compares both Value and Type.
  - Does not perform any type Conversion.

## 4. What is the significance of async/await in fetching API data?
 
 - async/await is used to write asynchronous code as easily as  synchronous code.
 - API calls always take time to get data from the server.
    async/await handles that waiting process nicely.

## 5. Explain the concept of Scope in JavaScript (Global, Function, Block).

 - Scope
   - Scope means where a variable can be accessed from.
 - Global
   - A variable that is declared outside of a function is in Global Scope.
 - Function
   - A variable that is declared inside a function and can only be used within that function is called functional scope.
 - Block
   - Block means the part inside { }. Usually let and const are block scoped.          