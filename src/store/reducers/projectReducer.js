const initState = {
    projects: [
        {id: '1', title: 'test text one, holy cow', content: 'lorem ipsum'},
        {id: '2', title: 'glory to the emprah', content: 'lorem ipsum'},
        {id: '3', title: 'lorem ipsum', content: 'lorem ipsum'}
    ]
}


const projectReducer = (state = initState, action) => { 
    switch (action.type) {
        case 'CREATE_PROJECT' : 
            console.log('created project', action.project)
            return state
        case 'CREATE_PROJECT_ERROR': 
            console.log('create project error', action.error)
            return state
        default: 
        return state
    }
}

export default projectReducer