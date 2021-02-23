from http.server import HTTPServer, BaseHTTPRequestHandler
import imdb
import json
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

def first_second_api():
    api_key = "AIzaSyCL1Y_UVkcopudO1A8iS3Qzjqh4ynk8XR4"
    moviesDB = imdb.IMDb()
    youtube = build('youtube', 'v3', developerKey=api_key)
    top = moviesDB.get_top250_movies()
    file = open("test.json","a")
    file.truncate(0)
    for  it in range(0,5):
        req = youtube.search().list(part='snippet',
                                q=str(str(top[it])+'trailer'),
                                type='video',
                                maxResults=50)
        res = req.execute()
        print(res['items'][0]['snippet']['title'])
        json.dump(res['items'][0], file)

#first_second_api()
httpd = HTTPServer(('localhost', 8080), Serv)
httpd.serve_forever()