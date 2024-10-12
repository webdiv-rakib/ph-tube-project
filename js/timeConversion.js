function getTimeString(time) {
    const hour = parseInt(time / 3600);
    let remainingSecond = parseInt(time % 3600);
    let remainingMinutes = parseInt(remainingSecond / 60);
    remainingSecond = remainingSecond % 60;
    return `${hour} Hour ${remainingMinutes} Minutes ${remainingSecond} Seconds Ago`;
}
console.log(getTimeString(7865));