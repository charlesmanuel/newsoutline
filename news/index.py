import hashlib
import uuid
from pathlib import Path
import arrow
import datetime
import time
import sqlite3
import api
from flask import (
    abort,
    Flask,
    g,
    jsonify,
    redirect,
    render_template,
    request,
    send_from_directory,
    session,
    url_for
)
app = Flask(__name__)
DATABASE = '../var/newsoutline.sqlite3'


def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)

    def dict_factory(cursor, row):
        return {col[0]: row[idx] for idx, col in enumerate(cursor.description)}
    db.row_factory = dict_factory
    return db


@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()


@app.route('/')
def homepage():
    return render_template("index.html")


@app.route("/api/v1/posts/", methods=["GET"])
def get_posts():
    connection = get_db()
    today = datetime.date.today()
    cur = connection.execute(
        'SELECT title FROM posts WHERE article_date="{today}"'.format(
            today=today
        )
    )
    res = cur.fetchone()
    title = str(res["title"])
    context = {"post_title": title}
    return jsonify(**context)
