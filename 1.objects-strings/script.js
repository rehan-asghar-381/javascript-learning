// const backpack = {
//     name        : "Every Baackpack",
//     volume      : 30,
//     color       : "grey",
//     strapLength :{
//         left:   30,
//         right:  60,
//     },
//     paramOne    : false,
//     paramTwo    : true,
//     success: function(argOne, argTwo){
//         this.paramOne   = argOne;
//         this.paramTwo   = argTwo;
//     }
// }

// console.log("backpack object:", backpack);
// console.log("The strapLength L with dot:", backpack.strapLength.left);
// console.log("The strapLength L with bracket", backpack.strapLength["left"]);

// console.log("Parameter One is: ", backpack.paramOne);
// console.log("Parameter Two is: ", backpack.paramTwo);

// backpack.success(true, false);

// console.log("-----parameterOne and parameterTwo values has been reversed-----");

// console.log("Parameter One is: ", backpack.paramOne);
// console.log("Parameter Two is: ", backpack.paramTwo);



import Backpack from "./Backpack.js";

const everyDayBackPack = new Backpack(
    "Rehan Asghar",
    30,
    "White",
    15,
    15,
    true,
    "Octobar 24 2020 03:04:06 GMT+0500 (Pakistan Standard Time)"
);

// console.log("The everyDayBackPack object is: ", everyDayBackPack);
// console.log("The lidOpen is: ", everyDayBackPack.lidOpen);
// everyDayBackPack.toggleLid(false);
// console.log("The lidOpen has been reversed: ", everyDayBackPack.lidOpen);

// console.log("The strapLength Left is : ", everyDayBackPack.strapLength.left);
// console.log("The strapLength Right is : ", everyDayBackPack.strapLength.right);
// everyDayBackPack.newStrapLength(30, 30);

// console.log("-----strapLength has been Doubled-----");
// console.log("The strapLength Left has been Doubled : ", everyDayBackPack.strapLength.left);
// console.log("The strapLength Right has been Doubled : ", everyDayBackPack.strapLength.right);

// console.log("The days difference from: Octobar 24 2020 03:04:06 GMT+0500 (Pakistan Standard Time) To: "+ new Date() + " is: ", everyDayBackPack.backpackAge());

const content = `
<main>
<article>
    <h1>EveryDay Backpack</h1>
    <ul>
        <li>volume:${everyDayBackPack.volume}</li>
        <li>color:${everyDayBackPack.color}</li>
        <li>Age:${everyDayBackPack.backpackAge()}</li>
        <li>Left Strap Length:${everyDayBackPack.strapLength.left}</li>
        <li>Right Strap Length:${everyDayBackPack.strapLength.right}</li>
        <li>Lid status:${everyDayBackPack.lidOpen}</li>
    </ul>
</article>
</main>
`;

document.body.innerHTML = content;