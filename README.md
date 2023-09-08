# Ledpulse Dragon FX

Custom GLSL nodes for Touchdesigner 3D Textures. Made to be used with the Dragon O2 volumetric screen by Ledpulse in a 4x4 module array.

## Conversion

### 2D to 3D

This shader turns a video or image made with the Ledpulse pipeline into a 3D Texture to use inside Touchdesigner. This allows easier tridimensional calculations for movement, speed and diffusion. Using a 3D texture also enables the use of the Feedback node.

### 3D to 2D

This turns a 3D texture into a 2D image mapped for the Dragon O2.

## Generation

With this, you can create gradients and textures like grain or noise to give some complexity to the graphics. You can blend this textures with the original content using the GL_simpleBlend shader.

### Pattern

Creates a 3D Texture gradient based on a point (radial), an axis (linear) or a vector.

### Noise 4D

[Patricio Gonzalez Vivo implementation](https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83#simplex-noise) of simplex noise made by Ian McEwan with some modifications to sync or offset the 3 channels creating various effects.

## Processing

Nodes used to add more effects to the 3D texture.

### Process

This node blurs and comps 3D textures. It’s main use was to be mixed with the Feedback node to give the geometries a 3D trail and glow. In future iterations the blur method is intended to be used as a Moore neighborhood for 3D cellular automata.
The red channel outputs the expected result while the green channel shows the number of neighbors the pixel has, creating some other interesting effects, similar to a tridimensional fresnel.

### Render

This node uses the [HSL to RGB code by Iñigo Quilez](https://www.shadertoy.com/view/MsS3Wc) to give color to the processed image.

### Simple blend

Inside the code there’s methods for 3 blending modes:
+Over
+Add
+Multiply