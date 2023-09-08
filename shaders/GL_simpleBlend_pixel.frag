uniform vec3 res;
uniform float opacity;

out vec4 fragColor;

vec4 blOver(vec4 a, vec4 b)
{	
	float alpha = a.a + b.a * (1 - a.a);
	vec3 color = a.rgb + b.rgb * (1 - a.a);

	return vec4(color, alpha);
}

vec4 blAdd(vec4 a, vec4 b)
{	
	return a + b;
}

vec4 blMultiply(vec4 a, vec4 b)
{	
	return a * b;
}

void main()
{
	vec3 offset = 1 / res;
	
	vec4 a = texture(sTD3DInputs[0], vUV.xyz);
	vec4 b = texture(sTD3DInputs[1], vUV.xyz);
	
	//vec4 blend = blOver	(a,b * opacity);
	//vec4 blend = blAdd	(a,b * opacity);
	vec4 blend = blMultiply	(a,b * opacity);

	fragColor = TDOutputSwizzle(blend);
}
