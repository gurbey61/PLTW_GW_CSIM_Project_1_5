// Rubric
// - Part of the message scrolls
// - Uses letters, numbers, or symbols
// - Displays at least one image
// - Displays at least one animation (a sequence of images to show movement)
// 
// ON START 
// An Arrow shape slowly appears from X4Y2 by scrolling towards Button A. 
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
basic.forever(function () {
    if (input.lightLevel() > 128) {
        basic.showString("GETREADY!")
    } else {
        images.createBigImage(`
            # . # . # . . # . .
            . # # # . . # # # .
            . . # . . # . # . #
            . # . # . . # . # .
            # . . . # . # . # .
            `).scrollImage(5, 400)
    }
})
