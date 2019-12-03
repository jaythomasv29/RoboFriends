This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## robofriends
Clone this repo
Run npm install
Run npm start

### Components
Components that are pure with deterministic functions and do not have state involved are within this folder.
### Containers
#### App Component
App component has state management as does an API call to fetch users from (jsonplaceholder API)
App has a custom search method that searches through users and uses .setState() based on search input
App then return an array of the filtered users using .map()
The render method then renders a CardList component made up of Cards that is nested within a Scrollable component

