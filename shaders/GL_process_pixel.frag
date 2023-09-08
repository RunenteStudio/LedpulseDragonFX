// Example Pixel Shader

// D Brain (Jason Rampe) /4/2/M
// 445 (Jason Rampe) 4/4/5/M
// Amoeba (Jason Rampe) 9-26/5-7,12-13,15/5/M
// Architecture (Jason Rampe) 4-6/3/2/M
// Builder 1 (Jason Rampe) 2,6,9/4,6,8-9/10/M
// Builder 2 (Jason Rampe) 5-7/1/2/M
// Clouds 1 (Jason Rampe) 13-26/13-14,17-19/2/M
// Clouds 2 (Jason Rampe) 12-26/13-14/2/M
// Construction (Jason Rampe) 0-2,4,6-11,13-17,21-26/9-10,16,23-24/2/M
// Coral (Jason Rampe) 5-8/6-7,9,12/4/M
// Crystal Growth (Jason Rampe) 1 0-6/1,3/2/N
// Crystal Growth (Jason Rampe) 2 1-2/1,3/5/N
// Diamond Growth (Jason Rampe) 5-6/1-3/7/N
// Expanding Shell (Jason Rampe) 6,7-9,11,13,15-16,18.6-10,13-14,16,18-19,22-25/5/M
// More Structures (Jason Rampe) 7-26/4/4/M
// Pulse Waves (Jason Rampe) 3/1-3/10/M
// Pyroclastic (Jason Rampe) 4-7/6-8/10/M
// Sample 1 (Jason Rampe) 10-26/5,8-26/4/M
// Shells (Jason Rampe) 3,5,7,9,11,15,17,19,21,23-24,26/3,6,8-9,11,14-17,19,24/7/M
// Single Point Replication (Jason Rampe) /1/2/M
// Slow Decay 1 (Jason Rampe) 13-26/10-26/3/M
// Slow Decay 2 (Jason Rampe) 1,4,8,11,13-26/13-26/5/M
// Spiky Growth (Jason Rampe) 0-3,7-9,11-13,18,21-22,24,26/13,17,20-26/4/M
// Stable Structures (Evan Wallace) 13-26/14-19/2/M
// Symmetry (Jason Rampe) /2/10/M
// von Neumann Builder (Jason Rampe) 1-3/1,4-5/5/N


uniform vec3 res;
uniform vec3 movement;
uniform float opacity;

uniform float maxIntensidad;

out vec4 fragColor;

vec4 blOver(vec4 a, vec4 b)
{	
	float alpha = a.a + b.a * (1 - a.a);
	vec3 color = a.rgb + b.rgb * (1 - a.a);

	return vec4(color, alpha);
}


void main()
{
	vec3 offset = 1 / res;

	
	vec4 a = texture(sTD3DInputs[0], vUV.xyz);
	vec4 b = texture(sTD3DInputs[1], vUV.xyz + movement);
	float neighbors = 0;
	
	vec4 promedio = vec4(0);
	
	for(float i = -1; i < 2; i++)
	{
		for(int j = -1; j < 2; j++)
		{
			for(int k = -1; k < 2; k++)
			{
				vec3 coord = vec3(i, j, k);
				float intensity = texture(sTD3DInputs[2], vec3(0.5) + coord / 3).x;
				promedio += texture(sTD3DInputs[1], vUV.xyz + movement + offset * coord).x * intensity;

				if(i == 0 && j == 0 && k == 0)
					continue;
				
				neighbors += step(0.01, texture(sTD3DInputs[1], vUV.xyz + movement + offset * coord).x);

			}
	
		}
	}
	
	promedio /= maxIntensidad;
	b.xw = promedio.xw * opacity; 

	// Clouds 1 (Jason Rampe) 13-26/13-14,17-19/2/M
	
	//b.y = neighbors;
	
	
	vec4 blend = blOver(b,a);

	fragColor = TDOutputSwizzle(blend);
}
