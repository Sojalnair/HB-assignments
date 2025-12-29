function variableScopeExample() {
    if (true) {
        let letVar = "I am a let variable";
        const constVar = "I am a const variable";
        var varVar = "I am a var variable";

        console.log(letVar);
        console.log(constVar);
        console.log(varVar);
    }


    console.log(varVar);
}

variableScopeExample();