function checkAnswers() {
    var form = document.getElementById("quiz-form");
    var result1 = document.getElementById("result1");
    var result2 = document.getElementById("result2");
    var result3 = document.getElementById("result3");
    var result4 = document.getElementById("result4");

    var question1 = form.elements["question1"].value;
    var question2 = form.elements["question2"].value;
    var question3 = form.elements["question3"].value;
    var question4 = form.elements["question4"].value;

    var score = 0;

    if (question1 === 'a') {
        result1.textContent = 'Odpověď na otázku 1 je správná.';
        score++;
    } else {
        result1.textContent = 'Odpověď na otázku 1 je nesprávná. Správná odpověď je: a) Wargaming';
    }

    if (question2 === 'c') {
        result2.textContent = 'Odpověď na otázku 2 je správná.';
        score++;
    } else {
        result2.textContent = 'Odpověď na otázku 2 je nesprávná. Správná odpověď je: c) Vyhrávat tankové bitvy';
    }

    if (question3 === 'a') {
        result3.textContent = 'Odpověď na otázku 3 je správná.';
        score++;
    } else {
        result3.textContent = 'Odpověď na otázku 3 je nesprávná. Správná odpověď je: a) Těžké, střední, lehké a dělostřelectvo';
    }

    if (question4 === 'a') {
        result4.textContent = 'Odpověď na otázku 4 je správná.';
        score++;
    } else {
        result4.textContent = 'Odpověď na otázku 4 je nesprávná. Správná odpověď je: a) Bojem s nepřáteli';
    }

    var results = document.getElementById('results');
    results.style.display = 'block';
}
