function solve() {
    var a, b, c, d, x1, x2,u,j;
    a = document.getElementById('a').value;
    a = parseFloat(a);

    b = document.getElementById('b').value;
    b = parseFloat(b);

    c = document.getElementById('c').value;
    c = parseFloat(c);

    d = b**2 - 4*a*c // дискриминант

    document.getElementById('outD').innerHTML =  d; // - вывод дискриминанта

    check_d = d ** (1/2);
    console.log(check_d, ' - корень из D');
    check_d = check_d.toFixed(0);
    // console.log(j);
    check_d = check_d ** 2;
    console.log(check_d, ' - квадрат корня из D');

    // проверка целостности числа x1

    x1 = (-b + d ** (1/2))/(2*a);
    j1 = x1 ** (1/2);
    console.log(x1, ' - корень из х1');
    j1 = j1.toFixed(0);
    // console.log(j1);
    j1 = j1 ** 2;
    console.log(j1);

    if (x1 == j1) { // если x1 целое
        x1 == j1
        document.getElementById('outx1').innerHTML = x1
    } else { // если x1 не целое
        if (d == check_d) {
            // ведем переменные
            x1chis = -b + d ** (1/2)
            znam = 2*a
            x2chis = -b - d ** (1/2)
            if ((x1chis % znam) != 0) {
                if (x1chis > znam) { // если числитель больше знаменателя
                    x1chis = x1chis % znam
                    x1zel = ((-b -d ** (1/2)) - x1chis) / znam;
                    console.log('чг ')
                    console.log(x1zel)

                    document.getElementById('outx1').innerHTML = ' ' + x1zel + '  <sup>' + x1chis + '</sup>' + '/' + '<sub>' + znam + '</sub>'

                } else {
                document.getElementById('outx1').innerHTML = '  <sup>' + x1chis + '</sup>' + '/' + '<sub>' + znam + '</sub>'}
            } else {
                document.getElementById('outx1').innerHTML = x1
            }
        } else {
            document.getElementById('outx1').innerHTML =  '(' + (-b) + ' + √' + d + ')/' + 2*a;
        }
    }

    //x2

    // целостность x2
    x2 = (-b - d ** (1/2))/(2*a);
    console.log(x2, ' - x2')
    j2 = x2 ** (1/2);
    console.log(j2, ' - корень из x2');
    j2 = j2.toFixed(0);
    // console.log(j1);
    j2 = j2 ** 2;
    console.log(j2);

    /////////////////////////////////////////////////

    if (x2 == j2) { // если x1 целое
        x2 == j2
        document.getElementById('outx2').innerHTML = x2
    } else { // если x1 не целое
        if (d == check_d) {
            // ведем переменные
            x1chis = -b + d ** (1/2)
            znam = 2*a
            x2chis = -b - d ** (1/2)
            if ((x2chis % znam) != 0) {
                if (x2chis > znam) { // если числитель больше знаменателя
                    x2chis = x2chis % znam
                    x2zel = ((-b -d ** (1/2)) - x2chis) / znam;
                    console.log('чг ')
                    console.log(x2zel)

                    document.getElementById('outx2').innerHTML = ' ' + x2zel + '  <sup>' + x2chis + '</sup>' + '/' + '<sub>' + znam + '</sub>'

                } else {
                document.getElementById('outx2').innerHTML = '  <sup>' + x2chis + '</sup>' + '/' + '<sub>' + znam + '</sub>'}
            } else {
                document.getElementById('outx2').innerHTML = x2
            }
        } else {
            document.getElementById('outx2').innerHTML =  '(' + (-b) + ' - √' + d + ')/' + 2*a;
        }
    }



}