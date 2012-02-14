module.exports = function (a, b) {
    if (a.total === undefined) a.total = a.yes + a.no;
    if (b.total === undefined) b.total = b.yes + b.no;
    
    if (a.no === undefined) a.no = a.total - a.yes;
    if (b.no === undefined) b.no = b.total - b.yes;
    
    if (a.yes === undefined) a.yes = a.total - a.no;
    if (b.yes === undefined) b.yes = b.total - b.no;
    
    var yes = a.yes + b.yes;
    var no = a.no + b.no;
    var total = a.total + b.total;
    
    // expected value
    var ex = {
        a : {
            yes : a.total * yes / total,
            no : a.total * no / total
        },
        b : {
            yes : b.total * yes / total,
            no : b.total * no / total
        }
    };
    
    return 2 * (
        a.yes * Math.log(a.yes / ex.a.yes)
        + a.no * Math.log(a.no / ex.a.no)
        + b.yes * Math.log(b.yes / ex.b.yes)
        + b.no * Math.log(b.no / ex.b.no)
    );
};
