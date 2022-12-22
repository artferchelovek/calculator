function matrix() {
    var a1,a2,a3,b1,b2,b3,c1,c2,c3,a11,a12,a13,a21,a22,a23,a31,a32,a33,deta,q1,q2,q3;

    a1 = document.getElementById('a1').value;
    a1 = parseFloat(a1);

    a2 = document.getElementById('a2').value;
    a2 = parseFloat(a2);

    a3 = document.getElementById('a3').value;
    a3 = parseFloat(a3);

    b1 = document.getElementById('b1').value;
    b1 = parseFloat(b1);

    b2 = document.getElementById('b2').value;
    b2 = parseFloat(b2);

    b3 = document.getElementById('b3').value;
    b3 = parseFloat(b3);

    c1 = document.getElementById('c1').value;
    c1 = parseFloat(c1);

    c2 = document.getElementById('c2').value;
    c2 = parseFloat(c2);

    c3 = document.getElementById('c3').value;
    c3 = parseFloat(c3);

    q1 = document.getElementById('q1').value;
    q1 = parseFloat(q1);

    q2 = document.getElementById('q2').value;
    q2 = parseFloat(q2);

    q3 = document.getElementById('q3').value;
    q3 = parseFloat(q3);



    deta = a1*b2*c3 + a2*b3*c1 + b1*c2*a3 - a3*b2*c1 - b3*c2*a1 - a2*b1*c3; // определитель
    console.log(deta);
    if (deta = 0) {
        document.getElementById('outx1').innerHTML = '';
        document.getElementById('outx2').innerHTML = 'корней нет';
        document.getElementById('outx3').innerHTML = '';
    } else {
        a11 = b2*c3-b3*c2; // A11
        a21 = -(b1*c3-b3*c1); // A21
        a31 = b1*c2-b2*c1; // A31
        console.log('Обратная матрица:');
        console.log(a11,a21,a31);
        a12 = -(a2*c3-a3*c2);
        a22 = a1*c3-a3*c1;
        a32 = -(a1*c2-a2*c1);
        console.log(a12,a22,a32);
        a23 = -(a1*b3-a3*b1);
        a13 = a2*b3-a3*b2;
        a33 = a1*b2-a2*b1;
        console.log(a13,a23,a33);

        x1 = (1/deta) * (a11*q1 + a21*q2 + a31*q3);
        x2 = (1/deta) * (a12*q1 + a22*q2 + a32*q3);
        x3 = (1/deta) * (a13*q1 + a23*q2 + a33*q3);

        console.log(x1,x2,x3);
        
        document.getElementById('outx1').innerHTML = 'x<sub>1</sub> = ' + x1;
        document.getElementById('outx2').innerHTML = 'x<sub>2</sub> = ' + x2;
        document.getElementById('outx3').innerHTML = 'x<sub>3</sub> = ' + x3;
    }
}