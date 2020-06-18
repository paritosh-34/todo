from flask import Flask, render_template, jsonify, request
from flask_mysqldb import MySQL
from flask_cors import CORS
import json

app = Flask(__name__, static_url_path='/', static_folder='../build', template_folder='../build')

app.config['MYSQL_HOST'] = 'remotemysql.com'
app.config['MYSQL_USER'] = 'O0x8Vt6E3E'
app.config['MYSQL_PASSWORD'] = 'vCPbGMcKL3'
app.config['MYSQL_DB'] = 'O0x8Vt6E3E'

mysql = MySQL(app)
CORS(app)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/todos", methods=['GET', 'POST'])
def todos():
    cur = mysql.connection.cursor()

    # ---- Testing ----
    # Only to import data from react to flask (then to DB)
    # -----------------
    if request.method == 'POST':
        data = json.loads(request.data)
        for x in data["collections"]:
            for y in x["todos"]:
                print(y["date"][:19].replace("T", " "))
                # cur.execute(
                #     "INSERT INTO p_Todos(id, heading, datee, time_from, time_to, completed, collection) VALUES (%s, %s, %s, %s, %s, %s, %s)",
                #     (str(y["id"]), y["heading"], y["date"][:19].replace("T", " "),
                #      y["time"]["from"][:19].replace("T", " "), y["time"]["to"][:19].replace("T", " "), y["completed"],
                #      x["id"]))
                # mysql.connection.commit()

        return "True"

    # -------------------------
    # ---- Main Code Start ----
    # -------------------------

    cur.execute("SELECT id, name, color FROM p_Collections WHERE user='batishparitosh2@gmail.com'")
    rows2 = cur.fetchall()

    a = {"collections": []}
    for x in rows2:
        a["collections"].append({
            "id": x[0],
            "name": x[1],
            "color": x[2],
            "todos": []
        })

    cur.execute('''
        SELECT
            p_Collections.id,
            p_Todos.id,
            p_Todos.heading,
            p_Todos.datee,
            p_Todos.time_from,
            p_Todos.time_to,
            p_Todos.completed
        FROM
            p_Collections
        INNER JOIN
            p_Todos ON p_Collections.id = p_Todos.collection
        WHERE
            p_Collections.user = "batishparitosh2@gmail.com"
    ''')

    rows = cur.fetchall()
    for x in rows:
        for y in a["collections"]:
            if y["id"] == x[0]:
                y["todos"].append({
                    "id": x[1],
                    "heading": x[2],
                    "date": x[3],
                    "time": {
                        "from": x[4],
                        "to": x[5]
                    },
                    "completed": x[6]
                })

    r = jsonify(a)
    cur.close()
    return r

    # -----------------------
    # ---- Main Code End ----
    # -----------------------


app.run()
