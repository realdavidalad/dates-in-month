
const days = require("days-in-month")
// console.log(monthDays({month: 1, year: 2016}))
const config = {
    internalError: "Error. Unable to process call."
}


const numberToXdigits = (number, digit) => {
    let formattedNumber = number.toLocaleString('en-US', {
        minimumIntegerDigits: Number(digit),
        useGrouping: false
    })
    return formattedNumber;
}

const getDatesInMonth = (args) => {
    try {
        args = args ? args : { month: 1, year: 1943, format: 1 }

        const month = args.month ? Number(args.month) : 1;

        const year = args.year ? Number(args.year) : 1943;
        const format = args.format ? args.format : 1;
        const daysInMonth = Number(days(year, month));

        const datesInMonth = [];
        for (let index = 1; index <= daysInMonth; index++) {
            const day = index;
            const isoDate = `${numberToXdigits(day, 2)}-${numberToXdigits(month, 2)}-${year}`;
            const isoDateReverse = `${year}-${numberToXdigits(month, 2)}-${numberToXdigits(day, 2)}`;
            datesInMonth[index - 1] = (format == 1) ? isoDate : isoDateReverse;
        }

        return datesInMonth;


    } catch {
        return config.internalError
    }
}

console.log(getDatesInMonth({month:01, year:1943}))

module.exports = {
    getDatesInMonth
}