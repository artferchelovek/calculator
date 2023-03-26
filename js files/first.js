function solve() {
    var a, b, c, d, x1, x2,u,j;
    a = document.getElementById('a').value;
    a = parseFloat(a);

    b = document.getElementById('b').value;
    b = parseFloat(b);

    c = document.getElementById('c').value;
    c = parseFloat(c);

    if (!isNaN(a) == false) {
        console.log('a не введено, ставлю 1');
        a == 1.0;
    }

    if (!isNaN(b) == false) {
        console.log('b не введено, ставлю 1');
        b == 1.0;
    }

    if (!isNaN(c) == false) {
        console.log('c не введено, ставлю 1');
        c == 1.0;
    }

    d = (b ** 2) - (4*a*c); //Дискриминант
    console.log(d + ' дискриминант');

    j = d ** (1/2);
    console.log(j, ' - корень из D');
    j = j.toFixed(0);
    // console.log(j);
    j = j ** 2;
    console.log(j, ' - квадрат корня из D');

    x1 = (-b + d ** (1/2))/(2*a);
    j1 = x1 ** (1/2);
    console.log(x1, ' - корень из х1');
    j1 = j1.toFixed(0);
    // console.log(j1);
    j1 = j1 ** 2;
    console.log(j1);

    if  ( x1 == j1) {
        x1 = x1
    } else {
        x1 = (-b - d ** (1/2)) + '/' + 2*a
    }

    console.log(x1)






    x2 = (-b - d ** (1/2))/(2*a);
    console.log(x2, ' - x2')
    j2 = x2 ** (1/2);
    console.log(j2, ' - корень из x2');
    j2 = j2.toFixed(0);
    // console.log(j1);
    j2 = j2 ** 2;
    console.log(j2);

    if  ( x2 == j2) {
        x2 = x2
    } else {
        x2 = (-b - d ** (1/2)) + '/' + 2*a

    }

    console.log(x2)

    if (d >= 0  ) {
        if (j == d) {
            

            
            console.log(x1 + '-x1,', x2 + '-x2');
            document.getElementById('outD').innerHTML =  d;
            if (((-b - d ** (1/2)) > (2*a)) && (((-b-d ** (1/2)) % (2*a)) != 0)) {
                x2chis = (-b - d ** (1/2)) % (2*a); // числитель
                x2zel = ((-b -d ** (1/2)) - x2chis) / (2*a);
                x2znam = (2*a);
                if (((2*a) % x2chis) == 0) {
                    x2znam = (2*a) / x2chis;
                    x2chis = x2chis / x2chis;
                }
                document.getElementById('outx2').innerHTML = x2zel + '  <sup>' + x2chis + '</sup>' + '/' + '<sub>' + x2znam + '</sub>';

            } else {
                document.getElementById('outx2').innerHTML =  x2;
            }
            if (((-b + d ** (1/2)) > (2*a)) && (((-b+d ** (1/2)) % (2*a)) != 0)) {
                x1chis = (-b + d ** (1 / 2)) % (2 * a) // числитель
                x1zel = ((-b + d ** (1 / 2)) - x1chis) / (2 * a);
                x1znam = (2 * a)
                if (((2 * a) % x1chis) == 0) {
                    x1znam = (2 * a) / x1chis
                    x1chis = x1chis / x1chis
                }
            } else {
                document.getElementById('outx1').innerHTML = x1zel + '  <sup>' + x1chis + '</sup>' + '/' + '<sub>' + x1znam + '</sub>'
            }
        } else {
            document.getElementById('outD').innerHTML =  d;
            b = -b
            document.getElementById('outx1').innerHTML =  '(' + b + ' + √' + d + ')/' + 2*a;
            document.getElementById('outx2').innerHTML = '(' + b + ' - √' + d + ')/' + 2*a;
        }
    } else {
        console.log('нет решений!');
        document.getElementById('outD').innerHTML =  d;
        document.getElementById('outx1').innerHTML = 'корней нет, т.к. D < 0';
        document.getElementById('outx2').innerHTML = 'корней нет, т.к. D < 0';
    }


}

function solve1() {
    console.log('мяу')
}