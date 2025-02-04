//Array multidimensional
// no cal que coincdeixin les columnes.
const xss: number[][] = [
    [3, 4, 5, 2, 3, 8],
    [9, 1, 4, 9, 1],
    [1, 2, 0, 9],
    [100] 
]
const ys: number[] = []
for (const xs of xss) { //a xs es posa un array d'una sola dimensió
    for (const x of xs) { //x es cada un dels elements de xs
        ys.push(x)
    }
}

console.log(ys) 
