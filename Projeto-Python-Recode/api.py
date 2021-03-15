from flask import Flask, render_template, request

app = Flask(__name__, template_folder="./views")

@app.route("/", methods=["GET","POST"])
def home():
    if (request.method == "GET"):
        return render_template("index.html")
    else:
        if (request.form["num1"] != "" or request.form["num2"] != "" or request.form["operador"] != ""):
            if (request.form["operador"] == "som"):
                resultado = int(request.form["num1"]) + int(request.form["num2"])
                res = "A soma de {} com {} é {}".format(int(request.form["num1"]),int(request.form["num2"]), resultado)
            
            elif (request.form["operador"] == "sub"):
                resultado = int(request.form["num1"]) - int(request.form["num2"])
                res = "A subtração de {} por {} é {}".format(int(request.form["num1"]),int(request.form["num2"]), resultado)
            
            elif (request.form["operador"] == "mul"):
                resultado = int(request.form["num1"]) * int(request.form["num2"])
                res = "A multiplicação de {} vezes {} é {}".format(int(request.form["num1"]),int(request.form["num2"]), resultado)
            
            elif (request.form["operador"] == "div"):
                resultado = int(request.form["num1"]) / int(request.form["num2"])
                res = "A divisão de {} por {} é {}".format(int(request.form["num1"]),int(request.form["num2"]), resultado)
            
            elif (request.form["operador"] == "res"):
                resultado = int(request.form["num1"]) % int(request.form["num2"])
                res = "O resto da divisão de {} por {} é {}".format(int(request.form["num1"]),int(request.form["num2"]), resultado)
        
            return res
        else:
            return "Informe um valor Valido!"


@app.route("/JurosSimples", methods=["POST"])
def JurosSimples():
    if (request.form["val"] != "" or request.form["porc"] != "" or request.form["temp"] != ""):
        valor = float(request.form["val"])
        porcentagem = int(request.form["porc"])
        tempo = int(request.form["temp"])

        juros = valor * porcentagem * tempo /100

        return "O valor inicial de {} com juros é {}".format(valor,valor+juros)
    else:
        return "Informe um valor Valido!"


@app.route("/JurosComposto", methods=["POST"])
def JurosComposto():
    if (request.form["val"] != "" or request.form["porc"] != "" or request.form["temp"] != ""):
        valor = float(request.form["val"])
        porcentagem = int(request.form["porc"])/100
        tempo = int(request.form["temp"])

        juros = valor * (1+porcentagem)**tempo

        return "O valor inicial de {} com juros é {}".format(valor,juros)
    else:
        return "Informe um valor Valido!"

@app.errorhandler(404)
def not_found(error):
    return render_template("error.html")


app.run(port=3001,debug=True)