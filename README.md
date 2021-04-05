# password-generator

What a doozy!!

At the top of the script, I defined all of the possible characters available into variables. 

Within the generatePassword function, I started with the prompt of "how many characters". Following the prompt, is an if statement that creates the rule of "characters must be betwen 8 and 128. Using the OR oeprator, i was able to point at both, below 8 and above 128. If this statement is true, the alert method in the code block will inform the user of their error. Then the return statement will bring the user back to the starting point. 

I just isNaN (not a number) function to check if the value entered into this prompt is a not numeric value, using the triple equals to check if this is true. If so, then an alert will inform the user on the mistake, and the return will bring them back to the beginning once again. 

Both of these if statements will be ignored if they come back false, and the else statement will be read, with confirm method asking users if they want lowercase, uppercase, number, and or special characters.

This next part was hard. Andrew the TA was EXTREMEMLY helpful. I had tried to use the concat method, but did way too much hard coding. I had called on every possible outcome with the characters. It was a long list. But Andrew helped me used concat in the same type of way I was wanting, but consise. Concat method takes from exisisting arrays to make a new array. The if statements asking if any of these come back true –– lower, upper, num, char –– then create a new array from their existing existing array. I also created a new variable called results, and this is what I used to place the out come of these if statements. 

Lastly, I created another variable called password to store the final outcome. Then I used a for loop (still a little confused on these) to create a new variable called choices, and in this variable I'm asking to grab a random amount of whole intergers and charactors and make them as long as the first prompt came back as. Then I pushed that varable of choices, into the password variable. Finally I use the return method and the join ("") method to join the array into a string. This took away the commas in the results. 
