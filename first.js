function solve() {
    var a, b, c, d, x1, x2;
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
    
    if (d >= 0  ) {
        x1 = (-b + d ** (1/2))/(2*a);

        x2 = (-b - d ** (1/2))/(2*a);

        console.log(x1 + '-x1,', x2 + '-x2');
    } else {
        console.log('нет решений!');
    }


    document.getElementById('outD').innerHTML = 'D = ' + d;
    document.getElementById('outx1').innerHTML = 'x <sub>1</sub> = ' + x1;
    document.getElementById('outx2').innerHTML = 'x <sub>2</sub> = ' + x2;
}