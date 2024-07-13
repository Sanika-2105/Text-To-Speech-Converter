let speech=new SpeechSynthesisUtterance();

let voices=[];

let voiceSelect=document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () =>
{
    voices = window.speechSynthesis.getVoices();      //getvoices() will provide all the voices available on the device
    speech.voice=voices[0];

    //display each voice in the dropdown
    voices.forEach((voice,i)=>(voiceSelect.options[i]=new Option(voice.name,i)));

};

voiceSelect.addEventListener("change",()=>{
    speech.voice=voices[voiceSelect.value]
})


document.querySelector("button").addEventListener("click",()=>{
    speech.text=document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);

    //changing the voices
});