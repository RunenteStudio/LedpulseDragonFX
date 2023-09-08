// Example Pixel Shader
uniform float mode;
out vec4 fragColor;

vec3 hsl2rgb( in vec3 c )
{
    vec3 rgb = clamp( abs(mod(c.x * 6.0 + vec3(0.0,4.0,2.0),6.0)-3.0)-1.0, 0.0, 1.0 );

    return c.z + c.y * (rgb-0.5)*(1.0-abs(2.0*c.z-1.0));
}


vec4 blOver(vec4 a, vec4 b)
{	
	float alpha = a.a + b.a*(1 - a.a);
	vec3 color = a.rgb + b.rgb * (1 - a.a);

	return vec4(color, alpha);
}

void main()
{
	vec4 a = vec4(0,0,0,.1);
	vec4 b = texture(sTD3DInputs[0], vUV.xyz);
	
	float life;
	
	if(mode == 0)
		life = b.x;
	else if (mode == 1)
		life = b.y;
	else if (mode == 2)
		life = b.z;
	
	
	////----
	vec4 color = vec4( hsl2rgb(vec3( 0.8 + life * 0.4, 1, life * .4)), 1);
	//vec4 color = vec4( hsl2rgb(vec3( mod(0.8 + life * 0.3, 1), 1, life * .7)), 1);
	//vec4 color = vec4( hsl2rgb(vec3( mod(0.02 + life * 0.15, 1), 1, life * .6)), 1);


	if(life < 0.01)
		color = vec4(0);
			
	vec4 blend = blOver(a,color);

	fragColor = TDOutputSwizzle(blend);
}
