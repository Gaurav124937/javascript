//---------------------TESTING---------------------//
MANUAL TESTING : 
.>is done by running the program and checking if the output matches the expected results.
.> hard to re-test. 
AUTOMATED TESTING : 
.> using code to test code automatically.
.> can be implemented using testing frameworks such as JUnit for Java, pytest for Python, or Mocha for JavaScript.

//TWO TYPES OF TEST CASE:
.>Basic test cases : tests if the program works for simple inputs and expected outputs.
.>Edge test cases : tests if the program works for extreme or unusual inputs, such as very large numbers, empty inputs, or invalid data.

//---------------------TESTING FRAMEWORKS---------------------//
type of external libraries that provide tools and functions to facilitate the testing process. They help developers write, organize, and execute tests more efficiently. Some popular testing frameworks include:
.>JUnit (Java)
.>jasmine (JavaScript)
.>pytest (Python)

//---------------------TESTING STRATEGIES---------------------//
.>Mocking : creating mock objects or functions to simulate the behavior of real components, allowing for isolated testing of specific parts of the code.
.>Stubbing : replacing a function or method with a simplified version that returns predefined values, allowing for controlled testing scenarios.

//HOOKS : special functions provided by testing frameworks that allow developers to set up and tear down test environments before and after each test case.Lets us run some code for each test case
Common hooks include:
.>beforeEach : runs before each test case, used to set up the necessary conditions for the test.
.>afterEach : runs after each test case, used to clean up or reset the environment after the test has completed.