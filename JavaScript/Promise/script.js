async function loadFile() {
    let fileLoaded = false;

    if (fileLoaded) {
        return ("File Loaded");
    } else {
        throw ("File NOT Loaded");
    }
}

async function startProcess() {
    try{
        let message = await loadFile();
        console.log(message);
    } catch(error) {
        console.log(error);
    }
    
}

startProcess();