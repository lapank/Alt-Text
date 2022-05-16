// Alt text should have:
const punctuationList =['.','!','?'];

const firstPerson = ['I','me','my','mine','we','us','our','ours'];
const secondPerson = ['you','yall','ya\'ll','your','yours','you\'re'];
const thirdPerson = ['it', 'its', 'itself', 'they', 'them', 'their', 'theirs', 'themselves'];


// Alt text recommendations:
const colorList = ['red', 'orange', 'yellow', 'green', 'blue','purple', 
                  'pink', 'brown', 'gold', 'bronze', 'silver', 'black', 'white'];
const planeParts = ['wing', 'body', 'tail', 'wheels', 'engine', 'nose', 'flightdeck'];
const shapes = ['circle', 'triangle', 'rectangle', 'oval', 'square', 'pentagon', 
                  'hexagon', 'octagon', 'cube', 'cone', 'cylinder', 'sphere'];
const emotions = ['happy', 'sad', 'angrey', 'solumn', 'serious'];
const positions = ['left', 'right', 'top', 'bottom', 'around', 'under', 'below', 
                  'behind', 'beside', 'between', 'after', 'across', 'inside', 
                  'near', 'on', 'outside', 'forward', 'backward', 'side', 'top'];
const size = ['big', 'small', 'tall', 'wide', 'short', 'large', 'heavy', 
            'light', 'thin', 'thick', 'long', 'narrow', 'meters', 'feet', 'inches', 'centemeters'];
const medium = ['radiograph', '3D model', 'drawing, painting', '35mm slide', 'print', 'scientific illustration'];
const condition = ['rips', 'tears', 'flaking', 'marks', 'weathered', 'shiny'];
const age = ['young adult', 'adult', 'child', 'infant'];

// Alt text might have:
const pronouns = ['he', 'him', 'his', 'she', 'her', 'hers', 'man', 'woman', 'lady', 'gentlemen', 'guy', 'gal', 'man', 'woman'];

// Alt text should not have:
const noNoWords = ['elderly', 'image of', 'picture of', 'I', "we", 'our', 'my', 'me']; /* poster text*/
const tenseList = ['ing', 'been', 'will', 'was', 'had'];

const complexColorList = ['fuchsia', 'mauve','beige', 'vermillion','taupe', 'teal', 'sienna', 'khaki', 'cyan', 
'crimson', 'cobalt', 'chartreuse', 'cerulean', 'cadmium', 'umber', 'azure', 'burgundy', 'indigo', 'magenta', 'sepia', 'scarlet', 'ultramarine' ];


//Capital no space before, space after.
//No capital space before and after.

//.concat, .forEach, .map, .push

const firstPersonSpaces = addSpaces(firstPerson);
const secondPersonSpaces = addSpaces(secondPerson);
const thirdPersonSpaces = addSpaces(thirdPerson);

const firstPersonCapital = addCapital(firstPerson);
const secondPersonCapital = addCapital(secondPerson);
const thirdPersonCapital = addCapital(thirdPerson);

const comboFirstArrays = combineArrays(firstPersonSpaces, firstPersonCapital);
const comboSecondArrays = combineArrays(secondPersonSpaces, secondPersonCapital);
const comboThirdArrays = combineArrays(thirdPersonSpaces, thirdPersonCapital);

console.log(comboThirdArrays);
console.log(comboFirstArrays);
console.log(comboSecondArrays);

function addSpaces(array){
    return (array.map(x => (' ' + x + ' ')));
}

function addCapital(array){
    return (array.map(x => (x[0].toUpperCase() + x.substring(1) + ' ')));  
}

function combineArrays(arrayOne, arrayTwo){
    return (arrayOne.concat(arrayTwo));
}