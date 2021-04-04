window.onload = function(){
    // gender selector radio buttons click event handler
    document.getElementById("male-option").addEventListener("click", handleGenderSelectorClick);
    document.getElementById("female-option").addEventListener("click", handleGenderSelectorClick);

    function handleGenderSelectorClick(){
        if (document.getElementById("male-option").checked){
            hideHipCircumfrenceField(true);
        }
        else{
            hideHipCircumfrenceField(false);
        }
    }

    // "Calculate" button click event handler
    document.getElementById("calculate").addEventListener("click", function(){
        // calculate body mass index
        var height = Number(document.getElementById("height").value);
        var weight = Number(document.getElementById("weight").value);
        var bmi = calculateBMI(height, weight);

        // calculate body fat percentage and show results in an alert message
        // TODO: display it on the page itself
        var waistCircumfrence = Number(document.getElementById("w-circ").value);
        var neckCircumfrence = Number(document.getElementById("n-circ").value);
        if (document.getElementById("male-option").checked){
            alert("BMI: " + bmi + "\n"
            + "Body fat percentage (US Navy method): " + calculateBFPmale(waistCircumfrence, neckCircumfrence, height));
        }
        else{
            var hipCircumfrence = Number(document.getElementById("h-circ").value);
            alert("BMI: " + bmi + "\n"
            + "Body fat percentage (US Navy method): " + calculateBFPfemale(waistCircumfrence, neckCircumfrence, height, hipCircumfrence));
        }
        
    }, false);
}

function calculateBMI(height, weight){
    return (weight / Math.pow((height/100), 2));
}

function calculateBFPmale(waist, neck, height){
    return (495/(1.0324-0.19077*Math.log10(waist-neck) + 0.15456*Math.log10(height)))-450;
}

function calculateBFPfemale(waist, neck, height, hip){
    return (495/(1.29579-0.35004*Math.log10(waist+hip-neck) + 0.22100*Math.log10(height)))-450;
}

function hideHipCircumfrenceField(hide){
    if (hide){
       document.getElementById("hc-group").style.visibility="hidden";
    }
    else{
        document.getElementById("hc-group").style.visibility="visible";
    }
}