from flask import Flask, render_template
from flask import request
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired
from flask_bootstrap import Bootstrap


class NameForm(FlaskForm):
    name = StringField("What is your name?", validators=[DataRequired()])
    submit = SubmitField('Submit')

# All flask app must create an 'application instance'
# The application instance is an object of class 'Flask'
# The web server passes all requests it receives from clients to
# this object for handling, using a protocol called WSGI (wiz-ghee)


app = Flask(__name__)
# To increase security, the secret key should be stored in an environment variable
# instead of being embedded in the source code.
app.config['SECRET_KEY'] = "hard to guess string"

bootstrap = Bootstrap(app)

# Routes and View Functions
# Concept: web browsers send "requests" to the web server,
# which in turn sends them to the Flask app instance.
# Route: the association between a URL and the function that handles it.


# -------Thread-------
# A thread is the smallest sequence of instructions
# that can be managed independently.
# It is common for a process to have multiple active threads, such as
# to share resources like memory of file handles
# Multithreaded web servers start a pool of threads
# and select a thread from the pool to handle each incoming request.


# -------------Flask has: Application and Request Contexts----------------


# -------Below is called "view function----------"
# Basically, it is used to generate a response to a request.
# But in many cases a request also triggers a change in the state of the application.
# And the view function is where the change is generated.

# A common use of decorators is to register functions as handler functions
# to be invoked when certain events occur.
@app.route("/", methods=['GET', 'POST'])
def index():
    name = None
    form = NameForm()
    if form.validate_on_submit():
        name = form.name.data
        form.name.data = ''
    return render_template('index.html', form=form, name=name)


@app.route("/user/<name>")
def user(name):
    return render_template("user.html", name=name)


# Flask support the types: string, int, float, path
@app.route("/user/<int:id>")
def userId(name):
    return "<h1>Hello, {}!</h1>".format(id)


# --------------Request Hook------------------
# It is used to execute functions before or after each request is processed.


if __name__ == '__main__':
    app.run(debug=True)
