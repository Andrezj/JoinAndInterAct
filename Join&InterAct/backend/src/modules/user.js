
const UserSchema = {
    id : integer,
    name : string,
    friends : [id],
    blocked : [id],
    interests : [interest],
    activities : [activity],
    location: location,
    hashNumber : integer,
    profilePicture : Image,
    contact : contact
}

interest = {
    scope : 'entertainment' | 'self-grow' | 'education' | 'reading'| 'health'| '[\s\S]*',
    title : string
}