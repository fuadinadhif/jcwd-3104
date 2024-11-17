const playerScoreMap = new Map();

console.log(playerScoreMap);
playerScoreMap.set("Alice", 10);
playerScoreMap.set("Joko", 100);
playerScoreMap.set("Bowo", 50);
playerScoreMap.set("Rahmat", 75);
playerScoreMap.set(100, 7000);
playerScoreMap.set({}, 7500);
console.log(playerScoreMap);
playerScoreMap.delete(100);
console.log(playerScoreMap);
