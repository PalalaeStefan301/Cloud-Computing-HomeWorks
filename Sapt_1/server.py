from http.server import HTTPServer, BaseHTTPRequestHandler
import imdb
import json
from youtube_search import YoutubeSearch
from apiclient.discovery import build

class Serv(BaseHTTPRequestHandler):

    def do_GET(self):
        if self.path == '/':
            self.path = '/index.html'
        try:
            file_to_open = open(self.path[1:]).read()
            self.send_response(200)
        except:
            file_to_open = "File not found"
            self.send_response(404)
        self.end_headers()
        self.wfile.write(bytes(file_to_open, 'utf-8'))

def re_rewrite():
    file_read = open('test.json',"r")
    myString = file_read.read()
    file_read.close()
    file_w = open("test.json",'a')
    file_w.truncate(0)
    myString = '[' + myString + ']'
    myString = myString.replace('}{','},{')
    file_w.write(myString)

def first_second_api():
    moviesDB = imdb.IMDb()
    top = moviesDB.get_top250_movies()
    file = open("test.json","a")
    file.truncate(0)
    for  it in range(0,5):
        results = YoutubeSearch(str(str(top[it])+'trailer'), max_results=10).to_dict()
        json.dump(results[it], file)
        print(results[it]['id'])
    file.close()
    re_rewrite()
  
first_second_api()
httpd = HTTPServer(('localhost', 8080), Serv)
httpd.serve_forever()