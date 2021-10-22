// Setup
var recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

function updateRecords(records, id, prop, value) {
  if (value == "") {
    delete records[id][prop];
  } else {
    if (prop == "tracks") {
      if (!records[id].hasOwnProperty("tracks")) {
        records[id].tracks = [];
      }
      records[id].tracks.push(value);
    } else {
      records[id][prop] = value;
    }
  }
}

// Only change code below this line
function uepdateRecords(records, id, prop, value) {
  if (value != "") {
    // if value is not an empty string
    if (prop == "tracks") {
      // if prop does equal to tracks
      //create a new array or add to current tracks array
      console.log(!records[id].hasOwnProperty("tracks"));
      if (!records[id].hasOwnProperty("tracks")) {
        records[id].tracks = [];
      }
      records[id].tracks.push(value);
    } else {
      records[id][prop] = value;
    }
  } else if (value == "") {
    delete records[id][prop];
  }
}
console.log(recordCollection);
updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");
console.log(recordCollection);
