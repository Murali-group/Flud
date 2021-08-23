<img src="https://github.com/Murali-group/Flud/blob/develop/app/static/img/flud_logo1.png" alt="Flud" width="100px">

------
# Flud: a game used for visualizing biological networks

You can play Flud online at https://flud.graphspace.org/

# Installation Instructions
Here are steps you need to follow to get the system up and running

## Prerequisites

### 1. Install Docker

Follow the [instructions on Docker's website](https://docs.docker.com/get-docker/) to install it.

### 2. Setup an account on GraphSpace

Flud interfaces with [GraphSpace](https://graphspace.org/) for storing and sharing networks and their layouts. Therefore, you need to create a GraphSpace account and a group to store all your Flud graphs and layouts.

1. Create an account ([Instructions](http://manual.graphspace.org/en/latest/Quick_Tour_of_GraphSpace.html#create-account))
2. Go to this [Groups page](http://graphspace.org/groups/#create_group) and create a group called "My flud group" ([Instructions](http://manual.graphspace.org/en/latest/Quick_Tour_of_GraphSpace.html#create-account))
  - Note down the Group ID from the group's URL. You will need this when we setup Flud.
    + If the groups URL is `http://graphspace.org/groups/1234`, then your Flud group's ID is `1234`.

## Setup instructions

### 1. Clone the repository to your computer
```
git clone https://github.com/Murali-group/Flud.git
```

### 2. Add GraphSpace account details to your development environment file
- Go to `.env.dev` file in Flud's root folder.
- Update these values with your GraphSpace username, password and Flud group ID.
```
GRAPHSPACE_USERNAME=XXXXXXXX
GRAPHSPACE_PASSWORD=XXXXXXXX
GRAPHSPACE_FLUD_GROUP_ID=XXXXXXXX
```

### 3. Start Flud server
This script builds the docker image and runs the container.
```
make compose_up
```

### 4. Prepare the database
This script adds an `Anonymous` user to the user table. This allows users to play Flud game without creating any account on Flud.
```
make prepare_db
```

### 5. Create demo games
This script add 3 demo graphs to your Flud group and creates a game for each of them.
```
make create_games
```

### 6. Play the game locally

Navigate to [http://localhost:8000/](http://localhost:8000/) to again view the home screen.

# Contributing

Feel free to fork and send us pull requests. 


# Contact
If you have questions or suggestions about Flud, please contact

- **Aditya Bharadwaj ([@adbharadwaj](https://github.com/adbharadwaj))**
- **Kurt Luther ([@kluther](https://github.com/kluther))**
- **T.M. Murali ([@tmmurali](https://github.com/tmmurali))**


# License

GraphSpace is available under the GNU General Public License v3.0 license. See [LICENSE](https://github.com/Murali-group/Flud/blob/master/LICENSE) for more information.

# Don't forget to cite us :)

https://dx.doi.org/10.1145/3479196
