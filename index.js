<script>
            let op;

            function calc() {
                let result;

                let num1 = Number(document.getElementById("num1").value);
                let num2 = Number(document.getElementById("num2").value);
                debugger
                switch(op) {
                    case'+':
                        result = num1 + num2;
                        break;
                    case'-':
                        result = num1 - num2;
                        break;
                    case'*':
                        result = num1 * num2;
                        break;
                    case':':
                        result = num1 / num2;
                        break;
                }

                // if (op == '+') {
                //     result = num1 + num2;
                // }
                // else if (op == '-') {
                //     result = num1 - num2;
                // }
                // else if (op == '*') {
                //     result = num1 * num2;
                // }
                // else {
                //     result = num1 / num2;
                // }

                 document.getElementById('result').innerHTML=result;
            }
        </script>