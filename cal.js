/*const btt = document.querySelectorAll('.l');

//Targeting the value
/*btt.forEach(btt => {
      btt.addEventListener("click", (e) => {
            var val = e.target.value;

            console.log(val)
      })
})
*/

function ko(val) {

      document.getElementById("sp").value += val
}
jo = () => {

      str = document.getElementById("sp").value
      document.getElementById("sp").value = str.slice(0, -1)

}

function add() {
      var c;
      let str = (document.getElementById("sp").value)
      for (i = 0; i < str.length; i++) {
            if (str[i] == "+") {
                  console.log(i)

                  a = parseInt(str.substring(0, i))
                  b = parseInt(str.substring(i + 1, str.length));
                  console.log(b)

                  add.c = a + b
                  // console.log(c)

                  console.log(add.c)

            }


      }



}
function Multiply() {
      var c;
      let str = (document.getElementById("sp").value)
      for (i = 0; i < str.length; i++) {
            if (str[i] == "x") {
                  console.log(i)

                  a = parseInt(str.substring(0, i))
                  b = parseInt(str.substring(i + 1, str.length));
                  console.log(str.length)
                  console.log(a)
                  console.log(b)

                  Multiply.c = a * b
                  // console.log(c)

                  console.log(Multiply.c)

            }


      }

}

function Divide() {
      var c;
      let str = (document.getElementById("sp").value)
      for (i = 0; i < str.length; i++) {
            if (str[i] == "/") {
                  console.log(i)

                  a = parseInt(str.substring(0, i))
                  b = parseInt(str.substring(i + 1, str.length));
                  console.log(str.length)
                  console.log(a)
                  console.log(b)

                  Divide.c = a / b
                  // console.log(c)

                  console.log(Divide.c)

            }


      }

}

function Sub() {

      let str = (document.getElementById("sp").value)
      for (i = 0; i < str.length; i++) {
            if (str[i] == "-") {
                  console.log(i)

                  a = parseInt(str.substring(0, i))
                  b = parseInt(str.substring(i + 1, str.length));
                  console.log(str.length)
                  console.log(a)
                  console.log(b)

                  Sub.c = a - b
                  // console.log(c)

                  console.log(Sub.c)

            }


      }

}
function Equal(){
      let str = document.getElementById("sp").value
      for(i = 0;i< str.length;i++){
            if(str[i]=='+'){
                  add()
                  document.getElementById("sp").value=add.c
            }
            else if(str[i] =='x'){
                  Multiply()
                  document.getElementById("sp").value=Multiply.c

            } 
            else if(str[i] =='-'){
                  Sub()
                  document.getElementById("sp").value=Sub.c

            }  
            else if(str[i] =='/'){
                  Divide()
                  document.getElementById("sp").value=Divide.c

            }    
              
               

            
      }
}

add();
Multiply();
Divide();



Sub();


console.log(Sub.c);
console.log(add.c);
console.log(Divide.c);
console.log(Multiply.c);








