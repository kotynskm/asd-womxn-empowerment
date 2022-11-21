# Travel Book

<img src="./public/assets/badge.png">

---

# Project Overview

Travel Book is a fullstack itinerary application for planning and organizing trips. The user can create trips, add activities, notes, photos, and friends to their trip. Furthermore, the user can view and schedule their activities on a calendar, as well as view the weather in the city where they are traveling to assist them in planning their itinerary.

View demo site here: http://35.90.45.98/

## Technologies

**Languages:** Python, JavaScript (AJAX, JSON), HTML, CSS, SQL  
**Frameworks & Libraries:** Flask, jQuery, Bootstrap, Jinja, SQLAlchemy ORM  
**Database & Industry Tools:** PostgreSQL, Git, GitHub, Command Line
**APIs:** Google Maps, Yelp Fusion, OpenWeather, Cloudinary

# <a name="about"></a>Learn More About the Developer

**GitHub:** https://github.com/kotynskm/travel-book  
**LinkedIn:** https://www.linkedin.com/in/kkotynski
**Medium:** https://medium.com/@k.kotynski

# Table of Contents

- [About the Developer](#about)
- [Features](#features)
- [Installation](#installation)
- [References](#references)

## <a name="features"></a>Features

#### Create a trip/view trips

<img src="/static/img/homepage.png" align="right" width="50%">
<img src="/static/img/homepage-map.png" align="right" width="50%">
A user can create a trip, view trips/invited trips on the homepage. A google map with markers for each trip is displayed on the page using the Google Maps API, JavaScript and geolocation. When the user creates a new trip, the information from the form is sent to the server as a POST request, and the trip cards are displayed on the page using React.

#### Plan itinerary

<img src="/static/img/tripitinerarycards.png" align="right" width="50%">
<img src="/static/img/activities.png" align="right" width="50%">
<img src="/static/img/calendar.png" align="right" width="50%">
A user can select/search top rated activities which populates results using the Yelp Fusion API. A google map with info markers for each activity selected is displayed on the page. The user can navigate to the calendar page to schedule activities. This feature was implemented using FullCalendar and JavaScript. The user may also upload photos. This feature was implemented using the Cloudinary API and BootStrap to create a photo carousel. The user may also check the daily and upcoming weather. This feature was implemented using the OpenWeather API and geolocation. Additional features include adding notes to the trip, which may be used for airline/hotel information, or reminders. The user may also invite friends to their trip, and invited users will be able to view the trip details.

## <a name="installation"></a>Installation

To run Travel Book on your local machine:

Clone this repo:

```
https://github.com/kotynskm/travel-book.git
```

Create and activate a virtual environment inside your Travel Book directory:

```
virtualenv env (Mac OS)
virtualenv env --always-copy (Windows OS)
source env/bin/activate
```

Install the dependencies:

```
pip3 install -r requirements.txt
```

Set up the database:

```
createdb travel_book
```

Run the app:

```
python3 server.py
```

You can now navigate to 'localhost:5000/' to use Travel Book!