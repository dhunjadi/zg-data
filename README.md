# ZG Data

ZG Data is a React Native / Expo application for browsing open datasets from the City of Zagreb. The app organizes datasets into categories, lets users search through available groups and datasets, and opens a map view for location-based data.

The project uses data from the official City of Zagreb open data portal: [data.zagreb.hr](https://data.zagreb.hr/).

## Features

- Dataset categories for education, traffic, public services, environment, health care, agriculture, society, and more
- Searchable category and dataset lists
- Map screen powered by `react-native-maps`
- GeoJSON fetching with Axios and TanStack Query
- Styling with NativeWind / Tailwind CSS

## Data Source

The app is built around public datasets from the City of Zagreb Open Data Portal:

- Website: [https://data.zagreb.hr/](https://data.zagreb.hr/)
- Example GeoJSON endpoint used in the app: `https://data.zagreb.hr/dataset/8b4ab584-5b5a-4d70-9cf3-24897645ad6b/resource/e1caf1d1-ecdf-4d5c-8020-6798c45a188d/download/data.geojson`

## Tech Stack

- [Expo](https://expo.dev/)
- [Expo Router](https://docs.expo.dev/router/introduction/)
- [React Native](https://reactnative.dev/)
- [TanStack Query](https://tanstack.com/query/latest)
- [Axios](https://axios-http.com/)
- [NativeWind](https://www.nativewind.dev/)
- [react-native-maps](https://github.com/react-native-maps/react-native-maps)

## Getting Started

Install dependencies:

```bash
npm install
```

Create the .env file in the root of the project and add

```bash
GOOGLE_MAPS_ANDROID_KEY="YOUR_API_KEY"
```

and

```bash
GOOGLE_MAPS_IOS_KEY="YOUR_API_KEY"
```

Instructions on how to generate your API keys can be found [here](https://docs.expo.dev/versions/latest/sdk/map-view/)

Start the Expo development server:

```bash
npx expo start
```
