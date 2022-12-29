

function solve1() {
    var a,b,c,s,w,p,r,n,m;

s = document.getElementById('a1').value;
s = parseFloat(s);

w = document.getElementById('a2').value;
w = parseFloat(w);

p = document.getElementById('b1').value;
p = parseFloat(p);

r = document.getElementById('b2').value;
r = parseFloat(r);

m = document.getElementById('c1').value;
m = parseFloat(m);

n = document.getElementById('c2').value;
n = parseFloat(n);
    console.log(s,w)
    console.log(p,r)
    console.log(m,n)


    console.log(w, '= a', s**2, '+ b', s, '+ c')


    a = (n*p+m*w+r*s-w*p-s*n-r*m)/(m**2*p+s**2*m+s*p**2-s**2*p-s*m**2-p**2*m)

    console.log(a)

    b = (m**2*r+n*s**2+p**2*w-s**2*r-m**2*w-p**2*n)/(m**2*p+s**2*m+s*p**2-s**2*p-s*m**2-p**2*m)

    console.log(b)

    c = (m**2*p*w+m*r*s**2+n*s*p**2-s**2*p*n-s*r*m**2-w*m*p**2)/(m**2*p+s**2*m+s*p**2-s**2*p-s*m**2-p**2*m)

    console.log(c)

    document.getElementById('output').innerHTML = 'y =' + a + 'x<sup>2</sup> +' + b + 'x +' + c;

}