// ===============================================================================
// DATA
// Below data will hold all of the values for friends
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
  {
    "name":"Ahmed",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        5,
        1,
        4,
        4,
        5,
      ]
  },
  {
    "name":"Maria",
    "photo":"https://pbs.twimg.com/profile_images/730300124308590592/_qzU2QcP.jpg",
    "scores":[
        3,
        2,
        5,
        1,
        3,
      ]
  },
  {
    "name":"Yoni",
    "photo":"http://ww3.hdnux.com/photos/07/20/45/1902930/7/1024x1024.jpg",
    "scores":[
        4,
        3,
        1,
        2,
        4,
      ]
  },
  {
    "name":"Ian",
    "photo":"http://www.mvff.com/wp-content/uploads/2015/09/mckellan_tribute_web.jpg",
    "scores":[
        2,
        3,
        4,
        2,
        1,
      ]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
