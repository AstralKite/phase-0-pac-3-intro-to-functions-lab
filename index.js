function shout(string){
    return string.toUpperCase();
}


function whisper(string){
    return string.toLowerCase();
}


function logShout(string){
    console.log(string.toUpperCase());
}


function logWhisper(string){
    console.log(string.toLowerCase());
}


function sayHiToHeadphonedRoommate(string){
    
    const testString1 = string.toLowerCase();
    const testString2 = string.toUpperCase();
    const testString3 = "Let's have dinner together!";

    switch(string){
        case testString1:
            return "I can't hear you!";
            break;
        case testString2:
            return "YES INDEED!";
            break;
        case testString3:
            return "I would love to!";
            break;
        default:
            return "Not in this switch";
            break;
    }
}