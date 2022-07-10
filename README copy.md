Requirements: Node v16.14.2+

Test commands:

RUN: `node index.js --action="list"`
Result: https://prnt.sc/NYl7Yl7kMKHJ

RUN: `node index.js --action="get" --id=5`
Result: https://prnt.sc/mh6pbMLMv7Nh

RUN: `node index.js --action="add" --name="Mango" --email="mango@gmail.com" --phone="322-22-22"`
Result: https://prnt.sc/uwVjcVPBQ-Nb

RUN: `node index.js --action="remove" --id=3`
Result: https://prnt.sc/tVV7hKt6516V