# import urllib2
# from bs4 import BeautifulSoup

# url = "http://icecat.biz/p/toshiba/pscbxe-01t00een/satellite-pro-notebooks-4051528049077-Satellite+Pro+C8501GR-17732197.html"
# html = urllib2.urlopen(url)
# soup = BeautifulSoup(html)

# imgs = soup.findAll("div", {"class":"thumb-pic"})
# for img in imgs:
#         print img.a['href'].split("imgurl=")[1]

import os
import urllib
import urllib2
from bs4 import BeautifulSoup

url = "https://www.google.com/search?q=pets+for+adoption&source=lnms&tbm=isch&sa=X&ei=UMH6U5qHKoOsjAK7kYCAAQ&sqi=2&ved=0CAcQ_AUoAg&biw=1141&bih=189"
html = urllib2.urlopen(url)
soup = BeautifulSoup(html,"html.parser")

imgs = soup.findAll("div",{"class":"rg_di"})
print imgs
for images in imgs:
        imgUrl = images.a['href'].split("imgurl=")[1]
        print img
        print imgUrl
        urllib.urlretrieve(imgUrl, os.path.basename(imgUrl))