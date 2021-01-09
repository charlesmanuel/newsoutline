import hashlib
import uuid
from pathlib import Path
import arrow
import sqlite3
from flask import (
    abort,
    Flask,
    redirect,
    render_template,
    request,
    send_from_directory,
    session,
    url_for,
)
app = Flask(__name__)
@app.route('/')
def homepage():
	return 'Hello, World!'