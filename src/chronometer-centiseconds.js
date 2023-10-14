class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId  = setInterval(()=>{
      this.currentTime += 1;
      if(printTimeCallback) {
        printTimeCallback()
      }
    },10);
  }

  getMinutes() {
    // ... your code goes here
    let minutes = Math.floor(this.currentTime/6000);
    return minutes;
  }

  getSeconds() {
    // ... your code goes here
    let seconds = Math.floor(this.currentTime % 6000/100)
    return seconds
  }

  getCentiseconds() {
    // ... your code goes here
    let centiseconds = this.currentTime % 100
    return centiseconds
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value < 10){
       return `0${value}`
    }else{return `${value}`};
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    let splitMinutes = this.computeTwoDigitNumber(this.getMinutes());
    let splitSeconds = this.computeTwoDigitNumber(this.getSeconds());
    let splitCentiseconds = this.computeTwoDigitNumber(this.getCentiseconds())
    return `${splitMinutes}:${splitSeconds}.${splitCentiseconds}`;
  }
}

