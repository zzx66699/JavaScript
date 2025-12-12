let grade = 80;

switch(true){
    case grade >= 90:
        console.log("You did well!");
        break;
    case grade >= 80:
        console.log("You did good!")
        break;
    case grade >= 70:
        console.log("You did okay!")
        break;
    case grade >= 60:
        console.log("You passed ... barely")
        break;
    case grade >= 0:
        console.log("Your FAILED!")
        break;
    default:
        console.log(grade, "is not a letter grade!")

}