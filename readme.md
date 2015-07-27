#V ::: a Vector Library

This is a simple but effective vector powered class that enables functional transforms onto a spawned 2D vector. The combination of functionality this lib has been conjured from is the inspirational minds that of Seb-Lee Desile and the Nature of Code.

===

Each Object comes with many methods attached. The prime use case is that a Vector gets created for a directional purpose, and gets applied to other vectors in chains, so that the end 'location' vector will be drawn on the canvas.

	var particle = new V(),
		velocity = new V(10,3);
		
	function onframe(){
		particle.add(velocity);
	}
	// and away the particle will travel in the direction of the velocity vector
	

The principal idea to involve varying forces and velocities is effectively keep each force as its own unique V instance; attached to their parent vector object.

Forces are vectors, and they disrupt each other by culminating to a velocity, which is then added to the current location vector.

Base forces can be added at instantiation.

	var vector = new V(0,0,{
		mass: 5,
		origin: new V(100,100)
		acceleration: new V(),
		velocity: new V()
	});

**nb.** there is a difference between vectors that need to be changed over time, to those that need to be reset on each frame. An example of this would be a target path, or the mouse object. This is often described as the `direction`.

	var directionToMouse = V.sub(mouse, vector);
	
This new Vector returned can now be altered to influence the vector we are currently thinking about in the code. It is new each frame, because it is a varying constant! Also Direction is to do with angles, and not velocities.

Because it is a raw vector with _no influence_ then a basic distance calculation can be withdrawn from it, with no interference of other forces.

	var distToMouse = Math.sqrt(directionToMath.mag());
	
**normalising** is the notion to bring insane numbers into usable factors no larger than 1. By normalising lots of different forces, it brings them all into the same ballpark, which then allows you to add them to the main vector's total velocity effectively within a controlled small increment, which allows for visual animation at 60fps to be consumed for a humans experience.
	
###V methods

* `info`
* `create`
* `clone`
* `reset`
* `feed`
* `add`
* `sub`
* `multi`
* `div`
* `scale`
* `mag`
* `dir`
* `limit`
* `normalise`
* `dot`
* `reverse`
* `heading`
* `rotate`

---

###Principals

* **Oscilation rate - Frequency**


		2PI * ( framerate / period )
		
	2 PI is 360, the oscilaion loop. Framerate is the increment of each frame, which you divide by the Period (ie 60ms for 1 second) by which you want each oscilation to occur by.
	
	Multiply this by **amplitude** the fctor you wish to oscilate around by.
	
		amplitude * cos( 2PI * ( framete / period) )

---
		
*	**`Magnitude`**

	The root of the vector squared. This makes a positive direction vector that calculates distance of travel.
	
*	**Distance**
	
	By subtracting the magnitudes of one magnitude to another will reveal the distance between two vectors.
	
*	**Force**

	`F = M * A` force = mass * acceleration

