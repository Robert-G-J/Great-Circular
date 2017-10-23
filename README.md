# Playing with Great Circles

## Specification
```
We'd like to contact partners with offices within 100km of central London (coordinates 51.515419, -0.141099) to invite them out for a meal.

Write a NodeJS/JavaScript program that reads a list of partners in json and outputs the company names and addresses of matching partners (with offices within 100km) sorted by company name (ascending).
```

## Installation
To install, clone the file using this command in your shell:
```
$ git clone https://github.com/Robert-G-J/Great-Circular.git
```
The testing suite is [Jasmine](https://jasmine.github.io) and can be installed with:
```
$ npm install jasmine
```
Run the tests with:
```
$ jasmine
```

## What stage is this at?
The code in the partnerFinder.js file is fully functional 😊. The Promise in the PartnerGetter.js file is currently causing a test to fail, and is where the application requires er, development. This looks to be a timing issue at the moment, so might well require mocking as the tests require the actual endpoint.

## Approach
The reference in the [specification](#Specification) is to a list of partners in JSON format from a URL provided (not included here, by request). This list contains partner businesses in the form:
```json
 {
    "id": 1,
    "urlName": "company-at-work",
    "organization": "Company at Work",
    "customerLocations": "across Australia, Pacific and Middle-East",
    "willWorkRemotely": false,
    "website": "http://www.companyatwork.com/",
    "services": "At Company at Work, we want to help you make work a joy for your employees and you! We specialize in leadership development, talent management and career coaching.",
    "offices": [
      {
        "location": "SomeCity, Australia",
        "address": "Suite 111, 111 Some St \nSomeCity 2000",
        "coordinates": "-33.8934219,151.20404600000006"
      }
    ]
  }
```

I broke the problem into a series of smaller challenges:
1. Calculate the great circle distance between two points, by
  - Converting degree coordinates to radians,
  - Using the Great Circle Theorem to find the distance in m,
  - Before converting to km.

2. Trapping the user's coordinates and the range to search
  - Converting the user's coordinates to radians

3. Comparing user coordinates to mocked Partner Coordinates
  - If the partner is within range, return it
  - Return the partners within range

4. Grab the partners JSON from the supplied endpoint
  - By using an asynchronous request (as a Promise)
  - Tie to the location comparator

This suggested two clear constructors: a `PartnerFinder` and a `PartnerGetter`. The `PartnerFinder` would have the responsibility of calculating whether a partner object in JSON format was within a supplied range and return those that are. The `PartnerGetter` would contain the AJAX request to the endpoint that would grab the JSON ready for manipulation.

This allowed me to set test expectations for the output of the mathematical methods and for the return values of the `PartnerFinder` on the basic of simplified stub JSON partners, importantly isolating the AJAX request from the rest of the code.

## Potential Improvements
Clearly, there are many. Primarily the `PartnerGetter` requires a test that doesn't fail while waiting for the Promise to resolve. 

The application would be best served with a shiney front-end, that potential could use the browser/IP to grab the current location of the user and use that to populate their geographic coordinates. This avoids the current situation of hardcoding, which I feel rather uneasy about.

I might also have used [Travis CI](https://travis-ci.org) for continuous integration and [Coveralls](https://coveralls.io) as a cover coverage tool. I was in two minds, as I completed this project entirely locally and only later published to GH, whereas I routinely use these tools for other projects.
