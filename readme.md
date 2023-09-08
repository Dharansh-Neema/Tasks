# TASKS

## Demonstration(POSTMAN)

### 1. Create Task(/task) --POST

![create-task](https://github.com/Dharansh-Neema/Tasks/blob/main/images/createTask.png)
The created task get stored in mongoDB

### 2. Get All Tasks(/tasks) --GET

![get all tasks](https://github.com/Dharansh-Neema/Tasks/blob/main/images/GetAlltaks.png)

### 3. Update Status of task(/task/:id) --PUT

![updating-task-status](https://github.com/Dharansh-Neema/Tasks/blob/main/images/statusUpdated.png)

### 4. Deleting the task(/task/:id) --PUT

![deleting-the-task](https://github.com/Dharansh-Neema/Tasks/blob/main/images/deletedTasks.png)

## Setup instruction

### 1. Clone this repo

`git clone https://github.com/Dharansh-Neema/Tasks.git`

### 2. Installing the modules

`npm install`

### 3. Setting .env file

in command line run

`touch .env`
In .env write

`MONGODB_URL= mongodb://127.0.0.1:27017/test`

### 4. run the index.js

`node index.js`
or  
`npm test`

> The Server is running on PORT:8000
> `localhost:8000`
