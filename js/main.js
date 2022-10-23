let caracteres =""
let alfabeto = []
let L1 = []
let L2 = []

function validar(){
   const string = document.getElementById("alfa").value
   if (/[^\w,ñÑ-]/g.test(string) || string == "") {
      alerta()
   }else{
      document.getElementById("alfa").style.borderColor = ""
      document.getElementById("invalido").style.display = 'none'
      caracteres = string
      elementos()
      return true
   }
}

function validar_c(){
   validar()
   const w1 = document.getElementById("w1").value
   const w2 = document.getElementById("w2").value
   if (validar()) {
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
   }else{

   }
   
}

function alfabeto_c(w1,w2) {
   const alfa_ext = extender()
   const reg = "["+"^"+alfa_ext+"]"
   const regexp = new RegExp(reg,"g")
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
      alfabeto = extender()
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
   return rep
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
   document.getElementById("np1").style.borderColor = "rgb(179, 45, 22)"
   document.getElementById("invalidonp1").style.display = 'inline'
}
function alertal(){
   document.getElementById("l1").style.borderColor = "rgb(179, 45, 22)"
   document.getElementById("invalidol1").style.display = 'inline'
}

function alertanp2(){
   document.getElementById("np2").style.borderColor = "rgb(179, 45, 22)"
   document.getElementById("invalidonp2").style.display = 'inline'
}
function alertal2(){
   document.getElementById("l2").style.borderColor = "rgb(179, 45, 22)"
   document.getElementById("invalidol2").style.display = 'inline'
}
function alertastr1(){
   document.getElementById("string").style.borderColor = "rgb(179, 45, 22)"
   document.getElementById("invalidostr1").style.display = 'inline'
   document.getElementById("invalidostr2").style.display = 'none'
   document.getElementById("validostr").style.display = 'none'
}
function alertastr2(){
   document.getElementById("string").style.borderColor = "rgb(179, 45, 22)"
   document.getElementById("invalidostr2").style.display = 'inline'
   document.getElementById("invalidostr1").style.display = 'none'
   document.getElementById("validostr").style.display = 'none'
}
function alertastr3(){
   document.getElementById("string").style.borderColor = "rgb(22, 179, 43)"
   document.getElementById("validostr").style.display = 'inline'
   document.getElementById("invalidostr1").style.display = 'none'
   document.getElementById("invalidostr2").style.display = 'none'
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
   validar()
   document.getElementById("np1").style.borderColor = ""
   document.getElementById("invalidonp1").style.display = 'none'
   document.getElementById("l1").style.borderColor = ""
   document.getElementById("invalidol1").style.display = 'none'

   document.getElementById("np2").style.borderColor = ""
   document.getElementById("invalidonp2").style.display = 'none'
   document.getElementById("l2").style.borderColor = ""
   document.getElementById("invalidol2").style.display = 'none'

   const np = document.getElementById("np1").value
   const l = document.getElementById("l1").value

   const np2 = document.getElementById("np2").value
   const l2 = document.getElementById("l2").value

   let cons_np = false
   let cons_l = false
   let cons_np2 = false
   let cons_l2 = false

   if (/[^\d]/g.test(np) || np == "") {
      alertanp()
      cons_np = false
   }else{
      document.getElementById("np1").style.borderColor = ""
      document.getElementById("invalidonp1").style.display = 'none'
      cons_np = true
   }


   if(/[^\d]/g.test(l) || l == ""){
      alertal()
      cons_l = false
   }else{
      document.getElementById("l1").style.borderColor = ""
      document.getElementById("invalidol1").style.display = 'none'
      cons_l = true
   }

   if (/[^\d]/g.test(np2) || np2 == "") {
      alertanp2()
      cons_np2 = false
   }else{
      document.getElementById("np2").style.borderColor = ""
      document.getElementById("invalidonp2").style.display = 'none'
      cons_np2 = true
   }

   if(/[^\d]/g.test(l2) || l2 == ""){
      alertal2()
      cons_l2 = false
   }else{
      document.getElementById("l2").style.borderColor = ""
      document.getElementById("invalidol2").style.display = 'none'
      cons_l2 = true
   }
   if (validar() && cons_np && cons_l && cons_np2 && cons_l2) {
      lenguaje(l,np,l2,np2)
   }

}




function lenguaje(l,np,l2,np2){
   let mx = 0
   const max_r = (alfabeto.length)**l
   const max_r2 = (alfabeto.length)**l2
   console.log(max_r+" "+max_r2)
   if (max_r > max_r2) {
      mx = max_r
   }else{
      mx = max_r2
   }

   if(np > mx || np2 > mx){
      console.log("solicita mas cadenas de las posibles (palabras posibles:"+ max_r+" )")
   }else{
      generar(l,np,l2,np2)
   }
    



}

function rand(max) {
   return Math.floor(Math.random() * (max));
}


function generar(l,np,l2,np2){
   
   let str = ""
   let leng = []
   let leng2 = []
   for (let i = leng.length; i < np; i++) {
      for (let j = 0; j < l; j++) {
         str += alfabeto[rand(alfabeto.length)]
      }
      leng.push(str)
      const norep = [...new Set(leng)];
      leng = norep
      i = leng.length-1
      str =""

   }
   console.log(leng)

   for (let i = leng2.length; i < np2; i++) {
      for (let j = 0; j < l2; j++) {
         str += alfabeto[rand(alfabeto.length)]
      }
      leng2.push(str)
      let norep = [...new Set(leng2)];
      leng2 = norep
      i = leng2.length-1
      str =""

   }
   console.log(leng2)
   document.getElementById('led').innerHTML = ""

   document.getElementById('len1').innerHTML = ""
   document.getElementById('len1').innerHTML = "L<sub>1</sub>: "+ leng.join(", ")
   document.getElementById('len2').innerHTML = ""
   document.getElementById('len2').innerHTML = "L<sub>2</sub>: "+ leng2.join(", ")
   document.getElementById("danger").disabled = false;
   L1 = leng
   L2 = leng2
}
function restar(){
   let LD = L1.filter(val => !L2.includes(val))
   document.getElementById('led').innerHTML = ""
   document.getElementById('led').innerHTML = "L<sub>D</sub>: "+ LD.join(", ")
}

function pot(){
   let res = alfabeto
   let nw = res
   if(validar()){
      let exp = document.getElementById("range").value
      if (exp == 0) {
         document.getElementById('exp').innerHTML = ""
         document.getElementById('exp').innerHTML = "Σ<sub>1</sub><sup>"+exp+"</sup> = λ"
      }
      if (exp > 0) {
         for (let i = 1; i < exp; i++) {
            nw = []
            for (let j = 0; j < alfabeto.length; j++) {
               for (let k = 0; k < res.length ; k++) {
                  let a = alfabeto[j]+res[k]
                  nw.push(a)
               }
            }
            res = nw
         }
         console.log(nw)
         document.getElementById('exp').innerHTML = ""
         document.getElementById('exp').innerHTML = "Σ<sub>1</sub><sup>"+exp+"</sup> = "+ nw.join(", ")
      }
      if (exp < 0) {
         for (let i = -1; i > exp; i--) {
            nw = []
            for (let j = 0; j < alfabeto.length; j++) {
               for (let k = 0; k < res.length ; k++) {
                  let a = inv(alfabeto[j])+inv(res[k])
                  nw.push(a)
               }
            }
            res = nw
         }
         document.getElementById('exp').innerHTML = ""
         document.getElementById('exp').innerHTML = "Σ<sub>1</sub><sup>"+exp+"</sup> = "+ nw.join(", ")
      }

   }else{

   }
   

}

function inv(str){
      return str.split("").reverse().join("");
}

function regex() {
   let string = document.getElementById("string").value
   //valida letras minusculas
   if (/[^a-zñ]/g.test(string) || string == "") {
      alertastr1()
   }else if(string.replace(/(ñ*[^eiou\W]*ñ*a+ñ*[^eiou\W]*ñ*)(ñ*[^aiou\W]*ñ*e+ñ*[^aiou\W]*ñ*)(ñ*[^aeou\W]*ñ*i+ñ*[^aeou\W]*ñ*)(ñ*[^aeiu\W]*ñ*o+ñ*[^aeiu\W]*ñ*)(ñ*[^aeio\W]*ñ*u+ñ*[^aeio\W]*ñ*)/g, "") != ""){
      alertastr2()
   }else{
      alertastr3()
   }
}