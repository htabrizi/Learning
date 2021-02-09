# import colorgram
#
# colors= colorgram.extract('image.jpg',30)
# color_rgb=[]
# print(colors)
# for color in colors:
#     r= color.rgb.r
#     g= color.rgb.g
#     b= color.rgb.b
#     new_rgb=(r,g,b)
#     color_rgb.append(new_rgb)
# print(color_rgb)
from turtle import Turtle, Screen
import random

tim = Turtle()
color_list = [(46, 34, 24), (130, 96, 59), (190, 156, 109), (234, 203, 133), (248, 221, 154), (167, 132, 73),
              (56, 38, 49), (83, 70, 32), (101, 72, 98), (87, 50, 74), (97, 78, 133), (230, 231, 246), (99, 49, 39),
              (244, 225, 240), (179, 139, 165), (180, 103, 88), (28, 34, 47), (154, 154, 184), (249, 254, 252),
              (27, 34, 27), (172, 97, 129), (188, 180, 219), (234, 164, 196), (63, 55, 86), (122, 114, 155),
              (75, 91, 80), (216, 182, 172), (17, 165, 228), (145, 192, 115), (155, 224, 121)]
n=True
tim.home()
tim.shapesize(None)
while n:
    for _ in range(10):
        tim.color = (random.choice("color_list"))
        tim.dot()
        tim.penup()
        tim.forward(10)
        tim.pendown()
        _+=1
            if _=100:

tim.heading()

screen = Screen()
screen.exitonclick()
