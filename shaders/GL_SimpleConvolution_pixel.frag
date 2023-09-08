uniform float radio;
uniform float seed;
uniform float mode;
out vec4 fragColor;

float random (vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233)))* 43758.5453123);
}

void main()
{
	vec3 pos = vec3(vUV.xyz);
	vec3 ref = vec3(0.5, 0.5, 0.5);
	
	float dist = 0; 

	if(mode == 0){

		dist = (radio - clamp(distance(pos, ref), 0, radio)) / radio;

		if(dist < 0){
			dist = 0;
		}

	} else{

		dist = -1 + random(vec2(seed + vUV.x + vUV.z, seed + vUV.y + vUV.z)) * 2;
	
	}
			
	vec4 color = vec4(dist, 0, 0, dist);

		
	fragColor = TDOutputSwizzle(color);
}
