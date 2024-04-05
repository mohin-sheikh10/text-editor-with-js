const optionButtons = document.querySelectorAll(".option-button");
const advanceOptionButton = document.querySelectorAll('.adv-option-button');
const fontName = document.getElementById('fontName');
const fontSize = document.getElementById('fontSize');
const textArea = document.getElementById('text-input');
const linkButton = document.getElementById('createLink');
const alignButtons = document.querySelectorAll('.align');
const spaceingButtons = document.querySelectorAll('.spacing');
const formatButtons = document.querySelectorAll('.format');
const scriptButtons = document.querySelectorAll('.script');

let fontList = ['Arial', 'Tahoma', 'Vardana', 'Times New Roman', 'Garamond', 'Georgia', 'Courier New', 'Cursive',];


function initializer () {
    highlighter(alignButtons, true);
    highlighter(spaceingButtons, true);
    highlighter(formatButtons, false);
    highlighter(scriptButtons, true);

    fontList.map(value => {
        let option = document.createElement('option');
        option.value = value;
        option.innerHTML = value;
        fontName.appendChild(option);
    });
    
    for (let i = 1; i<=7; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.innerHTML = i;
        fontSize.appendChild(option);
    };
    fontSize.value = 3
    
};

// === Moin Logic ===

function modifyText (command, defaultUi, value) {
    document.execCommand(command, defaultUi, value)
};

optionButtons.forEach(button => {
    button.addEventListener('click', function() {
        modifyText(button.id, false, null)
    })
});

advanceOptionButton.forEach(button => {
    button.addEventListener('change', function() {
        modifyText(button.id, false, button.value)
    })
})

linkButton.addEventListener('click', function () {
    let userLink = prompt('Enter Your URL');
    if(/http/i.test(userLink)){
        modifyText(linkButton.id, false, userLink)
    }
    else {
        userLink = "http://" + userLink;
        modifyText(linkButton.id, false, userLink)
    }
})


function highlighter (className, needsRemoval) {
    className.forEach(button => {
        button.addEventListener('click', function(){
            if(needsRemoval) {{
                let alreadyActive = false;
    
                if(button.classList.contains('active')){
                    alreadyActive = true;
                }
                highlighterRemover(className)
                if(!alreadyActive){
                    button.classList.add('active')
                }
            }}
            else {
                button.classList.toggle('active')
            }
        })
    })
};


function highlighterRemover (className) {
    className.forEach(button => {
        button.classList.remove('active');
    });
};





window.onload = initializer();