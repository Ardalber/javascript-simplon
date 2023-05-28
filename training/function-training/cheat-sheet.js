let nombre = 6;

function testIf() {
  if (nombre > 3) {
    console.log("test IF réussi");
  }
}
testIf();
// FOR// FOR// FOR// FOR// FOR// FOR// FOR// FOR// FOR// FOR// FOR// FOR//

let array = ["coucou", "les", "copains", "salut"];

function testFor() {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
  }
}

testFor();

// ELSEIF--ELSEIF--ELSEIF--ELSEIF--ELSEIF--ELSEIF--ELSEIF

function testElseIf() {
  if (nombre > 6) {
    console.log("supérieur à 6");
  } else if (nombre < 6) {
    console.log("inférieur à 6");
  } else {
    console.log("égal à 6");
  }
}
testElseIf();

function testForEach() {
  array.forEach((element) => {
    console.log("test réussi");
  });
}
testForEach();
// whilewhilewhilewhilewhilewhilewhilewhilewhilewhilewhile
function testWhile() {
  while (nombre > 0) {
    console.log((nombre -= 1));
  }
}
