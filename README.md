# Exercise Fitness Tracker
Exercise fitness tracker using mongoDB and Mongoose schema with Express.js routing

<p align="center">
 <img src="https://img.shields.io/github/repo-size/ssharp0/exercise-fitness-tracker">
 <img src="https://img.shields.io/badge/Javascript-yellow">
 <img src="https://img.shields.io/badge/-node.js-green">
 <img src="https://img.shields.io/badge/-mongoDB-purple">
 <img src="https://img.shields.io/badge/-express npm-brown">
 <img src="https://img.shields.io/badge/-mongoose npm-blue">
 <img src="https://img.shields.io/badge/-dotenv npm-grey">
</p>

<br>

### [Heroku Deployed Demo Link]()

### [Github Repo](https://github.com/ssharp0/exercise-fitness-tracker)


## Table of Contents

- [Description](#description)
- [User Story](#user-story)
- [Usage](#usage)
- [Installation](#installation)
- [Screenshots](#screenshots)

## Description

This is an application to track workouts and exercises using mongoDB and mongoose- with the purpose to focus on server routing and schemas. The app will keep track of every exercise in the user's workout and the dashboard will display weekly summaries of all workouts done over a week period.


## User Story

A user will be able to log multiple exercises in a workout on a given day. The user will be able to track the name, type, weight, sets, reps and duration of the exercise (and if the exercise is cardio, track the distance travelled). Data is stored in mongo database.

## Usage

On the home page, the user will be able to continue an existing workout or create a new workout. The user will be able to add exercise(s) to an existing workout or to a new workout. 

User can click 'Add Exercise' (either to an existing workout or a new workout), and then the user will be able to select either cardio (i.e. running) or a resistance (i.e. weight lifting) and input details on the exercise. The user can click 'Complete' to finish or add another exercise to the workout.

The user will be able to view a workout summary by navigating to the dashboard.

## Installation

Install all dependencies and packages as noted in installation. (Node.js & mongoDB Compass should be installed)

`npm init -y`

`npm i express`

`npm i mongoose`

`npm i dotenv`

## Screenshots

Data reflects seed data...

<kbd>

Home Page (left) | Dashboard/Stats Page (right)

![](/public/assets/img/homepage.png) | ![](/public/assets/img/dashboard.png)

Continue or Add an Exercise to a Workout:

![](/public/assets/img/continue_add_exercise.png)

Add Cardio (left) | Add Resistance (right)

![](/public/assets/img/add_cardio.png) | ![](/public/assets/img/add_resistance.png)

</kbd>
