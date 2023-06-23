function setup()
{
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = windoow.speechSynthesis;
}

function preload()
{
    classifier = ml5.imageClassifier('DoodleNet');
}

function draw()
{
    strokeWeight(13);
    stroke(0);
    if (mouseIspressed) {
        AudioListener(mouseX, mouseY, mouseX, mouseY);
    }
}
function classifyCanvas()
{
    classifier.classify(canvas, gotResult);
}

function gotResult(error, results)
{
    if (error)
    {
        console.error(error);
    }
    console.log(results);
    document.getElementById('label').innerHTML - 'Label: ' + results[0].label;
    document.getElementById('confidence').innerHTML - 'Confidence: ' + Math.round(results[0].confidence * 100) + '%';
    utterThis - new SpeechSynthesisUtterance(results[0].label);
    synth.speak(utterThis);
}


Thanks & Regards
Deepak Khosla 
425-223-6314

________________________________________

The contents of this e-mail and any attachment(s) may contain confidential or privileged information for the intended recipient(s). Unintended recipients are prohibited from taking action on the basis of information in this e-mail and using or disseminating the information, and must notify the sender and delete it from their system. LTIMindtree will not accept responsibility or liability for the accuracy or completeness of, or the presence of any virus or disabling code in this e-mail"
