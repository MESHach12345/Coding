try {
    let x = window.prompt("Enter a Number: ");
    x = Number(x);

    if (isNaN(x)) {
        throw ("That wasn't a Number");
    }

    if (x == "") {
        throw ("That was Empty");
    }

    console.log(`${x} is a Number`);
} catch (error) {
    console.error(error);
} finally {
    console.log("This always Executes");
}