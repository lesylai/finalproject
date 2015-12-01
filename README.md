# Final Project

## Instructions

This repository is a stub for your final project. Fork it as a template for your project, and develop your code in the forked repository. For details on how to fork and turn in the project, see section 3 of the github education  [documentation](https://education.github.com/guide/forks). After you fork the repository, please enable the issue tracker in the repository settings so that others in the class (including the professor) can provide feedback.

Expand on the readme questions below to provide an overview of the goals, background, and challenges for the final project. You can delete the questions as you write text that answers them, or leave the prompts in place. You can also delete this instruction section of you like.

## Introduction

This is a final project for the [Interacting with Data](https://github.com/Brown-BIOL2430-S04-Fall2015/syllabus) seminar in fall 2015. This project includes an interactive visualization that illustrates research findings about color-emotion associations. 

You can access the code [here](https://github.com/lesylai/finalproject.git)

## The data
Pilot data from behavioral experiment. Behavioral data are re-interpreted and represented as color-coordinates. 


## Background

In the world of digital monitors, colors are made of numerical values that represent a color's relative location in the color space. Human color perception is described as changes in the three axises as follows: hue, lightness and chroma. Unlike color naming, properties of the perceived colors vary along these three axises in a non-discrete manner. However, people often think of colors as [categorical variables](http://www.pnas.org/content/107/19/8877/F1.expansion.html)(e.g. blue is sad and yellow is happy). 

This can be misleading as research on color associations (e.g. emotion, semantics) found that hue has relatively little influence on viewers' color cognition. The goal of this project is to visualize research findings on color perception in ways that encourage viewers to perceive colors as a continuous variable moving along the three critical axises. To do so, I re-interpreted behavioral data (e.g. ratings)by means of the stimulus itself i.e. color, and map the results directly onto colors with respect to saturation, lightness and hue. 


## This project

### Mapping of data to aesthetics

The colors are not only aesthetic attributes for this project, but also data themselves. I hope mapping numbers directly onto the percepts of colors can give viewers some intuition about the continuity in colors rather than discrete categories. 

### Filtering

For this project, data are filtered (translated) into viusal representations such that the actual data (i.e. emotional ratings) were embedded in the visual features (colors) completely. This approach serves the following objectives: (1) allowing viewers have online validation of the findings while interacting (viewing) with the data (colors) and (2) revealing the main findings of the study by navigating viewers through the colors placed in the designated color space. 

### Motion

Motion (size transition) is used to signal the elements that correspond to the selected "mood" within the color space. The size-change induces a smooth pop-out effect that allows simutaneous perceptual grouping of the elements. Perceptual grouping further diminishes the differences among hues, which corresponds nicely with the emotion data (that is, hue has little effect on people's emotional ratings on colors'). 

### Perspective

The perspective (e.g. mapping) in this project is essentially hard coded (i.e. which moods map onto which colors). However, the hope is that through interacting with the visualization, viewers will be able to explore colors in various dimensions by the means of mapping them onto data (e.g. emotion ratings).   

## Assessment

The standard approach to visualze experimental data in the field is to plot data (e.g. ratings, color appearance, etc.) as a function of hue. While this approach is consistent with standard scientific data-plotting, it has  a strong bias toward hue based approach to color perception.  

Given that color is the agent of the experimental stimulus, the visualization presented here translates and displays behavioral data directly in the context of colors. Further, the visualization recreates a "customized" color space that illustrates the main resutls of the study. This approach provides more intuitive access to the behavioral data and allow viewers to evaluate our study results online because they are viewing the colors simutaneously. 

Limitations: 
The new approach is probably hard to be generalized to other data visualziation as it requires direct link between visual features and the data agents. 

Furture Directions: 
For the purpose of visualizing color-cognition research, this new approach may have exciting applications that can make color research more accessible for public. For example, displaying what we learn from color science in physical space (see [Museum of Feelings] (https://www.themuseumoffeelings.com/))  


