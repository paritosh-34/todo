from flask import Flask, render_template

app = Flask(__name__, static_url_path='', static_folder='../build', template_folder='../build')

data = {
    "id": "",
    "name": "Paritosh",
    "email": "batishparitosh2@gmail.com",
    "collections": [
        {
            "id": 1,
            "name": "Work",
            "color": "#5d26ca",
            "todos": [
                {
                    "id": 1,
                    "heading": "Take out the trash",
                    "desc": "This should be done fast.",
                    "date": "2020-06-19T18:30:00.000Z",
                    "time": {
                        "from": "06:04",
                        "to": "07:45"
                    },
                    "completed": True
                },
                {
                    "id": 3,
                    "heading": "Clean gecko tank",
                    "desc": "This should be done fast.",
                    "date": "2020-06-19T18:30:00.000Z",
                    "time": {
                        "from": "06:24",
                        "to": "07:45"
                    },
                    "completed": False
                },
                {
                    "id": 4,
                    "heading": "Mow lawn",
                    "desc": "This should be done fast.",
                    "date": "2020-06-19T18:30:00.000Z",
                    "time": {
                        "from": "06:24",
                        "to": "07:45"
                    },
                    "completed": True
                },
                {
                    "id": 5,
                    "heading": "Catch up on Arrested Develepment",
                    "desc": "This should be done fast.",
                    "date": "2020-06-19T18:30:00.000Z",
                    "time": {
                        "from": "06:24",
                        "to": "07:45"
                    },
                    "completed": False
                }
            ]
        },
        {
            "id": 2,
            "name": "Shopping",
            "color": "#f5a92f",
            "todos": [
                {
                    "id": 1,
                    "heading": "Dal",
                    "desc": "",
                    "date": "2020-06-19T18:30:00.000Z",
                    "time": {
                        "from": "06:24",
                        "to": "07:45"
                    },
                    "completed": True
                },
                {
                    "id": 2,
                    "heading": "Channa",
                    "desc": "",
                    "date": "2020-06-19T18:30:00.000Z",
                    "time": {
                        "from": "06:24",
                        "to": "07:45"
                    },
                    "completed": False
                },
                {
                    "id": 3,
                    "heading": "Toothpaste",
                    "desc": "This should be done fast.",
                    "date": "2020-06-19T18:30:00.000Z",
                    "time": {
                        "from": "06:24",
                        "to": "07:45"
                    },
                    "completed": False
                },
                {
                    "id": 4,
                    "heading": "Hajmola",
                    "desc": "",
                    "date": "2020-06-19T18:30:00.000Z",
                    "time": {
                        "from": "06:24",
                        "to": "07:45"
                    },
                    "completed": True
                },
                {
                    "id": 5,
                    "heading": "Chips",
                    "desc": "",
                    "date": "2020-06-19T18:30:00.000Z",
                    "time": {
                        "from": "06:24",
                        "to": "07:45"
                    },
                    "completed": False
                }
            ]
        },
        {
            "id": 3,
            "name": "EveryDay",
            "color": "#f45c33",
            "todos": [
                {
                    "id": 1,
                    "heading": "React.js",
                    "desc": "Most used.",
                    "date": "2020-06-19T18:30:00.000Z",
                    "time": {
                        "from": "06:24",
                        "to": "07:45"
                    },
                    "completed": True
                },
                {
                    "id": 2,
                    "heading": "Angular.js",
                    "desc": "From Google.\n Has a lot of hatred.",
                    "date": "2020-06-19T18:30:00.000Z",
                    "time": {
                        "from": "06:24",
                        "to": "07:45"
                    },
                    "completed": False
                },
                {
                    "id": 3,
                    "heading": "Vue.js",
                    "desc": "Most popular among devolopers.",
                    "date": "2020-06-19T18:30:00.000Z",
                    "time": {
                        "from": "06:24",
                        "to": "07:45"
                    },
                    "completed": False
                }
            ]
        },
        {
            "id": 4,
            "name": "Ideas",
            "color": "#43c8dd",
            "todos": [
                {
                    "id": 1,
                    "heading": "Ummm...",
                    "desc": "Thinking...",
                    "date": "2020-06-19T18:30:00.000Z",
                    "time": {
                        "from": "06:24",
                        "to": "07:45"
                    },
                    "completed": True
                }
            ]
        }
    ]
}


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/todos")
def todos():
    return data


app.run()
