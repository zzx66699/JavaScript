# Date

## Date constructor function
The Date constructor behaves differently depending on the type of argument you pass to it.
### 1. No arguments → current time
A date object is an `instance` of Date Class.  
This results in a `Date object` that represents the current date and time. 
```js
const now = new Date()
console.log(now)

>>> 2025-12-19T07:22:54.426Z
// // Shows current day, date and time (in your time zone).
```


### 2. Unix timestamp(number) → interpreted time
If a number is passed in, this will be interpreted as a timestamp. A timestamp is an `integer number` representing the number of milliseconds that has passed since **1 January 1970 UTC+0**.
```js
const epoch = new Date(0);
// Thu Jan 01 1970 01:00:00 GMT+0100 (Central European Standard Time)

const another = new Date(1749508766627);
// Tue Jun 10 2025 00:39:26 GMT+0200 (Central European Summer Time)
```
#### supplying individual date and time components
```js
// month starts from 0;  0 or 12 both represent Jan
const date1 = new Date(95, 11, 17);
// Creates Date for Dec 17 1995 00:00 if your local timezone is equivalent to UTC.

const date2 = new Date(2013, 12, 5, 13, 24, 0);
// Creates Date for Jan 5 2014 13:24 if your local timezone is equivalent to UTC.
// Equals to this
const date2 = new Date(2014, 0, 5, 13, 24, 0);
```

### 3. ISO 8601 timestamp (string) → interpreted time
```js
const dateFromString = new Date("2025-12-19T08:30:00Z");

console.log(dateFromString.toISOString());
// "2025-12-19T08:30:00.000Z"
```

Format:
```
YYYY-MM-DDTHH:mm:ssZ
```

Example:  
```
2025-12-19T10:00:00+02:00
2025-12-19T08:30:00Z
```
- +02:00 is the timezone offset. means 2 hours ahead of greenwich mean time(UTC)
- T is a literal letter, separating date from time
- Z is a literal letter, representing UTC time
- +/-HH:mm is an offset 

Change from `Date object` to ISO format: When working with Dates in JavaScript, always use an ISO 8601 timestamp when converting from a string to a Date.  
```js
new Date().toISOString()
```

### 4. Date object → copy time value
An existing date object can also be used as a `constructor argument`. This makes a copy of the existing Date object with the same date and time.
```js
const t1 = new Date();
const t2 = new Date(t1);
// Values of t1 and t2 will be the same.
// t1 and t2 are different objects
```

## Accessing Date components
```js
getTime(); // returns the UNIX timestamp in milliseconds, ie. amount of milliseconds the midnight at the beginning of January 1, 1970, UTC.

getFullYear(); // Get the year (4 digits)
getMonth(); // Get the month, from 0 to 11.
getDate(); // Get the day of month, from 1 to 31.
getHours(); // Get the hour in a 24 clock, from 0 to 23
getMinutes(); // Get the minutes, from 0 to 59
getSeconds(); // Get the seconds, from 0 to 59
getMilliseconds(); // Get the milliseconds, from 0 and 999
getDay(); // Get the day of week, from 0 (Sunday) to 6 (Saturday).
```
```js
const date = new Date('2025-02-28T12:42:00Z');
// => Fri Feb 28 2025 13:42:00 GMT+0100 (Central European Standard Time)

date.getDate();
// => 1

date.toString();
// => Sat Mar 01 2025 13:42:00 GMT+0100 (Central European Standard Time)
```

## Comparing Dates
Greater than (>) and greater than or equals (>=) as well as less than (<) and less than or equals (<=) can be used directly between two dates or a date and a number.   
Dates cannot be compared using equality (==, and ===), but the result of `.getTime()` can.

## Change Dates
```js
const date = now Date();
date.setDate(29);
// there was no February 29th in 2025.

d.setDate(d.getDate + 4)
// 4 days from now
```

Example: The function will receive first argument as appointment time and second argument of object of some options. You have to update the appointment according to the options in the object and return the new appointment date. The options object could have multiple options.

```js
export function updateAppointment(timestamp, options) {
  const date = new Date(timestamp);
  if (options.year !== undefined) {
    date.setFullYear(options.year);
  }
  if (options.month !== undefined) {
    date.setMonth(options.month); 
  }
  if (options.date !== undefined) {
    date.setDate(options.date);
  }
  if (options.hour !== undefined) {
    date.setHours(options.hour);
  }
  if (options.minute !== undefined) {
    date.setMinutes(options.minute);
  }

  return {
    year: date.getFullYear(),
    month: date.getMonth(), 
    date: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
  };
}
```
## Difference
```js
const dateA = new Date('2022-12-12T09:20:00.000');
const dateB = new Date('2022-12-18T08:30:00.000');

console.log(dateA - dateB)

>>> -515400000 // millisecond format
```