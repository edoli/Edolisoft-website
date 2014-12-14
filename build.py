import os


f = open('html/layout.html', 'r')
layout = f.read()
# f.clos

for html in os.listdir('html'):
  if html[:6] == 'layout':
    continue

  f = open('html/' + html, 'r')
  data = f.read()
  f.close()

  result = layout.replace('[[ content ]]', data)

  f = open(html, 'w')
  f.write(result)
  f.close()
