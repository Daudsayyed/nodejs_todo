# Todo Application

The main objective of developing this application is to build ToDo app using nodejs, expressjs & sqlite. Nodejs server will manage all CRUD operations using sqlite as database.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

Below steps are needed only for the first time when you setup your dev machine

Install node.js & npm from https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

### Installing

1. Clone this git repository, if you haven't done already.

   `git clone `

2. Install local npm dependencies

   `npm i`

3. Perform below command to run the node server 

   `npm start`

### Notes

todos.sqlite3 is ready made database file which you can find in the root folder. But if you would like to view or modify sqlite table records, you can download sqlite browser (https://sqlitebrowser.org/dl/). 

Steps to view db on sqlite browser:

1. Download sqlite browser from https://sqlitebrowser.org/dl/

2. Once download, double click on installation file and install it. Then click on `Open Database` and goto project folder and select `todos.sqlite3` file. You will now be able to access todo table.

## Built With

* [Node](https://nodejs.org/en/) - JavaScript runtime built on Chrome's V8 JavaScript engine
* [Express](https://expressjs.com/) - Node.js web application framework