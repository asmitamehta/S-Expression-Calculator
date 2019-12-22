const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter an expression ", expr => {
  cal(expr);
  rl.close();
});

function cal(expr) {
  var ex = expr.split(" ");
  if (ex.length == 1) {
    // document.getElementById("result").innerHTML = ex[0];
    console.log("Result : " + ex[0]);
  } else {
    //var newExpr = expr.replaceAll("(", "( ").replace(")", " )");
    expr = expr.replace(/\(/g, "( ");
    expr = expr.replace(/\)/g, " )");
    var c = expr.match(/\(/g).length;
    //converting the string to array
    var splitExpr = expr.split(" ");
    for (i = 1; i <= c; i++) {
      splitExpr = solvingExpr(splitExpr);
    }
    // document.getElementById("result").innerHTML = "Result : " + splitExpr;
    console.log("Result : " + splitExpr);
  }
}
function calulate(operation, no1, no2) {
  //cal expression on basis of operation written
  if (operation == "add") return no1 + no2;
  else if (operation == "multiply") return no1 * no2;
}
function splitExprFun(expr, startIndex, endIndex) {
  return expr.slice(startIndex, endIndex);
}
function solvingExpr(splitExpr) {
  var firstOcc = splitExpr.indexOf(")");
  var lastOcc = splitExpr.lastIndexOf("(");
  var lExpr = splitExprFun(splitExpr, 0, lastOcc);
  var rExpr = splitExprFun(splitExpr, firstOcc + 1, splitExpr.length);
  var res = calulate(
    splitExpr[lastOcc + 1],
    parseInt(splitExpr[lastOcc + 2]),
    parseInt(splitExpr[lastOcc + 3])
  );
  lExpr.push(res);
  var comExpr = lExpr.concat(rExpr);
  return comExpr;
}
