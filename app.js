const people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
const alphabet = "abcdefghijklmnopqrstuvwxyz"

function forception(people, alphabet) {
  let newArr = []

  for (var i = 0; i < people.length; i++) {
    let modifiedPeople = (people[i] + ":").split().join()
    newArr.push(modifiedPeople)
    for (var j = 0; j < alphabet.length; j++) {
      let modifiedAlphabet = alphabet[j].toUpperCase().split().join()
      newArr.push(modifiedAlphabet)
    }
  }
  console.log(newArr)
}

console.log(forception(people, alphabet))


/// push