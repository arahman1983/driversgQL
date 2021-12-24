# Driver Recommendation
This is the IMPARGO test task for Product Engineer (Full-Stack) positions.

Transporation companies with large fleets of drivers want to optimize their processes by finding the closest drivers to order pickup locations. Suppose that we have location data for 500 drivers all over Central Europe, we want to sort the drivers according to their closedness to a specific location.

The requirement is a web application where users can search for and enter an address in Germany, then receive a list of suggested drivers. Users can search for addresses by typing in an input field and receiving suggestions (similar to Google Maps). Once the user selects a location out of the suggestions, they should be able to see a list of drivers that are sorted according to the distance (or ETA) from the driver’s current location to the pickup location. You will find below the designs for the web appication, including a Figma prototype.

## Frontend
A boilerplate using [parcel](https://parceljs.org/), [typescript](https://www.typescriptlang.org/), [apollo-client](https://www.apollographql.com/docs/react/) and [react](https://reactjs.org/) is provided in the `frontend` folder. This boilerplate simply queries the backend's `helloWorld` query and prints its result in a `div`. Feel free to edit the code in [./frontend/src/App.tsx](./frontend/src/App.tsx) to implement the required features.

You can run the frontend by doing the following:
1. `cd frontend`
2. `yarn`
3. `yarn dev`

### Requirements
- Input field to search for and enter input pickup locations.
- Backend API call.
- List results.

### Designs
[Figma file.](https://www.figma.com/file/lWsmt0gas2wHa5vveXewAw/Driver-Recommendation?node-id=0%3A1)

[Prototype.](https://www.figma.com/proto/lWsmt0gas2wHa5vveXewAw/Driver-Recommendation?node-id=0%3A1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A2)

Note, ETA label color thresholds are as follows: green for less than 2 hours, blue for less than 5 hours, yellow for less than 10 hours, and red otherwise.

## Backend
A boilerplate using [typescript](https://www.typescriptlang.org/) and [apollo-server](https://www.apollographql.com/docs/apollo-server/getting-started/) is provided in the `backend` folder. This boilerplate implements a resolver for a `helloWorld` query that just returns `Hello World!`, and allows starting a development server to serve this query by running `yarn dev`. Feel free to edit the code in [./backend/typeDefs.ts](./backend/src/typeDefs.ts) and [./backend/src/resolvers.ts](./backend/src/resolvers.ts) to implement the required feature. The driver data can be found in [./backend/data.json](./backend/data.json). Keep in mind that the drivers are located around central Europe and Germany is the main focus.

You can run the backend by doing the following:
1. `cd backend`
2. `yarn`
3. `yarn dev`

### Requirements
- Handle the API call to search through a list of drivers to find the driver closest to the pickup location.

## Notes
- The deadline for the task is 3 days.
- Make sure to add test cases using Jest. Boilerplate for the testing is already available in `frontend` and `backend` folders, you can run `yarn test` in each folder to verify that the test cases pass.
- Once you finish the task, you should commit your changes to a separate branch and create a pull request. You can then see if the tests or other checks pass or fail and fix them accordingly.
