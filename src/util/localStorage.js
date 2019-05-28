function getItem(key) {
    return JSON.parse(localStorage.getItem(key))
}

function setItem(key, val) {
    localStorage.setItem(key, JSON.stringify(val))
}

// *********************************
// history
// *********************************
export function getHistory() {
    return getItem('history') || []
}

export function setHistory(history) {
    setItem('history', history || [])
}

export function addHistory(history) {
    if(!(history instanceof Object)){
        return
    }
    let hist = getHistory()
    let idx = -1
    for(let i = 0; i < hist.length; i++) {
        const item = hist[i]
        if(history.url === item.url) {
            idx = i
            break
        }
    }
    if(idx === -1) {
        hist.unshift(history)
        if(hist.length > 50) {
            hist = hist.slice(0, 50)
        }
    } else {
        hist.splice(idx, 1)
        hist.unshift(history)
    }
    
    setHistory(hist)
}

export function clearHistory() {
    setHistory([])
}

// *********************************
// collection
// *********************************
export function getCollection() {
    return getItem('collection') || []
}

function setCollection(coll) {
    setItem('collection', coll || [])
}

export function addCollection(coll) {
    let collections = getCollection()
    let key = coll.url
    if(collections.indexOf(key) === -1) {
        collections.push(key)
    }
    setCollection(collections)
}

export function removeCollection(coll) {
    let collections = getCollection()
    let key = coll.url
    let idx = collections.indexOf(key)
    if(idx !== -1) {
        collections.splice(idx, 1)
    }
    setCollection(collections)
}

// *********************************
// category
// *********************************
export function saveCategory(category) {
    if(!category) {
        return
    }
    setItem('category', category)
}

export function loadCategory() {
    return getItem('category') || 'hs'
}