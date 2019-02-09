class Clock {
  constructor() {
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals. 
    this.date = new Date()
    this.hours = this.date.getHours();
    this.minutes = this.date.getMinutes();
    this.seconds = this.date.getSeconds();
    this.printTime();
    // debugger
    setInterval(this._tick.bind(this), 1000);
  };

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  };

  _tick() {
    // debugger
    if (this.seconds > 58) {
      this.seconds = 0;
      this.minutes += 1;
    }; 
    
    if ( this.minutes > 58) {
      this.minutes = 0;
      this.hours += 1;
    };

    if ( this.hours > 23 ) {
      this.hours = 0;
    };

    this.seconds += 1;

    this.printTime();
    // 1. Increment the time by one second.
    // 2. Call printTime.
  };
};

const clock = new Clock();



const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});