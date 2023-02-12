##
![Badge](https://img.shields.io/badge/javascript-yellow)
![Badge](https://img.shields.io/badge/express-orange)
![Badge](https://img.shields.io/badge/MongoDB-blue)
![Badge](https://img.shields.io/badge/mongoose-red)



## Social Network API

- Module 18 Challenge, NoSQL, MongoDB, Mongoose

## Contents

[Description](#description)

[User Story](#user-story)

[Acceptance Criteria](#acceptance-criteria)

[Installation](#installation)

[Usage](#usage)

[Resources & Credit](#resourcescredit)

[Features](#features)

[Application Screenshot Preview](#application-screenshot-preview)

[License](#license)

## Description

- MongoDB is a popular choice for many social networks due to its speed with large amounts of data and flexibility with unstructured data. Over the last part of this course, I have used several of the technologies that social networking platforms use in their full-stack applications. Because the foundation of these applications is data, it’s important that I understand how to build and structure the API first.

- My task is to build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. I will use Express.js for routing, a MongoDB database, and the Mongoose ODM. In addition to using the Express.js Links to an external site.and Mongoose Links to an external site.packages, I may also optionally use a JavaScript date library of my choice or the native JavaScript Date object to format timestamps.

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

### Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Installation

```md
npm i
```

## Usage

- Express.js
- MongoDB
- Mongoose

## Resources/Credit

- Martin Cespedes - [Link to my Github](https://github.com/MartinCespedes)

## Features

- MongoDB
- Mongoose ODM

## Application Screenshot Preview (Insomnia)

![Preview-1](./img/social_network_api_1.png)

##

![Preview-2](./img/social_network_api_2.png)


##

![License](https://img.shields.io/badge/License-MIT-yellow.svg)

Copyright (c) 2023 Martin Cespedes

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
