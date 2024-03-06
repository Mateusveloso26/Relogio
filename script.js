const hour = document.querySelector('#hour')
const min = document.querySelector('#min')
const sec = document.querySelector('#sec')

setInterval(() => {
    let date = new Date()
    let dHour = date.getHours()
    let dMinute = date.getMinutes()
    let dSec = date.getSeconds()


    hour.innerHTML = `${formarTime(dHour)}`
    min.innerHTML = `${formarTime(dMinute)}`
    sec.innerHTML = `${formarTime(dSec)}`
}, 1000)

function formarTime(time) {
    return time < 10 ? '0' + time : time

}