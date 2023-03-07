### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
JSON WEB TOKEN- these are used to authorize users

- What is the signature portion of the JWT?  What does it do?
the signature is the final part of the JWT and it is used for making sure data hasn't been changed and is coming from the same location

- If a JWT is intercepted, can the attacker see what's inside the payload?
Yes, it's encoded but not unencodable

- How can you implement authentication with a JWT?  Describe how it works at a high level.
JWT comes with everything you would need to authenticate in one easy package.
JWT takes user data, creates a payload/header/sig and returns those values.  You can then use JWT.verify and compare the new credentials being passed to the token that has been created.

- Compare and contrast unit, integration and end-to-end tests.
Unit tests test individual functionality of script and can be used to ensure your code isn't breaking, integration tests are for things like our routes in Node/Flask anything that we are requesting from a server or url, end-to-end tests are for testing the entirety of your application and to simulate user use.  

- What is a mock? What are some things you would mock?
Mock functions allow testing without implementing the function and allows us to control aspects we wouldn't otherwise.  Mocks are useful for testing when there is a dependency in your test that isn't present in the testing environment.

- What is continuous integration?
Merging all work into a shared space before release.  We use Git/Github for this!

- What is an environment variable and what are they used for?
environment variables are used to tell Node exactly what we are trying to do.  For instance setting it to TEST will tell supertest/jest that you are going to be testing.

- What is TDD? What are some benefits and drawbacks?
Test driven development.  Benefits are you have a structured expecation of EXACTLY how your function should operate, what your returns should be, and that it is easy to test.  Some drawbacks could be spreading yourself too thin, without a starting function your tests may be too simple, write too many tests to get the actual work done.

- What is the value of using JSONSchema for validation?
JSONSchema is a template that shows how our JSON request should be structured.  We can then use it to verify req.body to our JSONSchema and tells us if it matches.

- What are some ways to decide which code to test?
By testing all code you are all set!  

- What does `RETURNING` do in SQL? When would you use it?
RETURNING gives us values back from a query that normally wouldn't return anything.

- What are some differences between Web Sockets and HTTP?
HTTP is a request-response model and once the request is responded it terminates.  With HTTP sending and receiving can't happen at the same time.  Web Sockets do not terminate after a response is sent giving you the ability to send information until the client or server stops connection.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  I am not entirely sure because with Flask we got to use a real ORM and with Express we were forced into the dark ages.  BUT!  I think I enjoyed Express more at this point but I am unsure if it is due to the challenge or if it's because I prefer JavaScript syntax.  
