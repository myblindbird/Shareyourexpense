**Problem Statement:**
Create an expense sharing application (API based) - An expense sharing application
is where you can add your expenses and split it among different people. The app keeps
balances between people as in who owes how much to whom.

**Requirements:**
1. User: Each user should have a userId, name, email, mobile number.
2. Expense: Could either be EQUAL, EXACT or PERCENT
3. Users can add any amount, select any type of expense and split with any of the
available users.
4. The percent and amount provided could have decimals upto two decimal places.
5. In case of percent, you need to verify if the total sum of percentage shares is 100
or not.
6. In case of exact, you need to verify if the total sum of shares is equal to the total
amount or not.
7. The application should have a capability to show expenses for a single user as
well as balances for everyone.
8. When asked to show balances, the application should show balances of a user
with all the users where there is a non-zero balance.
9. The amount should be rounded off to two decimal places. Say if User1 paid 100
and the amount is split equally among 3 people. Assign 33.34 to the first person
and 33.33 to the others.

**STEPS TO RUN - **

1) git clone
2) npm install
3) set up .env environment variables (port and mongoose connection)
4) npm install
5) Execute API's in POSTMAN
