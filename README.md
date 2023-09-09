# Ledpulse Dragon FX


Custom GLSL nodes for Touchdesigner 3D Textures. Made to be used with the Dragon O2 volumetric screen by Ledpulse in a 4x4 module array.

## Conversion

### 2D to 3D

This shader turns a video or image made with the Ledpulse pipeline into a 3D Texture to use inside Touchdesigner. This allows easier tridimensional calculations for movement, speed and diffusion. Using a 3D texture also enables the use of the Feedback node.

![2DTO3D](https://github.com/RunenteStudio/LedpulseDragonFX/assets/95254298/47a8ead9-f537-4824-9c0a-f3662fe19a87)


### 3D to 2D

This turns a 3D texture into a 2D image mapped for the Dragon O2.

![3DTO2D](https://github.com/RunenteStudio/LedpulseDragonFX/assets/95254298/82c74afa-4b38-49b5-b1d8-80ba251f504d)


## Generation

With this, you can create gradients and textures like grain or noise to give some complexity to the graphics. You can blend this textures with the original content using the GL_simpleBlend shader.

### Pattern

Creates a 3D Texture gradient based on a point (radial), an axis (linear) or a vector.

![Sep-08-2023 09-38-40](https://github.com/RunenteStudio/LedpulseDragonFX/assets/95254298/0479af4e-712c-42a8-822f-82b5134350e6)
![Sep-08-2023 09-40-17](https://github.com/RunenteStudio/LedpulseDragonFX/assets/95254298/06f85ce4-af01-4d8b-bcac-f5b444566669)
![Sep-08-2023 09-40-43](https://github.com/RunenteStudio/LedpulseDragonFX/assets/95254298/7c65a229-b09d-4e7b-a0e1-d2ae7c7b5490)


### Noise 4D

[Patricio Gonzalez Vivo implementation](https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83#simplex-noise) of simplex noise made by Ian McEwan with some modifications to sync or offset the 3 color channels creating various effects.


https://github.com/RunenteStudio/LedpulseDragonFX/assets/95254298/aaf9a6f0-fa25-4d04-a81e-1206c5fb49dc


## Processing

Nodes used to add more effects to the 3D texture.

### Process

This node blurs and comps 3D textures. It’s main use was to be mixed with the Feedback node to give the geometries a 3D trail and glow. In future iterations the blur method is intended to be used as a Moore neighborhood for 3D cellular automata.
The red channel outputs the expected result while the green channel shows the number of neighbors the pixel has, creating some other interesting effects, similar to a tridimensional fresnel.



https://github.com/RunenteStudio/LedpulseDragonFX/assets/95254298/4c35d831-84ae-4688-b1d9-ad9988070850



### Render

This node uses the [HSL to RGB code by Iñigo Quilez](https://www.shadertoy.com/view/MsS3Wc) to give color to the processed image.

### Simple blend

Inside the code there’s methods for 3 blending modes:
+ Over
+ Add
+ Multiply



https://github.com/RunenteStudio/LedpulseDragonFX/assets/95254298/bf948073-18e9-4d48-84df-6094e7b5d960


