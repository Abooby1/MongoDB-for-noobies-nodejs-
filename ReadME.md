This is very simple to use:
* Use **npm i mongodb** in the shell of your project
* Make a secret called **Mongo** and put your URI as the value (if in replit, elsewhere: change the process.env["Mongo"] into your URI)
* Put the code in **index.js** into any file you want, just remember to import if its in another file than the main file

Thats all for setup, now for usage!
* Getting data: **db.get(uid)**
* Saving data: **db.save(uid, data)**
* Making data: **db.set(uid, data)**
* Deleting data: **db.delete(uid)**