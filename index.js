const intro = introJs();

intro.setOptions({
    steps: [
        {
            intro: 'Bem vindo ao nosso website! Vamos fazer um tour'
        },
        {
            element: '#step-one',
            intro: 'Por favor leia isto! É muito importante.'
        }
    ]
})

intro.start();