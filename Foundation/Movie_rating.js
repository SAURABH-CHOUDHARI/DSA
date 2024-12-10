let movie = (prompt("Enter Movie Name :"));
let rating = (prompt("Enter Movie Rating :"));

switch (true) {
    case (rating >= 0.0 && rating <= 2.0):
        console.log(`${movie} is a Flop.`);
        break;

    case (rating > 2.0 && rating <= 3.4):
        console.log(`${movie} is Average.`);
        break;

    case (rating > 3.4 && rating <= 4.5):
        console.log(`${movie} is Good.`);
        break;

    case (rating > 4.5 && rating <= 5.0):
        console.log(`${movie} is Excellent.`);
        break;

    default:
        console.log("Invalid rating");
}