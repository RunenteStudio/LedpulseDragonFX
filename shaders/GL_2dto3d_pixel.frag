// Example Pixel Shader

uniform vec3 res;

out vec4 fragColor;
void main()
{

	vec3 pixel = vec3(vUV.x * 40, vUV.y * 60, vUV.z * 40);

	vec4 color = vec4(0,0,0,1);
	
	vec2 pixelMult = vec2(1./1280., 1./960.);
	
	float offx = floor((mod(pixel.z + 2, 8))*120)-60;
	float offy = floor((floor((pixel.z + 2) / 8))*120);
	
	float i = pixelMult.x * (pixel.x + 40.0 + offx);
	float j = pixelMult.y * (960 + pixel.y - 210 - offy);

	color.xyz = texture(sTD2DInputs[0], vec2(i, j)).xyz;
	
	fragColor = TDOutputSwizzle(color);
}
