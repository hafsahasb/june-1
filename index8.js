//Task 1: Find Your Friend’s Name
function isFriendHere(guests, friendName){  //that checks if your friend is in the guest list
    for (let i = 0; i < guests.length; i++) {
    if ( guests[i] == friendName ){
    return true;
    }
  }
  return false;

}
console.log (isFriendHere(["Jane", "Ali"], "Jane"))
console.log (isFriendHere(["Jane", "Ali"], "John")) 


//Task 2: Find the First Expensive Item
function firstExpensive(prices, limit){
  for (let i = 0; i < prices.length; i++){
  if ( prices[i] > limit){
  return prices[i];
    }
  }
  return null;
}
console.log (firstExpensive([2500, 1300, 4000, 900], 3000) )
console.log (firstExpensive([500, 800, 1000], 1200)  )


//Task 3: Song Playlist Match
function findSong(songs, keyword)  {//(case-insensitive)
  for (let i = 0; i < songs.length; i++) {
    if ( songs[i].includes(keyword)){
      return songs[i];
      }
  }
  return null;
  } 
  console.log (findSong(["Calm Down", "Joro", "Essence"], keyword="sse") ) 
  console.log (findSong(["Away", "Finesse"], "love") ) 
  

//Task 4: Find First Mismatched Sock
function findMismatch(socks, color) {
  // Convert the color to lowercase for case-insensitive comparison
  const lowerColor = color.toLowerCase();
  
  for (let i = 0; i < socks.length; i++) {
    // Convert the current sock color to lowercase for comparison
    if (socks[i].toLowerCase() !== lowerColor) {
      return i; // Return the index of the first mismatched sock
    }
  }
  return -1; // Return -1 if no mismatched sock is found
}
console.log (findMismatch(["black", "black", "white", "black"]) )
console.log (findMismatch(["blue", "blue", "blue"]) )


//Task 5: First Empty Seat in a Bus
function firstEmptySeat(seats){
 for (let i = 0; i < seats.length; i++) {
    if ( seats[i] == true){
    return i;
    }
  }
  return false;
}
console.log(firstEmptySeat([false, false, true, false]));
