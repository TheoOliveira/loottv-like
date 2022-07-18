/* eslint-disable require-jsdoc */
export function checkToday() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return today;
  }
  export function checkYesterday() {
    const y = new Date();
    y.setHours(0, 0, 0, 0);
    y.setDate(y.getDate() - 1);
    return y;
  }
  
  export function checkPastWeek(){
    const y = new Date();
    y.setHours(0, 0, 0, 0);
    y.setDate(y.getDate() - 7);
    return y;
  }
  
  export function checkPastMonth() {
    const y = new Date();
    y.setHours(0, 0, 0, 0);
    y.setDate(y.getDate() - 30);
    return y;
  }
  
  export function checkPastFourMonths() {
    const y = new Date();
    y.setHours(0, 0, 0, 0);
    y.setDate(y.getDate() - 121);
    return y;
  }
  
  