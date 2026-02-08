let userProfile = {
  name: "Jegannathan",
  age: 34,
  city: "Chennai",

  updateProfile: function(key, value) {
    if (key in userProfile) {
      userProfile[key] = value;
      console.log("Updated " + key + " to " + value);
    } else {
      console.log("Property " + key + " does not exist.");
    }
  },

  displayProfile: function() {
    console.log("Name: " + userProfile.name + ", Age: " + userProfile.age + ", City: " + userProfile.city);
  }
};
userProfile.displayProfile(); 
userProfile.updateProfile("age", 19); 
userProfile.updateProfile("city", "Bangalore"); 
userProfile.displayProfile(); 

