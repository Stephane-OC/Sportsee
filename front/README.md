# SportSee User Profile Page

## 📌 Overview

SportSee is a startup dedicated to sports coaching. This repository contains the new version of the user profile page, allowing users to track the number of sessions they've completed and the number of calories they've burned.

## 🚀 Features

- Display user's sports activity using graphical visualizations.
- Track the number of sessions completed by the user.
- Monitor the number of calories burned by the user.

## 🔧 Technical Details

### Frameworks and Libraries

- **React**: Used for building the user interface.
- **Recharts**: Utilized for creating the graphical visualizations of the user's sports activity. An alternative to D3, Recharts provides a simpler way to build charts.

### CSS Integration

The primary focus of this project is on the desktop version. However, the project is designed to be viewable on screens with resolutions of at least 1024x780 pixels.

### Data Handling

A backend has been set up using NodeJS to provide mock data for the application. Calls to this backend are made using either Fetch or Axios, as per the developer's preference. All HTTP calls are made outside of the React components, with a separate service handling these calls.

### Data Standardization

Due to slight variations in the data schema for different users, it's essential to standardize the data fetched from the API. This ensures that the data is formatted correctly before being used in the application.

## 🚀 Getting Started

1. **Clone the Repository**:
git clone

2. **Install Dependencies**:
npm install

3. **Run the Application**:
npm start
