// import findByID
import { findById } from './findById.js'; 
import votesArray from './votesArray.js';

// add initial vote 
export function addInitialVoteItem(id, votes) { 
    let voteItem = {
        id, // when the key and value are the same, we can just have a comma
        timesSeen: 0, 
        timesPicked: 0 
    }; 
    votes.push(voteItem);
    //push the votes item 
}

// increment the amount an image has been seen 
export function incremementTimesSeen(id, votes) { 
    let voteItem = findById(votes, id);

    if (!voteItem) { 
        addInitialVoteItem(id, votes);
        voteItem = findById(votes, id);
    }
    voteItem.timesSeen++;
}

//times picked 
export function timesPicked(id, votes) { 
    let voteItem = findById(votes, id); 

    if (!voteItem) { 
        addInitialVoteItem(id, votes);
        voteItem = findById(votes, id);
    }
    voteItem.timesPicked++; 
}