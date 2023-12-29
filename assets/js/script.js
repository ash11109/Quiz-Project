let quesAns = [
    [" Q.1 What is your Name ? ", "Amit", "Aman", "Sonu", "Rahul", "2"],
    [" Q.2 What is your Hobby ? ", "Planting", "Playing", "Reading", "Writing", "1"],
    [" Q.3 What are doing currently ? ", "Student", "Doing Job", "Internship", "Not Employed", "1"],
    [" Q.4 Where are you From ? ", "Bihar", "Uttar Pradesh", "Jharkhand", "Delhi", "2"],
    [" Q.5 Where is the Capital of India? ", "Lucknow", "Ranchi", "Patna", "New Delhi", "4"],
    [" Q.6 Where is the Capital of Jharkhand? ", "Lucknow", "Ranchi", "Patna", "New Delhi", "2"]
];

let x = 0 ;
let score = 0;

function printQA() {

    document.getElementById("ques").innerHTML = quesAns[x]['0'];
    document.getElementById("ans1").innerHTML = quesAns[x]['1'];
    document.getElementById("ans2").innerHTML = quesAns[x]['2'];
    document.getElementById("ans3").innerHTML = quesAns[x]['3'];
    document.getElementById("ans4").innerHTML = quesAns[x]['4'];

}

printQA();

function submitAns(ans) {
    // 
    if ( ans == quesAns[x]['5'] ) {
        score += 10;
    } else {
        score -= 5;
    }
    
    document.getElementById("scoor").innerHTML = 'SCORE : '+score ;
    
    x++;
    printQA();

    

    if (x == 5 ) {
        document.getElementById("scoor").innerHTML = "QUIZ END !!! <br>YOUR SCORE IS : " +score ;
    }
}

