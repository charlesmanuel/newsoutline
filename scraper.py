import requests
from bs4 import BeautifulSoup
import hashlib
import datetime
import random
import sqlite3
import time
import os
import re
import spacy


def cleanhtml(raw_html):
    cleanr = re.compile('<.*?>')
    cleantext = re.sub(cleanr, '', raw_html)
    return cleantext


def BizInsiderScrape(WebUrl, source_name):
    conn = sqlite3.connect('var/newsoutline.sqlite3')
    today = datetime.date.today()
    url = WebUrl
    code = requests.get(url)
    plain = code.text
    s = BeautifulSoup(plain, "html.parser")
    num_links = 0
    for link in s.findAll('a', {'class': 'tout-title-link'}):
        if num_links >= 15:
            break
        article_valid = False
        post_id = random.randint(0, 99999999)
        tet = link.contents[0]
        tet_2 = link.get('href')
        link_url = 'https://www.businessinsider.com' + tet_2
        article_plain = ""
        try:
            article_code = requests.get(link_url)
            article_plain = article_code.text
            article_valid = True
        except:
            print("Max retries exceeded")
            article_valid = False
        if article_valid:
            x = BeautifulSoup(article_plain, "html.parser")
            ul = x.find('ul', {'class': 'summary-list'})
            if ul:
                bullets = ul.findChildren("li")
                if bullets:
                    print("Article Title: " + tet)
                    print("Article URL: " + tet_2)
                    print("Date: " + str(today))
                    print("Article ID: " + str(post_id))
                    print("Article Bullets:")
                    cur = conn.cursor()
                    cur.execute("INSERT INTO posts(article_date, title, post_id, article_url, article_source) "
                                'VALUES ("{article_date}", "{title}", "{post_id}", "{article_url}", "{article_source}")'.format(
                                    article_date=str(today),
                                    title=tet,
                                    post_id=post_id,
                                    article_url=link_url,
                                    article_source=source_name
                                )
                                )
                    conn.commit()

                    order_num = 0
                    for bullet in bullets:
                        bullet_text = bullet.contents
                        final_string = ""
                        for content in bullet_text:
                            cleaned = str(content).replace('"', "''")
                            final_string += cleaned
                        final_string = cleanhtml(final_string)
                        # final_string.replace('"', "''")
                        if ("Insider" not in final_string) and ("See more" not in final_string):
                            print(final_string)
                            print("Bullet position: " + str(order_num))
                            bullet_id_num = random.randint(0, 99999999)
                            cur = conn.cursor()
                            cur.execute('INSERT INTO article_bullets(post_id, position, bullet_text, bullet_id) '
                                        'VALUES ("{post_id}", "{position}", "{bullet_text}", "{bullet_id}")'.format(
                                            post_id=post_id,
                                            position=order_num,
                                            bullet_text=final_string,
                                            bullet_id=bullet_id_num
                                        )
                                        )
                            conn.commit()

                            order_num += 1
                        # print(bullet_text)
                    print("__________________________")
                    num_links += 1
        if (num_links >= 15):
            break
        time.sleep(10)

def WFBScrape(WebUrl, source_name, nlp):
    conn = sqlite3.connect('var/newsoutline.sqlite3')
    today = datetime.date.today()
    url = WebUrl
    code = requests.get(url)
    plain = code.text
    s = BeautifulSoup(plain, "html.parser")
    num_links = 0
    for link in s.findAll('a', {'rel': 'bookmark'}):
        if num_links >= 15:
            break
        article_valid = False
        post_id = random.randint(0, 99999999)
        tet = link.contents[0].lstrip()
        tet_2 = link.get('href')
        link_url = tet_2
        article_plain = ""
        print(tet)
        print(link_url)
        print("__________________________")
        try:
            article_code = requests.get(link_url)
            article_plain = article_code.text
            article_valid = True
        except:
            print("Max retries exceeded")
            article_valid = False
        if article_valid:
            x = BeautifulSoup(article_plain, "html.parser")
            paras = x.find('div', {'class': 'entry-content'})
            if paras:
                graphs = paras.findChildren("p")
                if graphs:
                    print("Article Title: " + tet)
                    print("Article URL: " + tet_2)
                    print("Date: " + str(today))
                    print("Article ID: " + str(post_id))
                    print("Article Bullets:")
                    cur = conn.cursor()
                    cur.execute("INSERT INTO posts(article_date, title, post_id, article_url, article_source) "
                                'VALUES ("{article_date}", "{title}", "{post_id}", "{article_url}", "{article_source}")'.format(
                                    article_date=str(today),
                                    title=tet,
                                    post_id=post_id,
                                    article_url=link_url,
                                    article_source=source_name
                                )
                                )
                    conn.commit()

                    order_num = 0
                    for graph in graphs:
                        if (order_num>=3):
                            break
                        graph_text = graph.contents
                        final_string = ""
                        for content in graph_text:
                            final_string += str(content)
                        final_string = cleanhtml(final_string)
                        sentence_finder = nlp(final_string)
                        sentences = list(sentence_finder.sents)
                        first_sent = sentences[0]
                        cleaned = str(first_sent).replace('"', "''")
                        cleaned.replace('"', "''")
                        print(cleaned)
                        print("Bullet position: " + str(order_num))
                        bullet_id_num = random.randint(0, 99999999)
                        cur = conn.cursor()
                        cur.execute('INSERT INTO article_bullets(post_id, position, bullet_text, bullet_id) '
                                    'VALUES ("{post_id}", "{position}", "{bullet_text}", "{bullet_id}")'.format(
                                        post_id=post_id,
                                        position=order_num,
                                        bullet_text=cleaned,
                                        bullet_id=bullet_id_num
                                    )
                                    )
                        conn.commit()

                        order_num += 1
                        # print(bullet_text)
                    print("__________________________")
                    num_links += 1
        if (num_links >= 15):
            break
        time.sleep(10)

def NRScrape(WebUrl, source_name, nlp):
    conn = sqlite3.connect('var/newsoutline.sqlite3')
    today = datetime.date.today()
    url = WebUrl
    code = requests.get(url)
    plain = code.text
    s = BeautifulSoup(plain, "html.parser")
    num_links = 0
    articles = s.findAll(''
    for link in s.findAll('a', {'rel': 'bookmark'}):
        if num_links >= 15:
            break
        article_valid = False
        post_id = random.randint(0, 99999999)
        tet = link.contents[0].lstrip()
        tet_2 = link.get('href')
        link_url = tet_2
        article_plain = ""
        print(tet)
        print(link_url)
        print("__________________________")
        try:
            article_code = requests.get(link_url)
            article_plain = article_code.text
            article_valid = True
        except:
            print("Max retries exceeded")
            article_valid = False
        if article_valid:
            x = BeautifulSoup(article_plain, "html.parser")
            paras = x.find('div', {'class': 'entry-content'})
            if paras:
                graphs = paras.findChildren("p")
                if graphs:
                    print("Article Title: " + tet)
                    print("Article URL: " + tet_2)
                    print("Date: " + str(today))
                    print("Article ID: " + str(post_id))
                    print("Article Bullets:")
                    cur = conn.cursor()
                    cur.execute("INSERT INTO posts(article_date, title, post_id, article_url, article_source) "
                                'VALUES ("{article_date}", "{title}", "{post_id}", "{article_url}", "{article_source}")'.format(
                                    article_date=str(today),
                                    title=tet,
                                    post_id=post_id,
                                    article_url=link_url,
                                    article_source=source_name
                                )
                                )
                    conn.commit()

                    order_num = 0
                    for graph in graphs:
                        if (order_num>=3):
                            break
                        graph_text = graph.contents
                        final_string = ""
                        for content in graph_text:
                            final_string += str(content)
                        final_string = cleanhtml(final_string)
                        sentence_finder = nlp(final_string)
                        sentences = list(sentence_finder.sents)
                        first_sent = sentences[0]
                        cleaned = str(first_sent).replace('"', "''")
                        cleaned.replace('"', "''")
                        print(cleaned)
                        print("Bullet position: " + str(order_num))
                        bullet_id_num = random.randint(0, 99999999)
                        cur = conn.cursor()
                        cur.execute('INSERT INTO article_bullets(post_id, position, bullet_text, bullet_id) '
                                    'VALUES ("{post_id}", "{position}", "{bullet_text}", "{bullet_id}")'.format(
                                        post_id=post_id,
                                        position=order_num,
                                        bullet_text=cleaned,
                                        bullet_id=bullet_id_num
                                    )
                                    )
                        conn.commit()

                        order_num += 1
                        # print(bullet_text)
                    print("__________________________")
                    num_links += 1
        if (num_links >= 15):
            break
        time.sleep(10)

def test_bullets():
    article_code = requests.get(
        'https://www.businessinsider.com/mental-health-awareness-resources-online-courses')
    article_plain = article_code.text
    x = BeautifulSoup(article_plain, "html.parser")
    ul = x.find('ul', {'class': 'summary-list'})
    if ul:
        bullets = ul.findChildren("li")
        if bullets:
            print("Article Bullets:")
            for bullet in bullets:
                bullet_text = bullet.contents
                final_string = ""
                for content in bullet_text:
                    final_string += str(content)
                final_string = cleanhtml(final_string)
                if "Insider" not in final_string:
                    print(final_string)
                # print(bullet_text)
            print("__________________________")


if __name__ == "__main__":
    nlp = spacy.load('en_core_web_sm')
    if(nlp):
        print("loaded")

    # test_bullets()
    #BizInsiderScrape('https://www.businessinsider.com/latest', 'BusinessInsider')
    #WFBScrape('https://freebeacon.com/page/2/', 'FreeBeacon', nlp)
    NRScrape('https://www.nationalreview.com/latest/', 'NationalReview', nlp)

