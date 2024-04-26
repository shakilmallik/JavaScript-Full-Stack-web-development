//q5. You are building a shipping application. write a program that takes the type of package ("standard", "express", or "overnight") and uses a switch statement to calculate and print the estimated delivery time based on the package type. for example, "standard" might take 3-5 days, "express" 1-2 days, and "overnight" would be delivered the next day.
let typeOfPackage= prompt("Enter the type of package: ");

switch(typeOfPackage){
    case "standard":
        console.log("standard might take 3-5 days");
        break;
    case "express":
        console.log("express might take 1-2 days");
        break;
    case "overnight":
        console.log("overnight would be delivered the next day");
        break;
    default:
        console.log("Invalid type of Package");
        break;
}