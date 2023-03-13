const units = ['oh ','one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ']
const hours = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve']

function timeWord(time) {
   console.log(time, typeof(time))
   const textTime = String(time)
   console.log(typeof(textTime))
   const hours = textTime.slice(0,2)
   const minutes = textTime.slice(2,4)
   console.log(hours, minutes)
}