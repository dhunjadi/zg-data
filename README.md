# ZG Data

ZG Data is a React Native / Expo application for browsing open datasets from the City of Zagreb. The app organizes datasets into categories, lets users search through available groups and datasets, and opens a map view for location-based data.

The project uses data from the official City of Zagreb open data portal: [data.zagreb.hr](https://data.zagreb.hr/).

## Features

- Firebase email/password authentication
- Protected app routes for authenticated users
- Dataset categories for education, traffic, public services, environment, health care, agriculture, society, and more
- Searchable category and dataset lists
- Map screen powered by `react-native-maps`
- GeoJSON fetching with Axios and TanStack Query
- Form validation with React Hook Form and Yup
- Styling with NativeWind / Tailwind CSS

## Test Account

Use this account to try the authenticated part of the app:

```txt
email: test@test.hr
password: 123456
```

## Data Source

The app is built around public datasets from the City of Zagreb Open Data Portal:

- Website: [https://data.zagreb.hr/](https://data.zagreb.hr/)
- Example GeoJSON endpoint used in the app: `https://data.zagreb.hr/dataset/8b4ab584-5b5a-4d70-9cf3-24897645ad6b/resource/e1caf1d1-ecdf-4d5c-8020-6798c45a188d/download/data.geojson`

## Tech Stack

- [Expo](https://expo.dev/)
- [Expo Router](https://docs.expo.dev/router/introduction/)
- [React Native](https://reactnative.dev/)
- [Firebase Authentication](https://firebase.google.com/docs/auth)
- [TanStack Query](https://tanstack.com/query/latest)
- [Axios](https://axios-http.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Yup](https://github.com/jquense/yup)
- [NativeWind](https://www.nativewind.dev/)
- [react-native-maps](https://github.com/react-native-maps/react-native-maps)

## Getting Started

Install dependencies:

```bash
npm install
```

Start the Expo development server:

```bash
npx expo start
```
