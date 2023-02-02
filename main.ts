// ON BUTTON A PRESSED
// Text "GETREADY!" scrolls
// For Loops starts a count down from 
// 3 and shows each number
// Then a jumping jack image appears on the screen
input.onButtonPressed(Button.A, function () {
    basic.showString("GETREADY!")
    for (let index = 0; index <= index; index++) {
        if (3 - index > 0) {
            basic.showNumber(3 - index)
        } else {
            images.createBigImage(`
                # . # . # . . # . .
                . # # # . . # # # .
                . . # . . # . # . #
                . # . # . . # . # .
                # . . . # . # . # .
                `).scrollImage(5, 400)
        }
    }
})
// Rubric
// - Part of the message scrolls
// - Uses letters, numbers, or symbols
// - Displays at least one image
// - Displays at least one animation (a sequence of images to show movement)
// 
// ON START 
// An Arrow shape slowly appears from X4Y2 by scrolling towards Button A. 
for (let index = 0; index < 1; index++) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        . . . . #
        . . . # .
        . . # . #
        . . . # .
        . . . . #
        `)
    basic.showLeds(`
        . . . # .
        . . # . .
        . # . # #
        . . # . .
        . . . # .
        `)
    basic.showLeds(`
        . . # . .
        . # . . .
        # . # # #
        . # . . .
        . . # . .
        `)
    basic.showLeds(`
        . # . . .
        # . . . .
        . # # # .
        # . . . .
        . # . . .
        `)
    basic.showLeds(`
        # . . . .
        . . . . .
        # # # . .
        . . . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
