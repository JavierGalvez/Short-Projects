
""" Conway's Game of Life """

import sys
import time
import random


class board ():
	def __init__ (self, length, width):
		self.map = []
		self.length = length
		self.width = width

		for i in range(self.length):
			self.map.append([])
			for j in range(self.width):
				self.map[i].append(0)	# Everything set to '0' (dead cell)

	def __str__ (self):
		string = ''
		for i in range(0,self.length):
			for j in range(0,self.width):

				# 1 = living cell / 0 = dead cell

				if self.map[i][j] == 1:
					string += 'O'
				else:
					string += '.'
			string += '\n'
		return string

	def randomize (self, total=5000):
		for g in range(0,total):
			i = random.randint(0,self.length-1)
			j = random.randint(0,self.width-1)
			self.map[i][j] = 1


	def neighbours (self, x, y):
		neighbour = -1

		# Neighbour cells are in a 3x3 square with our cell as its center

		# Some examples:

		# . . .   O . .   . O .
		# . . .   . O O   . O .
		# . . .   . . .   . O .

		for i in range(x-1,x+2):
			for j in range(y-1,y+2):
				if i >= 0 and i < self.length:
					if j >= 0 and j < self.width:
						if self.map[i][j] == 1:
							neighbour += 1
		if self.map[x][y] == 0:
			neighbour += 1
		return neighbour


	def next (self):
		new_board = board(self.length, self.width)
		for i in range(0,self.length):
			for j in range(0,self.width):
				n = self.neighbours(i,j)

				# Living cells
				# Each cell with less than 2 neighbours dies, as if by solitude
				# Each cell with more than 3 neighbours dies, as if by overpopulation
				# Each cell with 2 or 3 neighbours survives

				if self.map[i][j] == 1:
					if (n < 2 or n > 3):
						new_board.map[i][j] = 0
					else:
						new_board.map[i][j] = 1

				# Dead cells
				# Each cell with 3 neighbours revives

				if self.map[i][j] == 0 and n == 3:
					new_board.map[i][j] = 1
		return new_board

def main ():
	game = board(40,145)
	game.randomize()
	i = 1
	while i >= 0:
		sys.stdout.write('\033[H')  # move to the top
		sys.stdout.write('\033[J')  # clear the screen
		print ('Generation: ', i)
		print (game)
		time.sleep(0.5)
		game = game.next()
		i += 1

if __name__ == '__main__':
	main()
