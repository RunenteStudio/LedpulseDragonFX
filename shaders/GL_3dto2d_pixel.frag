// Example Pixel Shader

uniform vec2 res;

out vec4 fragColor;
void main()
{
	// vec4 color = texture(sTD2DInputs[0], vUV.st);
	vec2 pixel = vUV.st * res;
	vec4 color = vec4(0,0,0,1);
	
	if(pixel.x > 40 && pixel.x < 920 && pixel.y < 810 && pixel.y > 150)
	{
		float i = floor((pixel.x - 40) / 40);
		float j = floor((res.y - pixel.y - 150) / 60);
		
		float iUV = mod((pixel.x - 40), 40) / 40;
		float jUV = 1 - mod((res.y - pixel.y - 150), 60) / 60;


		// 22 ancho %3 - 11 alto %2
		// 40 ancho	 60 alt0
		
		if( mod(i,3) == 0 && mod(j,2) == 0 )
		{
			float index = floor(i / 3) + floor(j / 2) * 8 - 2;
			if(index >= 0 && index < 40)
			{
				color.xyz = vec3(texture(sTD3DInputs[0], vec3(iUV, jUV, index/40)));
			}
			
			//color = vec4( floor(i / 3) * .1, floor(j / 2) * .1, 0, 1);
		}
	}
		
	fragColor = TDOutputSwizzle(color);
}
