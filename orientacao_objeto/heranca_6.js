function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}
const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Ate Breve', 456)

console.log(aula1)
console.log(aula2)

function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Bem vindo', 123)
const aula4 = novo(Aula, 'Ate Breve', 456)
console.log(aula3)
console.log(aula4)