
function solveEquations() {
    // Получаем значения коэффициентов из формы
    let a1 = parseFloat(document.getElementById("a1").value);
    let b1 = parseFloat(document.getElementById("b1").value);
    let q1 = parseFloat(document.getElementById("q1").value);
    let a2 = parseFloat(document.getElementById("a2").value);
    let b2 = parseFloat(document.getElementById("b2").value);
    let q2 = parseFloat(document.getElementById("q2").value);

    // Решаем систему уравнений
    let det = a1 * b2 - a2 * b1;
    if (det == 0) {
        // Система не имеет решений или имеет бесконечное количество решений
        if (q1 / a1 == q2 / a2 && q1 / b1 == q2 / b2) {
            document.getElementById("outx").innerHTML = "Система имеет бесконечное";
            document.getElementById("outy").innerHTML = "количество решений";
        } else {
            document.getElementById("outx").innerHTML = "Система не имеет решений";
            document.getElementById("outy").innerHTML = ":((";
        }
    } else {
        let x = (q1 * b2 - q2 * b1) / det;
        let y = (a1 * q2 - a2 * q1) / det;
        document.getElementById("outx").innerHTML = x.toFixed(2);
        document.getElementById("outy").innerHTML = y.toFixed(2);
    }
}

function clearInput() {
    document.getElementById("a1").value = "";
    document.getElementById("b1").value = "";
    document.getElementById("q1").value = "";
    document.getElementById("a2").value = "";
    document.getElementById("b2").value = "";
    document.getElementById("q2").value = "";
    document.getElementById("outx").innerHTML = "";
    document.getElementById("outy").innerHTML = "";
}