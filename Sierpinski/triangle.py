import turtle

# Turtle settings
t = turtle.Turtle()
canvas = turtle.Screen()
t.speed(10)
t.ht()

baseTriangle = [[-175,-125],[0,175],[175,-125]]

def mid (a,b):
    return ((a[0]+b[0])/2,(a[1]+b[1])/2)    # Mid point between two points

def triangle (points, depth):
    # Go to the bottom left point
    t.pu()
    t.goto(points[0][0],points[0][1])
    t.pd()
    # Draw the triangle
    t.goto(points[1][0],points[1][1])
    t.goto(points[2][0],points[2][1])
    t.goto(points[0][0],points[0][1])

    if depth > 0:    # Stop condition for recursivity
        # New triangles to draw
        p0 = [points[0],mid(points[0],points[1]),mid(points[0],points[2])]
        p1 = [mid(points[1],points[0]),points[1],mid(points[1],points[2])]
        p2 = [mid(points[2],points[0]),mid(points[2],points[1]),points[2]]

        # Draw the new triangles
        triangle(p0,depth-1)
        triangle(p1,depth-1)
        triangle(p2,depth-1)

triangle(baseTriangle,5)
canvas.exitonclick()    # The program will end when you click on the turtle prompt
