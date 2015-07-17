#V ::: a Vector Library

This is a simple but effective vector powered class that enables functional transforms onto a spawned 2D vector. The combination of functionality this lib has been conjured from is the inspirational minds that of Seb-Li Desile and the Nature of Code.

===

Each Object comes with many methods attached. The prime use case is that a Vector gets created for a directional purpose, and gets applied to other vectors in chains, so that the end 'location' vector will be drawn on the canvas.

	var particle = new V(),
		velocity = new V(10,3);
		
	function onframe(){
		particle.add(velocity);
	}
	// and away the particle will travel in the direction of the velocity vector
	
###V methods

