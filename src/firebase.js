import firebase from 'firebase';


var firebaseConfig = {
	apiKey: "AIzaSyAAIP-9lVJGn5OF3HBpD1n9RleydV8lJW4",
	authDomain: "fleet-tracker-f7cc4.firebaseapp.com",
	databaseURL: "https://fleet-tracker-f7cc4-default-rtdb.firebaseio.com",
	projectId: "fleet-tracker-f7cc4",
	storageBucket: "fleet-tracker-f7cc4.appspot.com",
	messagingSenderId: "623501360792",
	appId: "1:623501360792:web:9eafc167407228b7ad9aed",
	measurementId: "G-LZQDFGECH3",
};

firebase.initializeApp(firebaseConfig)



export default firebase;