let caracteres =""
let alfabeto = []

function validar(){
   const string = document.getElementById("alfa").value
   if (/[^\w,ñÑ-]/g.test(string) || string == "") {
      alerta()
   }else{
      document.getElementById("alfa").style.borderColor = ""
      document.getElementById("invalido").style.display = 'none'
      caracteres = string
      elementos()
   }
}

function validar_c(){
   const w1 = document.getElementById("w1").value
   const w2 = document.getElementById("w2").value
   if (/[^\wñÑ]/g.test(w1) || w1 == "") {
      alertaw1()
   }else
   if (/[^\wñÑ]/g.test(w2) || w2 == "") {
      alertaw2()
   }
   else{
      document.getElementById("w1").style.borderColor = ""
      document.getElementById("invalidow1").style.display = 'none'

      document.getElementById("w2").style.borderColor = ""
      document.getElementById("invalidow2").style.display = 'none'

      alfabeto_c(w1,w2)
   }
}

function alfabeto_c(w1,w2) {
   const alfa_ext = extender()
   const reg = "["+"^"+alfa_ext+"]"
   const regexp = new RegExp(reg,"g")
   console.log(regexp)
   if (regexp.test(w1) || w1 == "") {
      alertaw1()
   }else
   if (regexp.test(w2) || w2 == "") {
      alertaw2()
   }
   else{
      document.getElementById("w1").style.borderColor = ""
      document.getElementById("invalidow1").style.display = 'none'

      document.getElementById("w2").style.borderColor = ""
      document.getElementById("invalidow2").style.display = 'none'

      subcadena(w1,w2)
   }
}

function elementos(){
   var array = caracteres.split(',')
   var n_array = []
   array.forEach(element => {
      if (/[-]/.test(element)){
         if (rango(element)) {
            n_array.push(element)
         }
      }else{
         n_array.push(element)
      }
      if (element == "") {
         alerta()
      }
   })
   if (array.length == n_array.length) {
      alfabeto = array
   }
}
function rango(element){
   const tipo1 = element.charCodeAt(0)
   const tipo2 = element.charCodeAt(2)
   if (element.length != 3) {
      alerta()
      return false
   }else
   if (element.charCodeAt(1) != 45) {
      alerta()
      return false
   }else
   if (tipo1 > 64 && tipo2 < 64) {
      alerta()
      return false
   }else
   if (tipo1 < 64 && tipo2 > 64) {
      alerta()
      return false
   }else
   if (tipo1 > tipo2) {
      alerta()
      return false
   }else
   if (tipo1 < 92 && tipo2 > 92) {
      alerta()
      return false
   }else
   if (tipo1 > 92 && tipo2 < 92) {
      alerta()
      return false
   }else
   if (tipo1 == tipo2) {
      alerta()
      return false
   }else{
      return true
   }
}

function extender() {
   let ext=[]
   let epr = ""
   alfabeto.forEach(element => {
      if (/[-]/.test(element)){
         let st = element.charCodeAt(0)
         let fin = element.charCodeAt(2)
         for (let i = st; i < fin+1; i++) {
            ext.push(String.fromCharCode(i))
         }
      }else{
         ext.push(element)
      }
   })
   let rep = [...new Set(ext)]
   console.log(rep)
   epr = rep.join('')
   console.log(epr)
   return epr
}


function alerta(){
   document.getElementById("alfa").style.borderColor = "rgb(179, 45, 22)"
   document.getElementById("invalido").style.display = 'inline'
   document.getElementById('light').innerHTML = ''
}
function alertaw1(){
   document.getElementById("w1").style.borderColor = "rgb(179, 45, 22)"
   document.getElementById("invalidow1").style.display = 'inline'
   document.getElementById('light').innerHTML = ''
}
function alertaw2(){
   document.getElementById("w2").style.borderColor = "rgb(179, 45, 22)"
   document.getElementById("invalidow2").style.display = 'inline'
   document.getElementById('light').innerHTML = ''
}
function alertanp(){
   document.getElementById("np").style.borderColor = "rgb(179, 45, 22)"
   document.getElementById("invalidonp").style.display = 'inline'
}
function alertal(){
   document.getElementById("l").style.borderColor = "rgb(179, 45, 22)"
   document.getElementById("invalidol").style.display = 'inline'
}


function subcadena(w1,w2) {
   const n_w2 = "["+"^"+w2+"]"
   const base = new RegExp(n_w2,"g")
   const subcadena = new RegExp(w1,"g")
   const prefijo = new RegExp("\\b"+w1,"g")
   const sufijo = new RegExp(w1+"\\b","g")
   const w = '\\w*'
   let arr = []
   for (var i = 0; i < w1.length; i++) {
      arr.push(w)
      arr.push("("+w1.charAt(i)+"+"+")")
      if (i == (w1.length -1)) {
         arr.push(w)
      }
   }
   base_w2 = arr.join('')
   const n_base = new RegExp(base_w2,"g")
   console.log(n_base)
   
   if (base.test(w1) || !(n_base.test(w2))) {
      document.getElementById('light').innerHTML = ''
      document.getElementById('light').innerHTML = '-La cadena W1 NO es una subcadena ni una subsecuencia de W2'
   }else 
   if (!(subcadena.test(w2))) {
      document.getElementById('light').innerHTML = ''
      document.getElementById('light').innerHTML = '-La cadena W1 es una subsecuencia de W2'
   }else{
      if (prefijo.test(w2)) {
         if (w1 == w2) {
            document.getElementById('light').innerHTML = ''
            document.getElementById('light').innerHTML = '-La cadena W1 es un prefijo, un sufijo y una subcadena (subsecuencia consecutiva) de W2'
         }else{
            document.getElementById('light').innerHTML = ''
            document.getElementById('light').innerHTML = `-La cadena W1 es una subcadena y un prefijo propio de W2`
         }
      }
      if (sufijo.test(w2)) {
         if (w1 == w2) {
            document.getElementById('light').innerHTML = ''
            document.getElementById('light').innerHTML = '-La cadena W1 es un prefijo, un sufijo y una subcadena (subsecuencia consecutiva) de W2'
         }else{
            document.getElementById('light').innerHTML = ''
            document.getElementById('light').innerHTML = '-La cadena W1 es una subcadena y un sufijo propio de W2'
         }
      }
   }

}

function positivo() {
      document.getElementById("np").style.borderColor = ""
      document.getElementById("invalidonp").style.display = 'none'
      document.getElementById("l").style.borderColor = ""
      document.getElementById("invalidol").style.display = 'none'

   const np = document.getElementById("np").value
   const l = document.getElementById("l").value
   if (/[^\d]/g.test(np) || np == "") {
      alertanp()
   }else if(/[^\d]/g.test(l) || l == ""){
      alertal()
   }else{
      document.getElementById("np").style.borderColor = ""
      document.getElementById("invalidonp").style.display = 'none'
      document.getElementById("l").style.borderColor = ""
      document.getElementById("invalidol").style.display = 'none'
   }
}