import turtle
import random

turtle.colormode(255)	# Need this to use RGB color

def randomPenColor (t):
	# Generate a random RGB color
	rgb = [random.randint(0,255) for i in range(3)]
	t.color(rgb[0], rgb[1], rgb[2])

def branch (length, angle, penWidth, t):
	randomPenColor(t)
	if length > 5:	# Need a stop condition for recursivity
		t.width(penWidth)
		t.fd(length)
		t.rt(angle)
		branch(int(length*0.67),angle,penWidth-1,t)
		t.lt(angle*2)
		branch(int(length*0.67),angle,penWidth-1,t)
		t.rt(angle)
		t.pu()
		t.bk(length)
		t.pd()


def main ():
	t = turtle.Turtle()
	canvas = turtle.Screen()
	canvas.bgcolor('black')
	# Move the pencil to the bottom
	t.ht()
	t.lt(90)
	t.pu()
	t.speed(0)
	t.backward(280)
	t.pd()
	# Starts the recursivity
	branch(150,25,9,t)
	canvas.exitonclick()	# The program will end when you click on the turtle prompt


if __name__ == '__main__':
	main()
