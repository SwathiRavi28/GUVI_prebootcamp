var initial = 10;
var display_string = "";
function timer(init, setTimeout) {
    alert('Starting our timeout ');
    setTimeout(init);
}

//first call
timer(initial, function (init) {
    display_string = display_string + " " + initial;
    document.getElementById('timer').innerHTML = display_string;
    setTimeout(() => {
        console.log(initial--);
        display_string = display_string + " " + initial;
        document.getElementById('timer').innerHTML = display_string;
        setTimeout(() => {
            console.log(initial--);
            display_string = display_string + " " + initial;
            document.getElementById('timer').innerHTML = display_string;
            setTimeout(() => {
                console.log(initial--);
                display_string = display_string + " " + initial;
                document.getElementById('timer').innerHTML = display_string;
                setTimeout(() => {
                    console.log(initial--);
                    display_string = display_string + " " + initial;
                    document.getElementById('timer').innerHTML = display_string;
                    setTimeout(() => {
                        console.log(initial--);
                        display_string = display_string + " " + initial;
                        document.getElementById('timer').innerHTML = display_string;
                        setTimeout(() => {
                            console.log(initial--);
                            display_string = display_string + " " + initial;
                            document.getElementById('timer').innerHTML = display_string;
                            setTimeout(() => {
                                console.log(initial--);
                                display_string = display_string + " " + initial;
                                document.getElementById('timer').innerHTML = display_string;
                                setTimeout(() => {
                                    console.log(initial--);
                                    display_string = display_string + " " + initial;
                                    document.getElementById('timer').innerHTML = display_string;
                                    setTimeout(() => {
                                        console.log(initial--);
                                        display_string = display_string + " " + initial;
                                        document.getElementById('timer').innerHTML = display_string;
                                        setTimeout(() => {
                                            console.log(initial--);
                                            display_string = display_string + " " + initial;

                                            alert('Completed 😃')

                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000);
    }, 1000);
});