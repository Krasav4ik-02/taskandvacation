

export function idToName (id: number) {
    switch(id) {
        case 1:
            return 'Manager'
        case 2:
            return 'Junior Developer'
        case 3:
            return 'Middle Developer'
        case 4:
            return 'Senior Developer'
        case 5:
            return 'Teamlead'
        case 6:
            return 'Tester'
        case 7:
            return 'Analyst'
        case 8:
            return 'Main Analyst'
    default:
        null
    }
}