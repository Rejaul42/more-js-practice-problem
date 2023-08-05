const names = ['abul', 'babul', 'ebul', 'kabul','abul', 'sabul', 'babul', 'cibul', 'chibul', 'abul', 'kabul', 'cibul'];
function findDuplicateName(names){
    let unique = [];
    for(let i = 0; i < names.length; i++){
        let name = names[i];
        if(unique.includes(name) === false){
            unique.push(name);
        }
    }
    return unique;
}
const uniqueName = findDuplicateName(names);
console.log(uniqueName);