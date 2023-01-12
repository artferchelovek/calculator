function solve() {
    var a, a2, a3, b, c, d, x1, x2,u,j, x12,x13;
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
    console.log(j);
    j = j.toFixed(0);
    console.log(j);
    j = j ** 2;
    console.log(j);

    




    if (d >= 0  ) {
        if (j == d) {
            x1 = (-b + d ** (1/2))/(2*a);

            x2 = (-b - d ** (1/2))/(2*a);
            console.log(x1 + '-x1,', x2 + '-x2');
            a2 = 2*a
            if (x1 % 1 == 0) {
                x1 = x1
                document.getElementById('outx1').innerHTML =  x1;
            } else {
                x12 = -b - d ** (1/2);
                document.getElementById('outx1').innerHTML = x12 + '/' + a2;
            }
            
            if (x2 % 1 == 0) {
                x2 = x2;
                document.getElementById('outx2').innerHTML = x2
            } else {
                x13 = -b + d ** (1/2)
                document.getElementById('outx2').innerHTML = '<sup>' + x13 +'</sup>' + '/' + a2;
            }


            document.getElementById('outD').innerHTML =  d;
            
            document.getElementById('outx2').innerHTML = x2;
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