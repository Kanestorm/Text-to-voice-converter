function convert(){
    let input = document.getElementById('input-text').value;
    if(input.trim() == ""){
        alert("Enter text first");
        return;
    }

    let voice = new SpeechSynthesisUtterance(input);  // voice is an object thats why new keyword is used. SpeechSynthesisUtterance is a function or an API that stores the complete text that we want to convert into speech.

    window.speechSynthesis.speak(voice);  // window.speechSynthesis is an API that converts the text into speech. speak() is a function that is used to convert the text into speech.
}