function soundclassification(){
    navigator.mediaDevices.getUserMedia({audio : true})
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/e5-8UWo3k/model.json",modelTrained)

}

function modelTrained(){
    console.log("The model is Ready")
    classifier.classify(gotResults)
}

function gotResults(error,result){
    if (error){
        console.error(error)
    }

    else {
        console.log(result)

        number_r = Math.floor(Math.random()*255)+1
        number_b = Math.floor(Math.random()*255)+1
        number_g = Math.floor(Math.random()*255)+1

        document.getElementById("result_label").innerHTML = 'I can Hear - ' + result[0].label;
        document.getElementById("result_accuracy").innerHTML = 'Accuracy - ' + (result[0].confidence*100).toFixed(0) + " %"

        document.getElementById("result_label").style.color = "rgb(" + number_r +"," + number_g +"," + number_b + ")"
        document.getElementById("result_accuracy").style.color = "rgb(" + number_r +"," + number_g +"," + number_b + ")"

        a1 = document.getElementById("alien1")
        a2 = document.getElementById("alien2")
        a3 = document.getElementById("alien3")
        a4 = document.getElementById("alien4")

        if (result[0].label==="clap"){
            a1.src = "aliens-01.gif"
            a2.src = "aliens-02.png"
            a3.src = "aliens-03.png"
            a4.src = "aliens-04.png"
        }

        else if (result[0].label==="songs"){
            a2.src = "aliens-02.gif"
            a1.src = "aliens-01.png"
            a3.src = "aliens-03.png"
            a4.src = "aliens-04.png"
        }

        else if (result[0].label==="bell"){
            a3.src = "aliens-03.gif"
            a1.src = "aliens-01.png"
            a2.src = "aliens-02.png"
            a4.src = "aliens-04.png"
        }

        else if (result[0].label==="snap"){
            a4.src = "aliens-04.gif"
            a1.src = "aliens-01.png"
            a3.src = "aliens-03.png"
            a2.src = "aliens-02.png"
        }

        else{
            a4.src = "aliens-04.png"
            a1.src = "aliens-01.png"
            a3.src = "aliens-03.png"
            a2.src = "aliens-02.png" 
        }

    }



    

}