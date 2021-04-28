import turtle

# Turtle settings
t = turtle.Turtle()
canvas = turtle.Screen()
t.speed(0)
t.ht()

def square (s,length,depth):
    # Go to the bottom left point of the square
    t.pu()
    t.goto(s[0],s[1])
    t.pd
    # Draw the square
    t.begin_fill()
    t.goto(s[0],s[1]+length)
    t.goto(s[0]+length,s[1]+length)
    t.goto(s[0]+length,s[1])
    t.goto(s[0],s[1])
    t.end_fill()

    if depth > 0:   # Stop condition for recursivity
        square([s[0]+length*1.33,s[1]-length*0.66],length/3,depth-1)    # Bottom right
        square([s[0]+length*1.33,s[1]+length/3],length/3,depth-1)       # Middle right
        square([s[0]+length*1.33,s[1]+length*1.33],length/3,depth-1)    # Top right
        square([s[0]+length*0.33,s[1]+length*1.33],length/3,depth-1)    # Top
        square([s[0]-length*0.66,s[1]+length*1.33],length/3,depth-1)    # Top left
        square([s[0]-length*0.66,s[1]+length/3],length/3,depth-1)       # Middle left
        square([s[0]-length*0.66,s[1]-length*0.66],length/3,depth-1)    # Bottom left
        square([s[0]+length*0.33,s[1]-length*0.66],length/3,depth-1)    # Bottom


l = 180
square([-l/2,-l/2],l,3)     # Number of squares = 1+8^depth if depth >= 1
                            # Number of squares = 1 if depth < 1

canvas.exitonclick()    # The program will end when you click on the turtle prompt
