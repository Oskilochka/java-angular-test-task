# Full Stack ( Java, Angular ) test task

*Made by Julia Oskilko*

## Tasks description

### Task 1
*Angular web project connecting to and using this public REST-api*

Check it via link ---->    https://github.com/Oskilochka/blog-app

### Task 2

*Write a method sumOfDigits(integer) that returns the sum of the digits of a given integer*

1. First approach - numerical with while loop and operator 
2. Second approach - with using reduce method. We can make array of digits from a number and then summarized it. 
3. Third approach -  another string approach, the difference with previous in using while statement instead of reduce method. 

Using string approach ( second & third) it's a slow way, because it needs turn the number into a string, take each char & turn it back into a number and summarize it.
Better decision is to use numerical approach, we can take a digit from the ones place with reminder operator. We get number in the ones column, then in tens, hundreds etc.

### Task 3

Websocket is designed for reliable communication. The transmitted
stream with using WebRTC is unreliable. Some packets may be lost on the network.
It's good for sending an audio or video stream where some frames can be lost without 
any noticeable quality issues, but as I don't need to 
broadcast media in real time I decided to use websocket.
And also websockets is compatible with almost all existing browsers





