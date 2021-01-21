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
DATABASE = 'var/newsoutline.sqlite3'


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


@app.route("/api/post/<postid>/", methods=["GET"])
def get_post(postid):
    connection = get_db()
    cur = connection.execute(
        'SELECT * FROM posts WHERE post_id="{post_id}"'.format(
            post_id=postid
        )
    )
    res = cur.fetchone()
    title = str(res["title"])
    bullets = []
    article_url = str(res["article_url"])
    article_source = str(res["article_source"])
    cur_bullets = connection.execute(
        'SELECT bullet_text FROM article_bullets WHERE post_id="{post_id}" '
        'ORDER BY position ASC;'.format(post_id=postid)
    )
    res_bullets = cur_bullets.fetchall()
    for bullet in res_bullets:
        bullets.append(str(bullet["bullet_text"]))
    context = {"post_title": title,
               "article_url": article_url,
               "article_source": article_source,
               "article_bullets": bullets}
    return jsonify(**context)


@app.route("/api/posts/<page_num>/", methods=["GET"])
def get_post_list(page_num):
    connection = get_db()
    today = datetime.date.today()
    page = int(page_num)
    post_list = []
    cur_posts = connection.execute(
        'SELECT post_id ' 'FROM posts '
        'WHERE article_date="{today}" '
        'ORDER BY post_id ASC '
        'LIMIT 8 OFFSET {offset}'.format(today=today,
                                         offset=page*8)
    )
    response = cur_posts.fetchall()
    for post_id in response:
        post_list.append(post_id["post_id"])
    context = {"post_list": post_list}
    print(context)
    return jsonify(**context)
