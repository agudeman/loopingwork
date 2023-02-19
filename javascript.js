for (let i = 1000; i >= 0; i -= 2) {
    console.log(i);
}

for (let i = 0; i <= 10000; i++) {
    if (i === 2500) {
        alert("A quarter of the way there!");
    } else if (i === 5000) {
        alert("Halfway there!");
    } else if (i === 10000) {
        alert("The loop is done!");
    }
}

const favoriteTvShows = ["Game of Thrones", "Brooklyn Nine-Nine", "New Girl", "The 100", "Parks & Recreation"];
for (let i = 0; i < favoriteTvShows.length; i++) {
    console.log("My #" + (i + 1) + " favorite tv show is " + favoriteTvShows[i]);
}