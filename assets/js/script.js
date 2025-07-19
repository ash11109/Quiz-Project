const quesAns = [
    [" Q.1 Who is the current Prime Minister of India? ", "Narendra Modi", "Rahul Gandhi", "Amit Shah", "Yogi Adityanath", "1"],
    [" Q.2 What is the national animal of India? ", "Lion", "Elephant", "Tiger", "Leopard", "3"],
    [" Q.3 Which city is known as the financial capital of India? ", "Delhi", "Mumbai", "Bangalore", "Chennai", "2"],
    [" Q.4 What is the national flower of India? ", "Rose", "Sunflower", "Lotus", "Lily", "3"],
    [" Q.5 In which year did India gain independence? ", "1945", "1946", "1947", "1950", "3"],
    [" Q.6 Which Indian festival is known as the Festival of Lights? ", "Holi", "Raksha Bandhan", "Diwali", "Dussehra", "3"]
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
    
    if ( ans == quesAns[x]['5'] ) {
        score += 10;
    } else {
        score -= 5;
    }
    
    document.getElementById("scoor").innerHTML = 'SCORE : '+score ;

    if (x == quesAns.length - 1 ) {
        document.getElementById("end").innerHTML = `
            <div style="
                background: linear-gradient(135deg, #4facfe, #00f2fe);
                color: white;
                padding: 30px;
                border-radius: 15px;
                text-align: center;
                box-shadow: 0 8px 16px rgba(0,0,0,0.2);
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            ">
                <h2 style="margin-bottom: 10px; font-size: 2em;">🎉 QUIZ COMPLETED 🎉</h2>
                <p style="font-size: 1.5em;">Your Score is: <strong>${score}</strong></p>
            </div>
            `;

        return null ;
    }

    x++;
    printQA();


}

