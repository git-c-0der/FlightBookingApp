function compareTime(arrTime, depTime){
    const dt1 = new Date(arrTime);
    const dt2 = new Date(depTime);

    return dt1.getTime() < dt2.getTime();
}

module.exports = {
    compareTime,
}