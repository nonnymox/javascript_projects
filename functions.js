function isLeap(year) {
    
    /**************Don't change the code above****************/    
        
        //Write your code here.    
        if (year % 4 === 0 && year % 100 != 0 && year % 400 != 0) {
            return "Leap year.";
        } else {
            return "Not leap year.";
        }
    
    
        
    
    /**************Don't change the code below****************/    
    
    }

    function bmiCalculator(weight, height) {
        var bmi = weight / (height * height); 
        var interpretation = ""; // ✅ Declare the variable first
    
        if (bmi < 18.5) {
            interpretation = "Your BMI is " + bmi + ", so you are underweight.";
        } else if (bmi >= 18.5 && bmi < 25) {
            interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
        } else {
            interpretation = "Your BMI is " + bmi + ", so you are overweight.";
        }
    
        return interpretation;
    }

    
