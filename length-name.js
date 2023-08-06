const friends = ['Sajed', 'Mamun', 'Kamal', 'Jubayer Bin Rased', 'Chinku', 'Arif Ibne Atikul Islam'];

function bestFriend(friendsName){
    let bestFriendName = friendsName[0];
    for(let i = 0; i < friendsName.length; i++){
        const friend = friendsName[i];
        if(friend.length > bestFriendName.length){
            bestFriendName = friend;
        }
    }
    return bestFriendName;
}
const myFriend = bestFriend(friends);
console.log(myFriend);