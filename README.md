# DrumMachine


## Getting Started 
Run `npm install` then `npm start` to get packages installed and get the server started. Navigate to `http://localhost:4200/` to see the application

## Tools Used
- Angular
- Angular Material/CDK (UI Library)
- NGXS (state management)

## Parts Missed
I wasn't able to get to the getting the play and stop buttons working and display the progress through the music sequence. For a first pass I was going to use the progress bar component in material and have the bar be the length of the sequence and fill up as time passed and the progress bar would be over the current step being played. To improve on this I wanted to change the background color of the steps as they were played.

## Other Improvements
Some other improvements I would like to have done is to add testing, starting with unit tests and then adding in e2e tests. 

Additionally I would've liked to improve the styling on the grid layout, some items would include horizontal scrolling after a certain amount of steps, find appropirate icons for the different instruments. 