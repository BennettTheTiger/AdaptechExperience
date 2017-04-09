
// declare our variables
var seriously, // the main object that holds the entire composition
	chroma,
	targetRef,
	target; // a wrapper object for our target canvas


seriously = new Seriously();
target = target = seriously.target('#myCanvas');
chroma = seriously.effect('chroma');

var videoSource = seriously.source('camera', {
        video: {
            mandatory: {
                minWidth: 1280,
                minHeight: 720,
                maxWidth: 1280,
                maxHeight: 720
            }
        }
    });



// connect all our nodes in the right order
chroma.source = videoSource;
target.source = chroma;
seriously.go();


seriously.go();