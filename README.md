This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn`

And

### `yarn start`

## App Configs

1. Change API URL at `.env.development` [REACT_APP_API_URL]
2. Change number of row per page at `/src/configs/app-settting.js` [APPSETTING.TableRowPage]

## App Features

1. Auto focus search textbox when start
2. Auto focus search textbox when change tab
3. Can press Enter for search
4. Can press search icon for search
5. Can change pagination
6. When search data pagination will be set to 1
7. When load data from api , icon loading will show
8. When no data found , text `No data found` will show

## App Technique

1. Use react-boot for UI design
2. Use redux for global store
3. Use redux-saga for hadle API
4. styled-components not necessary for this project

## Edit API app

Use flask_cors for resolve CORS
