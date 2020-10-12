export default function findById(items, id) { 
    for (let i = 0; i < items.length; i++) { 
        const item = items[i]; 
        
        //check id against item.id
        if (item.id === id) {
            return item;
        }
    }

    //loop done, nothing found 
    return null; 
}